---
title: "Contexte commun : Le Fournil Doré"
aliases:
  - "/contexte"
---

# Le Fournil Doré — contexte commun

**Initiation GLPI** et **Découverte ITIL** se déroulent dans le même laboratoire. Vous construisez d'abord GLPI 11, puis réutilisez ses comptes, ses équipements et ses tickets pour étudier les pratiques ITIL. Chaque élève travaille sur sa propre instance.

<a class="context-next" href="https://kayasam.github.io/itil-decouverte/00-contexte/contexte-interactif.html">Explorer l'organigramme et les intitulés interactifs →</a>

## L'organisation en un coup d'œil

![contexte-organigramme-fournil-dore.svg](/Ressources/images/contexte-organigramme-fournil-dore.svg)

L'entité racine **Le Fournil Doré** contient tous les utilisateurs, équipements, tickets et objets des TP. **Nantes** et **Rennes** sont des lieux physiques, avec chacun une salle serveur et un open space. Le lieu précise où se trouve un élément ; il ne crée pas de sous-entité. L'imprimante `IMP-NAN-OPENSPACE-01` est à **Nantes > Open space**.

## Le réseau du laboratoire

![itil-contexte-laboratoire.svg](/Ressources/images/itil-contexte-laboratoire.svg)

| Élément                  | Valeur           |
| ------------------------ | ---------------- |
| Réseau VirtualBox        | `192.168.3.0/24` |
| Serveur Debian / GLPI 11 | `192.168.3.10`   |
| Poste Windows            | `192.168.3.254`  |
| DNS                      | `1.1.1.1`        |

## Les comptes et leur rôle

| Compte                              | Utilisation                                                 |
| ----------------------------------- | ----------------------------------------------------------- |
| Votre compte Super-Admin            | Configurer GLPI et administrer le laboratoire               |
| Claire Rousseau — `claire.rousseau` | Signaler les demandes et vérifier le parcours du demandeur  |
| Nico Robin — `n.robin`              | Compte LLDAP du groupe `mugiwara`, créé au chapitre GLPI 22 |
| Roronoa Zoro — `z.roronoa`          | Compte LLDAP du même groupe, créé au chapitre GLPI 22       |

Le mot de passe pédagogique est **`a12345!`** pour tous ces comptes. Si LLDAP est la source de connexion par défaut, sélectionnez **Base interne GLPI** pour revenir au Super-Admin ou à Claire.

## Les intitulés utilisés

Dans GLPI, un **intitulé** est une valeur d'une liste configurable. Les catégories ITIL servent à classer les tickets ; les lieux servent à situer les équipements. La [version interactive](https://kayasam.github.io/itil-decouverte/00-contexte/contexte-interactif.html) présente toute l'arborescence.

- **Catégories ITIL** : Matériel > Ordinateur / Imprimante ; Réseau > Wi-Fi / Internet ; Logiciel > Installation / Dysfonctionnement ; Accès & Comptes ; Four & Production.
- **Lieux** : Nantes > Salle serveur / Open space ; Rennes > Salle serveur / Open space.
- **Catégories de base de connaissances** : Matériel > Ordinateurs & périphériques / Imprimantes ; Réseau > Wi-Fi / Accès Internet ; Logiciels > Installation & licences / Dépannage ; Procédures internes > Arrivée d'un collaborateur / Départ d'un collaborateur ; Four & Production.
- **Statut du parc utilisé** : En inventaire.

## Le fil rouge, de GLPI à ITIL

![itil-contexte-parcours.svg](/Ressources/images/itil-contexte-parcours.svg)

Claire signale une panne de l'imprimante. Les incidents récurrents conduisent à l'étude d'un problème, puis à la préparation d'un changement de pilote avec tests et plan de repli. Les SLA, les relations entre équipements et les indicateurs prolongent ensuite ce cas. Si aucun pilote approprié n'est disponible, le changement reste **prévu**. Le laboratoire ne requiert ni domaine Active Directory ni GPO.

[Commencer l'initiation GLPI](/00-glpi/) · [Ouvrir Découverte ITIL](/itil/)
