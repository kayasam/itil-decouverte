---
title: "TP : Les intitulés"
---

# 08 — Les intitulés · TP

> Chapitre associé : [08-cours](/00-glpi/08-intitules/)

---

## Atelier — Configurer les intitulés du Fournil Doré

Se connecter avec **votre compte Super-Admin** et sélectionner **Le Fournil Doré** sans « Arborescence ». Tous les intitulés de l'atelier appartiennent à la racine.

### Catégories ITIL

`Configuration` → `Intitulés` → section **Assistance** → **Catégories ITIL**

Créer dans cet ordre (parent avant enfant) :

| Nom                 | Catégorie parente | Interface simplifiée |
| ------------------- | ----------------- | -------------------- |
| `Matériel`          | _(aucune)_        | ✅ Oui               |
| `Ordinateur`        | Matériel          | ✅ Oui               |
| `Imprimante`        | Matériel          | ✅ Oui               |
| `Réseau`            | _(aucune)_        | ✅ Oui               |
| `Wi-Fi`             | Réseau            | ✅ Oui               |
| `Internet`          | Réseau            | ✅ Oui               |
| `Logiciel`          | _(aucune)_        | ✅ Oui               |
| `Installation`      | Logiciel          | ✅ Oui               |
| `Dysfonctionnement` | Logiciel          | ✅ Oui               |
| `Accès & Comptes`   | _(aucune)_        | ✅ Oui               |
| `Four & Production` | _(aucune)_        | ✅ Oui               |

> [!TIP] Catégorie métier
> "Four & Production" est spécifique au Fournil Doré — pour les incidents liés à l'équipement de production connecté.

![glpi11-08-categories-fournil.png](/00-glpi/images/glpi11-08-categories-fournil.png)

_Les catégories du fil rouge dans GLPI 11._

### Lieux

`Configuration` → `Intitulés` → section **Général** → **Lieux**

Créer dans cet ordre (parent avant enfant) :

| Nom             | Lieu parent | Adresse                               |
| --------------- | ----------- | ------------------------------------- |
| `Nantes`        | _(aucun)_   | 32 Bd Vincent Gâche, 44200 Nantes     |
| `Salle serveur` | Nantes      |                                       |
| `Open space`    | Nantes      |                                       |
| `Rennes`        | _(aucun)_   | 3 Pl. du Général-Giraud, 35000 Rennes |
| `Salle serveur` | Rennes      |                                       |
| `Open space`    | Rennes      |                                       |

### État des équipements

Dans **Configuration → Intitulés → Général → États**, créer En inventaire. Cet état sera utilisé pour les ordinateurs et l’imprimante des chapitres 09 et 10.

### Base de connaissances — arborescence des catégories

`Configuration` → `Intitulés` → section **Outils** → **Catégories de la base de connaissances**

Créer l'arborescence suivante :

```
Matériel
├── Ordinateurs & périphériques
└── Imprimantes

Réseau
├── Wi-Fi
└── Accès Internet

Logiciels
├── Installation & licences
└── Dépannage

Procédures internes
├── Arrivée d'un collaborateur
└── Départ d'un collaborateur

Four & Production
```

| Nom                           | Catégorie parente   |
| ----------------------------- | ------------------- |
| `Matériel`                    | _(aucune)_          |
| `Ordinateurs & périphériques` | Matériel            |
| `Imprimantes`                 | Matériel            |
| `Réseau`                      | _(aucune)_          |
| `Wi-Fi`                       | Réseau              |
| `Accès Internet`              | Réseau              |
| `Logiciels`                   | _(aucune)_          |
| `Installation & licences`     | Logiciels           |
| `Dépannage`                   | Logiciels           |
| `Procédures internes`         | _(aucune)_          |
| `Arrivée d'un collaborateur`  | Procédures internes |
| `Départ d'un collaborateur`   | Procédures internes |
| `Four & Production`           | _(aucune)_          |

> [!TIP] À quoi sert cette arborescence ?
> Elle structure les articles de la base de connaissances. Les techniciens s'y retrouvent facilement et les utilisateurs en self-service peuvent parcourir la FAQ par thème.

### Vérification

1. Se connecter avec `claire.rousseau / a12345!`, ouvrir **Signaler un incident** sans envoyer le formulaire et vérifier que les catégories apparaissent.
2. Vérifier que **Four & Production** est visible dans l'interface simplifiée.
3. Revenir sur votre compte Super-Admin.

---
