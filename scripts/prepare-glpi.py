#!/usr/bin/env python3
"""Prépare la partie GLPI du site ITIL depuis le coffre Obsidian."""
import re
import shutil
import sys
from html import escape
from pathlib import Path

if len(sys.argv) != 4:
    raise SystemExit("Usage: prepare-glpi.py SOURCE_GPLI SITE_STAGE VAULT_STAGE")

source, site_stage, vault_stage = (Path(arg).resolve() for arg in sys.argv[1:])
if not source.is_dir() or not site_stage.is_dir() or not vault_stage.is_dir():
    raise SystemExit("Source ou dossier de préparation manquant")

site = site_stage / "00-glpi"
vault = vault_stage / "Initiation-GLPI"
site.mkdir()
vault.mkdir()
images = source / "ressources" / "images"
source_index = (source / "00-INDEX.md").read_text(encoding="utf-8")
rows = re.findall(
    r"(?m)^\|\s*([0-9]{2}(?:-[12])?)\s*\|\s*([^|]+)\|\s*\[\[([^]|]+)\]\]\s*\|\s*(?:\[\[([^]|]+)\]\]|—)\s*\|",
    source_index,
)
if len(rows) != 24:
    raise SystemExit(f"24 étapes GLPI attendues dans 00-INDEX.md ; trouvé {len(rows)}")

chapters = []
notes = {"00-INDEX": "00-glpi/index.md",
         "liens-externes": "00-glpi/ressources/liens-externes.md",
         "lexique-glpi": "00-glpi/ressources/lexique-glpi.md"}
for number, title, course_stem, tp_stem in rows:
    folders = [d for d in source.iterdir() if d.is_dir() and (d / f"{course_stem}.md").is_file()]
    if len(folders) != 1:
        raise SystemExit(f"Cours {course_stem} introuvable ou ambigu")
    folder = folders[0]
    if tp_stem and not (folder / f"{tp_stem}.md").is_file():
        raise SystemExit(f"TP {tp_stem} introuvable")
    slug = folder.name
    target = f"00-glpi/{slug}/index.md"
    notes[course_stem] = target
    if tp_stem:
        notes[tp_stem] = f"00-glpi/{slug}/tp.md"
    chapters.append((number, title.strip(), folder, course_stem, tp_stem))

assets = set()
def href(current: str, target: str) -> str:
    if target.endswith("/index.md"):
        target = target[:-8]
    elif target.endswith(".md"):
        target = target[:-3]
    return "/" + target

def convert(body: str, current: str) -> str:
    def image(match):
        name = match.group(1)
        if not (images / name).is_file():
            raise SystemExit(f"Image introuvable : {name} dans {current}")
        assets.add(name)
        return f"![{name}]({href(current, '00-glpi/images/' + name)})"
    body = re.sub(r"!\[\[([^]|]+\.(?:svg|png|jpe?g|webp|gif))(?:\|[^]]+)?\]\]", image, body, flags=re.I)
    def wikilink(match):
        stem, label = match.group(1), match.group(2)
        if stem not in notes:
            raise SystemExit(f"Lien Obsidian introuvable : {stem} dans {current}")
        return f"[{label or stem}]({href(current, notes[stem])})"
    body = re.sub(r"(?<!!)\[\[([^]|#]+)(?:\|([^]]+))?\]\]", wikilink, body)
    if current.startswith("00-glpi/20-notifications/"):
        body = body.replace(
            "](schema-notifications-interactif.html)",
            "](https://kayasam.github.io/itil-decouverte/00-glpi/20-notifications/schema-notifications-interactif.html)",
        )
    return body

def write_page(source_file: Path, destination: str):
    target = site_stage / destination
    target.parent.mkdir(parents=True, exist_ok=True)
    body = convert(source_file.read_text(encoding="utf-8"), destination)
    target.write_text(body, encoding="utf-8")
    vault_target = vault / source_file.relative_to(source)
    vault_target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source_file, vault_target)

write_page(source / "00-INDEX.md", "00-glpi/index.md")
cards = []
for number, title, folder, course_stem, tp_stem in chapters:
    practice = "Cours et atelier" if tp_stem else "Cours"
    cards.append(
        f'<a class="pc-card" href="/00-glpi/{folder.name}/">'
        f'<span class="pc-card__number">{escape(number)}</span>'
        f'<small>{practice}</small><strong>{escape(title)}</strong>'
        f'<span>Ouvrir le chapitre GLPI.</span></a>'
    )
(site / "index.md").write_text(
    "---\ntitle: Initiation GLPI\n"
    "description: Première étape du parcours GLPI puis ITIL.\n---\n\n"
    "# Initiation GLPI\n\n"
    "Installer GLPI 11, construire le laboratoire **Le Fournil Doré**, puis "
    "mettre en place le helpdesk. Les chapitres suivent le même fil rouge dans "
    "l'entité racine.\n\n"
    "## Parcours GLPI\n\n<div class=\"pc-path\">\n"
    + "\n".join(cards)
    + "\n</div>\n\n"
    "## Étape suivante\n\n"
    "Après le chapitre 22, [commencer ITIL](/01-introduction-itil/).\n\n"
    "[Lexique GLPI](/00-glpi/ressources/lexique-glpi) · "
    "[Liens utiles](/00-glpi/ressources/liens-externes)\n",
    encoding="utf-8",
)
for number, title, folder, course_stem, tp_stem in chapters:
    dest = f"00-glpi/{folder.name}/index.md"
    write_page(folder / f"{course_stem}.md", dest)
    if tp_stem:
        write_page(folder / f"{tp_stem}.md", f"00-glpi/{folder.name}/tp.md")

for stem in ("liens-externes", "lexique-glpi"):
    write_page(source / "ressources" / f"{stem}.md", notes[stem])

html_source = source / "20-notifications" / "schema-notifications-interactif.html"
html = html_source.read_text(encoding="utf-8")
html = html.replace("../ressources/images/", "../images/")
html = html.replace('href="20-cours-fil-rouge.md"', 'href="./"')
for name in re.findall(r"[\w-]+\.(?:svg|png|jpe?g|webp|gif)", html, flags=re.I):
    if (images / name).is_file():
        assets.add(name)
html_dest = site / "20-notifications" / html_source.name
html_dest.write_text(html, encoding="utf-8")
vault_html = vault / html_source.relative_to(source)
vault_html.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(html_source, vault_html)

for name in assets:
    (site / "images").mkdir(exist_ok=True)
    (vault / "ressources" / "images").mkdir(parents=True, exist_ok=True)
    shutil.copy2(images / name, site / "images" / name)
    shutil.copy2(images / name, vault / "ressources" / "images" / name)

last = site / "22-annuaire-lldap" / "index.md"
with last.open("a", encoding="utf-8") as out:
    out.write("\n\n## Continuer avec ITIL\n\n"
              "Le laboratoire GLPI est prêt. [Passer à l'introduction ITIL]"
              "(/01-introduction-itil/).\n")
print(f"GLPI préparé : {len(chapters)} étapes, {len(assets)} illustrations, 1 HTML interactif")
