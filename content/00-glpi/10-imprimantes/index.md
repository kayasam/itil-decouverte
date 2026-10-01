---
title: "10. Les imprimantes dans GLPI"
---

# 10 — Les imprimantes dans GLPI · Cours

> [!TIP] Ressources du chapitre
>
> - [TP du chapitre](/00-glpi/10-imprimantes/tp)
> - [Sommaire de la formation](/00-glpi/)

> [!NOTE] Objectif de cette section
> Référencer une imprimante dans GLPI, gérer les cartouches, alimenter le stock et les installer sur l'imprimante.

---

## Les imprimantes dans le parc

`Parc` → `Imprimantes`

GLPI dispose d'une section dédiée aux imprimantes, distincte des autres équipements. Elle propose des champs spécifiques : compteurs de pages, gestion des cartouches.

Dans le menu `Parc`, on trouve aussi deux sous-sections liées :

- **Cartouches** : gestion des modèles de cartouches et du stock
- **Consommables** : autres consommables (papier, courroies de transfert…)

---

## Créer une imprimante

`Parc` → `Imprimantes` → **+ Ajouter**

### Champs principaux

| Champ                        | Description                           | Exemple                                           |
| ---------------------------- | ------------------------------------- | ------------------------------------------------- |
| **Nom**                      | Identifiant de l'imprimante dans GLPI | `IMP-NAN-OPENSPACE-01`                            |
| **Statut**                   | État de l'équipement                  | En inventaire                                     |
| **Lieu**                     | Emplacement physique                  | Nantes > Open space                               |
| **Type**                     | Nature de l'imprimante                | Laser multifonction                               |
| **Fabricant**                | Marque                                | Brother                                           |
| **Modèle**                   | Référence exacte                      | MFC-L8900CDW                                      |
| **Numéro de série**          | Sur l'étiquette de l'appareil         | BRO-2024-001                                      |
| **Numéro d'inventaire**      | Numéro interne                        | IMP-001                                           |
| **Technicien responsable**   | Compte qui suit l'équipement          | Votre compte Super-Admin, si ce champ est proposé |
| **Compteur de page initial** | Valeur au moment de l'ajout dans GLPI | 0                                                 |

![glpi-10-cartouches.svg](/00-glpi/images/glpi-10-cartouches.svg)

_Créer le modèle, alimenter le stock, puis installer les unités sur l'imprimante._

> [!TIP] Convention de nommage
> Adopter une convention cohérente dès le départ : `TYPE-SITE-EMPLACEMENT-NUMÉRO`.
> Exemple : `IMP-NAN-OPENSPACE-01`, `IMP-REN-LABO-01`. Cela facilite la recherche et les statistiques.

---

## Gérer les cartouches

La gestion des cartouches dans GLPI suit un processus en 4 étapes :

```
1. Créer le modèle    →   2. Lier le modèle      →   3. Alimenter le stock   →   4. Installer sur
   de cartouche           d'imprimante compatible      (onglet Cartouches)          l'imprimante
 (Parc → Cartouches → +)  (onglet Modèles                                          (fiche imprimante
                           d'imprimantes)                                           → onglet Cartouches
                                                                                    → Installer)
```

### Étape 1 — Créer un modèle de cartouche

`Parc` → `Cartouches` → **+ Ajouter**

> [!NOTE] Modèle ≠ Cartouche
> Le **modèle** est la référence (ex : "Brother TN-421BK"). Les **cartouches** sont les unités physiques en stock. On crée le modèle une seule fois par référence, puis on ajoute autant d'unités que nécessaire.

| Champ                 | Description                     | Exemple                   |
| --------------------- | ------------------------------- | ------------------------- |
| **Nom**               | Référence commerciale           | `Brother TN-421BK (Noir)` |
| **Type**              | Type de cartouche               | Toner                     |
| **Référence**         | Référence fabricant             | `TN-421BK`                |
| **Fabricant**         | Marque                          | Brother                   |
| **Seuil d'alerte**    | Stock minimum avant alerte GLPI | `2`                       |
| **Objectif de stock** | Quantité cible à maintenir      | `4`                       |

Cliquer sur **+ Ajouter** pour créer le modèle.

![glpi11-10-imprimante-fournil.png](/00-glpi/images/glpi11-10-imprimante-fournil.png)

_Capture du laboratoire GLPI 11 — l’imprimante du fil rouge dans l’entité racine._

### Étape 2 — Lier le modèle d'imprimante compatible

Depuis la fiche du modèle → onglet **Modèles d'imprimantes** → sélectionner le modèle dans la liste → **Ajouter**

Cela permet à GLPI de savoir quelles cartouches sont compatibles avec quels modèles d'imprimantes — utile quand le parc contient plusieurs modèles différents.

### Étape 3 — Alimenter le stock

Depuis la fiche du modèle → onglet **Cartouches**

On voit deux sections :

- **Cartouches en cours d'utilisation** : cartouches installées sur une imprimante
- **Cartouches usagées** : cartouches épuisées et retirées

Pour ajouter du stock : saisir la quantité dans le champ en haut → cliquer **Ajouter des cartouches**.

### Étape 4 — Installer les cartouches sur l'imprimante

Depuis la fiche de l'imprimante → onglet **Cartouches**

Un menu déroulant liste tous les modèles disponibles en stock. Sélectionner le modèle, indiquer le nombre à installer dans le champ **Compte**, puis cliquer **Installer**.

Les cartouches installées apparaissent dans la section **Cartouches en cours d'utilisation**.

> [!TIP] Cartouches usagées
> Quand une cartouche est épuisée, on la retire depuis ce même onglet — elle bascule dans "Cartouches usagées". GLPI garde ainsi l'historique complet des consommables de l'imprimante.

---

## Consommables vs Cartouches

|                  | Cartouches                            | Consommables                          |
| ---------------- | ------------------------------------- | ------------------------------------- |
| **Usage**        | Spécifiques aux imprimantes           | Tout type d'équipement                |
| **Exemples**     | Toners, cartouches d'encre            | Papier, courroie de transfert, câbles |
| **Menu**         | `Parc → Cartouches`                   | `Parc → Consommables`                 |
| **Installation** | Onglet dédié dans la fiche imprimante | Non lié directement                   |

---

---

## Résumé du chapitre

| Concept               | À retenir                                                                 |
| --------------------- | ------------------------------------------------------------------------- |
| Convention de nommage | `TYPE-SITE-EMPLACEMENT-NUMÉRO` — ex : `IMP-NAN-OPENSPACE-01`              |
| Modèle de cartouche   | Référence créée dans `Parc → Cartouches` — une seule fois par référence   |
| Modèles d'imprimantes | Onglet du modèle de cartouche — lier les imprimantes compatibles          |
| Stock                 | Ajouté depuis l'onglet Cartouches du modèle                               |
| Seuil d'alerte        | GLPI alerte quand le stock passe en dessous de cette valeur               |
| Installation          | Depuis la fiche imprimante → onglet Cartouches → sélectionner → Installer |

---

## Liens intéressent

- [Imprimantes | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/assets/printers)

---
