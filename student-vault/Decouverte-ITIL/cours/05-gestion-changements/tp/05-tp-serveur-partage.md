# 05 — La gestion des changements · TP — serveur mutualisé

> **Contexte de déploiement** : un seul serveur GLPI pour tout le groupe, chaque stagiaire a un compte nominatif.
> Chaque objet créé doit être préfixé par le prénom du stagiaire.

---

## Atelier — Créer un changement au Fournil Doré

:::info
**Contexte** — Suite à l'investigation du chapitre 04, vous avez identifié que le pilote d'impression se corrompt à chaque mise à jour Windows automatique. La solution définitive est de désactiver ces mises à jour via une stratégie de groupe (GPO) sur tous les postes de la boutique. Ce changement touche plusieurs postes : il doit être documenté et approuvé avant mise en œuvre.
:::

:::warning
Préfixez le titre de votre changement par votre prénom.
:::

---

### Partie 1 — Classer le changement

Avant de créer quoi que ce soit dans GLPI, répondez à ces questions :

| Question | Votre réponse |
|----------|---------------|
| Ce changement est-il **standard, normal ou d'urgence** ? Pourquoi ? |  |
| Qui doit l'approuver au Fournil Doré ? *(l'entreprise n'a pas de CAB formel — le technicien dépend directement du directeur)* |  |
| Quel est le **risque** si le changement échoue ? |  |
| Quel est le **plan de repli** possible ? |  |

> Mise en commun avant de passer à la Partie 2.

---

### Partie 2 — Créer le changement dans GLPI

Connectez-vous avec **votre compte**.

`Assistance` → `Changements` → **+ Ajouter**

**En-tête :**

| Champ | Valeur |
|-------|--------|
| Titre | `[VotrePrénom] Désactivation MAJ automatique pilote Brother MFC-L8900CDW` |
| Description | Déploiement d'une GPO pour désactiver les mises à jour automatiques du pilote d'impression Brother sur les postes de la boutique. Correctif suite aux pannes récurrentes de IMP-NAN-OPENSPACE-01. |

**Informations :**

| Champ | Valeur |
|-------|--------|
| Catégorie | Logiciel / Installation |
| Statut | Nouveau |
| Urgence | Faible |
| Impact | Moyen |
| Lieu | Nantes > Open space |

**Acteurs :**

| Champ | Valeur |
|-------|--------|
| Demandeur | Votre compte |
| Attribué à | Votre compte |

**Éléments :** ajouter `IMP-NAN-OPENSPACE-01`

---

### Partie 3 — Compléter l'analyse et les plans

Toujours dans le même formulaire, déroulez les sections **Analyse** et **Plans** :

**Analyse — Impacts :**
```
Postes concernés : tous les PC de la boutique (Open space Nantes).
Service impacté : impression boutique.
Durée d'intervention estimée : 30 minutes.
Fenêtre de maintenance proposée : lundi matin avant ouverture (7h-8h30).
```

**Plans — Plan de déploiement :**
```
1. Se connecter à la console de gestion des stratégies de groupe
2. Créer une GPO "Pilote-Impression-Boutique"
3. Désactiver "Permettre la mise à jour automatique des pilotes"
4. Appliquer la GPO sur l'OU Boutique
5. Forcer l'application : gpupdate /force sur les postes concernés
6. Vérifier que l'imprimante reste accessible depuis chaque poste
```

**Plans — Plan de repli :**
```
Si la GPO provoque une inaccessibilité de l'imprimante :
1. Supprimer ou désactiver la GPO "Pilote-Impression-Boutique"
2. Forcer gpupdate /force
3. Réinstaller manuellement le pilote Brother MFC-L8900CDW (package v3.1)
4. Vérifier l'impression depuis chaque poste
Durée de repli estimée : 20 minutes
```

**Plans — Liste de vérifications :**
```
☐ Imprimante visible depuis le PC du comptoir
☐ Impression test réussie depuis chaque poste
☐ Aucune mise à jour automatique du pilote au prochain cycle Windows Update
```

Cliquer sur **+ Ajouter**.

---

### Partie 4 — Lier au problème

Une fois le changement créé, ouvrez-le → section **Liaisons** → **+ Ajouter** → rechercher et sélectionner **votre** problème `[VotrePrénom] Pannes récurrentes - IMP-NAN-OPENSPACE-01` créé au chapitre 04.

---

### Partie 5 — Faire évoluer le statut

Simulez l'approbation et le déploiement en faisant évoluer le statut du changement :

| Statut | Signification dans notre contexte |
|--------|----------------------------------|
| **Nouveau** | Changement créé, en attente d'examen |
| **Évaluation** | Vous analysez l'impact et préparez le dossier |
| **Validation** | Dossier soumis au directeur pour approbation |
| **Accepté** | Directeur a validé, créneau lundi 7h confirmé |
| **En test** | GPO déployée sur un poste pilote, vérification en cours |
| **Appliqué** | GPO appliquée sur tous les postes de la boutique |
| **Revue** | Vous vérifiez que tout fonctionne correctement |
| **Clos** | Changement validé, dossier fermé |

Faites passer le changement jusqu'au statut **Clos** en suivant le cycle complet.

---

### Checklist de fin d'atelier

- [ ] Mon changement est créé et préfixé de mon prénom
- [ ] Les sections Analyse et Plans sont remplies (déploiement, repli, vérifications)
- [ ] Le changement est lié à **mon** problème du chapitre 04
- [ ] Le changement est passé par tous les statuts jusqu'à **Clos**

---

### Discussion

- Pourquoi un simple redémarrage du pilote (le workaround du chapitre 04) n'est-il pas un changement, alors que la GPO en est un ?
- Que se passe-t-il si vous déployez la GPO sans plan de repli et que l'impression tombe sur tous les postes un samedi matin ?
- Dans une grande entreprise, qui siège au CAB ? Quel est son rôle exact ?

---
