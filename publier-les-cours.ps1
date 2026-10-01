param([string]$Message, [switch]$PrepareOnly)
$ErrorActionPreference = "Stop"
$sourceRoot = "C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\glpi\itil"
$glpiSourceRoot = "C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\glpi\initiation"
$commonSourceRoot = "C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\glpi"
$projectRoot = "D:\Projet-git\itil-decouverte"
$staticRoot = Join-Path $projectRoot "site-content"
$stageRoot = Join-Path $projectRoot ".publication-stage"
$vaultStage = Join-Path $projectRoot ".student-vault-stage\Decouverte-ITIL"
$vaultDestination = Join-Path $projectRoot "student-vault\Decouverte-ITIL"
$glpiVaultDestination = Join-Path $projectRoot "student-vault\Initiation-GLPI"
$utf8 = [Text.UTF8Encoding]::new($false)

$chapters = @(
  @{Slug="01-introduction-itil";Title="01. Introduction à ITIL";Course="01-cours.md";Tps=@("01-tp.md")},
  @{Slug="02-concepts-fondamentaux";Title="02. Concepts fondamentaux d'ITIL 4";Course="02-cours.md";Tps=@("02-tp.md")},
  @{Slug="03-gestion-incidents";Title="03. Gestion des incidents";Course="03-cours.md";Tps=@("03-tp.md")},
  @{Slug="04-gestion-problemes";Title="04. Gestion des problèmes";Course="04-cours.md";Tps=@("04-tp.md")},
  @{Slug="05-gestion-changements";Title="05. Gestion des changements";Course="05-cours.md";Tps=@("05-tp.md")},
  @{Slug="06-sla-niveaux-service";Title="06. SLA et niveaux de service";Course="06-cours.md";Tps=@("06-tp.md")},
  @{Slug="07-catalogue-services-cmdb";Title="07. Catalogue de services et CMDB";Course="07-cours.md";Tps=@("07-tp.md")},
  @{Slug="08-amelioration-continue";Title="08. Amélioration continue";Course="08-cours.md";Tps=@("08-tp.md")}
)

