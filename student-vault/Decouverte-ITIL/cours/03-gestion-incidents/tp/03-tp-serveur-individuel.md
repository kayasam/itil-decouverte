---
title: "TP (serveur individuel) : La gestion des incidents"
---

# 03 — La gestion des incidents · TP — serveur individuel

> **Contexte de déploiement** : chaque stagiaire dispose de son propre GLPI, monté pendant les 3 jours de formation GLPI.
> Aucun préfixe nécessaire, les objets du scénario (utilisateurs, imprimante) ont été créés par le stagiaire lui-même.

---

## Atelier — Créer et traiter des incidents dans GLPI

> [!INFO] Contexte
> Vous êtes le technicien IT du Fournil Doré. Ce matin, quatre collègues vous signalent des soucis. Votre travail : les analyser, les prioriser, puis les traiter dans GLPI.
>
> Vous vous connectez avec le compte **thomas.martin**, et vous vous attribuez les tickets à vous-même.

---

### Partie 1 — Analyser et prioriser (sans GLPI)

Avant de toucher à l'outil, on réfléchit. C'est tout l'esprit d'ITIL : on qualifie avant d'agir.

**Les 5 signalements reçus ce matin :**

| # | Message reçu | De |
|---|-------------|-----|
| 1 | « Bonjour, IMP-NAN-OPENSPACE-01 ne répond plus depuis ce matin, impossible d'imprimer les bons de commande » | lucas.petit |
| 2 | « Je n'arrive plus à me connecter à GLPI depuis ce matin » | marie.dupont |
| 3 | « Est-ce qu'on peut me commander un deuxième écran ? » | claire.rousseau |
| 4 | « La caisse refuse les paiements CB depuis 30 minutes, j'ai une file d'attente ! » | lucas.petit |
| 5 | « Mon accès au dossier partagé Comptabilité ne fonctionne plus » | claire.rousseau |

**Les trois questions à se poser :**

**1. Incident ou demande de service ?**
- **Incident** = quelque chose est cassé, un service est interrompu ou dégradé. Ce n'était pas prévu.
- **Demande de service** = une requête normale et planifiable. Rien n'est cassé.

**2. Quel est l'impact ?** Combien de personnes sont touchées, et quelle conséquence pour l'entreprise ?

| Impact | Signification |
|--------|---------------|
| Élevé | L'activité est bloquée, ou beaucoup d'utilisateurs touchés |
| Moyen | Un service important est dégradé, contournement possible |
| Faible | Gêne limitée, une seule personne, pas de perte d'activité |

**3. Quelle est l'urgence ?** À quelle vitesse faut-il intervenir ?

| Urgence | Signification |
|---------|---------------|
| Élevée | Il faut agir tout de suite, ça s'aggrave ou du monde attend |
| Moyenne | Il faut traiter dans la journée |
| Faible | Peut attendre, pas de conséquence immédiate |

La priorité découle des deux : **Priorité = Impact × Urgence**. C'est GLPI qui la calcule.

**À vous — complétez le tableau :**

| # | Incident ou demande ? | Impact | Urgence | Priorité | Ordre de traitement |
|---|----------------------|--------|---------|---------|---------------------|
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |
| 4 |  |  |  |  |  |
| 5 |  |  |  |  |  |

> Mise en commun avant de passer à la Partie 2.

---

### Partie 2 — Créer les tickets dans GLPI

Connectez-vous à GLPI avec le compte **thomas.martin**.

`Assistance` → `Tickets` → bouton **+**

Pour **chaque incident** identifié en Partie 1 (pas les demandes de service, on les traite en Partie 4) :

| Champ | Ce que vous saisissez |
|-------|----------------------|
| Type | **Incident** |
| Catégorie | La plus adaptée : Matériel > Imprimante, Réseau, Logiciel > Dysfonctionnement, Accès & Comptes… |
| Titre | `+ un titre court et clair |
| Description | Reprenez le message reçu |
| Demandeur | L'utilisateur qui a signalé |
| Impact et Urgence | Selon votre analyse de la Partie 1 |
| Attribué à | thomas.martin |

**Le cas de l'imprimante** — pour le ticket concernant `IMP-NAN-OPENSPACE-01`, reliez le ticket à l'équipement :
`Ouvrir le ticket` → onglet **Éléments** → ajouter `IMP-NAN-OPENSPACE-01`

C'est ce lien qui permettra, au chapitre suivant, de voir que cette imprimante accumule les pannes.

**Vérification** — regardez la priorité calculée par GLPI. Correspond-elle à l'ordre que vous aviez défini en Partie 1 ? Si non : est-ce votre analyse qui était fausse, ou vos valeurs d'Impact et d'Urgence qui sont mal saisies ?

---

### Partie 3 — Traiter et résoudre les tickets

Traitez vos tickets **dans l'ordre de priorité**, en commençant par le plus critique.

Pour chaque ticket, quatre gestes :

**1. Prendre en charge** — passez le statut à **En cours (Assigné)**. En production, c'est ce geste qui arrête le chronomètre du délai de prise en charge.

**2. Tracer** — ajoutez un **Suivi** décrivant l'action menée. Le suivi, c'est la mémoire du ticket : un collègue doit pouvoir reprendre le dossier sans vous appeler.

**3. Renseigner la solution** :

| Ticket | Solution à saisir |
|--------|------------------|
| CB refusées (lucas.petit) | Redémarrage du terminal de paiement — service rétabli |
| GLPI inaccessible (marie.dupont) | Vider le cache navigateur + reconfigurer l'URL — accès rétabli |
| Dossier partagé (claire.rousseau) | Droits d'accès expirés — réattribution du groupe Comptabilité |
| Imprimante hors ligne (lucas.petit) | Redémarrage du service d'impression — IMP-NAN-OPENSPACE-01 rétablie |

**4. Clôturer** — passez le statut à **Résolu**.

> [!INFO]
> Notez la différence entre **Résolu** et **Clos**. Résolu = le technicien pense avoir réglé le problème. Clos = l'utilisateur a confirmé. Ce n'est pas à vous de décider que le service est rétabli.

---

### Partie 4 — La demande de service

Le signalement n°3 (le deuxième écran de claire.rousseau) n'est pas un incident : rien n'est cassé.

| Champ | Valeur |
|-------|--------|
| Type | **Demande** |
| Titre | `Demande d'un deuxième écran` |
| Demandeur | claire.rousseau |
| Urgence | Faible |
| Description | Ajouter la note « À planifier selon budget disponible » |

Laissez-le au statut **Nouveau** : une demande se planifie, elle ne se traite pas dans l'urgence.

---

### Checklist de fin d'atelier

- [ ] 4 tickets de type **Incident** créés
- [ ] 1 ticket de type **Demande** créé pour le deuxième écran
- [ ] Le ticket imprimante est bien lié à `IMP-NAN-OPENSPACE-01` (onglet Éléments)
- [ ] Chaque incident a un suivi **et** une solution renseignée
- [ ] Les 4 incidents sont au statut **Résolu**

---

### Pour aller plus loin

- Les signalements n°1 (imprimante) et n°4 (caisse) viennent de la même personne. Pourquoi n'ont-ils pas la même priorité ?
- Que se passe-t-il si un technicien résout un ticket sans jamais renseigner de solution ?
- Le n°5 (dossier partagé) : et si trois autres personnes signalaient la même chose dans l'heure, est-ce que ça changerait votre traitement ?

---
