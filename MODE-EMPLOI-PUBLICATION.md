# Publier la formation depuis le coffre Obsidian

Les sources officielles restent dans :

- `C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\glpi\itil`

Le site public contient les 8 cours, les 14 variantes de TP, les illustrations, le lexique ITIL et
un quiz de 20 questions pour chaque chapitre. Les fichiers de correction ne sont jamais copiés.

## Publication rapide

1. Terminer les modifications dans Obsidian et attendre la synchronisation Nextcloud.
2. Ouvrir `D:\Projet-git\itil-decouverte`.
3. Double-cliquer sur `Publier les cours.cmd`.
4. Saisir un message de publication, puis confirmer avec `O`.

Le script reconstruit le contenu élève, vérifie l’absence de corrigés, prépare le coffre Obsidian
hors ligne, contrôle les 8 quiz, lance le build Quartz puis propose l’envoi sur GitHub.

Pour préparer et tester sans créer de commit :

```powershell
.\publier-les-cours.ps1 -PrepareOnly
```

Site prévu : <https://kayasam.github.io/itil-decouverte/>

> [!NOTE]
> Dans les réglages du dépôt GitHub, sélectionner **GitHub Actions** comme source de GitHub Pages.

## Modifier les quiz

- Questions : `site-content/assets/quiz/quiz-banks.js`
- Moteur : `site-content/assets/quiz/quiz-engine.js`
- Apparence : `site-content/assets/quiz/quiz.css`
- Pages : `site-content/cours/quiz/`

Le dossier `content` est régénéré à chaque publication : les modifications durables se font dans
le coffre Obsidian ou dans `site-content`.
