---
title: "04. La gestion des problèmes"
aliases:
  - "/cours/04-gestion-problemes"
---

# 04 — La gestion des problèmes · Cours

> [!TIP] Ressources du chapitre
>
> - [Faire le quiz — 20 questions](https://kayasam.github.io/itil-decouverte/cours/quiz/04-gestion-problemes.html)
> - <a href="https://kayasam.github.io/itil-decouverte/telechargements/cours/04-gestion-problemes.md" download>Télécharger ce cours en Markdown</a>

---

> [!NOTE] Objectif de cette section
> Comprendre la différence entre un incident et un problème, identifier les causes racines et éviter que le même incident ne se reproduise. Savoir créer et lier des problèmes dans GLPI.

---

## Incident vs Problème : la distinction clé

![itil-incident-vers-probleme.svg](/Ressources/images/itil-incident-vers-probleme.svg)

On l'a vu au chapitre 3 : un incident, on le règle vite. Mais si le même incident revient régulièrement, il y a forcément une cause sous-jacente — c'est ce qu'ITIL appelle un **problème**.

**Définition ITIL 4 :**

> _"Un problème est la cause, ou la cause potentielle, d'un ou plusieurs incidents."_

|                 | Incident                                  | Problème                                               |
| --------------- | ----------------------------------------- | ------------------------------------------------------ |
| **Déclencheur** | Quelque chose casse maintenant            | On observe une récurrence ou on anticipe               |
| **Objectif**    | Rétablir le service le plus vite possible | Trouver et éliminer la cause racine                    |
| **Urgence**     | Immédiate                                 | Traitement en arrière-plan                             |
| **Exemple**     | L'imprimante ne répond plus               | Pourquoi l'imprimante tombe en panne tous les lundis ? |

> **Important** : gérer un problème ne signifie pas résoudre l'incident en cours. Les deux sont traités en parallèle, par des personnes différentes ou à des moments différents.

---

## Les deux modes de la gestion des problèmes

### Mode réactif

Déclenché **après** les incidents. On observe qu'un incident s'est répété ou qu'un incident grave vient de se produire, et on ouvre un problème pour en chercher la cause.

> Exemple : le réseau Wi-Fi a chuté 3 fois en 2 semaines → Thomas ouvre un problème pour investiguer.

### Mode proactif

On cherche les problèmes **avant** qu'ils ne causent des incidents. On analyse les tendances, les logs, les alertes.

> Exemple : Thomas remarque dans GLPI que 60% des tickets concernent les PC du comptoir. Il ouvre un problème préventif avant la prochaine panne.

---

## Les concepts clés

### Erreur connue (Known Error)

Quand on a identifié la cause d'un problème mais qu'on ne peut pas encore la corriger définitivement, on crée une **erreur connue**. Elle documente :

- La cause identifiée
- La solution de contournement disponible

> Exemple : l'imprimante plante à cause d'un pilote défaillant. Le correctif du fabricant est attendu. En attendant, on documente : "redémarrer le service d'impression règle le problème temporairement."

### Solution de contournement (Workaround)

Solution **temporaire** pour réduire l'impact pendant que la cause racine est traitée. Ce n'est pas une solution définitive, mais elle permet de rétablir un service dégradé.

|               | Solution de contournement            | Solution définitive            |
| ------------- | ------------------------------------ | ------------------------------ |
| **Délai**     | Immédiat                             | Variable                       |
| **Fiabilité** | Partielle                            | Totale                         |
| **Exemple**   | Redémarrer l'imprimante manuellement | Remplacer le pilote défaillant |

---

## Le cycle de vie d'un problème

![itil-cycle-probleme.svg](/Ressources/images/itil-cycle-probleme.svg)

> [!TIP] La gestion des problèmes alimente la base de connaissance
> Chaque problème résolu devient une fiche de connaissance. La prochaine fois qu'un technicien voit le même symptôme, il trouve immédiatement la solution. C'est l'un des bénéfices les plus concrets de cette pratique.

---

## La gestion des problèmes dans GLPI

GLPI distingue bien les incidents des problèmes. Un problème peut regrouper plusieurs incidents liés.

### Créer un problème

`Assistance → Problèmes → + Créer`

Les champs sont similaires aux incidents : titre, description, catégorie, impact, urgence, priorité, assignation.

### Lier des incidents à un problème

Dans la fiche du problème, onglet **Éléments liés** → section **Tickets** → ajouter les incidents concernés.

Cela permet de :

- Voir d'un coup d'œil tous les incidents liés à une même cause
- Fermer automatiquement les incidents quand le problème est résolu (selon configuration)
- Produire des statistiques sur les causes récurrentes

### Documenter une erreur connue

Dans la fiche du problème, une fois la cause identifiée, renseigner le champ **Solution** avec le workaround disponible. Le statut passe à **Erreur connue**.

---

---

## Résumé du chapitre

| Concept              | À retenir                                                           |
| -------------------- | ------------------------------------------------------------------- |
| Problème             | Cause (ou cause potentielle) d'un ou plusieurs incidents            |
| Réactif              | On ouvre un problème après une récurrence d'incidents               |
| Proactif             | On anticipe les problèmes avant qu'ils causent des incidents        |
| Erreur connue        | Problème dont la cause est identifiée, avec un workaround documenté |
| Workaround           | Solution temporaire en attendant la correction définitive           |
| Base de connaissance | Les problèmes résolus alimentent la documentation pour les équipes  |

---
