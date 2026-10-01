---
title: "TP : Le parc informatique"
---

# 09 — Le parc informatique · TP

> Chapitre associé : [09-cours](/00-glpi/09-parc-informatique/)

---

## Atelier — Saisir le parc du Fournil Doré

Se connecter avec **votre compte Super-Admin**. Sélectionner **Le Fournil Doré** sans « Arborescence ». Tous les ordinateurs et la future imprimante appartiennent à cette entité ; **Nantes** et **Rennes** sont des lieux physiques.

### Étape 1 — Créer un gabarit pour les postes

`Parc` → `Ordinateurs` → icône **Gabarits** → **+**

| Champ          | Valeur                            |
| -------------- | --------------------------------- |
| Nom            | `PC-`                             |
| Nom du gabarit | `Poste de travail - Fournil Doré` |
| Entité         | `Le Fournil Doré`                 |

Le système d'exploitation et le fabricant ne sont pas nécessaires au gabarit de cet atelier ; ils pourront être renseignés sur une fiche réelle ou reçus par l'agent au chapitre 11.

### Étape 2 — Saisir les postes situés à Nantes

_À partir du gabarit_ → `Parc` → `Ordinateurs` → **+** → sélectionner le gabarit

| Nom         | Entité          | Lieu                | Utilisateur | N° de série | N° d'inventaire |
| ----------- | --------------- | ------------------- | ----------- | ----------- | --------------- |
| `PC-NAN-01` | Le Fournil Doré | Nantes > Open space | _(aucun)_   | `SN-PC-N01` | `PC-001`        |
| `PC-NAN-02` | Le Fournil Doré | Nantes > Open space | _(aucun)_   | `SN-PC-N02` | `PC-002`        |

### Étape 3 — Saisir les postes situés à Rennes

| Nom         | Entité          | Lieu                | Utilisateur     | N° de série | N° d'inventaire |
| ----------- | --------------- | ------------------- | --------------- | ----------- | --------------- |
| `PC-REN-01` | Le Fournil Doré | Rennes > Open space | _(aucun)_       | `SN-PC-R01` | `PC-003`        |
| `PC-REN-02` | Le Fournil Doré | Rennes > Open space | claire.rousseau | `SN-PC-R02` | `PC-004`        |

> [!NOTE] Entité ≠ Lieu en pratique
> `PC-REN-02` appartient à l'entité **Le Fournil Doré** et se trouve à **Rennes**. Son lieu physique ne détermine pas les droits de Claire : tous les droits et objets du parcours restent dans la racine.

### Étape 4 — Saisir le serveur

`Parc` → `Ordinateurs` → **+** _(sans gabarit)_

| Champ                  | Valeur                   |
| ---------------------- | ------------------------ |
| Nom                    | `SRV-FOURNIL-01`         |
| Type                   | `Serveur`                |
| Entité                 | `Le Fournil Doré`        |
| Lieu                   | `Rennes > Salle serveur` |
| Système d'exploitation | `Windows Server 2022`    |
| N° de série            | `SN-SRV-01`              |
| N° d'inventaire        | `SRV-001`                |

> Cette fiche représente un serveur Windows de démonstration. La VM Debian qui héberge GLPI est une autre machine. Pour faire le TP d'inventaire automatique du chapitre 11, il faudra disposer d'un vrai Windows Server correspondant à cette fiche ou choisir une autre machine Windows et adapter le nom du TP.

### Étape 5 — Préparer l'imprimante du chapitre 10

L'imprimante fil rouge sera créée au chapitre 10, sous le nom `IMP-NAN-OPENSPACE-01`, dans l'entité **Le Fournil Doré** et au lieu **Nantes > Open space**. Ne pas la créer ici.

### Vérification

1. `Parc` → `Ordinateurs` : vérifier que les 5 machines apparaissent dans **Le Fournil Doré**.
2. Ouvrir `PC-REN-02` : vérifier que Claire est l'utilisatrice et que le lieu est **Rennes > Open space**.
3. Ouvrir `PC-NAN-01` : vérifier **Nantes > Open space** et l'absence d'utilisateur principal.

---
