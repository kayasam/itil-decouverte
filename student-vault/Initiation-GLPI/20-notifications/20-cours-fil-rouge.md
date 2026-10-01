---
title: "20. Notifications par mail — fil rouge"
---

# 20 — Claire reçoit une notification

> [!NOTE] Objectif
> Envoyer depuis GLPI une notification de ticket à **Claire Rousseau** et la lire dans sa boîte smtp4dev. Tous les objets GLPI de l'exercice restent dans **Le Fournil Doré**.

> [!TIP] Voir le trajet
> Ouvrir [le schéma interactif](schema-notifications-interactif.html) dans un navigateur. Chaque bloc montre la tâche à réaliser, une capture lorsqu'elle existe, puis le trajet SMTP jusqu'à la boîte de Claire.

## Les quatre éléments

![[glpi-20-notification.svg]]

1. **SMTP** indique à GLPI où envoyer les messages : smtp4dev sur Windows `192.168.3.254:25`.
2. **Modèle de notification** fournit le sujet et le corps, avec des balises comme `##ticket.title##`.
3. **Notification New Ticket** associe l'événement « nouveau ticket » au modèle et au **demandeur**.
4. **queuednotification** expédie les messages préparés dans la file d'attente. La boîte **Claire Rousseau** de smtp4dev les affiche.

Le collecteur du chapitre 19 effectue le trajet inverse : il **lit** la boîte Support en IMAP `143` et crée un ticket. Une notification **part** de GLPI en SMTP `25`.

## Méthode 1 — Interface graphique

### 1. Préparer la boîte de Claire

Dans smtp4dev sur Windows, ouvrir **Settings → Mailboxes → New Mailbox**. Nommer la boîte **Claire Rousseau** et renseigner **Recipients = `claire@fournil-dore.fr`**. La boîte **Support** du collecteur reste distincte.

### 2. Configurer l'envoi dans GLPI

Se connecter avec votre compte Super-Admin, contexte **Le Fournil Doré** sans « Arborescence ». Dans **Configuration → Notifications**, activer les notifications et le suivi par courriel. Dans **Configuration des notifications par email**, choisir :

| Champ | Valeur du lab |
|---|---|
| Méthode d'envoi | SMTP |
| Hôte et port | `192.168.3.254:25` |
| Authentification SMTP | Aucune, comme dans smtp4dev |
| Expéditeur | `glpi@fournil-dore.fr` |
| Adresse de réponse | `support@fournil-dore.fr` |
| Administrateur | `admin@fournil-dore.fr` |

Enregistrer puis utiliser **Envoyer un mail de test à l'administrateur**. Dans smtp4dev, le message test destiné à `admin@fournil-dore.fr` peut être visible dans la boîte par défaut ou dans une boîte dédiée **Administrateur** si vous la créez.

### 3. Contrôler le modèle et les destinataires

Dans **Configuration → Notifications → Modèles de notifications**, ouvrir **Tickets**. La traduction par défaut contient le sujet et le corps ; `##ticket.title##` sera remplacé par le vrai titre du ticket. Garder le modèle fourni pour ce premier essai.

Dans **Configuration → Notifications → Notifications**, ouvrir **New Ticket**. Vérifier **Actif = Oui**, le modèle **Tickets** dans **Gabarits**, puis **Demandeur** dans **Destinataires**. ![[glpi11-20-destinataires.png]]

*Le demandeur figure parmi les destinataires de New Ticket.*

Vérifier que la fiche de Claire contient `claire@fournil-dore.fr`.

### 4. Déclencher et suivre l'envoi

Avec Claire, créer un **nouveau** ticket `Test notification pour Claire` dans **Le Fournil Doré**. Revenir sur votre compte Super-Admin et consulter **Administration → File d'attente des notifications**. Dans **Configuration → Actions automatiques**, ouvrir **queuednotification**, choisir **CLI**, vérifier son état programmé et une fréquence d'une minute. Le planificateur de l'image Docker du chapitre 03 réveille les actions automatiquement.

![[smtp4dev-claire-mail-ouvert-glpi11.png]]

*Notification réellement reçue par Claire pour le ticket 5 du lab.*

Dans smtp4dev, choisir la boîte **Claire Rousseau** et ouvrir le message. Vérifier **À : `claire@fournil-dore.fr`**, le numéro et le titre du ticket, puis le lien vers GLPI. Aucun mail réel n'est envoyé sur Internet.

## Méthode 2 — CLI GLPI

La CLI GLPI 11 du lab ne propose pas de commande pour créer un modèle ou une notification. Après la configuration graphique, `config:set` permet de modifier certains paramètres simples, mais les destinataires et traductions se règlent dans l'interface. La commande `task:unlock` sert seulement à débloquer une action automatique verrouillée ; elle ne remplace pas le planificateur.

## En cas d'absence de mail

Contrôler dans cet ordre : ticket créé dans la racine, adresse de Claire, notification **New Ticket** active avec **Demandeur**, file d'attente, exécution de **queuednotification**, puis connexion SMTP à `192.168.3.254:25`. Le schéma interactif permet de tester visuellement l'effet de chaque interruption.

Source : [Notifications — documentation GLPI](https://help.glpi-project.org/documentation/modules/configuration/notifications).
