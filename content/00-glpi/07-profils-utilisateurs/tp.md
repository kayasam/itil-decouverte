---
title: "TP 07. Profils, utilisateurs et habilitations"
---

# TP 07 — Donner accès à Claire

> Chapitre associé : [07-cours](/00-glpi/07-profils-utilisateurs/)
> Durée indicative : **20 minutes**

> [!NOTE] Mission
> Avec votre compte Super-Admin, créer un profil de demandeur et le compte de Claire Rousseau. Claire doit se connecter dans **Le Fournil Doré**, sans « Arborescence ».

## A — Copier le profil fourni

1. Se connecter avec `admin.fournil / a12345!` et sélectionner **Le Fournil Doré** sans « Arborescence ».
2. Ouvrir **Administration → Profils → Self-Service**.
3. Choisir **Actions → Clôner** et demander **1 copie**.
4. Ouvrir la copie, la nommer **Utilisateur Fournil**, puis sauvegarder.
5. Vérifier qu'elle apparaît dans la liste.

![glpi-07-profil-utilisateur-glpi11.png](/00-glpi/images/glpi-07-profil-utilisateur-glpi11.png)

## B — Créer Claire

Dans **Administration → Utilisateurs → Ajouter**, renseigner :

| Champ                       | Valeur                   |
| --------------------------- | ------------------------ |
| Identifiant                 | `claire.rousseau`        |
| Prénom / Nom                | Claire / Rousseau        |
| E-mail                      | `claire@fournil-dore.fr` |
| Profil                      | Utilisateur Fournil      |
| Entité                      | Le Fournil Doré          |
| Récursif                    | **Non**                  |
| Mot de passe / Confirmation | `a12345!`                |

Cliquer sur **Ajouter**, puis contrôler l'onglet **Habilitations** de Claire.

![glpi-07-claire-racine-glpi11.png](/00-glpi/images/glpi-07-claire-racine-glpi11.png)

## C — Tester le résultat

1. Se connecter avec `claire.rousseau / a12345!`.
2. Vérifier l'interface simplifiée et le bandeau **Le Fournil Doré**, sans « Arborescence ».
3. Revenir sur votre compte Super-Admin `admin.fournil`.
4. Dans **Administration → Utilisateurs**, vérifier que les comptes actifs sont `admin.fournil`, `claire.rousseau` et le compte interne `glpi-system`.

![glpi-07-utilisateurs-racine-glpi11.png](/00-glpi/images/glpi-07-utilisateurs-racine-glpi11.png)

> [!IMPORTANT] Suite du fil rouge
> Tous les utilisateurs pédagogiques, tickets et équipements des ateliers seront créés dans **Le Fournil Doré**. Boutique et Laboratoire restent vides.

## Questions rapides

1. Quelle différence y a-t-il entre un profil et une entité ?
2. Pourquoi Claire n'a-t-elle pas besoin d'une habilitation récursive ?
3. Quel compte utiliserez-vous pour les prochaines tâches d'administration ?

**Méthode 2 CLI :** les commandes équivalentes pour créer et habiliter Claire figurent après la méthode graphique dans [07-cours](/00-glpi/07-profils-utilisateurs/). Ne pas les lancer si Claire existe déjà.
