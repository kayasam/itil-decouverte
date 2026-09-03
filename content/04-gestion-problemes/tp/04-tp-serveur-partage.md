---
title: "04 tp serveur partage"
aliases:
  - "/tp/04-tp-serveur-partage"
---

# 04 — La gestion des problèmes · TP — serveur mutualisé

> [!TIP] Ressource du TP
>
> - <a href="https://kayasam.github.io/itil-decouverte/telechargements/tp/04-tp-serveur-partage.md" download>Télécharger ce TP en Markdown</a>

> **Contexte de déploiement** : un seul serveur GLPI pour tout le groupe, chaque stagiaire a un compte nominatif.
> Chaque objet créé doit être préfixé par le prénom du stagiaire.

---

## Atelier — Identifier et gérer un problème au Fournil Doré

:::info
**Contexte** — Vous consultez l'historique des tickets dans GLPI. Vous remarquez que **3 incidents** ont été signalés en 3 semaines pour le même équipement : `IMP-NAN-OPENSPACE-01`. Tous viennent de lucas.petit, le vendeur en boutique.
:::

:::warning
Comme toujours : préfixez de votre prénom **tout** ce que vous créez — les deux tickets **et** le problème.
:::

---

### Partie 1 — Créer les incidents manquants dans GLPI

L'incident de la semaine 3 a déjà été créé à l'atelier du chapitre 03 (« imprimante ne répond plus », demandeur lucas.petit, statut Résolu). Il reste à créer les deux incidents antérieurs pour simuler la récurrence.

**Ticket 1 — Semaine 1**

| Champ            | Valeur                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------- |
| Type             | Incident                                                                                |
| Titre            | `[VotrePrénom] Impossible d'imprimer les bons de commande`                              |
| Demandeur        | lucas.petit                                                                             |
| Description      | Les bons de commande ne s'impriment plus depuis ce matin, la file d'attente est bloquée |
| Impact / Urgence | Moyen / Élevée → Priorité Haute                                                         |
| Statut           | **Résolu** — solution : redémarrage du service d'impression                             |
| Élément associé  | `IMP-NAN-OPENSPACE-01`                                                                  |

**Ticket 2 — Semaine 2**

| Champ            | Valeur                                                            |
| ---------------- | ----------------------------------------------------------------- |
| Type             | Incident                                                          |
| Titre            | `[VotrePrénom] Imprimante boutique introuvable sur le réseau`     |
| Demandeur        | lucas.petit                                                       |
| Description      | L'imprimante n'apparaît plus dans la liste, impossible d'imprimer |
| Impact / Urgence | Moyen / Élevée → Priorité Haute                                   |
| Statut           | **Résolu** — solution : redémarrage de l'imprimante               |
| Élément associé  | `IMP-NAN-OPENSPACE-01`                                            |

**Vérification** — ouvrez `Parc` → `Imprimantes` → `IMP-NAN-OPENSPACE-01` → onglet **Tickets**.

:::info
Vous y verrez **aussi les tickets de vos collègues**, puisque l'imprimante est partagée. C'est normal, et c'est même réaliste : en entreprise, un équipement accumule les tickets de toute l'équipe. Repérez vos 3 incidents grâce à votre préfixe.
:::

---

### Partie 2 — Identifier le problème

**Question de réflexion, à débattre en groupe** : à quel moment auriez-vous dû ouvrir un problème ? Après le 1er incident ? Le 2e ? Le 3e ?

Argumentez votre réponse. Qu'est-ce que ça coûte d'ouvrir trop tôt ? Qu'est-ce que ça coûte d'ouvrir trop tard ?

---

### Partie 3 — Créer le problème dans GLPI

`Assistance` → `Problèmes` → **+**

| Champ       | Valeur                                                                                                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Titre       | `[VotrePrénom] Pannes récurrentes - IMP-NAN-OPENSPACE-01`                                                                                                                     |
| Catégorie   | Matériel / Impression                                                                                                                                                         |
| Impact      | Moyen                                                                                                                                                                         |
| Urgence     | Moyenne                                                                                                                                                                       |
| Demandeur   | Votre compte                                                                                                                                                                  |
| Description | 3 incidents sur IMP-NAN-OPENSPACE-01 en 3 semaines. Symptômes variés (file bloquée, imprimante absente du réseau, hors ligne). Cause racine inconnue. Investigation en cours. |

Puis liez **vos** 3 incidents au problème :
`Onglet Éléments liés` → `Tickets` → ajouter vos 3 incidents (attention à ne pas prendre ceux d'un collègue)

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

- [ ] Mes 2 incidents antérieurs sont créés, préfixés, au statut Résolu
- [ ] Mes 3 incidents sont liés à `IMP-NAN-OPENSPACE-01`
- [ ] Mon problème est créé et préfixé de mon prénom
- [ ] Mes 3 incidents (et uniquement les miens) sont liés au problème
- [ ] Le problème est au statut **Erreur connue** avec workaround et solution définitive

---

### Discussion

- Quelle est la différence entre fermer le dernier incident (semaine 3) et fermer le problème ?
- Si vous n'aviez pas créé de problème, que se passerait-il dans 2 semaines ?
- Votre workaround prend 15 minutes et doit être rejoué après chaque mise à jour Windows. Combien de temps avant que ça coûte plus cher que la solution définitive ?

---
