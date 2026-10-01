---
title: "13. Base de connaissances"
---

# 13 — Base de connaissances · Cours

> [!TIP] Ressources du chapitre
> - [[13-tp|TP du chapitre]]
> - [[00-INDEX|Sommaire de la formation]]

> [!NOTE] Objectif de cette section
> Documenter les solutions récurrentes dans la base de connaissances GLPI et les rendre accessibles aux utilisateurs via la FAQ.


---

## La base de connaissances

C'est une bibliothèque d'articles : procédures, solutions connues, tutoriels.

`Outils` → `Base de connaissances`

![[glpi-13-faq.svg]]
*L'administrateur publie un article dans la racine ; Claire le lit dans la FAQ.*

Elle a deux usages distincts :

| Usage | Audience | Accès |
|-------|----------|-------|
| **Documentation interne** | Techniciens | Articles visibles uniquement dans l'interface standard |
| **FAQ publique** | Utilisateurs self-service | Articles marqués "FAQ" → visibles dans l'interface simplifiée |

---

## Créer un article

`Outils` → `Base de connaissances` → bouton **+**

| Champ | Description |
|-------|-------------|
| **Nom** | Titre de l'article |
| **Sujet** | Catégorie de l'article (ex: Réseau, Matériel) |
| **Contenu** | Corps de l'article — éditeur riche (texte, images, listes, tableaux) |
| **FAQ** | Cocher pour rendre l'article visible depuis l'interface simplifiée |

### Visibilité par entité

Sur l'onglet **Cibles** de l'article, on définit qui peut le voir :
- Entité seule ou entité + sous-entités
- Groupe, profil, ou utilisateur spécifique

> [!TIP] Rendre un article accessible à tous les utilisateurs du Fournil Doré
> Cible : **Le Fournil Doré**, sans sous-entités, et **FAQ = Oui**. Claire peut alors le consulter depuis l'interface simplifiée.

---

## Créer un article depuis un ticket résolu

C'est la méthode la plus rapide — la solution déjà rédigée devient directement un article.

1. Ouvrir le ticket résolu
2. Survoler la carte **solution** (en bleu) → cliquer sur **⋮** (trois points) → **Éditer**
3. Dans le formulaire d'édition, activer le **toggle** en bas à droite : **"Enregistrer et ajouter à la base de connaissances"**
4. Cliquer sur **Sauvegarder**

GLPI crée automatiquement un nouvel article pré-rempli avec le contenu de la solution. Il s'ouvrira pour édition finale.

> [!NOTE] Autres icônes dans le formulaire solution
> - 🔍 **Loupe** → Rechercher un article existant à lier au ticket (onglet Base de connaissances)
> - Deux listes déroulantes → Type de solution + Catégorie
> - **Toggle** → Enregistrer et ajouter à la base de connaissances

> [!TIP] Bonne pratique
> Après chaque incident récurrent, transformer la solution en article. Avec le temps, les utilisateurs peuvent se débrouiller seuls pour les problèmes simples.

---

---
## Liens utiles

- [Base de connaissances | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/tools/knowledgebase)
- [Documentation GLPI — Base de connaissances](https://glpi-user-documentation.readthedocs.io/fr/latest/modules/tools/knowledgebase.html)

---
