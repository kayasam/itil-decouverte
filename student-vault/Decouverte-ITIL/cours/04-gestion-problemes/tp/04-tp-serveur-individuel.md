# 04 — La gestion des problèmes · TP — serveur individuel

> **Contexte de déploiement** : chaque stagiaire dispose de son propre GLPI, monté pendant les 3 jours de formation GLPI.
> Aucun préfixe nécessaire, les objets du scénario (utilisateurs, imprimante) ont été créés par le stagiaire lui-même.

---

## Atelier — Identifier et gérer un problème au Fournil Doré

:::info
**Contexte** — Vous consultez l'historique des tickets dans GLPI. Vous remarquez que **3 incidents** ont été signalés en 3 semaines pour le même équipement : `IMP-NAN-OPENSPACE-01`. Tous viennent de lucas.petit, le vendeur en boutique.
:::

---

### Partie 1 — Créer les incidents manquants dans GLPI

L'incident de la semaine 3 a déjà été créé à l'atelier du chapitre 03 (« imprimante ne répond plus », demandeur lucas.petit, statut Résolu). Il reste à créer les deux incidents antérieurs pour simuler la récurrence.

**Ticket 1 — Semaine 1**

| Champ | Valeur |
|-------|--------|
| Type | Incident |
| Titre | `Impossible d'imprimer les bons de commande` |
| Demandeur | lucas.petit |
| Description | Les bons de commande ne s'impriment plus depuis ce matin, la file d'attente est bloquée |
| Impact / Urgence | Moyen / Élevée → Priorité Haute |
| Statut | **Résolu** — solution : redémarrage du service d'impression |
| Élément associé | `IMP-NAN-OPENSPACE-01` |

**Ticket 2 — Semaine 2**

| Champ | Valeur |
|-------|--------|
| Type | Incident |
| Titre | `Imprimante boutique introuvable sur le réseau` |
| Demandeur | lucas.petit |
| Description | L'imprimante n'apparaît plus dans la liste, impossible d'imprimer |
| Impact / Urgence | Moyen / Élevée → Priorité Haute |
| Statut | **Résolu** — solution : redémarrage de l'imprimante |
| Élément associé | `IMP-NAN-OPENSPACE-01` |

**Vérification** — ouvrez `Parc` → `Imprimantes` → `IMP-NAN-OPENSPACE-01` → onglet **Tickets**.

---

### Partie 2 — Identifier le problème

**Question de réflexion, à débattre en groupe** : à quel moment auriez-vous dû ouvrir un problème ? Après le 1er incident ? Le 2e ? Le 3e ?

Argumentez votre réponse. Qu'est-ce que ça coûte d'ouvrir trop tôt ? Qu'est-ce que ça coûte d'ouvrir trop tard ?

---

### Partie 3 — Créer le problème dans GLPI

`Assistance` → `Problèmes` → **+**

| Champ | Valeur |
|-------|--------|
| Titre | `Pannes récurrentes - IMP-NAN-OPENSPACE-01` |
| Catégorie | Matériel / Impression |
| Impact | Moyen |
| Urgence | Moyenne |
| Demandeur | thomas.martin |
| Description | 3 incidents sur IMP-NAN-OPENSPACE-01 en 3 semaines. Symptômes variés (file bloquée, imprimante absente du réseau, hors ligne). Cause racine inconnue. Investigation en cours. |

Puis liez les 3 incidents au problème :
`Onglet Éléments liés` → `Tickets` → ajouter les 3 incidents

Liez également l'équipement :
`Onglet Éléments liés` → `Imprimantes` → `IMP-NAN-OPENSPACE-01`

---

### Partie 4 — Documenter l'erreur connue

Après investigation, vous découvrez que le pilote d'impression se corrompt à chaque mise à jour Windows automatique. Le fabricant Brother a confirmé le bug — un pilote stable sera disponible dans 2 semaines.

Dans la fiche du problème, renseignez :

- **Statut** : Erreur connue
- **Solution (workaround)** : Réinstaller manuellement le pilote Brother MFC-L8900CDW après chaque mise à jour Windows (durée : 15 min). Procédure documentée en base de connaissance.
- **Solution définitive** : Désactiver les mises à jour automatiques du pilote via GPO + déployer le pilote stable v3.2 dès disponibilité (J+14)

---

### Checklist de fin d'atelier

- [ ] Les 2 incidents antérieurs sont créés au statut Résolu
- [ ] Les 3 incidents sont liés à `IMP-NAN-OPENSPACE-01`
- [ ] Le problème est créé
- [ ] Les 3 incidents sont liés au problème
- [ ] Le problème est au statut **Erreur connue** avec workaround et solution définitive

---

### Discussion

- Quelle est la différence entre fermer le dernier incident (semaine 3) et fermer le problème ?
- Si vous n'aviez pas créé de problème, que se passerait-il dans 2 semaines ?
- Votre workaround prend 15 minutes et doit être rejoué après chaque mise à jour Windows. Combien de temps avant que ça coûte plus cher que la solution définitive ?

---
