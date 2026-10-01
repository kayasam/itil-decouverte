---
title: "06. Les entités du Fournil Doré"
---

# 06 — Organiser les entités

> [!NOTE] Objectif
> Construire l'arborescence « Le Fournil Doré → Boutique, Laboratoire » et comprendre la portée d'une entité. Toute la pratique du fil rouge restera dans la racine.

> [!TIP] Dans ce chapitre
>
> - [Faire l'atelier](/00-glpi/06-entites/tp)
> - [Revoir le compte administrateur](/00-glpi/05-configuration-initiale/)

## Une entité, c'est quoi ?

Une **entité** est une zone de gestion dans GLPI. Elle permet de ranger des tickets, des utilisateurs et des éléments du parc, et de limiter ce que chacun peut voir. Elle ne désigne pas nécessairement un bâtiment.

| Besoin                                                  | Utiliser               |
| ------------------------------------------------------- | ---------------------- |
| Séparer les données de deux unités de gestion           | Une **entité**         |
| Situer physiquement une caisse ou un ordinateur         | Un **lieu** (intitulé) |
| Rassembler des personnes qui traitent les mêmes tickets | Un **groupe**          |

Pour voir comment fonctionne une arborescence, nous créons deux sous-entités d'exemple : Boutique et Laboratoire. Elles resteront **vides** dans le fil rouge. Tous les utilisateurs pédagogiques, équipements et tickets seront placés dans **Le Fournil Doré**, l'entité racine.

![glpi-06-entites.svg](/00-glpi/images/glpi-06-entites.svg)

L'option **Récursif** d'une habilitation étend les droits aux sous-entités. Claire n'en aura pas besoin : elle travaille uniquement dans la racine. Le compte Super-Admin peut conserver une habilitation récursive pour administrer la structure, tout en sélectionnant **Le Fournil Doré** sans « Arborescence » comme contexte de travail.

## Méthode 1 — Créer l'arborescence dans GLPI

Se connecter avec votre compte Super-Admin `admin.fournil / a12345!`. Dans le sélecteur d'entité en haut à droite, rester sur **Entité racine (Arborescence)** le temps de créer les enfants.

### 1. Renommer la racine

Aller dans **Administration → Entités**, ouvrir **Entité racine**, remplacer son nom par **Le Fournil Doré**, puis **Sauvegarder**. La racine existe dès l'installation de GLPI : on la renomme, on ne crée pas une deuxième racine.

### 2. Créer Boutique et Laboratoire

Revenir dans **Administration → Entités → Ajouter**. Créer successivement :

| Nom           | Entité parente    |
| ------------- | ----------------- |
| `Boutique`    | `Le Fournil Doré` |
| `Laboratoire` | `Le Fournil Doré` |

Vérifier le parent **avant** de cliquer sur **Ajouter**. Il indique où l'entité sera placée dans l'arbre.

![glpi-06-creation-boutique-glpi11.png](/00-glpi/images/glpi-06-creation-boutique-glpi11.png)
_Création de Boutique dans GLPI 11 : le parent est Le Fournil Doré._

### 3. Contrôler le résultat

La liste des entités doit afficher les trois lignes suivantes :

```text
Le Fournil Doré
Le Fournil Doré > Boutique
Le Fournil Doré > Laboratoire
```

![glpi-06-arborescence-glpi11.png](/00-glpi/images/glpi-06-arborescence-glpi11.png)
_Résultat constaté après création des deux sous-entités._

Dans le sélecteur en haut à droite, observer **Le Fournil Doré (Arborescence)**, puis **Boutique** pour comprendre le changement de périmètre. Terminer en choisissant **Le Fournil Doré** sans « Arborescence ». C'est le contexte utilisé dans les chapitres suivants. Les sous-entités restent vides.

## Entité et habilitation : deux réglages complémentaires

L'entité d'un **ticket** indique où appartient la demande. L'**habilitation** associe un profil à une entité pour un utilisateur. Au chapitre 07, Claire recevra le profil Utilisateur Fournil sur **Le Fournil Doré**, avec **Récursif = Non**. Les objets des ateliers seront créés dans cette même racine.

## À retenir

> [!SUMMARY]
>
> - La racine renommée est **Le Fournil Doré** ; Boutique et Laboratoire sont ses enfants.
> - Une entité organise et cloisonne les données. Un lieu indique une position physique.
> - Les sous-entités illustrent la structure ; tous les objets du fil rouge restent dans la racine. Claire n'aura pas d'accès récursif.

Suite : [Créer les profils et les utilisateurs](/00-glpi/07-profils-utilisateurs/).
