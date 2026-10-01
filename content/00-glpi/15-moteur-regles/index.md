---
title: "15. Le moteur de règles"
---

# 15 — Automatiser le classement des tickets

> [!NOTE] Objectif
> Créer une règle métier qui reconnaît les tickets réseau de Claire et les affecte à votre compte Super-Admin, dans l'entité racine.

> [!TIP] Dans ce chapitre
>
> - [Faire l'atelier](/00-glpi/15-moteur-regles/tp)
> - [Revoir les tickets](/00-glpi/12-tickets/)

## Une règle, à quoi ça sert ?

Une règle applique des **actions** quand ses **critères** sont vrais. Les règles métier pour les tickets se trouvent dans **Administration → Règles → Règles métier pour les tickets**. Elles peuvent agir à la création ou à la modification du ticket. Une nouvelle règle n'affecte pas les anciens tickets : le TP crée donc un nouveau ticket après le test.

![glpi-15-regle.svg](/00-glpi/images/glpi-15-regle.svg)

Ici, la règle lit la catégorie. Si elle vaut **Réseau**, **Réseau → Wi-Fi** ou **Réseau → Internet**, elle assigne le ticket à `admin.fournil`. Le ticket reste dans **Le Fournil Doré**.

## ET et OU

| Opérateur | Condition                              |
| --------- | -------------------------------------- |
| **ET**    | Tous les critères doivent correspondre |
| **OU**    | Un seul critère suffit                 |

Un ticket n'a qu'une catégorie à la fois. Pour trois catégories possibles, choisir **OU**.

## Méthode 1 — Interface GLPI

1. Se connecter avec votre compte Super-Admin et sélectionner **Le Fournil Doré** sans « Arborescence ».
2. Ouvrir **Administration → Règles → Règles métier pour les tickets → Ajouter**.
3. Nommer la règle `Affectation réseau - admin Fournil`, choisir **OU**, **Activé = Oui** et **Règle utilisée pour = Ajouter**. Enregistrer.
4. Dans **Critères**, ajouter trois lignes : **Catégorie est Réseau**, **Catégorie est Réseau → Wi-Fi**, **Catégorie est Réseau → Internet**.
5. Dans **Actions**, choisir **Technicien → Assigner → admin.fournil**. Enregistrer.

Les intitulés des catégories doivent correspondre exactement à ceux du chapitre 08. GLPI peut afficher le nom complet `Réseau > Internet` dans le sélecteur.

## Tester puis observer

Dans la liste des règles, ouvrir **Tester le moteur de règles**. Tester Internet, Wi-Fi, puis une catégorie hors réseau. Le résultat doit proposer `admin.fournil` pour les deux premières et ne pas appliquer cette règle à la dernière.

Les règles s'exécutent dans leur ordre d'affichage. Une autre règle peut modifier ensuite une affectation ; vérifier l'ordre si le résultat réel diffère du test.

## Règles d'inventaire

GLPI possède d'autres familles de règles, notamment pour l'inventaire et les mails entrants. Dans ce fil rouge, aucune règle ne déplace des objets vers Boutique ou Laboratoire : utilisateurs, tickets et équipements restent dans **Le Fournil Doré**.

## Méthode 2 — CLI

La CLI GLPI 11 de ce lab ne propose pas de commande de création des règles métier pour les tickets. La création, les critères, les actions et le test se font dans l'interface.

Source : [Règles métier pour les tickets — GLPI](https://help.glpi-project.org/documentation/modules/administration/rules/ticketbusinessrules).
