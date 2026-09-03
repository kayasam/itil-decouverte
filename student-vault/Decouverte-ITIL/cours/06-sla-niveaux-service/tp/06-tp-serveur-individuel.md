# 06 — Les SLA et les niveaux de service · TP — serveur individuel

> **Contexte de déploiement** : chaque stagiaire dispose de son propre GLPI, monté pendant les 3 jours de formation GLPI.
> Aucun préfixe nécessaire, les objets du scénario (utilisateurs, imprimante) ont été créés par le stagiaire lui-même.

---

## Atelier — Configurer les SLA du Fournil Doré

:::info
**Contexte** — Vous voulez formaliser vos engagements de service. Après discussion avec le directeur, vous vous accordez sur les délais suivants :

- Tout incident doit être **pris en charge en moins d'1 heure** (TTO)
- Les incidents de **haute priorité** doivent être résolus en **4 heures** (TTR)
- Les incidents de **priorité normale** sont résolus en **24 heures** (TTR)
:::

---

### Partie 1 — Créer le SLM

`Configuration` → `Niveaux de services` → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `SLM Fournil Doré` |
| Calendrier | 24 heures sur 24, 7 jours sur 7 |

Cliquer **+ Ajouter**.

> Le SLM vient d'être créé. Deux onglets apparaissent : **SLAs** et **OLA**. On travaille dans l'onglet SLAs.

---

### Partie 2 — Créer les SLA

**SLA 1 — Prise en charge (TTO)**

Depuis la fiche du SLM → onglet **SLAs** → **Ajouter un nouvel élément**

| Champ | Valeur |
|-------|--------|
| Nom | `TTO - Prise en charge incidents` |
| Type | TTO |
| Durée maximale | `1` Heure |

**SLA 2 — Résolution haute priorité (TTR)**

| Champ | Valeur |
|-------|--------|
| Nom | `TTR - Incidents haute priorité` |
| Type | TTR |
| Durée maximale | `4` Heures |

**SLA 3 — Résolution priorité normale (TTR)**

| Champ | Valeur |
|-------|--------|
| Nom | `TTR - Incidents priorité normale` |
| Type | TTR |
| Durée maximale | `24` Heures |

---

### Partie 3 — Ajouter un niveau d'escalade

Ouvrir le SLA `TTR - Incidents haute priorité` → onglet **Niveaux d'escalade** → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `Alerte -1h avant dépassement` |
| Activé | Oui |
| Exécution | `-1` Heure |

> Ce niveau d'escalade déclenchera une alerte 1 heure avant que le SLA ne soit dépassé. En production, on peut y associer une notification par mail.

---

### Partie 4 — Appliquer le SLA à un ticket

Ouvrez un des tickets du chapitre 03 (par exemple celui de l'imprimante).

Dans la fiche du ticket, section **Niveaux de services** (en bas du panneau droit) :

| Champ | Valeur |
|-------|--------|
| TTO | `TTO - Prise en charge incidents` |
| TTR | `TTR - Incidents haute priorité` |

Sauvegarder le ticket.

> Après enregistrement, GLPI calcule automatiquement les échéances à partir de la date de création du ticket. Si le ticket est déjà résolu, les échéances sont affichées à titre indicatif.

---

### Checklist de fin d'atelier

- [ ] Le SLM est créé
- [ ] Les 3 SLA sont créés (1 TTO, 2 TTR)
- [ ] Le niveau d'escalade est créé sur le SLA haute priorité
- [ ] Un ticket porte bien le TTO et le TTR

---

### Discussion

- Quel est l'intérêt d'un calendrier « heures ouvrées » plutôt que « 24h/7j » pour une boulangerie ouverte de 6h à 20h ?
- Pourquoi créer un SLA TTO séparé du SLA TTR plutôt qu'un seul délai global ?
- Comment vérifier si vos SLA sont respectés sur le mois écoulé ? *(Indice : Assistance → Statistiques)*

---
