---
title: "16. Statistiques & tableaux de bord"
---

# 16 — Statistiques & tableaux de bord · Cours

> [!TIP] Ressources du chapitre
> - [[16-tp|TP du chapitre]]
> - [[00-INDEX|Sommaire de la formation]]

> [!NOTE] Objectif de cette section
> Exploiter les tickets de Claire et les équipements du Fournil Doré pour lire les statistiques et construire un tableau de bord dans l'entité racine.

![[glpi-16-statistiques.svg]]

## Le tableau de bord

La page d'**Accueil** de GLPI affiche le tableau de bord en temps réel.

`Accueil` (ou `Assistance` → `Tableau de bord`)

Il présente par défaut :
- Compteurs du parc (ordinateurs, imprimantes, logiciels...)
- Tickets en cours, tickets en retard, problèmes ouverts, changements
- Graphique d'évolution des statuts de tickets par mois
- Top des demandeurs et top des catégories

### Les vues du tableau de bord

| Onglet | Contenu |
|--------|---------|
| **Tableau de bord** | Vue par défaut (Central) |
| **Vue personnelle** | Personnalisable par chaque utilisateur |
| **Vue groupe** | Vue partagée pour l'équipe |
| **Vue globale** | Synthèse tous profils |
| **Flux RSS** | Flux RSS du tableau de bord |
| **Tous** | Liste tous les tableaux de bord disponibles |

> [!TIP] Créer un nouveau tableau de bord
> Cliquer sur le **+** à droite des onglets pour créer un tableau de bord supplémentaire.

### Modifier un tableau de bord

Les icônes en haut à droite du tableau de bord permettent :

| Icône | Action |
|-------|--------|
| 🔄 | Basculer l'auto-rafraîchissement |
| 🌙 | Basculer le mode nuit |
| 📋 | Cloner ce tableau de bord |
| 🔗 | Partager ou intégrer ce tableau de bord |
| 🗑️ | Supprimer ce tableau de bord |
| ✏️ | **Changer de mode** (activer/quitter l'édition) |
| ⛶ | Plein écran |

En **mode édition** (après clic sur ✏️) :
- Chaque widget affiche les icônes **Éditer cette carte** et **Supprimer cette carte**
- Les widgets sont déplaçables par glisser-déposer
- Utiliser le bouton **+ Ajouter un widget** qui apparaît dans les zones vides pour ajouter un nouveau widget

### Types de widgets disponibles

| Widget | Affiche |
|--------|---------|
| **Compteur** | Nombre d'éléments (tickets ouverts, équipements...) |
| **Graphique en barres** | Évolution ou comparaison |
| **Graphique circulaire** | Répartition par catégorie, statut... |
| **Graphique en courbes** | Évolution dans le temps |
| **Liste** | Les N derniers tickets, équipements... |
| **Jauge** | Taux de respect des SLA |

---

## Les statistiques

`Assistance` → `Statistiques`

La page affiche un **menu déroulant** unique : **"Sélectionnez les statistiques à visualiser"**.

Les tickets créés aux chapitres 12, 14 et 15 alimentent les rapports. Vérifier la **période** et le contexte **Le Fournil Doré** avant de comparer les chiffres.

Les rapports sont organisés en trois groupes :

### Groupe Tickets

| Rapport | Ce qu'il affiche |
|---------|-----------------|
| **Global** | Courbes : tickets ouverts / résolus / en retard / clos + durée moyenne (clôture, résolution, durée réelle) + enquête de satisfaction |
| **Par ticket** | Tableau de chiffres ventilé par un **Champ** au choix (voir ci-dessous) |
| **Par caractéristiques matérielles** | Répartition selon les attributs des éléments du parc |
| **Par matériel** | Répartition par équipement (quels matériels génèrent le plus de tickets) |

### Groupe Problèmes

Même structure : Global / Par problème / Par caractéristiques matérielles / Par matériel.

### Groupe Changements

Même structure : Global / Par changement / Par caractéristiques matérielles / Par matériel.

---

## Le rapport "Par ticket" en détail

C'est le rapport le plus utilisé en helpdesk : il permet de ventiler les données selon un critère.

`Assistance` → `Statistiques` → **Tickets - Par ticket**

### Le filtre Champ

Le **Champ** détermine l'axe d'analyse. Options disponibles :

| Champ | Analyse |
|-------|---------|
| Demandeur | Qui crée le plus de tickets ? |
| Technicien assigné | Charge de travail par technicien |
| Catégorie | Quelle catégorie génère le plus de tickets ? |
| Lieu | Quel lieu du Fournil Doré a le plus d'incidents ? |
| Priorité | Répartition par niveau de priorité |
| Urgence | Répartition par urgence |
| Impact | Répartition par impact |
| Type | Incident vs Demande |
| Source de la demande | Web, téléphone, e-mail... |
| Groupe | Par groupe demandeur ou technicien |

### Colonnes du tableau de résultat

| Section | Colonnes |
|---------|---------|
| **Nombre** | Ouvert · Résolus · En retard · Clos |
| **Satisfaction** | Ouvertes · Répondues · Moyenne |
| **Durée moyenne** | Prise en compte · Résolution · Clôture · Moyenne |
| **Durée réelle de traitement** | Durée totale |

### Options

- **Voir les graphiques** : case à cocher pour afficher les courbes en plus du tableau
- **Afficher le rapport** : bouton pour lancer le calcul
- **Export** : PDF paysage/portrait, CSV, ODS (.ods), XLSX (.xlsx) — par page ou toutes les pages

> [!TIP] Export des graphiques
> Sur la vue Global, chaque graphique dispose de deux icônes d'export en haut à droite : export en données (CSV/JSON) et export en image.

---

## Indicateurs clés (KPI) à surveiller

| KPI | Signification | Où le trouver |
|-----|--------------|--------------|
| **Tickets ouverts** | Charge de travail en cours | Global → courbe bleue |
| **Tickets en retard** | Non résolus dans les délais SLA | Global → courbe jaune |
| **Durée moyenne de résolution** | Efficacité du support | Global → graphique Durée moyenne |
| **Catégorie la plus fréquente** | Problème récurrent à corriger à la source | Par ticket → Champ : Catégorie |
| **Top demandeurs** | Utilisateurs ayant le plus de problèmes | Par ticket → Champ : Demandeur |
| **Charge par technicien** | Répartition du travail | Par ticket → Champ : Technicien assigné |

---

---
## Liens utiles

- [Statistiques | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/assistance/statistics)

---