function Assert-File([string]$Path) { if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) { throw "Fichier introuvable : $Path" } }
function Assert-InProject([string]$Path) {
  $full = [IO.Path]::GetFullPath($Path); $root = [IO.Path]::GetFullPath($projectRoot)
  if (-not $full.StartsWith($root + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw "Chemin hors projet : $full" }
}
function Remove-Safe([string]$Path) {
  if (-not (Test-Path -LiteralPath $Path -PathType Container)) { return }
  Assert-InProject $Path; Remove-Item -LiteralPath ([IO.Path]::GetFullPath($Path)) -Recurse -Force
}
function Mirror([string]$Source, [string]$Destination) {
  Assert-InProject $Destination; New-Item -ItemType Directory -Path $Destination -Force | Out-Null
  & robocopy $Source $Destination /MIR /R:2 /W:1 /NFL /NDL /NJH /NJS /NP | Out-Null
  if ($LASTEXITCODE -ge 8) { throw "Copie impossible : $Source" }
}
function Add-Metadata([string]$Path, [string]$Title, [string]$Alias) {
  $content = [IO.File]::ReadAllText($Path)
  if ($content -match '\A---\r?\n') {
    $frontmatter = [regex]::Match($content, '\A---\r?\n(?<body>.*?)\r?\n---\r?\n', [Text.RegularExpressions.RegexOptions]::Singleline)
    if (-not $frontmatter.Success) { throw "Frontmatter invalide : $Path" }
    $metadata = $frontmatter.Groups['body'].Value
    if ($metadata -notmatch '(?m)^title:') { $metadata += "`ntitle: `"$Title`"" }
    if ($metadata -notmatch '(?m)^aliases?:') { $metadata += "`naliases:`n  - `"$Alias`"" }
    $content = "---`n$metadata`n---`n" + $content.Substring($frontmatter.Length)
  } else {
    $content = "---`ntitle: `"$Title`"`naliases:`n  - `"$Alias`"`n---`n`n$content"
  }
  [IO.File]::WriteAllText($Path, $content, $utf8)
}
function Add-ResourceBlock([string]$Path, [string]$Block) {
  $body = [IO.File]::ReadAllText($Path)
  $body = [regex]::Replace($body, '(?m)^(#\s+.+)\r?$', { param($m) $m.Value + $Block }, 1)
  [IO.File]::WriteAllText($Path, $body, $utf8)
}

Write-Host "`nPublication de Découverte ITIL" -ForegroundColor Cyan
Assert-File (Join-Path $staticRoot "assets\quiz\quiz-banks.js")
foreach ($chapter in $chapters) {
  $sourceChapter = Join-Path $sourceRoot $chapter.Slug
  Assert-File (Join-Path $sourceChapter $chapter.Course)
  Assert-File (Join-Path $staticRoot "cours\quiz\$($chapter.Slug).html")
  foreach ($tp in $chapter.Tps) { Assert-File (Join-Path $sourceChapter $tp) }
}

Remove-Safe $stageRoot
Remove-Safe (Split-Path $vaultStage)
New-Item -ItemType Directory -Path $stageRoot, $vaultStage -Force | Out-Null
Mirror $staticRoot $stageRoot

$contextRoot = Join-Path $stageRoot "00-contexte"
New-Item -ItemType Directory -Path $contextRoot -Force | Out-Null
Copy-Item -LiteralPath (Join-Path $commonSourceRoot "00-contexte\00-contexte-fournil-dore.md") -Destination (Join-Path $contextRoot "index.md")
Add-Metadata (Join-Path $contextRoot "index.md") "Contexte : Le Fournil Doré" "/contexte"
$commonHtml = Join-Path $commonSourceRoot "00-contexte\contexte-interactif.html"
Copy-Item -LiteralPath $commonHtml -Destination (Join-Path $contextRoot "contexte-interactif.html")
foreach ($vaultContext in @((Join-Path $vaultStage "00-contexte"))) {
  New-Item -ItemType Directory -Path $vaultContext -Force | Out-Null
  Copy-Item -LiteralPath (Join-Path $commonSourceRoot "00-contexte\00-contexte-fournil-dore.md") -Destination (Join-Path $vaultContext "00-contexte-fournil-dore.md")
  Copy-Item -LiteralPath $commonHtml -Destination (Join-Path $vaultContext "contexte-interactif.html")
}

foreach ($chapter in $chapters) {
  $sourceChapter = Join-Path $sourceRoot $chapter.Slug
  $chapterRoot = Join-Path $stageRoot $chapter.Slug
  $vaultChapter = Join-Path $vaultStage "cours\$($chapter.Slug)"
  New-Item -ItemType Directory -Path $chapterRoot, $vaultChapter -Force | Out-Null
  $course = Join-Path $chapterRoot "index.md"
  Copy-Item -LiteralPath (Join-Path $sourceChapter $chapter.Course) -Destination $course
  Copy-Item -LiteralPath (Join-Path $sourceChapter $chapter.Course) -Destination (Join-Path $vaultChapter $chapter.Course)
  Add-Metadata $course $chapter.Title "/cours/$($chapter.Slug)"
  $quiz = "https://kayasam.github.io/itil-decouverte/cours/quiz/$($chapter.Slug).html"
  $download = "https://kayasam.github.io/itil-decouverte/telechargements/cours/$($chapter.Slug).md"
  $interactiveName = "$($chapter.Slug)-interactif.html"
  $interactiveSource = Join-Path $sourceChapter $interactiveName
  $interactiveLine = ""
  if (Test-Path -LiteralPath $interactiveSource -PathType Leaf) {
    Copy-Item -LiteralPath $interactiveSource -Destination (Join-Path $stageRoot "cours\$interactiveName") -Force
    Copy-Item -LiteralPath $interactiveSource -Destination (Join-Path $vaultChapter $interactiveName) -Force
    $interactiveUrl = "https://kayasam.github.io/itil-decouverte/cours/$interactiveName"
    $interactiveLine = "> - [Ouvrir le chapitre interactif]($interactiveUrl)`n"
  }
  Add-ResourceBlock $course "`n`n> [!TIP] Ressources du chapitre`n$interactiveLine> - [Faire le quiz — 20 questions]($quiz)`n> - <a href=`"$download`" download>Télécharger ce cours en Markdown</a>`n"
  foreach ($tp in $chapter.Tps) {
    $destination = Join-Path $chapterRoot "tp.md"
    Copy-Item -LiteralPath (Join-Path $sourceChapter $tp) -Destination $destination
    Copy-Item -LiteralPath (Join-Path $sourceChapter $tp) -Destination (Join-Path $vaultChapter $tp)
    Add-Metadata $destination "TP du chapitre $($chapter.Slug.Substring(0,2))" "/$($chapter.Slug)/tp/$([IO.Path]::GetFileNameWithoutExtension($tp))"
    $tpDownload = "https://kayasam.github.io/itil-decouverte/telechargements/tp/$tp"
    Add-ResourceBlock $destination "`n`n> [!TIP] Ressource du TP`n> - <a href=`"$tpDownload`" download>Télécharger ce TP en Markdown</a>`n"
  }
}

$resources = Join-Path $stageRoot "Ressources"; $vaultResources = Join-Path $vaultStage "Ressources"
New-Item -ItemType Directory -Path $resources, $vaultResources -Force | Out-Null
Get-ChildItem -LiteralPath (Join-Path $sourceRoot "Ressources") -File -Filter "*.md" | ForEach-Object {
  Copy-Item $_.FullName (Join-Path $resources $_.Name); Copy-Item $_.FullName (Join-Path $vaultResources $_.Name)
}
Mirror (Join-Path $sourceRoot "Ressources\images") (Join-Path $stageRoot "Ressources\images")
Mirror (Join-Path $sourceRoot "Ressources\images") (Join-Path $vaultStage "Ressources\images")
$commonSvg = Join-Path $commonSourceRoot "ressources\images\contexte-organigramme-fournil-dore.svg"
foreach ($destination in @((Join-Path $stageRoot "Ressources\images"), (Join-Path $vaultStage "Ressources\images"))) {
  New-Item -ItemType Directory -Path $destination -Force | Out-Null
  Copy-Item -LiteralPath $commonSvg -Destination (Join-Path $destination "contexte-organigramme-fournil-dore.svg") -Force
}

& python (Join-Path $projectRoot "scripts\prepare-glpi.py") $glpiSourceRoot $stageRoot (Split-Path $vaultStage)
if ($LASTEXITCODE) { throw "Échec de la préparation GLPI." }
$glpiContext = Join-Path (Split-Path $vaultStage) "Initiation-GLPI\00-contexte"
New-Item -ItemType Directory -Path $glpiContext -Force | Out-Null
Copy-Item -LiteralPath (Join-Path $commonSourceRoot "00-contexte\00-contexte-fournil-dore.md") -Destination (Join-Path $glpiContext "00-contexte-fournil-dore.md") -Force
Copy-Item -LiteralPath $commonHtml -Destination (Join-Path $glpiContext "contexte-interactif.html") -Force
Copy-Item -LiteralPath $commonSvg -Destination (Join-Path (Split-Path $vaultStage) "Initiation-GLPI\ressources\images\contexte-organigramme-fournil-dore.svg") -Force
foreach ($name in @("itil-contexte-laboratoire.svg", "itil-contexte-parcours.svg")) {
  Copy-Item -LiteralPath (Join-Path $sourceRoot "Ressources\images\$name") -Destination (Join-Path (Split-Path $vaultStage) "Initiation-GLPI\ressources\images\$name") -Force
}
$svgData = "data:image/svg+xml;base64," + [Convert]::ToBase64String([IO.File]::ReadAllBytes($commonSvg))
foreach ($htmlPath in @((Join-Path $contextRoot "contexte-interactif.html"), (Join-Path $vaultStage "00-contexte\contexte-interactif.html"), (Join-Path $glpiContext "contexte-interactif.html"))) {
  $htmlBody = [IO.File]::ReadAllText($htmlPath)
  $htmlBody = $htmlBody.Replace("../ressources/images/contexte-organigramme-fournil-dore.svg", $svgData)
  [IO.File]::WriteAllText($htmlPath, $htmlBody, $utf8)
}
& python (Join-Path $projectRoot "scripts\fix-itil-links.py") $stageRoot
if ($LASTEXITCODE) { throw "Échec de la résolution des liens ITIL." }

$imagePattern = '!\[\[([^]|]+\.(?:svg|jpe?g|png|webp|gif))(?:\|[^]]+)?\]\]'
Get-ChildItem $stageRoot -Recurse -File -Filter "*.md" | ForEach-Object {
  $body = [IO.File]::ReadAllText($_.FullName)
  $body = [regex]::Replace($body, $imagePattern, { param($m) "![$($m.Groups[1].Value)](/Ressources/images/$($m.Groups[1].Value))" }, 'IgnoreCase')
  [IO.File]::WriteAllText($_.FullName, $body, $utf8)
}
$glpiVaultStage = Join-Path (Split-Path $vaultStage) "Initiation-GLPI"
$forbidden = Get-ChildItem $stageRoot, $vaultStage, $glpiVaultStage -Recurse -File | Where-Object Name -Match 'correction|corrig[eé]'
if ($forbidden) { throw "Correction détectée dans le contenu élève." }
$quizFiles = Get-ChildItem (Join-Path $stageRoot "cours\quiz") -File -Filter "*.html" | Where-Object Name -ne "quiz-template.html"
if ($quizFiles.Count -ne 8) { throw "8 quiz attendus, $($quizFiles.Count) trouvés." }
Remove-Item (Join-Path $stageRoot "cours\quiz\quiz-template.html") -Force
Mirror $stageRoot (Join-Path $projectRoot "content")
Mirror $vaultStage $vaultDestination
Mirror $glpiVaultStage $glpiVaultDestination
Remove-Safe $stageRoot; Remove-Safe (Split-Path $vaultStage)

Push-Location $projectRoot
try {
  & npx prettier content site-content quartz.config.yaml quartz/styles/custom.scss quartz/styles/pc.scss quartz/styles/explorer-pc.scss --write
  if ($LASTEXITCODE) { throw "Échec du formatage." }
  & npx quartz build
  if ($LASTEXITCODE) { throw "Échec du build Quartz." }
  $glpiHtml = "00-glpi\20-notifications\schema-notifications-interactif.html"
  $glpiHtmlPublic = Join-Path (Join-Path $projectRoot "public") $glpiHtml
  New-Item -ItemType Directory -Path (Split-Path $glpiHtmlPublic) -Force | Out-Null
  Copy-Item -LiteralPath (Join-Path (Join-Path $projectRoot "content") $glpiHtml) -Destination $glpiHtmlPublic -Force
  $contextHtmlPublic = Join-Path $projectRoot "public\00-contexte\contexte-interactif.html"
  Copy-Item -LiteralPath (Join-Path $projectRoot "content\00-contexte\contexte-interactif.html") -Destination $contextHtmlPublic -Force
  if ($PrepareOnly) { Write-Host "Préparation et build terminés." -ForegroundColor Green; exit 0 }
  if (-not (git status --porcelain)) { Write-Host "Aucune modification."; exit 0 }
  if (-not $Message) { $Message = Read-Host "Message de publication" }
  if (-not $Message) { $Message = "Mise à jour de la formation ITIL - $(Get-Date -Format 'yyyy-MM-dd HH:mm')" }
  if ((Read-Host "Publier sur GitHub ? [o/N]") -notmatch '^(o|oui|y|yes)$') { exit 0 }
  git add -A; git commit -m $Message; git push -u origin main
  if ($LASTEXITCODE) { throw "Échec de l'envoi GitHub." }
} finally { Pop-Location; Remove-Safe $stageRoot; Remove-Safe (Split-Path $vaultStage) }
