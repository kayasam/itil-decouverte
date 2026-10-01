---
title: "Contexte : Le Fournil Doré"
aliases:
  - "/contexte"
---

# Le Fournil Doré — le laboratoire commun

Vous poursuivez **la même instance GLPI 11** après l'initiation. Les comptes, les équipements et les tickets déjà créés restent en place. Chaque élève travaille sur son propre laboratoire.

## Le réseau et l'entité

![itil-contexte-laboratoire.svg](/Ressources/images/itil-contexte-laboratoire.svg)

Le serveur Debian est à `192.168.3.10`, le poste Windows à `192.168.3.254` et le DNS est `1.1.1.1`. Le réseau reste celui de VirtualBox, configuré en `192.168.3.0/24`.

**Tous les utilisateurs, équipements, tickets et objets des TP sont dans l'entité racine Le Fournil Doré.** Nantes et Rennes sont des lieux physiques. Un lieu indique où se trouve un équipement ; une entité détermine où GLPI classe les données et applique les droits. L'imprimante `IMP-NAN-OPENSPACE-01` est au lieu **Nantes > Open space**, dans l'entité racine.

## Les comptes à utiliser

| Compte                   | Rôle dans les TP                                                                             |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| Votre compte Super-Admin | Configurer GLPI et traiter les objets du laboratoire                                         |
| `claire.rousseau`        | Signaler les demandes et vérifier l'expérience du demandeur                                  |
| `n.robin` et `z.roronoa` | Comptes LLDAP du groupe `mugiwara`, créés au chapitre GLPI 22 ; ils ne remplacent pas Claire |

Le mot de passe pédagogique est **`a12345!`** pour ces comptes. Si LLDAP est devenu la source de connexion par défaut, sélectionnez **Base interne GLPI** pour revenir au Super-Admin ou à Claire. Aucun préfixe de nommage n'est nécessaire : chaque élève possède sa propre instance.

## Du ticket GLPI aux pratiques ITIL

![itil-contexte-parcours.svg](/Ressources/images/itil-contexte-parcours.svg)

Les chapitres **01 et 02** expliquent les concepts. Dans le TP **03**, Claire signale une nouvelle panne de l'imprimante. Le TP **04** ajoute deux incidents _simulés_ pour étudier la récurrence, puis ouvre un problème. Le TP **05** prépare un changement de pilote avec tests et plan de repli. Les TP **06 à 08** ajoutent les SLA, les relations entre équipements et la mesure de l'amélioration.

Le laboratoire n'utilise ni domaine Active Directory ni GPO. Si aucun pilote approprié n'est disponible, le changement du TP 05 reste **prévu** : ne le présentez pas comme appliqué.

<a class="context-next" href="/01-introduction-itil/">Commencer le chapitre 01 — Introduction à ITIL →</a>
