---
title: "08. Les intitulés"
---

# 08 — Les intitulés · Cours

> [!TIP] Ressources du chapitre
> - [[08-tp|TP du chapitre]]
> - [[00-INDEX|Sommaire de la formation]]

> [!NOTE] Objectif de cette section
> Comprendre les intitulés de GLPI et configurer les catégories ITIL et les lieux du Fournil Doré, dans l'entité racine.

---

## Qu'est-ce qu'un intitulé ?

Les intitulés sont les **listes déroulantes personnalisables** de GLPI : catégories de tickets, types de matériels, systèmes d'exploitation, lieux, statuts...

`Configuration` → `Intitulés`

La page affiche une grille de catégories. Les plus utiles en initiation :

| Section | Intitulés importants |
|---------|---------------------|
| **Assistance** | Catégories ITIL, catégories de tâches, types de solutions |
| **Général** | Lieux, types de documents |
| **Parc** | Statuts des éléments, types de matériels |

> [!NOTE] GLPI 11
> Les catégories de tickets s'appellent désormais **"Catégories ITIL"** dans GLPI 11 (anciennement "Catégories de tickets" dans les versions précédentes).

---

## Les catégories ITIL

C'est l'intitulé le plus important pour le helpdesk — il classifie chaque ticket.

`Configuration` → `Intitulés` → section **Assistance** → **Catégories ITIL**

### Arborescence hiérarchique

Les catégories peuvent être organisées en parent → enfant :

```
Matériel
├── Ordinateur
└── Imprimante

Réseau
├── Wi-Fi
└── Internet

Logiciel
├── Installation
└── Dysfonctionnement

Accès & Comptes
```

> [!TIP] Créer parent avant enfant
> GLPI ne permet de choisir une catégorie parente que si elle existe déjà. Toujours créer les catégories de haut niveau en premier.

### Créer une catégorie ITIL

`Configuration` → `Intitulés` → **Catégories ITIL** → **+**

| Champ | Description |
|-------|-------------|
| **Nom** | Intitulé affiché |
| **Catégorie parente** | Pour créer une sous-catégorie |
| **Visible dans l'interface simplifiée** | Cocher pour que les utilisateurs self-service la voient |
| **Entité** | Choisir **Le Fournil Doré**, sans récursivité |

![[glpi-08-intitules.svg]]

*Une catégorie classe la demande ; un lieu situe le problème.*

---

## Les lieux

Les lieux localisent les équipements et les interventions. C'est ici qu'on saisit les **emplacements physiques** — à ne pas confondre avec les entités qui, elles, découpent la gestion.

`Configuration` → `Intitulés` → section **Général** → **Lieux**

> [!NOTE] Entité ≠ Lieu
> - **Entité** → cloisonne la gestion (tickets, parc, utilisateurs séparés)
> - **Lieu** → indique où se trouve physiquement un équipement ou une personne
>
> Un équipement situé à Rennes reste dans l'entité **Le Fournil Doré**. Le lieu indique sa position physique ; il ne change pas son entité.

Les lieux peuvent être organisés en arborescence (bâtiment → étage → salle) :

```
Rennes — 3 Pl. du Général-Giraud, 35000 Rennes
├── Salle serveur
└── Open space

Nantes — 32 Bd Vincent Gâche, 44200 Nantes
├── Salle serveur
└── Open space
```

---

## Les statuts des éléments de parc

`Configuration` → `Intitulés` → section **Parc** → **Statuts des éléments**

Statuts par défaut : *En inventaire, En réparation, En attente, Mis au rebut, Volé, Perdu*

> [!TIP]
> On peut ajouter des statuts personnalisés selon les besoins : "En stock", "Prêté", "En déploiement"...

---

---
## Liens utiles
- [Intitulés | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/configuration/dropdowns/index)

---
