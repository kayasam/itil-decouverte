---
title: "19. Collecteur de mails"
---

# 19 — Un mail devient un ticket GLPI

> [!NOTE] Objectif
> Envoyer un mail de Claire à `support@fournil-dore.fr`, le retrouver dans smtp4dev, puis créer un ticket GLPI à partir de ce mail.

> [!TIP] Les trois adresses à retenir
> - **`192.168.3.254`** : le poste Windows qui héberge smtp4dev.
> - **`http://localhost:5000`** : l'interface de smtp4dev, à ouvrir **sur ce même poste Windows**.
> - **`http://192.168.3.10`** : GLPI.

---

## 1. Installer smtp4dev sur Windows

Sur le poste Windows `192.168.3.254`, ouvrir **PowerShell en administrateur**, puis lancer :

```powershell
winget install --id Rnwood.Smtp4dev --exact --scope machine
```

> [!TIP] Pourquoi `--scope machine` ?
> L'installation se fait pour le poste entier. Cela évite d'avoir une installation par utilisateur et de retrouver plusieurs versions de smtp4dev.

À la fin, vérifier que winget ne voit qu'une seule installation :

```powershell
winget list --id Rnwood.Smtp4dev --exact
```

---

## 2. Démarrer smtp4dev

Ouvrir un **nouveau terminal PowerShell** et lancer :

```powershell
Rnwood.Smtp4dev
```

Laisser ce terminal ouvert pendant tout l'exercice. **Si on le ferme, smtp4dev s'arrête.**

