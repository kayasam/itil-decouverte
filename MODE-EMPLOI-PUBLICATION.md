# Publier le parcours GLPI puis ITIL depuis le coffre Obsidian

Les sources officielles restent dans :

- GLPI : `C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\glpi\initiation`
- ITIL : `C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\glpi\itil`

Le site présente d’abord les 24 étapes GLPI (22 chapitres et deux compléments), leurs 19 ateliers, les illustrations référencées et un schéma HTML interactif. Il poursuit avec les 8 cours ITIL, 8 ateliers ITIL, le lexique et un quiz de 20 questions pour chaque chapitre. Les corrections, sessions et anciennes versions GLPI ne sont jamais copiées.

## Publication rapide

1. Terminer les modifications dans Obsidian et attendre la synchronisation Nextcloud.
2. Ouvrir `D:\Projet-git\itil-decouverte`.
3. Double-cliquer sur `Publier les cours.cmd`.
4. Saisir un message de publication, puis confirmer avec `O`.

Le script reconstruit les deux parties du parcours, vérifie l’absence de corrigés, prépare deux coffres Obsidian hors ligne, contrôle les 8 quiz ITIL, lance le build Quartz puis propose l’envoi sur GitHub.

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
