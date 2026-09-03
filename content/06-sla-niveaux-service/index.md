---
title: "06. SLA et niveaux de service"
aliases:
  - "/cours/06-sla-niveaux-service"
---

# 06 — Les SLA et les niveaux de service · Cours

> [!TIP] Ressources du chapitre
>
> - [Faire le quiz — 20 questions](https://kayasam.github.io/itil-decouverte/cours/quiz/06-sla-niveaux-service.html)
> - <a href="https://kayasam.github.io/itil-decouverte/telechargements/cours/06-sla-niveaux-service.md" download>Télécharger ce cours en Markdown</a>

---

> [!NOTE] Objectif de cette section
> Comprendre ce qu'est un SLA, distinguer TTO et TTR, connaître la différence entre SLA et OLA, et configurer des niveaux de service dans GLPI pour le Fournil Doré.

---

## Qu'est-ce qu'un SLA ?

**Définition ITIL 4 :**

> _"Un accord de niveau de service (SLA — Service Level Agreement) est un accord documenté entre un fournisseur de services et un client qui identifie les services requis ainsi que le niveau de service attendu."_

En clair : le SLA, c'est le **contrat de performance** entre l'IT et ses utilisateurs. Il répond à la question : _"En combien de temps allez-vous traiter mon incident ?"_

Sans SLA, chaque technicien gère les tickets à sa façon. Avec un SLA, l'équipe IT s'engage sur des délais mesurables — et GLPI les surveille automatiquement.

| Sans SLA                             | Avec SLA                              |
| ------------------------------------ | ------------------------------------- |
| Pas d'engagement de délai            | Délais définis et visibles            |
| Priorité subjective                  | Priorité calculée et tracée           |
| Aucune alerte en cas de dépassement  | Alertes automatiques avant l'échéance |
| Impossible de mesurer la performance | Statistiques objectives               |

---

## TTO et TTR : les deux indicateurs clés

![itil-tto-ttr.svg](/Ressources/images/itil-tto-ttr.svg)

### TTO — Time To Own (délai de prise en charge)

Délai maximum entre la **création du ticket** et sa **prise en charge** par un technicien (passage en statut "En cours").

> Exemple : "Tout incident doit être pris en charge en moins d'1 heure."

### TTR — Time To Resolve (délai de résolution)

Délai maximum entre la **création du ticket** et sa **résolution** complète.

> Exemple : "Tout incident de priorité haute doit être résolu en moins de 4 heures."

|                   | TTO                      | TTR                         |
| ----------------- | ------------------------ | --------------------------- |
| **Mesure**        | Réactivité du technicien | Efficacité de la résolution |
| **Déclenché par** | Création du ticket       | Création du ticket          |
| **Terminé quand** | Ticket pris en charge    | Ticket résolu               |

> [!TIP] On peut avoir les deux
> Un ticket peut avoir un SLA TTO **et** un SLA TTR simultanément. Le TTO surveille la réactivité, le TTR surveille la résolution globale.

---

## SLA vs OLA

Le **SLA** (Service Level Agreement) est l'engagement **externe** — vers les utilisateurs.

L'**OLA** (Operational Level Agreement) est l'engagement **interne** — entre équipes IT. Il sert quand plusieurs équipes interviennent sur un même ticket.

|               | SLA                                  | OLA                                            |
| ------------- | ------------------------------------ | ---------------------------------------------- |
| **Parties**   | IT ↔ Utilisateurs                    | Équipe IT ↔ Équipe IT                          |
| **Exemple**   | "Les incidents sont résolus sous 4h" | "L'équipe réseau traite les escalades sous 2h" |
| **Dans GLPI** | Champs TTO / TTR                     | Champs TTO interne / TTR interne               |

> Au Fournil Doré, Thomas travaille seul — les OLA ne sont pas pertinents dans ce contexte. On se concentre sur les SLA.

---

## La structure SLA dans GLPI

GLPI organise les niveaux de service en deux niveaux :

![itil-structure-sla-glpi.svg](/Ressources/images/itil-structure-sla-glpi.svg)

**SLM** (Service Level Management) : le conteneur qui regroupe les SLA et OLA d'un même périmètre. Un seul SLM suffit généralement pour une petite structure.

**SLA** : l'engagement lui-même, avec son type (TTO ou TTR) et sa durée maximale.

**Niveau d'escalade** : une alerte déclenchée **avant** l'échéance pour prévenir le dépassement.

---

## Les niveaux d'escalade

Un niveau d'escalade, c'est une action automatique déclenchée avant que le SLA ne soit dépassé.

Dans GLPI, le champ **Exécution** définit le moment du déclenchement :

- `-1 heure` = l'alerte se déclenche 1 heure avant l'échéance
- `-30 minutes` = 30 minutes avant
- `+0` = au moment exact de l'échéance

> [!WARNING] Une alerte qui arrive trop tard ne sert à rien
> L'escalade doit laisser suffisamment de temps pour agir. Si le TTR est de 4h, une alerte à -1h permet encore d'intervenir. Une alerte à -5 minutes, non.

---

## Appliquer un SLA à un ticket dans GLPI

Un SLA peut être appliqué à un ticket de deux façons :

**Manuellement** — dans la section **Niveaux de services** du formulaire ticket. Les champs TTO et TTR permettent de sélectionner un SLA existant.

**Automatiquement via le moteur de règles** — GLPI peut appliquer automatiquement un SLA selon la catégorie, la priorité ou l'entité du ticket. C'est la méthode recommandée en production.

> [!TIP] Dans cet atelier
> On commence par l'affectation manuelle pour comprendre le mécanisme. L'automatisation via règles est abordée dans l'initiation GLPI (moteur de règles).

---

---

## Résumé du chapitre

| Concept           | À retenir                                                             |
| ----------------- | --------------------------------------------------------------------- |
| SLA               | Engagement de délai entre l'IT et les utilisateurs                    |
| TTO               | Délai de prise en charge (Time To Own)                                |
| TTR               | Délai de résolution (Time To Resolve)                                 |
| OLA               | Accord interne entre équipes IT (TTO/TTR interne dans GLPI)           |
| SLM               | Conteneur GLPI qui regroupe les SLA et OLA                            |
| Niveau d'escalade | Alerte déclenchée avant le dépassement du SLA                         |
| Calendrier        | Définit les heures ouvrées prises en compte dans le calcul des délais |

---
