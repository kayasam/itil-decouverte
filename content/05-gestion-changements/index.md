---
title: "05. La gestion des changements"
aliases:
  - "/cours/05-gestion-changements"
---

# 05 — La gestion des changements · Cours

> [!TIP] Ressources du chapitre
>
> - [Ouvrir le chapitre interactif](https://kayasam.github.io/itil-decouverte/cours/05-gestion-changements-interactif.html)
> - [Faire le quiz — 20 questions](https://kayasam.github.io/itil-decouverte/cours/quiz/05-gestion-changements.html)
> - <a href="https://kayasam.github.io/itil-decouverte/telechargements/cours/05-gestion-changements.md" download>Télécharger ce cours en Markdown</a>

> [!TIP] Ressources du chapitre
>
> - <a href="05-gestion-changements-interactif.html" target="_blank">Ouvrir le cours interactif</a>
> - [[05-tp-serveur-partage|TP — serveur mutualisé]]
> - [[05-tp-serveur-individuel|TP — serveur individuel]]
> - [[05-correction|Correction]] _(formateur)_
> - [[00-INDEX|Sommaire de la formation]]

---

> [!NOTE] Objectif de cette section
> Comprendre ce qu'est un changement ITIL, distinguer les 3 types de changements et savoir créer et documenter un changement dans GLPI avec son plan de déploiement et son plan de repli.

---

## Qu'est-ce qu'un changement ?

**Définition ITIL 4 :**

> _"Un changement est l'ajout, la modification ou la suppression de tout élément susceptible d'avoir un effet direct ou indirect sur les services."_

Un changement, ce n'est pas une panne — c'est une **action planifiée et volontaire** sur l'infrastructure ou les services IT.

| Ce qui est un changement                       | Ce qui n'en est pas un                         |
| ---------------------------------------------- | ---------------------------------------------- |
| Déployer un nouveau pilote sur tous les postes | Redémarrer un serveur qui a planté             |
| Migrer un serveur vers le cloud                | Réinitialiser le mot de passe d'un utilisateur |
| Modifier les règles du pare-feu                | Remplacer un câble réseau défectueux           |
| Mettre à jour GLPI en production               | Ajouter un utilisateur dans GLPI               |

> [!NOTE] ITIL 4 : "Change Enablement"
> Dans ITIL 4, cette pratique s'appelle officiellement **Change Enablement** (et non plus "Change Management" comme en v3). L'idée : les changements ne doivent pas freiner l'organisation, mais être **maîtrisés et documentés** pour minimiser les risques.

---

## Les 3 types de changements

![itil-types-changements.svg](/Ressources/images/itil-types-changements.svg)

### Changement standard

**Pré-autorisé**, à faible risque, procédure connue et répétée. Pas besoin d'approbation à chaque fois — la procédure a été validée une fois pour toutes.

- Ajout d'un compte utilisateur
- Installation d'une imprimante déjà référencée
- Renouvellement d'un certificat SSL selon procédure documentée

### Changement normal

**Doit passer par un processus d'approbation** avant d'être mis en œuvre. Évalué par le **CAB** (Change Advisory Board — comité de validation des changements).

- Déploiement d'un nouveau pilote sur tout le parc
- Migration d'un serveur
- Modification des règles réseau

### Changement d'urgence

Impact critique imminent, **temps insuffisant** pour suivre le processus normal. Approuvé par un comité restreint (ECAB — Emergency CAB) et documenté après coup.

- Correctif de sécurité critique à déployer sous 2h
- Restauration d'urgence d'une sauvegarde suite à une cyberattaque

|                 | Standard      | Normal                  | Urgence                        |
| --------------- | ------------- | ----------------------- | ------------------------------ |
| **Approbation** | Pré-autorisée | CAB avant mise en œuvre | ECAB, après coup si nécessaire |
| **Risque**      | Faible        | Variable                | Élevé (contexte de crise)      |
| **Délai**       | Immédiat      | Planifié                | Le plus vite possible          |

---

## Pourquoi documenter un changement ?

Un changement mal préparé est la **première cause de nouvelle panne** en production. ITIL impose de documenter systématiquement :

**Le plan de déploiement** — comment on applique le changement, étape par étape.

**Le plan de repli** — comment on revient en arrière si ça tourne mal. C'est non négociable : sans plan de repli, pas de changement.

**La liste de vérifications** — comment on valide que le changement a bien fonctionné.

> [!WARNING] Sans plan de repli, on ne déploie pas
> Un changement sans procédure de rollback est un changement risqué. En production, si quelque chose tourne mal et qu'on ne peut pas revenir en arrière rapidement, l'impact est potentiellement catastrophique.

---

## Le cycle de vie d'un changement dans GLPI

![itil-cycle-changement.svg](/Ressources/images/itil-cycle-changement.svg)

En cas de problème à n'importe quelle étape → **Plan de repli activé** → retour à l'état précédent → nouveau changement planifié.

---

## La gestion des changements dans GLPI

`Assistance` → `Changements` → **+ Ajouter**

### Structure du formulaire

| Zone             | Champs                                                     |
| ---------------- | ---------------------------------------------------------- |
| **En-tête**      | Titre, Description                                         |
| **Informations** | Catégorie, Statut, Urgence, Impact, Priorité, Lieu         |
| **Acteurs**      | Demandeur, Observateur, Attribué à                         |
| **Éléments**     | Équipements concernés par le changement                    |
| **Analyse**      | Impacts (texte libre), Liste de contrôles                  |
| **Plans**        | Plan de déploiement, Plan de repli, Liste de vérifications |
| **Liaisons**     | Tickets et problèmes liés                                  |

> [!TIP] La section Liaisons
> Elle permet de relier le changement au **problème** qui en est à l'origine. Dans notre fil rouge : le changement de pilote est lié au problème "Pannes récurrentes - IMP-NAN-OPENSPACE-01".

---

---

## Résumé du chapitre

| Concept       | À retenir                                                     |
| ------------- | ------------------------------------------------------------- |
| Changement    | Ajout, modification ou suppression volontaire d'un élément IT |
| Standard      | Pré-autorisé, procédure connue, faible risque                 |
| Normal        | Passe par le CAB avant mise en œuvre                          |
| Urgence       | ECAB, approuvé rapidement, documenté après coup               |
| Plan de repli | Obligatoire — comment revenir en arrière si ça tourne mal     |
| CAB           | Comité qui évalue et approuve les changements normaux         |
| Liaisons GLPI | Relier le changement au problème ou aux tickets d'origine     |

---
