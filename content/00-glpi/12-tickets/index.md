---
title: "12. Premier pas avec les tickets"
---

# 12 — Premier pas avec les tickets · Cours

> [!TIP] Ressources du chapitre
>
> - [TP du chapitre](/00-glpi/12-tickets/tp)
> - [Sommaire de la formation](/00-glpi/)

> [!NOTE] Objectif de cette section
> Comprendre le cycle de vie d'un ticket dans GLPI. Claire crée les demandes dans la racine ; votre compte Super-Admin les traite.

---

## Deux interfaces, deux rôles

| Interface      | Qui ?                                    | Ce qu'il peut faire                                   |
| -------------- | ---------------------------------------- | ----------------------------------------------------- |
| **Simplifiée** | Claire (`Utilisateur Fournil`)           | Créer un ticket, suivre ses tickets, consulter la FAQ |
| **Standard**   | Votre compte Super-Admin `admin.fournil` | Traiter les tickets et gérer le parc                  |

---

## Le cycle de vie d'un ticket

![glpi-12-cycle-ticket.svg](/00-glpi/images/glpi-12-cycle-ticket.svg)

| Statut                  | Signification                                                         |
| ----------------------- | --------------------------------------------------------------------- |
| **Nouveau**             | Ticket créé, personne ne l'a pris en charge                           |
| **En cours (Attribué)** | Un technicien est assigné, traitement en cours                        |
| **En cours (Planifié)** | Une tâche planifiée est associée                                      |
| **En attente**          | Mis en pause (attente fournisseur, retour utilisateur...)             |
| **Résolu**              | Le technicien a fourni une solution                                   |
| **Clos**                | L'utilisateur a validé ou le délai de clôture automatique est dépassé |

> [!TIP] Résolu ≠ Clos
> Un ticket **Résolu** attend la validation de l'utilisateur. S'il ne répond pas, GLPI le clôture automatiquement après un délai configurable. Seul l'utilisateur (ou un admin) peut clore manuellement.

---

## Créer un ticket — interface simplifiée

L'utilisateur se connecte et arrive sur le **Catalogue de services**. Il doit d'abord choisir le type de sa demande en cliquant sur l'une des deux tuiles :

| Tuile                    | Type créé | Quand l'utiliser                     |
| ------------------------ | --------- | ------------------------------------ |
| **Signaler un incident** | Incident  | Quelque chose ne fonctionne plus     |
| **Demander un service**  | Demande   | Je voudrais quelque chose de nouveau |

> [!NOTE] Le type est choisi avant le formulaire
> Contrairement à l'interface technicien, l'utilisateur self-service ne voit pas de champ "Type" dans le formulaire — il a déjà fait ce choix en cliquant sur la tuile. C'est plus simple et évite les erreurs de classification.

Une fois la tuile choisie, le formulaire s'affiche :

| Champ                          | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| **Urgence**                    | Niveau d'urgence ressenti par l'utilisateur              |
| **Catégorie**                  | Classification de la demande (liste des catégories ITIL) |
| **Matériels de l'utilisateur** | Équipement concerné                                      |
| **Lieu**                       | Emplacement de l'incident                                |
| **Titre**                      | Description courte                                       |
| **Description**                | Détail du problème ou de la demande                      |

---

## Traiter un ticket — interface technicien

`Assistance` → `Tickets`

Votre compte Super-Admin traite les tickets créés par Claire. Garder le contexte **Le Fournil Doré**, sans « Arborescence ».

### Prendre en charge

Ouvrir le ticket → section **Acteurs** → champ **Technicien** → choisir `admin.fournil` si ce compte est proposé, ou laisser le ticket sans technicien nommé et consigner le traitement avec le compte Super-Admin.
Le statut passe automatiquement à **En cours (Attribué)**.

### Ajouter un suivi

Un **suivi** est une communication visible par le demandeur.

`Onglet Suivi & tâches` → **Ajouter un suivi**

> Exemple : _"Diagnostic en cours, je reviens vers vous d'ici 1h."_

### Ajouter une tâche

Une **tâche** est une action interne du technicien — non visible par défaut par l'utilisateur.

`Onglet Suivi & tâches` → **Ajouter une tâche**

| Champ              | Description                                 |
| ------------------ | ------------------------------------------- |
| Catégorie de tâche | Type d'action (Diagnostic, Intervention...) |
| Description        | Ce qui a été fait                           |
| Durée              | Temps passé                                 |
| Statut             | À faire / En cours / Terminée               |

### Lier un équipement

`Onglet Éléments` → **Ajouter un élément** → choisir le type et la machine concernée.

### Résoudre

`Onglet Solution` → renseigner le type de solution et la description → **Sauvegarder**.
Le ticket passe en statut **Résolu**.

---

---

## Liens utiles

- [Gérer les tickets | GLPI | Help Center GLPI](https://help.glpi-project.org/documentation/fr/modules/assistance/tickets/ticketmanagement)
- [Documentation GLPI — Helpdesk](https://glpi-user-documentation.readthedocs.io/fr/latest/modules/assistance/)

---
