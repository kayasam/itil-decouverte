---
title: "20-1. Collecter les mails automatiquement avec mailgate"
---

# 20-1 — Collecter les mails automatiquement

> [!NOTE] Objectif
> Au chapitre 19, nous avons cliqué sur **Récupérer les mails maintenant**. Ici, GLPI va récupérer tout seul les nouveaux mails de la boîte Support et créer les tickets.

> [!TIP] Avant de commencer
>
> - Le collecteur **Support Fournil Doré — smtp4dev** fonctionne déjà.
> - Le terminal qui exécute `Rnwood.Smtp4dev` reste ouvert sur Windows.
> - Le serveur GLPI est accessible avec `ssh glpi`.

---

## 1. Comprendre les deux rythmes

Le conteneur GLPI du labo lance son planificateur **chaque minute**. Le planificateur regarde alors quelles actions sont arrivées à échéance. Nous allons régler **mailgate** sur **10 minutes**.

```text
Chaque minute : le planificateur regarde les actions GLPI
Toutes les 10 minutes : mailgate lit la boîte Support
Si un nouveau mail est accepté : GLPI crée un ticket
```

> [!IMPORTANT] Mode GLPI et mode CLI
>
> - En mode **GLPI**, les actions dépendent de l'activité dans l'interface web.
> - En mode **CLI**, le planificateur lance les actions même si personne ne navigue dans GLPI.
>
> Pour la collecte automatique, choisir **CLI**.

---

## 2. Régler mailgate dans GLPI

Ouvrir **Configuration → Actions automatiques**, chercher **mailgate**, puis ouvrir cette action.

Renseigner :

| Champ                 | Valeur         |
| --------------------- | -------------- |
| Statut                | **Programmée** |
| Mode d'exécution      | **CLI**        |
| Fréquence d'exécution | **10 minutes** |

Cliquer sur **Sauvegarder**.

![glpi-20-1-mailgate-cli-10-min.png](/00-glpi/images/glpi-20-1-mailgate-cli-10-min.png)

> [!NOTE] Que signifie « 10 minutes » ?
> C'est l'intervalle entre deux exécutions de **mailgate**, pas la fréquence du planificateur Docker. Un mail peut donc attendre quelques minutes avant de devenir un ticket.

---

## 3. Vérifier le planificateur du conteneur

Sur le poste Windows, ouvrir un terminal et se connecter au serveur :

```powershell
ssh glpi
```

Sur le serveur Linux, afficher les dernières traces du conteneur :

```bash
cd ~/glpi-lab
docker compose logs --since 5m glpi | grep 'GLPI Cron'
```

Des lignes **`[GLPI Cron] Next run in 60s`** indiquent que le planificateur tourne. Le nom du conteneur dépend du dossier Compose ; la commande ci-dessus utilise son **nom de service** `glpi`.

> [!TIP] Pas de deuxième cron à installer dans ce labo
> L'image Docker GLPI utilisée ici lance déjà les actions automatiques toutes les minutes. Ajouter un second cron sur Debian ferait lancer les mêmes actions deux fois.

---

## 4. Tester sans cliquer sur « Exécuter »

Sur Windows, dans **un autre** PowerShell que celui de smtp4dev, envoyer un nouveau mail :

```powershell
Send-MailMessage `
  -From 'claire@fournil-dore.fr' `
  -To 'support@fournil-dore.fr' `
  -Subject 'Test mailgate automatique - Claire' `
  -Body 'Bonjour, ce mail doit devenir un ticket sans collecte manuelle.' `
  -SmtpServer '192.168.3.254' `
  -Port 25
```

Dans **smtp4dev → Support**, vérifier que le mail est arrivé. Puis attendre la prochaine exécution de mailgate, **sans cliquer sur « Récupérer les mails maintenant »**.

Dans GLPI, aller dans **Assistance → Tickets** et rechercher **`Test mailgate automatique - Claire`**. Le ticket apparaît avec Claire comme demandeuse et le contenu du mail dans la description.

![glpi-20-1-ticket-mailgate-auto.png](/00-glpi/images/glpi-20-1-ticket-mailgate-auto.png)
_Test du labo : le ticket 38 a été créé par la collecte automatique._

> [!SUCCESS] Résultat attendu
> Le ticket est créé sans action manuelle dans le collecteur. Dans **Configuration → Actions automatiques → mailgate → Journaux**, une exécution récente permet de confirmer que mailgate a tourné.

![glpi-20-1-mailgate-journaux.png](/00-glpi/images/glpi-20-1-mailgate-journaux.png)
_À 13 h 59, mailgate a traité un mail : la colonne « Nombre » indique 1._

> [!WARNING] Si le ticket n'apparaît pas après 10 à 11 minutes
>
> - Vérifier que smtp4dev tourne et que le mail se trouve dans **Support**.
> - Vérifier que **mailgate** est **Programmée** en mode **CLI**.
> - Regarder les **Journaux** de mailgate dans GLPI.
> - Si le mail est refusé pour une entité, vérifier la règle d'entité et l'accès de Claire à **Le Fournil Doré**.

---

## Le trajet automatique

![glpi-20-1-mailgate.svg](/00-glpi/images/glpi-20-1-mailgate.svg)

> [!NOTE] À retenir
> **Le planificateur réveille GLPI ; mailgate lit le mail ; GLPI crée le ticket.**

Documentation : [actions automatiques GLPI](https://help.glpi-project.org/documentation/modules/configuration/crontasks).
