---
title: "04. Assistant d'installation (Wizard)"
---

# 04 — Assistant d'installation (Wizard) · Cours

> [!TIP] Ressources du chapitre
>
> - [Sommaire de la formation](/00-glpi/)

> [!NOTE] Objectif de cette section
> Parcourir l'assistant web de GLPI pour finaliser l'installation. Les conteneurs Docker doivent être démarrés (`docker compose up -d`).

Depuis Windows (`192.168.3.254`), ouvrir un navigateur avec l'IP de la VM Linux (interface `enp0s8`) :

```
http://192.168.3.10/
```

---

## Langue

Sélectionner **Français** puis cliquer sur **OK**.

![Capture d'écran 2026-03-11 161059.png](/00-glpi/images/Capture d'écran 2026-03-11 161059.png)

---

## Licence

Lire la licence GNU GPL v3 puis cliquer sur **Continuer**.

> GLPI est un logiciel libre sous licence GPL v3 — gratuit à utiliser, modifier et redistribuer.

![Capture d'écran 2026-03-11 161114.png](/00-glpi/images/Capture d'écran 2026-03-11 161114.png)

---

## Type d'installation

Cliquer sur **Installer** (et non "Mettre à jour").

![Capture d'écran 2026-03-11 161129.png](/00-glpi/images/Capture d'écran 2026-03-11 161129.png)

---

## Étape 0 — Vérification de compatibilité

GLPI vérifie que tous les prérequis sont présents. **Tout doit être vert.**

![Capture d'écran 2026-03-11 161220.png](/00-glpi/images/Capture d'écran 2026-03-11 161220.png)

> [!NOTE] Installation Docker
> Avec Docker, tous les prérequis PHP et système sont déjà inclus dans l'image. Cette étape doit être entièrement verte sans action supplémentaire.

---

## Étape 1 — Connexion à la base de données

Saisir les informations de connexion définies dans le `docker-compose.yml`.

| Champ            | Valeur    |
| ---------------- | --------- |
| Serveur SQL      | `db`      |
| Utilisateur SQL  | `glpi`    |
| Mot de passe SQL | `a12345!` |

> [!TIP] Pourquoi `db` comme nom de serveur ?
> Docker Compose crée un réseau interne entre les conteneurs. Le conteneur GLPI peut joindre le conteneur MariaDB par son **nom de service** (`db`) — pas besoin d'IP.

![04-wizard-installation.png](/00-glpi/images/04-wizard-installation.png)

---

## Étape 2 — Sélection de la base de données

La connexion est testée automatiquement. Si elle réussit, `glpi` apparaît dans la liste (nom défini par `MARIADB_DATABASE` au chapitre 03).

Sélectionner **glpi** puis cliquer sur **Continuer**.

![Capture d'écran 2026-03-11 161357.png](/00-glpi/images/Capture d'écran 2026-03-11 161357.png)

> [!TIP] "Créer une nouvelle base de données"
> Ce champ permet de créer une BDD à la volée. On ne l'utilise pas ici : MariaDB a déjà créé `glpi` au démarrage du conteneur.

---

## Étape 3 — Initialisation de la base de données

GLPI crée les tables, importe les données par défaut et génère les clés de sécurité. Patienter jusqu'à 100 %.

![Capture d'écran 2026-03-11 161417.png](/00-glpi/images/Capture d'écran 2026-03-11 161417.png)

Une fois terminé, la liste suivante doit apparaître :

![Capture d'écran 2026-03-11 162134.png](/00-glpi/images/Capture d'écran 2026-03-11 162134.png)

---

## Étape 4 — Télémétrie

> [!WARNING] Décocher pour le lab
> Décocher **"Envoyer les statistiques d'usage"** — inutile dans un environnement de formation.

![Capture d'écran 2026-03-11 162228.png](/00-glpi/images/Capture d'écran 2026-03-11 162228.png)

---

## Étape 5 — GLPI Network

Page d'information sur le support commercial GLPI-Network. Cliquer sur **Continuer** sans rien faire.

![Capture d'écran 2026-03-11 162236.png](/00-glpi/images/Capture d'écran 2026-03-11 162236.png)

---

## Étape 6 — Installation terminée

![Capture d'écran 2026-03-11 162303.png](/00-glpi/images/Capture d'écran 2026-03-11 162303.png)

GLPI affiche les **comptes créés par défaut** :

| Login       | Mot de passe | Rôle                 |
| ----------- | ------------ | -------------------- |
| `glpi`      | `glpi`       | Super-administrateur |
| `tech`      | `tech`       | Technicien           |
| `normal`    | `normal`     | Utilisateur standard |
| `post-only` | `postonly`   | Accès limité         |

> [!WARNING] À faire immédiatement après connexion
>
> 1. Se connecter avec `glpi` / `glpi`
> 2. Créer un compte super-admin personnel
> 3. **Supprimer les 4 comptes par défaut**

Leur mot de passe initial est imposé par l'installation de GLPI. Dès le chapitre 05, les comptes pédagogiques du Fournil Doré utiliseront tous `a12345!`.

Cliquer sur **Utiliser GLPI**.

---

## Supprimer le répertoire d'installation

> [!NOTE] Installation Docker
> Avec Docker, le dossier d'installation est automatiquement supprimé par l'image après le wizard. Aucune action manuelle requise.

## Liens utiles

- [Assistant d’installation — Documentation GLPI](https://glpi-install.readthedocs.io/fr/latest/install/wizard.html)

---
