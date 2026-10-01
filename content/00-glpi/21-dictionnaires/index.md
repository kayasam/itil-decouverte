---
title: "21. Dictionnaires"
---

# 21 — Normaliser les données d'inventaire

> [!NOTE] Objectif
> Comprendre comment GLPI corrige des noms de logiciels ou d'éditeurs à l'import et sur les données déjà présentes. Les logiciels du fil rouge restent dans **Le Fournil Doré**.

> [!TIP] Dans ce chapitre
>
> - [Faire l'atelier](/00-glpi/21-dictionnaires/tp)
> - [Revoir l'inventaire](/00-glpi/11-agent-inventaire/)

## Pourquoi un dictionnaire ?

Un agent peut remonter le même éditeur comme `Microsoft`, `Microsoft Corp.` ou `Microsoft Corporation`. Le dictionnaire applique une **règle de normalisation** pour obtenir une valeur cohérente. Il peut aussi ignorer certains composants qui ne doivent pas apparaître dans le parc.

![glpi-21-dictionnaire.svg](/00-glpi/images/glpi-21-dictionnaire.svg)

Dans **Administration → Dictionnaires**, choisir le dictionnaire **Logiciels**. Une règle possède un **critère** qui reconnaît une valeur et une **action** qui la remplace ou ignore l'import. Les règles sont parcourues dans leur ordre ; les cas précis doivent passer avant les cas généraux.

## Méthode 1 — Interface GLPI

1. Avec votre compte Super-Admin, choisir **Le Fournil Doré** sans « Arborescence ».
2. Ouvrir **Administration → Dictionnaires → Logiciels → Ajouter**.
3. Nommer la règle `Normaliser éditeur Microsoft`, l'activer et enregistrer.
4. Dans **Critères**, ajouter **Éditeur contient Microsoft**.
5. Dans **Actions**, choisir **Éditeur → Assigner → Microsoft Corporation**.
6. Tester la règle avec plusieurs variantes avant de la rejouer sur les données existantes.

Le test ne modifie rien. **Rejouer les règles du dictionnaire** applique les règles aux éléments déjà en base. Vérifier les résultats sur quelques fiches après l'exécution. Une règle **Ignorer l'import** empêche une nouvelle entrée correspondante d'entrer dans le parc ; l'utiliser uniquement avec un critère précis.

Le nombre de logiciels varie selon les machines réellement inventoriées au chapitre 11. Si aucune variante Microsoft n'est présente, créer un logiciel de démonstration dans la racine ou se limiter au test du moteur avant de rejouer.

## Méthode 2 — CLI après le test graphique

La CLI GLPI 11 permet de **rejouer** un dictionnaire déjà configuré. Elle ne crée pas ses critères ou actions :

```bash
cd ~/glpi-lab
docker compose exec glpi php bin/console rules:replay_dictionnary_rules --dictionnary=Software
```

Ne lancer cette commande que si le test de la règle donne le résultat voulu. Le bouton graphique **Rejouer les règles du dictionnaire** et la commande ci-dessus remplissent le même rôle ; choisir une seule méthode pour l'exercice.

Source : [Dictionnaires — GLPI](https://help.glpi-project.org/documentation/modules/administration/dictionnaries) ; [CLI GLPI](https://help.glpi-project.org/documentation/cli).
