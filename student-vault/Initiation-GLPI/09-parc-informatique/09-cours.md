---
title: "09. Le parc informatique"
---

# 09 — Le parc informatique · Cours

> [!TIP] Ressources du chapitre
> - [[09-tp|TP du chapitre]]
> - [[00-INDEX|Sommaire de la formation]]

> [!NOTE] Objectif de cette section
> Référencer les équipements du Fournil Doré dans GLPI, utiliser les gabarits pour accélérer la saisie, et comprendre le cycle de vie d'un élément de parc.

---

## Les objets du parc

`Parc` → choisir le type d'objet

| Objet | Exemples |
|-------|---------|
| **Ordinateurs** | Postes de travail, serveurs, laptops |
| **Moniteurs** | Écrans |
| **Logiciels** | Applications installées, licences |
| **Matériels réseau** | Switchs, routeurs, bornes Wi-Fi |
| **Imprimantes** | Imprimantes réseau, copieurs |
| **Téléphones** | Téléphones IP, mobiles |

---

## Créer un ordinateur

`Parc` → `Ordinateurs` → bouton **+**

### Champs principaux (onglet Principal)

| Champ | Description |
|-------|-------------|
| **Nom** | Nom de la machine (ex: `PC-BOUTIQUE-01`) |
| **Statut** | En inventaire, En réparation... |
| **Entité** | Toujours **Le Fournil Doré** dans ce parcours |
| **Lieu** | Emplacement physique |
| **Type** | Ordinateur de bureau, Portable, Serveur |
| **Fabricant / Modèle** | Marque et référence |
| **N° de série** | Identifiant unique constructeur |
| **N° d'inventaire** | Numéro interne au parc |
| **Système d'exploitation** | Windows, Linux... |
| **Utilisateur** | Claire uniquement pour son poste `PC-REN-02` ; laisser vide ailleurs |

![[glpi-09-parc.svg]]

*L'entité reste la racine ; le lieu varie selon la position physique.*

---

## Les gabarits de parc

Un **gabarit** pré-remplit les champs communs pour éviter de ressaisir les mêmes informations à chaque nouvel équipement.

> [!TIP] Exemple d'usage
> Gabarit "Poste de travail - Fournil Doré" : entité = Le Fournil Doré et préfixe de nom = `PC-`.
> Pour chaque nouveau poste, il reste à renseigner le nom, le lieu et le numéro de série ; l'entité est toujours **Le Fournil Doré**.

`Parc` → `Ordinateurs` → icône **Gabarits** (en haut de liste) → **+**

---

## Le cycle de vie d'un équipement

Le **statut** d'un élément reflète son état dans son cycle de vie :

```
Commande ──► En inventaire ──► En réparation ──► Mis au rebut
                  │
                  └──► Prêté / En stock
```

`Configuration` → `Intitulés` → **Parc** → **Statuts des éléments** pour personnaliser la liste.

---

## Lier un équipement à un ticket

Sur la fiche d'un ticket → onglet **Éléments** → **Ajouter un élément** → choisir le type et la machine.

> [!TIP] Navigation bidirectionnelle
> Depuis la fiche d'un ordinateur, l'onglet **Tickets** liste tous les tickets qui lui sont liés.
> Depuis un ticket, on peut accéder directement à la fiche de l'équipement concerné.

---

---
## Liens utiles
- [Parc | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/assets)

---
