---
title: "07. Profils, utilisateurs et habilitations"
---

# 07 — Donner les bons accès

> [!NOTE] Objectif
> Créer le profil de demandeur et le compte de Claire Rousseau. Chaque élève conserve son propre compte Super-Admin pour administrer GLPI. Tous les comptes et tous les objets du fil rouge restent dans l'entité racine **Le Fournil Doré**.

> [!TIP] Dans ce chapitre
>
> - [Faire l'atelier](/00-glpi/07-profils-utilisateurs/tp)
> - [Revoir les entités](/00-glpi/06-entites/)

## Profil, entité et habilitation

Un **profil** décrit les actions autorisées. Une **entité** indique où ces droits s'exercent. Une **habilitation** associe un profil et une entité à un utilisateur. L'option **Récursif** étend les droits aux sous-entités.

![glpi-07-habilitation.svg](/00-glpi/images/glpi-07-habilitation.svg)

Dans notre fil rouge, Claire demande de l'aide dans **Le Fournil Doré**. Son habilitation est donc **Utilisateur Fournil + Le Fournil Doré + Récursif = Non**. Boutique et Laboratoire restent des exemples de structure et ne reçoivent ni compte pédagogique, ni ticket, ni matériel.

| Compte            | Rôle                                              | Entité de travail             |
| ----------------- | ------------------------------------------------- | ----------------------------- |
| `admin.fournil`   | Votre compte Super-Admin, sur votre instance GLPI | Le Fournil Doré               |
| `claire.rousseau` | Demandeuse commune aux ateliers                   | Le Fournil Doré, non récursif |

Le même identifiant `admin.fournil` est créé **séparément sur l'instance de chaque élève**. Il sert aux manipulations d'administration, sans personnifier un technicien fictif.

## Méthode 1 — Dans l'interface GLPI

### 1. Copier le profil Self-Service

Se connecter avec `admin.fournil / a12345!` et sélectionner **Le Fournil Doré** sans « Arborescence ». Ouvrir **Administration → Profils → Self-Service**. Choisir **Actions → Clôner**, demander **1 copie**, puis ouvrir la copie et la nommer **Utilisateur Fournil**.

Le profil Self-Service donne accès à l'interface simplifiée de demandeur. La copie permet de garder le profil fourni par GLPI intact pour comparer les droits plus tard.

![glpi-07-profil-utilisateur-glpi11.png](/00-glpi/images/glpi-07-profil-utilisateur-glpi11.png)
_Le profil Utilisateur Fournil dans la liste des profils._

> [!IMPORTANT] Le formulaire GLPI 11
> Le bouton **Ajouter** crée un profil presque vide. Pour reprendre les droits de Self-Service, utiliser **Actions → Clôner**.

### 2. Créer Claire

Aller dans **Administration → Utilisateurs → Ajouter**. Dans GLPI 11, la section **Habilitation** se trouve dans le même formulaire que les informations du compte.

| Champ                       | Valeur                   |
| --------------------------- | ------------------------ |
| Identifiant                 | `claire.rousseau`        |
| Prénom / Nom                | Claire / Rousseau        |
| E-mail                      | `claire@fournil-dore.fr` |
| Profil                      | Utilisateur Fournil      |
| Entité                      | Le Fournil Doré          |
| Récursif                    | **Non**                  |
| Mot de passe / Confirmation | `a12345!`                |

Cliquer sur **Ajouter**, puis ouvrir la fiche de Claire et vérifier son habilitation.

![glpi-07-claire-racine-glpi11.png](/00-glpi/images/glpi-07-claire-racine-glpi11.png)
_Claire : profil Utilisateur Fournil, entité racine, sans récursivité._

L'adresse `claire@fournil-dore.fr` sera réutilisée dans les exercices de messagerie. Le domaine est fictif : les messages seront visibles dans smtp4dev.

### 3. Vérifier les connexions

Se déconnecter, puis ouvrir une session avec `claire.rousseau / a12345!`. Le bandeau doit indiquer **Le Fournil Doré**, sans « Arborescence », avec l'interface simplifiée. Revenir ensuite sur **votre compte Super-Admin** `admin.fournil` pour les chapitres suivants.

![glpi-07-utilisateurs-racine-glpi11.png](/00-glpi/images/glpi-07-utilisateurs-racine-glpi11.png)
_Liste des comptes actifs : votre administrateur, Claire et le compte interne glpi-system._

Le compte `glpi-system` est interne à GLPI et ne sert pas aux exercices.

## Méthode 2 — Commandes GLPI pour Claire

Après la méthode graphique, voici l'alternative CLI. Ne pas relancer ces commandes si Claire existe déjà. La copie du profil et la saisie du prénom, du nom et de l'e-mail se font dans l'interface.

Dans une installation neuve où **Utilisateur Fournil** est la première copie de profil, son identifiant est généralement `9`. Vérifier l'ID dans l'URL de sa fiche : `user:grant` attend un **nombre**.

```bash
cd ~/glpi-lab
docker compose exec glpi php bin/console user:create claire.rousseau --password='a12345!'
docker compose exec glpi php bin/console user:grant claire.rousseau --profile=9 --entity=0
```

L'absence de `--recursive` garde Claire dans la racine seule. Compléter ensuite le prénom, le nom et l'e-mail dans sa fiche, puis vérifier son **profil par défaut** et sa connexion.

## À retenir

> [!SUMMARY]
>
> - Chaque élève utilise son compte Super-Admin pour administrer son propre GLPI.
> - Claire est la demandeuse du fil rouge, habilitée sur **Le Fournil Doré** sans récursivité.
> - Les comptes GLPI pédagogiques utilisent `a12345!`.

Suite : [Créer les intitulés du lab](/00-glpi/08-intitules/).
