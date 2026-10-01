# Parcours GLPI puis ITIL

Site Quartz v5 du parcours élève **Initiation GLPI → Découverte ITIL**.

Les sources officielles restent dans le coffre Obsidian :

- Initiation GLPI : `C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\glpi\initiation`
- Découverte ITIL : `C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\glpi\itil`

Les corrections restent exclusivement dans le coffre Obsidian et ne sont jamais publiées.
Le lexique ITIL public est maintenu dans `annexes\lexique-itil.md` du coffre.

## Utilisation locale

```powershell
npm ci
.\publier-les-cours.ps1 -PrepareOnly
npx quartz build --serve
```

Voir [MODE-EMPLOI-PUBLICATION.md](MODE-EMPLOI-PUBLICATION.md) pour la publication.
