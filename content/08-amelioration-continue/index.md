---
title: "08. L'amélioration continue"
aliases:
  - "/cours/08-amelioration-continue"
---

# 08 — L'amélioration continue · Cours

> [!TIP] Ressources du chapitre
>
> - [Ouvrir le chapitre interactif](https://kayasam.github.io/itil-decouverte/cours/08-amelioration-continue-interactif.html)
> - [Faire le quiz — 20 questions](https://kayasam.github.io/itil-decouverte/cours/quiz/08-amelioration-continue.html)
> - <a href="https://kayasam.github.io/itil-decouverte/telechargements/cours/08-amelioration-continue.md" download>Télécharger ce cours en Markdown</a>

> [!TIP] Ressources du chapitre
>
> - <a href="08-amelioration-continue-interactif.html" target="_blank">Ouvrir le cours interactif</a>
> - [[08-tp-serveur-partage|TP — serveur mutualisé]]
> - [[08-tp-serveur-individuel|TP — serveur individuel]]
> - [[08-correction|Correction]] _(formateur)_
> - [[00-INDEX|Sommaire de la formation]]

---

> [!NOTE] Objectif de cette section
> Comprendre le modèle d'amélioration continue d'ITIL 4, savoir identifier des axes d'amélioration à partir des données GLPI, et formaliser une action corrective concrète pour Le Fournil Doré.

---

## Qu'est-ce que l'amélioration continue ?

Dans ITIL 4, l'amélioration continue n'est pas une pratique ponctuelle — c'est une **philosophie permanente** inscrite dans tous les niveaux du SVS.

Elle repose sur une idée simple : les services IT ne sont jamais parfaits dès le départ. Ils doivent être mesurés, analysés, et améliorés régulièrement, en cycle.

> "Ce qui ne se mesure pas ne peut pas être amélioré."

La pratique s'appelait CSI (Continual Service Improvement) dans ITIL 3. Dans ITIL 4, elle est intégrée à l'ensemble du référentiel sous le terme **Amélioration continue** (Continual Improvement), et figure notamment dans la chaîne de valeur des services via l'activité **Améliorer**.

---

## Le modèle d'amélioration continue en 7 étapes

ITIL 4 propose un modèle structuré en 7 questions successives :

![itil-7-etapes-amelioration.svg](/Ressources/images/itil-7-etapes-amelioration.svg)

| Étape | Question                   | Exemple Fournil Doré                                                     |
| ----- | -------------------------- | ------------------------------------------------------------------------ |
| 1     | Quelle est la vision ?     | "Assurer la continuité IT pour permettre la production et la vente"      |
| 2     | Où en sommes-nous ?        | 12 incidents ce mois, 3 dépassements de SLA, 80% liés à l'imprimante     |
| 3     | Où voulons-nous aller ?    | 0 dépassement de SLA, incidents imprimante réduits de 50%                |
| 4     | Comment y arriver ?        | Mettre à jour le driver Brother, bloquer les mises à jour auto via GPO   |
| 5     | Agir                       | Création et déploiement du changement (chapitres 04 & 05)                |
| 6     | Sommes-nous arrivés ?      | Vérifier les stats du mois suivant : incidents réduits ? SLA respectés ? |
| 7     | Comment maintenir l'élan ? | Documenter la solution, planifier une revue mensuelle des stats          |

> [!TIP] Ce modèle s'applique à toutes les échelles
> Il peut s'appliquer à un problème précis (réduire les incidents imprimante) comme à une stratégie IT globale (améliorer la satisfaction utilisateurs). C'est sa force.

---

## Les indicateurs clés (KPI)

Un KPI (Key Performance Indicator) est une **mesure chiffrée** qui permet d'évaluer si un objectif est atteint.

Quelques KPI courants en ITSM :

| KPI                                    | Ce qu'il mesure                  | Exemple de cible                       |
| -------------------------------------- | -------------------------------- | -------------------------------------- |
| Nombre de tickets ouverts              | Volume d'activité                | Suivre l'évolution mois/mois           |
| Taux de résolution dans les délais SLA | Respect des engagements          | > 95%                                  |
| Délai moyen de résolution (MTTR)       | Efficacité                       | < 4h pour les incidents haute priorité |
| Taux de réouverture de tickets         | Qualité de la résolution         | < 5%                                   |
| Nombre d'incidents par catégorie       | Identification des points chauds | Imprimante : 3/mois max                |
| Satisfaction utilisateurs              | Perception du service            | Formulaire de clôture de ticket        |

> Au Fournil Doré, Thomas n'a pas encore de tableau de bord formel. Les statistiques GLPI lui donnent un premier niveau de visibilité suffisant pour démarrer.

---

## Le registre d'amélioration

Le **registre d'amélioration** (Improvement Register) est un document — ou une liste dans GLPI — qui recense toutes les idées et actions d'amélioration identifiées, avec leur statut.

| Idée                                                           | Source                        | Priorité | Statut            |
| -------------------------------------------------------------- | ----------------------------- | -------- | ----------------- |
| Bloquer MAJ auto driver Brother                                | Analyse problème              | Haute    | ✅ Réalisé (ch05) |
| Créer SLA formels                                              | Réunion direction             | Haute    | ✅ Réalisé (ch06) |
| Ajouter un formulaire "Demande d'accès" au catalogue           | Retour utilisateurs           | Moyenne  | 🔲 À planifier    |
| Former les utilisateurs à créer leurs tickets via le catalogue | Constat tickets mal qualifiés | Basse    | 🔲 À planifier    |

> Dans GLPI, ce registre peut se tenir sous forme de tickets de type **Demande** dans une catégorie dédiée "Amélioration IT", ou via un simple document partagé.

---

## Dans GLPI — les Statistiques

`Assistance → Statistiques`

GLPI propose des vues statistiques pour les tickets, problèmes et changements :

| Vue                                  | Ce qu'elle montre                                         |
| ------------------------------------ | --------------------------------------------------------- |
| **Global**                           | Nombre de tickets ouverts, fermés, en cours — par période |
| **Par ticket**                       | Délais de traitement, respect du SLA, durée de résolution |
| **Par caractéristiques matérielles** | Tickets par lieu, par technicien                          |
| **Par matériel**                     | Tickets liés à un équipement précis                       |

Ces vues permettent de répondre directement aux étapes 2 et 6 du modèle d'amélioration continue : _"Où en sommes-nous ?"_ et _"Sommes-nous arrivés ?"_

---

---

## Résumé du chapitre

| Concept                 | À retenir                                                                     |
| ----------------------- | ----------------------------------------------------------------------------- |
| Amélioration continue   | Pratique ITIL 4 permanente — mesurer, analyser, agir, recommencer             |
| Modèle en 7 étapes      | Vision → Où on est → Où on veut aller → Comment → Agir → Vérifier → Maintenir |
| KPI                     | Indicateurs chiffrés pour mesurer l'atteinte des objectifs                    |
| MTTR                    | Mean Time To Resolve — délai moyen de résolution                              |
| Registre d'amélioration | Liste des actions d'amélioration identifiées, avec leur statut                |
| Statistiques GLPI       | `Assistance → Statistiques` — Global, Par ticket, Par matériel, Par lieu      |

---

> ✅ **Fin de la formation ITIL — Le Fournil Doré**
>
> Les connaissances acquises ici s'appliquent directement à GLPI au quotidien. ITIL n'est pas un ensemble de règles rigides — c'est un cadre de réflexion pour fournir des services IT qui ont de la valeur pour les utilisateurs.

---
