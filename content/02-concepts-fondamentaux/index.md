---
title: "02. Concepts fondamentaux d'ITIL 4"
aliases:
  - "/cours/02-concepts-fondamentaux"
---

# 02 — Concepts fondamentaux d'ITIL 4 · Cours

> [!TIP] Ressources du chapitre
>
> - [Ouvrir le chapitre interactif](https://kayasam.github.io/itil-decouverte/cours/02-concepts-fondamentaux-interactif.html)
> - [Faire le quiz — 20 questions](https://kayasam.github.io/itil-decouverte/cours/quiz/02-concepts-fondamentaux.html)
> - <a href="https://kayasam.github.io/itil-decouverte/telechargements/cours/02-concepts-fondamentaux.md" download>Télécharger ce cours en Markdown</a>

> [!TIP] Ressources du chapitre
>
> - <a href="02-concepts-fondamentaux-interactif.html" target="_blank">Ouvrir le cours interactif</a>
> - [[02-tp|TP du chapitre]]
> - [[02-correction|Correction]] _(formateur)_
> - [[00-INDEX|Sommaire de la formation]]

---

> [!NOTE] Objectif de cette section
> Comprendre l'architecture globale d'ITIL 4 : les 4 dimensions qui encadrent tout service, le Service Value System (SVS) et la chaîne de valeur. Ces concepts sont le socle de tout le reste du cours.

---

## Les 4 dimensions de la gestion des services

ITIL 4 définit **4 dimensions** qui doivent toutes être prises en compte pour qu'un service fonctionne bien. Ignorer l'une d'elles, c'est prendre le risque d'un dysfonctionnement.

![itil-4-dimensions.svg](/Ressources/images/itil-4-dimensions.svg)

> [!TIP] Comment lire ce schéma
> Les produits et services sont **au centre** : les 4 dimensions sont quatre angles de vue sur une même réalité, pas quatre étapes successives. Le cadre en pointillés rappelle que tout cela baigne dans un environnement externe (PESTLE) sur lequel l'organisation n'a aucune prise.

### Dimension 1 — Organisations et personnes

Un service repose sur des **êtres humains** : techniciens, responsables, utilisateurs. Pour qu'un service fonctionne, il faut que :

- Les rôles et responsabilités soient clairement définis (qui fait quoi ?)
- La culture d'entreprise soit favorable à la collaboration
- Les compétences soient au bon niveau

> **Au Fournil Doré** : Thomas est le seul technicien. Si personne ne sait qu'il est responsable des incidents réseau, les pannes ne seront jamais signalées correctement.

### Dimension 2 — Information et technologie

Il s'agit des **outils, logiciels, données et connaissances** nécessaires pour gérer les services :

- Logiciels de gestion (GLPI, par exemple)
- Bases de données
- Outils de surveillance et d'automatisation
- Documentation technique

> **Au Fournil Doré** : GLPI est l'outil qui centralise les tickets. Sans lui, Thomas gère les incidents par email ou à l'oral — et perd tout historique.

### Dimension 3 — Partenaires et fournisseurs

Aucune DSI ne fait tout en interne. Des **prestataires externes** interviennent :

- Fournisseur d'accès Internet
- Hébergeur cloud
- Prestataire de maintenance matérielle
- Éditeur logiciel

> **Au Fournil Doré** : OVH héberge le serveur GLPI. Si OVH a une panne, Thomas ne peut rien faire — il doit le savoir et avoir un contrat avec des engagements de disponibilité.

### Dimension 4 — Flux de valeur et processus

Ce sont les **enchaînements d'activités** qui transforment une demande en résultat :

- Comment un incident est pris en charge, du signalement à la résolution ?
- Comment une nouvelle application est déployée ?
- Comment une demande d'accès est traitée ?

> **Au Fournil Doré** : Marie signale un problème d'imprimante → Thomas crée un ticket → diagnostique → résout → ferme le ticket. Ce flux doit être défini, sinon chaque incident se gère différemment.

### Les facteurs PESTLE

Les 4 dimensions ne fonctionnent pas en vase clos. Elles sont influencées par des **facteurs externes** regroupés sous l'acronyme **PESTLE** :

| Lettre | Facteur         | Exemple concret                             |
| ------ | --------------- | ------------------------------------------- |
| P      | Politique       | Obligation d'héberger les données en France |
| E      | Économique      | Budget informatique réduit                  |
| S      | Social          | Télétravail qui change les usages           |
| T      | Technologique   | Arrivée de l'IA dans les outils             |
| L      | Légal           | RGPD sur les données personnelles           |
| E      | Environnemental | Réduction de la consommation énergétique    |

---

## Le Service Value System (SVS)

Le **SVS** (Système de Valeur des Services) est le modèle global d'ITIL 4. Il représente **comment une organisation transforme une demande en valeur**.

![itil-svs.svg](/Ressources/images/itil-svs.svg)

Le SVS est composé de 5 éléments :

| Élément                   | Rôle                                                                            |
| ------------------------- | ------------------------------------------------------------------------------- |
| **Principes directeurs**  | 7 règles de bon sens qui guident toutes les décisions                           |
| **Gouvernance**           | La direction fixe les orientations et s'assure de leur respect                  |
| **Chaîne de valeur**      | Les 6 activités qui transforment une demande en service                         |
| **Pratiques**             | Les 34 "boîtes à outils" spécialisées (gestion des incidents, des changements…) |
| **Amélioration continue** | Mécanisme permanent pour s'améliorer à tous les niveaux                         |

---

## Les 7 principes directeurs

Les **7 principes directeurs** sont des recommandations universelles. Ils s'appliquent quelle que soit la taille de l'organisation, quelle que soit la situation.

| #   | Principe                                     | En pratique                                                                  |
| --- | -------------------------------------------- | ---------------------------------------------------------------------------- |
| 1   | **Se concentrer sur la valeur**              | Toujours se demander : est-ce que ça apporte quelque chose à l'utilisateur ? |
| 2   | **Commencer là où on en est**                | Ne pas tout effacer pour repartir de zéro. Capitaliser sur l'existant.       |
| 3   | **Progresser de façon itérative**            | Avancer par petites étapes, avec des retours réguliers.                      |
| 4   | **Collaborer et promouvoir la visibilité**   | Partager l'information, travailler ensemble, éviter les silos.               |
| 5   | **Penser et travailler de façon holistique** | Voir le système dans son ensemble, pas juste sa propre brique.               |
| 6   | **Garder les choses simples et pratiques**   | Si une procédure est trop compliquée, personne ne la suivra.                 |
| 7   | **Optimiser et automatiser**                 | Réduire les tâches répétitives, utiliser l'automatisation intelligemment.    |

> [!TIP] Retenir les 7 principes
> Ces principes ne sont pas propres à ITIL — ce sont des règles de bon sens que vous appliquez déjà inconsciemment. ITIL les formalise pour que toute une organisation les partage.

---

## La chaîne de valeur des services

La **chaîne de valeur** est le cœur opérationnel du SVS. Elle décrit les **6 activités** par lesquelles une organisation transforme une demande en un service utile.

![itil-chaine-de-valeur.svg](/Ressources/images/itil-chaine-de-valeur.svg)

| Activité                       | Ce qu'elle couvre                                                 |
| ------------------------------ | ----------------------------------------------------------------- |
| **Planifier**                  | Définir la vision, la stratégie, les priorités                    |
| **Améliorer**                  | Identifier les axes d'amélioration à tous les niveaux             |
| **Impliquer**                  | Comprendre les besoins des parties prenantes, gérer les relations |
| **Concevoir et faire évoluer** | Concevoir et faire évoluer les services et les pratiques          |
| **Obtenir / Construire**       | Acquérir ou développer les composants nécessaires                 |
| **Fournir et supporter**       | Délivrer les services au quotidien et gérer les incidents         |

> [!NOTE] Ce n'est pas un processus linéaire
> Contrairement à ITIL v3 (qui suivait un cycle de vie séquentiel Stratégie → Conception → Transition → Exploitation), la chaîne de valeur ITIL 4 est **flexible** : les activités s'enchaînent différemment selon le type de demande. Un incident ne suit pas le même chemin qu'un déploiement.

---

## Les 34 pratiques

ITIL 4 remplace le terme "processus" par **"pratique"** — une pratique est un ensemble de ressources (personnes, outils, procédures) organisées pour atteindre un objectif.

Il y en a **34**, réparties en 3 catégories :

| Catégorie                             | Nombre | Exemples                                                        |
| ------------------------------------- | ------ | --------------------------------------------------------------- |
| **Pratiques générales de management** | 14     | Gestion des risques, amélioration continue, gestion de projet   |
| **Pratiques de gestion des services** | 17     | Gestion des incidents, des problèmes, des changements, des SLA  |
| **Pratiques de gestion technique**    | 3      | Gestion des déploiements, de l'infrastructure, du développement |

> Nous verrons les pratiques les plus importantes (incidents, problèmes, changements) dans les chapitres suivants.

---

---

## Résumé du chapitre

| Concept                | À retenir                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| 4 dimensions           | Organisations/personnes, Information/technologie, Partenaires/fournisseurs, Flux/processus     |
| PESTLE                 | Facteurs externes qui influencent les 4 dimensions                                             |
| SVS                    | Modèle global : principes + gouvernance + chaîne de valeur + pratiques + amélioration continue |
| 7 principes directeurs | Règles universelles qui guident toutes les décisions ITIL                                      |
| Chaîne de valeur       | 6 activités flexibles pour transformer une demande en valeur                                   |
| 34 pratiques           | Remplacent les "processus" — boîtes à outils spécialisées                                      |

---
