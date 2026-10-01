---
title: "TP 15. Le moteur de règles"
---

# TP 15 — Affecter les tickets réseau

> Chapitre associé : [15-cours](/00-glpi/15-moteur-regles/)

## Mission

Avec votre compte Super-Admin, configurer une règle qui vous affecte les nouveaux tickets des catégories **Réseau**, **Wi-Fi** et **Internet**, sans changer leur entité.

## A — Construire la règle

1. Ouvrir **Administration → Règles → Règles métier pour les tickets → Ajouter** dans **Le Fournil Doré**.
2. Nom : `Incidents réseau du Fournil` ; **OU** ; **Activé = Oui** ; **Règle utilisée pour = Ajouter**.
3. Enregistrer, puis ajouter les trois critères **Catégorie est Réseau**, **Réseau → Wi-Fi** et **Réseau → Internet**.
4. Ajouter l'action **Technicien → Assigner → admin.fournil**.

## B — Tester

Dans **Tester le moteur de règles**, vérifier :

| Catégorie             | Résultat attendu              |
| --------------------- | ----------------------------- |
| Réseau                | Affectation à `admin.fournil` |
| Réseau → Wi-Fi        | Affectation à `admin.fournil` |
| Réseau → Internet     | Affectation à `admin.fournil` |
| Matériel → Imprimante | Pas d'action de cette règle   |

## C — Vérifier avec Claire

Se connecter comme Claire et créer un **nouvel** incident `Wi-Fi indisponible sur PC-REN-02` en catégorie **Réseau → Wi-Fi**. Revenir sur `admin.fournil` et ouvrir le ticket : vérifier **Demandeuse = Claire**, **Entité = Le Fournil Doré**, **Technicien = admin.fournil**.

Si l'affectation ne correspond pas, vérifier l'état de la règle, ses catégories, l'opérateur **OU** et la présence éventuelle d'une autre règle exécutée ensuite.

![glpi11-15-ticket-wifi-assigne.png](/00-glpi/images/glpi11-15-ticket-wifi-assigne.png)

_Le ticket Wi-Fi de Claire est affecté automatiquement à Administrateur Fournil._
