# 08 — L'amélioration continue · TP — serveur mutualisé

> **Contexte de déploiement** : un seul serveur GLPI pour tout le groupe, chaque stagiaire a un compte nominatif.
> Chaque objet créé doit être préfixé par le prénom du stagiaire.

---

## Atelier — Analyse et plan d'amélioration du Fournil Doré

---

### Partie 1 — Explorer les statistiques GLPI

`Assistance` → `Statistiques`

Dans le menu déroulant **« Sélectionnez les statistiques à visualiser »**, choisir successivement :

**Tickets → Global**

Observer et noter :

| Question | Votre relevé |
|----------|--------------|
| Combien de tickets ont été ouverts depuis le début de la formation ? |  |
| Combien sont résolus ? En cours ? |  |
| Quelle est la répartition par type (Incident / Demande) ? |  |

**Tickets → Par caractéristiques matérielles**

Choisir la vue **Par catégorie** et observer quelles catégories concentrent le plus de tickets.

:::info
Les statistiques portent sur **l'ensemble des tickets du groupe**, pas seulement les vôtres. C'est une bonne nouvelle : à quatre, vous avez produit assez de volume pour que les graphiques veuillent dire quelque chose. Un service IT réel raisonne exactement comme ça — sur l'activité de toute l'équipe, jamais sur celle d'un seul technicien.
:::

---

### Partie 2 — Analyser et identifier un axe d'amélioration

À partir de ce que vous avez fait dans les chapitres précédents, remplissez le tableau des 7 étapes :

| Étape du modèle | Votre réponse pour Le Fournil Doré |
|-----------------|-----------------------------------|
| **Quelle est la vision ?** |  |
| **Où en sommes-nous ?** |  |
| **Où voulons-nous aller ?** |  |
| **Comment y arriver ?** |  |
| **Agir** |  |
| **Sommes-nous arrivés ?** |  |
| **Comment maintenir l'élan ?** |  |

> Mise en commun : chacun présente une étape.

---

### Partie 3 — Créer une action d'amélioration dans GLPI

Vous voulez tracer formellement une action d'amélioration.

`Assistance` → `Créer un ticket`

| Champ | Valeur |
|-------|--------|
| Type | Demande |
| Catégorie | *(créer « Amélioration IT » si elle n'existe pas)* |
| Titre | `[VotrePrénom] Revue mensuelle des SLA et incidents — Fournil Doré` |
| Description | Planifier une revue mensuelle des statistiques GLPI pour vérifier le respect des SLA et identifier les nouvelles actions d'amélioration. |
| Priorité | Basse |
| Attribué à | Votre compte |

Sauvegarder le ticket.

> Ce ticket représente l'entrée dans le **registre d'amélioration**. En production, on le planifierait en récurrent (`Assistance → Tickets récurrents`).

---

### Checklist de fin d'atelier

- [ ] J'ai relevé les statistiques globales du groupe
- [ ] J'ai rempli les 7 étapes du modèle d'amélioration continue
- [ ] Mon ticket d'action d'amélioration est créé et préfixé

---

### Bilan de la formation

À travers les 8 chapitres, vous avez suivi une progression cohérente au Fournil Doré :

| Chapitre | Ce que vous avez fait |
|----------|----------------------|
| 01 | Compris l'histoire et la valeur d'ITIL |
| 02 | Cartographié le SVS, les 4 dimensions et la chaîne de valeur |
| 03 | Géré les incidents de l'imprimante dans GLPI |
| 04 | Identifié un problème récurrent et documenté une erreur connue |
| 05 | Planifié et déployé un changement pour corriger la cause racine |
| 06 | Configuré des SLA pour formaliser les engagements de service |
| 07 | Cartographié les dépendances dans la CMDB |
| 08 | Mesuré les résultats et planifié l'amélioration continue |

**C'est exactement la boucle ITIL 4 en action** : un incident remonte, il révèle un problème, le problème appelle un changement, le changement est mesuré, la mesure alimente l'amélioration suivante.

---

### Discussion finale

- Sur les 8 pratiques vues, laquelle vous semble la plus facile à mettre en place lundi matin dans votre contexte ? La plus difficile ?
- ITIL est un référentiel, pas une norme : qu'est-ce que ça change concrètement pour une PME comme Le Fournil Doré ?

---
