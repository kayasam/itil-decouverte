---
title: "Contexte : Le Fournil Doré"
aliases:
  - "/contexte"
---

# 00 — Le laboratoire que vous poursuivez

> [!NOTE] Point de départ
> Vous avez terminé l'initiation GLPI sur votre propre VM. La formation ITIL continue sur **la même instance GLPI 11**, avec les mêmes comptes, équipements et tickets. Connectez-vous avec **votre compte Super-Admin** pour les réglages et les traitements. **Claire Rousseau** reste la demandeuse du fil rouge.

## L'entreprise et son outil

**Le Fournil Doré** est une boulangerie avec des activités à Nantes et Rennes. Le laboratoire utilise un serveur Debian GLPI à `192.168.3.10` et un hôte Windows à `192.168.3.254`. Le DNS du réseau privé est `1.1.1.1`. Les comptes pédagogiques utilisent `a12345!`.

La VM, le parc et les premiers tickets ont été construits dans les 22 chapitres GLPI. Vous continuez à travailler dans l'entité racine **Le Fournil Doré**, sans « Arborescence ». **Boutique** et **Laboratoire** peuvent exister comme exemples d'entités, mais ce parcours n'y place ni utilisateurs, ni équipements, ni tickets.

| Repère                                          | Dans ce parcours                                 |
| ----------------------------------------------- | ------------------------------------------------ |
| Administrateur                                  | Votre compte Super-Admin de l'initiation GLPI    |
| Demandeuse                                      | `claire.rousseau` — Claire Rousseau              |
| Source des nouveaux comptes du chapitre GLPI 22 | LLDAP, pour `n.robin` et `z.roronoa`             |
| Imprimante suivie                               | `IMP-NAN-OPENSPACE-01`, lieu Nantes > Open space |
| Entité de tous les objets                       | Le Fournil Doré                                  |
| Mot de passe pédagogique                        | `a12345!`                                        |

Un **lieu** indique où se trouve un équipement. Une **entité** détermine où GLPI classe les données et applique les droits. Le lieu **Nantes > Open space** ne change donc pas l'entité de l'imprimante.

## Du ticket GLPI à la démarche ITIL

L'imprimante `IMP-NAN-OPENSPACE-01` sert de fil rouge. Claire signale une nouvelle panne dans le TP 03. Dans le TP 04, vous ajoutez deux incidents **simulés** pour étudier la récurrence, puis vous ouvrez un problème. Le TP 05 documente un changement de pilote avec un plan de test et de repli ; il ne suppose pas de domaine Active Directory ni de GPO. Les TP 06 à 08 ajoutent des engagements de service, une dépendance du parc et une mesure d'amélioration.

| Chapitre ITIL | Travail réalisé sur votre GLPI                                          |
| ------------- | ----------------------------------------------------------------------- |
| 01–02         | Comprendre la valeur du service et le système de valeur ITIL            |
| 03            | Qualifier et traiter l'incident signalé par Claire                      |
| 04            | Relier les incidents, rechercher la cause et documenter l'erreur connue |
| 05            | Préparer le changement de pilote et son retour arrière                  |
| 06            | Créer des SLA et les lire sur un ticket                                 |
| 07            | Relier l'imprimante à son switch dans l'analyse d'impact                |
| 08            | Exploiter les statistiques et planifier l'amélioration                  |

## Les comptes et les accès

Votre Super-Admin sert aux actions de configuration du laboratoire. Pour vérifier l'expérience du demandeur, connectez-vous avec `claire.rousseau / a12345!`, puis revenez au Super-Admin en choisissant **Base interne GLPI** si l'annuaire LLDAP est la source par défaut. Les deux comptes LLDAP du chapitre GLPI 22 ne remplacent pas Claire dans les TP ITIL.

Aucun préfixe de nommage n'est nécessaire : chaque élève travaille sur sa propre instance. Les nouveaux tickets, problèmes, changements, SLA et équipements sont créés dans **Le Fournil Doré**.

Suite : [Introduction à ITIL](/01-introduction-itil/).
