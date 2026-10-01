---
title: "05. Première connexion et configuration initiale"
---

# 05 — Première connexion et configuration initiale

> [!NOTE] Objectif
> Après l'installation de GLPI 11, créer l'administrateur du Fournil Doré, retirer les comptes de démonstration et régler l'URL du lab. Les entités et les autres utilisateurs viendront aux chapitres 06 et 07.

> [!TIP] Dans ce chapitre
> - [[05-tp|Faire l'atelier]]
> - [[04-cours|Revoir la fin de l'installation]]

## Le point de départ du fil rouge

Depuis Windows, ouvrir `http://192.168.3.10/`. Cette adresse est celle de la VM Linux sur le réseau privé VirtualBox ; Windows utilise `192.168.3.254`. Le DNS du lab est `1.1.1.1` pour les requêtes Internet, sans intervenir dans l'accès à GLPI par son adresse IP.

![[glpi-05-acces.svg]]

Une installation neuve fournit `glpi / glpi`. Ce compte n'est utilisé que pour le premier accès : ses identifiants sont publics. Les comptes créés pour les exercices utilisent tous le mot de passe **`a12345!`**. Le mot de passe de MariaDB et ceux des systèmes Windows/Linux sont distincts : ils ne font pas partie des comptes pédagogiques.

## Méthode 1 — Dans l'interface GLPI

### 1. Créer l'administrateur du lab

Se connecter avec `glpi / glpi`, puis aller dans **Administration → Utilisateurs → Ajouter**. Chaque élève crée ce compte sur **sa propre instance GLPI** et l'utilise ensuite pour toutes les tâches d'administration. Remplir le formulaire :

| Champ | Valeur |
|---|---|
| Identifiant | `admin.fournil` |
| Nom de famille / Prénom | `Administrateur` / `Fournil` |
| E-mail | `admin@fournil-dore.fr` |
| Profil | `Super-Admin` |
| Entité | `Entité racine` |
| Récursif | `Oui` |
| Mot de passe et confirmation | `a12345!` |

Le **profil** définit les actions autorisées ; l'**entité** définit où elles s'appliquent. À ce stade, la racine n'a pas encore été renommée. Avec « Récursif = Oui », l'administrateur pourra aussi gérer les futures sous-entités.

![[glpi-05-creation-admin.png]]
*Formulaire réellement utilisé dans GLPI 11 pour créer `admin.fournil`.*

Cliquer sur **Ajouter**. Se déconnecter et se reconnecter avec `admin.fournil / a12345!` avant de toucher aux comptes par défaut.

### 2. Retirer les comptes de démonstration

Dans **Administration → Utilisateurs**, ouvrir successivement `glpi`, `tech`, `normal` et `post-only`, puis cliquer sur **Mettre à la corbeille**. Vérifier ensuite que la liste active ne montre plus ces quatre comptes.

> [!IMPORTANT] Conserver `glpi-system`
> C'est un compte interne utilisé par GLPI. Il ne fait pas partie des quatre comptes de démonstration à retirer.

### 3. Régler l'adresse et la page de connexion

Dans **Configuration → Générale → Configuration générale** :

| Champ | Valeur du lab | Pourquoi ? |
|---|---|---|
| URL de l'application | `http://192.168.3.10/` | GLPI l'utilisera dans les liens des notifications et d'autres contenus générés. |
| Texte sur la page de connexion | `GLPI — Le Fournil Doré` | Identifie le lab à l'écran de connexion. |

Cliquer sur **Sauvegarder**. Dans **Valeurs par défaut**, vérifier que la langue est **Français** ; l'installation du lab est déjà en `fr_FR`.

![[glpi-05-configuration-generale.png]]
*Configuration générale du lab GLPI 11, avec l'URL réelle de la VM.*

![[glpi-05-valeurs-defaut-glpi11.png]]
*Onglet « Valeurs par défaut » de GLPI 11 : langue française.*

### 4. Se repérer

| Menu | Ce qu'on y fera dans la suite |
|---|---|
| **Administration** | Entités, utilisateurs, profils et règles |
| **Configuration** | Réglages généraux, intitulés et notifications |
| **Parc** | Ordinateurs et autres matériels |
| **Assistance** | Tickets et suivi des demandes |
| **Outils** | Base de connaissances et autres ressources |

Un **intitulé** est une valeur de référence réutilisable, comme un lieu ou une catégorie de ticket. On les configurera au chapitre 08, après avoir posé les entités et les droits.

## Méthode 2 — Commandes GLPI disponibles

La méthode graphique ci-dessus reste le parcours de l'atelier. Sur la VM, les commandes suivantes permettent de refaire les opérations qui disposent d'une commande CLI. Se placer dans le dossier Compose créé au chapitre 03 :

```bash
cd ~/glpi-lab

# Créer le compte local, puis lui donner le profil Super-Admin sur la racine.
docker compose exec glpi php bin/console user:create admin.fournil --password='a12345!'
docker compose exec glpi php bin/console user:grant admin.fournil --profile=4 --entity=0 --recursive

# Définir l'URL utilisée dans les liens générés par GLPI.
docker compose exec glpi php bin/console config:set url_base 'http://192.168.3.10/'
```

`user:grant` attend les identifiants numériques du profil et de l'entité (`4` = Super-Admin et `0` = racine dans une installation neuve). Vérifier ces identifiants dans GLPI si la base a déjà été modifiée. La CLI `user:create` ne renseigne pas les nom, prénom et e-mail du scénario : compléter ces champs dans la fiche utilisateur et vérifier que **Super-Admin** est son profil par défaut. Pour le texte de la page de connexion, utiliser la méthode graphique. Ne pas relancer `user:create` si le compte a déjà été créé dans l'interface.

Après avoir **vérifié la connexion** avec `admin.fournil`, la CLI offre aussi `user:delete glpi` (et les trois autres identifiants) pour retirer les comptes de démonstration. Ne jamais viser `glpi-system`.

## À retenir

> [!SUMMARY]
> - GLPI est accessible sur `192.168.3.10` depuis Windows `192.168.3.254`.
> - Chaque élève administre sa propre instance avec le compte Super-Admin `admin.fournil` ; `a12345!` est le mot de passe pédagogique.
> - Le profil donne des droits ; l'entité en fixe la portée.
> - L'URL de l'application doit correspondre à l'adresse réellement utilisée dans le lab.

Suite : [[06-cours|Créer les entités du Fournil Doré]].
