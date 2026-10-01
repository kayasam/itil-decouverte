---
title: "TP 06. Les entités du Fournil Doré"
---

# TP 06 — Construire l'arborescence

> Chapitre associé : [06-cours](/00-glpi/06-entites/)
> Durée indicative : **15 minutes**

> [!NOTE] Mission
> Avec votre compte Super-Admin `admin.fournil / a12345!`, préparer la racine et deux sous-entités d'exemple. Tous les exercices suivants se feront dans la racine.

## A — Renommer l'entité racine

1. Ouvrir **Administration → Entités → Entité racine**.
2. Mettre **Le Fournil Doré** dans le champ **Nom**.
3. Sauvegarder et revenir à la liste.

**Vérification :** il existe toujours une seule racine ; son nom est désormais **Le Fournil Doré**.

## B — Ajouter les deux enfants

Dans **Administration → Entités → Ajouter** :

1. Créer **Boutique** avec **Le Fournil Doré** comme entité parente.
2. Créer **Laboratoire** avec le même parent.
3. Comparer la liste obtenue à la capture.

![glpi-06-creation-boutique-glpi11.png](/00-glpi/images/glpi-06-creation-boutique-glpi11.png)
_Vérifier le champ « Entité parente » avant d'ajouter Boutique._

![glpi-06-arborescence-glpi11.png](/00-glpi/images/glpi-06-arborescence-glpi11.png)
_Les trois entités attendues, avec leur chemin complet._

## C — Observer le sélecteur d'entité

En haut à droite, sélectionner successivement **Le Fournil Doré (Arborescence)** puis **Boutique**. Noter la différence entre ces deux contextes. Revenir sur **Le Fournil Doré** sans « Arborescence » avant le TP 07.

> [!IMPORTANT] Pour le chapitre suivant
> Claire sera créée sur la racine **avec « Récursif = Non »**. Aucun utilisateur pédagogique, équipement ou ticket du fil rouge ne sera placé dans Boutique ou Laboratoire.

## Questions rapides

1. Quelle différence y a-t-il entre une entité et un lieu ?
2. Pourquoi faut-il créer les entités avant les habilitations des utilisateurs ?
3. Une habilitation sur la racine, sans récursivité, couvre-t-elle Boutique ?
