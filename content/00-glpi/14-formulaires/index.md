---
title: "14. Formulaires natifs (GLPI 11)"
---

# 14 — Formulaires natifs (GLPI 11) · Cours

> [!TIP] Ressources du chapitre
>
> - [TP du chapitre](/00-glpi/14-formulaires/tp)
> - [Sommaire de la formation](/00-glpi/)

> [!NOTE] Objectif de cette section
> Créer un formulaire natif GLPI 11 de demande de matériel, accessible à Claire dans l'entité racine.

---

## Formulaires natifs vs plugin FormCreator

GLPI 11 intègre un **moteur de formulaires natif** directement dans le cœur de l'application.

|               | Plugin FormCreator (ancien)          | Formulaires natifs GLPI 11       |
| ------------- | ------------------------------------ | -------------------------------- |
| Installation  | Plugin à installer manuellement      | ✅ Natif, rien à installer       |
| Accès         | `Configuration` → `Plugins`          | `Administration` → `Formulaires` |
| Compatibilité | Peut poser des problèmes sur GLPI 11 | ✅ Garanti compatible            |

> [!NOTE] Formulaires par défaut
> GLPI 11 inclut deux formulaires prêts à l'emploi : **"Report an issue"** et **"Request a service"**. Ce sont les deux tuiles du Catalogue de services vues au chapitre 12. Nous créons un troisième formulaire sans modifier ces deux exemples.

---

## Accéder aux formulaires

`Administration` → `Formulaires`

![glpi-14-formulaire.svg](/00-glpi/images/glpi-14-formulaire.svg)
_Questions → destination Ticket → demande de Claire dans la racine._

---

## Structure d'un formulaire

Un formulaire est composé de **questions** organisées librement. En bas à droite de l'éditeur, 4 boutons permettent d'ajouter des éléments :

| Bouton | Action                                                                     |
| ------ | -------------------------------------------------------------------------- |
| ⊕      | **Ajouter une question**                                                   |
| Aa     | **Ajouter un commentaire** (texte informatif, non saisi par l'utilisateur) |
| —      | **Ajouter une section** (séparateur visuel entre groupes de questions)     |
| ⊞      | **Ajouter une disposition horizontale** (questions côte à côte)            |

### Types de questions disponibles

| Type                           | Utilisation                       |
| ------------------------------ | --------------------------------- |
| **Texte court**                | Nom, référence                    |
| **Texte long**                 | Description détaillée             |
| **Liste déroulante**           | Choix parmi une liste             |
| **Case à cocher**              | Oui/Non                           |
| **Date**                       | Date souhaitée                    |
| **Fichier**                    | Pièce jointe                      |
| **Matériels de l'utilisateur** | Sélection d'un équipement du parc |
| **Lieu**                       | Sélection d'un lieu               |

Pour chaque question : possibilité de la rendre **obligatoire** et d'ajouter une **description d'aide**.

---

## Paramètres généraux du formulaire

En haut de l'éditeur :

| Paramètre        | Emplacement             | Description                                       |
| ---------------- | ----------------------- | ------------------------------------------------- |
| **Actif**        | Toggle en haut à droite | Active/désactive le formulaire                    |
| **Entité**       | Badge en haut           | Entité dans laquelle le formulaire est disponible |
| **Sous-entités** | Checkbox en haut        | Laisser désactivé dans ce fil rouge               |

---

## Onglets du formulaire

| Onglet                    | Rôle                                                |
| ------------------------- | --------------------------------------------------- |
| **Formulaire**            | Éditeur visuel des questions                        |
| **Catalogue de services** | Associer le formulaire à une catégorie du catalogue |
| **Contrôles d'accès**     | Définir qui peut accéder au formulaire              |
| **Destinations**          | Configurer ce qui se crée lors de la soumission     |
| **Traductions**           | Traduire le formulaire en plusieurs langues         |

---

## Contrôles d'accès

`Onglet Contrôles d'accès`

| Option                                                             | Description                                                            |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Autoriser spécifiquement des utilisateurs, groupes, ou profils** | Restreindre l'accès à des profils précis (ex: Self-Service uniquement) |
| **Autoriser l'accès direct**                                       | Génère une URL publique avec token — partager sans connexion GLPI      |
| **Autoriser les utilisateurs non authentifiés**                    | Accès sans compte (formulaire public)                                  |

---

## Configurer la destination

`Onglet Destinations` → **Ajouter Ticket** (ou Problème, ou Changement)

La destination définit ce qui se crée quand l'utilisateur soumet le formulaire.

Les champs du ticket sont pré-remplis grâce à des **tokens** qui récupèrent les réponses du formulaire :

| Champ           | Exemple de valeur                                             |
| --------------- | ------------------------------------------------------------- |
| **Titre**       | `#Réponse : Title` → reprend la réponse à la question "Title" |
| **Description** | `#Réponse : Description` → reprend la réponse "Description"   |
| **Catégorie**   | Valeur fixe ou token                                          |

> [!TIP] Configuration automatique
> Le toggle **"Configuration automatique"** mappe automatiquement les champs du ticket avec les réponses portant le même nom. Pratique pour démarrer rapidement.

Le panneau de droite permet de configurer également : **Acteurs** (technicien assigné, groupe), **Niveaux de services**, **Éléments associés**.

---

---

## Liens utiles

- [Formulaires | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/administration/forms)
- [Documentation GLPI 11 — Formulaires](https://glpi-user-documentation.readthedocs.io/fr/latest/)

---