Dans le navigateur du même poste Windows, ouvrir **[http://localhost:5000](http://localhost:5000)**. Une boîte vide apparaît : c'est normal, aucun mail n'a encore été envoyé.

![[smtp4dev-accueil.png]]

> [!NOTE] À quoi sert smtp4dev ?
> Il reçoit les mails de test et les affiche dans le navigateur. Aucun vrai mail n'est envoyé sur Internet.

---

## 3. Régler smtp4dev depuis le navigateur

Cliquer sur **Settings** (roue dentée). Pour cet exercice, seuls ces réglages sont nécessaires :

> [!TIP] Settings → General
> - **Allow Remote Connections : On**. GLPI est sur une autre machine et doit pouvoir joindre smtp4dev.
> - **Require Authentication : Off** pour SMTP et IMAP dans ce labo de test.
> - Cliquer sur **Save** seulement si un réglage a été modifié.

![[glpi-19-smtp4dev-general.png]]

> [!TIP] Settings → SMTP Server et IMAP Server
> - **SMTP : port 25** — PowerShell dépose le mail ici.
> - **IMAP : port 143** — GLPI lit le mail ici.
> - Conserver les autres valeurs par défaut.

![[glpi-19-smtp4dev-imap.png]]

### Créer la boîte Support

Dans **Settings → Mailboxes**, cliquer sur **New Mailbox**, puis renseigner :

| Champ | Valeur |
|---|---|
| Name | `Support` |
| Recipients | `support@fournil-dore.fr` |

Cliquer sur **Save**. Les mails adressés au support arriveront dans cette boîte.

![[glpi-19-smtp4dev-boite.png]]

### Créer le compte que GLPI utilisera

Dans **Settings → Users**, cliquer sur **New User**, puis renseigner :

| Champ | Valeur |
|---|---|
| Username | `support@fournil-dore.fr` |
| Password | `a12345!` |
| Default Mailbox | `Support` |

Cliquer sur **Save**.

![[glpi-19-smtp4dev-user.png]]

> [!NOTE] Deux rôles différents
> - **Claire envoie** un mail à smtp4dev en SMTP, sans identifiant.
> - **GLPI lit** la boîte Support en IMAP avec le compte `support@fournil-dore.fr`.

---

## 4. Créer le collecteur dans GLPI

Ouvrir **[http://192.168.3.10](http://192.168.3.10)**, puis aller dans **Configuration → Collecteurs → Ajouter**.

![[glpi-19-collecteur-formulaire.png]]

Le collecteur indique à GLPI où se trouve la boîte à lire :

| Champ dans GLPI | Valeur |
|---|---|
| Nom | `Support Fournil Doré — smtp4dev` |
| Actif | **Oui** |
| Serveur | `192.168.3.254` |
| Port | `143` |
| Options de connexion | **IMAP** et **NO-TLS** |
| Identifiant | `support@fournil-dore.fr` |
| Mot de passe | `a12345!` |
| Collecter uniquement les emails non lus | **Non** |

Laisser les autres champs tels quels, puis cliquer sur **Ajouter**.

![[glpi-19-collecteur-options-simple.png]]

> [!IMPORTANT] Pourquoi choisir « Non » pour les mails non lus ?
> Quand on ouvre le message dans smtp4dev pour le vérifier, il devient **lu**. Avec **Non**, GLPI pourra quand même le collecter. Une fois importé, GLPI ne recrée pas ce ticket à chaque collecte.

---

## 5. Envoyer le mail de Claire

Sur le poste Windows, ouvrir **un autre PowerShell** : garder le terminal de smtp4dev ouvert. Copier cette commande telle quelle :

```powershell
Send-MailMessage `
  -From 'claire@fournil-dore.fr' `
  -To 'support@fournil-dore.fr' `
  -Subject 'Test collecteur - Claire - 30 septembre' `
  -Body 'Bonjour, le poste de caisse ne se connecte plus au reseau.' `
  -SmtpServer '192.168.3.254' `
  -Port 25
```

> [!TIP] Lire la commande
> - **From** : Claire, l'expéditrice et future demandeuse du ticket.
> - **To** : l'adresse de la boîte Support.
> - **SmtpServer / Port** : le poste smtp4dev, sur le port SMTP 25.
> - Aucun identifiant SMTP n'est demandé : l'authentification SMTP est désactivée dans ce labo.

PowerShell peut afficher un avertissement indiquant que `Send-MailMessage` est ancien. Pour cet exercice, vérifier surtout que le mail est arrivé.

Revenir dans smtp4dev, ouvrir la boîte **Support** : le mail de Claire apparaît.

![[glpi-19-smtp4dev-mail-claire.png]]

---

## 6. Transformer le mail en ticket

Dans GLPI, revenir dans **Configuration → Collecteurs**, ouvrir **Support Fournil Doré — smtp4dev**, puis cliquer sur **Récupérer les mails maintenant** en bas de la page.

Ensuite, aller dans **Assistance → Tickets** et rechercher **`Test collecteur - Claire`**.

Le résultat attendu est un ticket avec :

- **Titre** : celui du mail ;
- **Demandeuse** : Claire ;
- **Description** : le texte du mail ;
- **Source** : **E-Mail**.

![[glpi-19-ticket-claire-simple.png]]

> [!SUCCESS] Test réussi
> Le mail visible dans la boîte Support est devenu un ticket GLPI. Vérifier que son entité est **Le Fournil Doré**. Si GLPI refuse le mail faute d'entité, créer dans **Administration → Règles → Règles pour assigner un ticket créé via un collecteur de mails** une règle active qui assigne les messages du collecteur Support à l'entité racine, puis refaire le test avec un nouveau mail.

> [!WARNING] Si aucun ticket n'apparaît
> - Le terminal `Rnwood.Smtp4dev` doit toujours être ouvert.
> - Le mail doit être visible dans la boîte **Support**.
> - Le collecteur doit être **actif**, utiliser le port **143**, et accepter aussi les mails **lus**.
> - Si GLPI indique « Impossible d'affecter le mail à une entité », vérifier la règle d'entité et l'accès de Claire à **Le Fournil Doré**.

---

## Le trajet du mail

![[glpi-19-collecteur.svg]]

> [!NOTE] À retenir
> **SMTP sert à déposer le mail. IMAP sert à le récupérer. Le collecteur GLPI crée ensuite le ticket.**
