---
title: "GLPI Initiation — Le Fournil Doré"
---

# GLPI Initiation — Le Fournil Doré

Formation GLPI en 22 chapitres, de l'installation à la configuration complète du helpdesk, sur le fil rouge de la boulangerie **Le Fournil Doré**.

Avant de commencer, découvrez le [[00-contexte-fournil-dore|contexte commun GLPI et ITIL]], son organigramme et les intitulés utilisés dans les TP.

---

## Comment est organisé ce dossier

Un dossier par chapitre, avec un cours et, à partir du chapitre 05, un atelier :

| Fichier | À qui | Quand |
|---------|-------|-------|
| `NN-cours.md` | Stagiaires | Support théorique et procédures pas à pas |
| `NN-tp.md` | Stagiaires | L'atelier du chapitre, à faire dans GLPI |
| `ressources/lexique-glpi.md` | Stagiaires | Définitions des termes rencontrés dans les ateliers |

> [!NOTE] Chaque stagiaire a son propre GLPI
> Contrairement à la formation ITIL, l'initiation part de l'installation : chacun monte son serveur et travaille dessus. Il n'y a donc **qu'une seule variante de TP**, et aucun préfixe de nommage à respecter.

> [!IMPORTANT] Pas de corrigés
> Les ateliers de cette formation sont **entièrement guidés** : ce sont des procédures pas à pas, le résultat attendu est décrit dans le TP lui-même. Il n'y a donc pas de fichier `NN-correction.md`.

Les chapitres **01 à 04** se font directement en suivant le cours. À partir du chapitre 05, chaque étape comporte aussi un atelier.

---

## Les chapitres

| # | Chapitre | Cours | TP |
|---|----------|-------|----|
| 01 | Présentation de GLPI | [[01-cours]] | — |
| 02 | Préparation du lab (VirtualBox + Debian 13) | [[02-cours]] | — |
| 03 | Installation de GLPI avec Docker | [[03-cours]] | — |
| 04 | Assistant d'installation (Wizard) | [[04-cours]] | — |
| 05 | Configuration initiale et prise en main | [[05-cours]] | [[05-tp]] |
| 06 | Les entités | [[06-cours]] | [[06-tp]] |
| 07 | Profils & utilisateurs | [[07-cours]] | [[07-tp]] |
| 08 | Les intitulés | [[08-cours]] | [[08-tp]] |
| 09 | Le parc informatique | [[09-cours]] | [[09-tp]] |
| 10 | Les imprimantes dans GLPI | [[10-cours]] | [[10-tp]] |
| 11 | L'agent d'inventaire | [[11-cours]] | [[11-tp]] |
| 12 | Premier pas avec les tickets | [[12-cours]] | [[12-tp]] |
| 13 | Base de connaissances | [[13-cours]] | [[13-tp]] |
| 14 | Formulaires natifs (GLPI 11) | [[14-cours]] | [[14-tp]] |
| 15 | Le moteur de règles | [[15-cours]] | [[15-tp]] |
| 16 | Statistiques & tableaux de bord | [[16-cours]] | [[16-tp]] |
| 17 | Gestion financière | [[17-cours]] | [[17-tp]] |
| 18 | Gabarits de tickets | [[18-cours]] | [[18-tp]] |
| 19 | Collecteur de mails (smtp4dev) | [[19-cours]] | [[19-tp]] |
| 20 | Notifications par mail (smtp4dev) | [[20-cours-fil-rouge]] | [[20-tp]] |
| 20-1 | Collecte automatique des mails | [[20-1-cours]] | — |
| 20-2 | Mise en forme des notifications | [[20-2-cours]] | [[20-2-tp]] |
| 21 | Dictionnaires | [[21-cours]] | [[21-tp]] |
| 22 | Authentification avec LLDAP | [[22-cours]] | [[22-tp]] |

---

## Messagerie des chapitres 19 et 20

Le cours utilise exclusivement **smtp4dev**, serveur de messagerie de test installé sur l'hôte Windows. Le collecteur lit les messages par IMAP et les notifications sont envoyées par SMTP sur le réseau Host-Only du laboratoire. Aucun compte ou domaine de messagerie réel n'est requis.

---

## Le fil rouge

Toute la formation se déroule au **Fournil Doré**. Windows (`192.168.3.254`) et la VM GLPI (`192.168.3.10`) communiquent sur le réseau privé VirtualBox. Chaque élève crée son compte **Super-Admin** sur sa propre instance et l'utilise pour toute l'administration. **Claire Rousseau** est la demandeuse suivie pour les tickets des chapitres 01 à 21. Le chapitre 22 ajoute Nico Robin et Roronoa Zoro comme utilisateurs LLDAP, sans créer de nouveau ticket. Ses droits, les tickets et les équipements restent dans l'entité racine **Le Fournil Doré**. Les comptes GLPI pédagogiques utilisent le mot de passe `a12345!`.

---

## Ressources

- `ressources/images/` — les captures d'écran du cours
- [[liens-externes|Liens externes]] — documentation officielle et ressources complémentaires

---

## Sessions et archives

`sessions/` — notes de session (listes de stagiaires, logs, pads HedgeDoc). Tout est en `publier: false`.

`_archives/` — les anciennes versions compilées, l'export Obsidian et les anciennes variantes Gmail conservées pour historique. Ces fichiers ne font pas partie du parcours actif.

> [!WARNING] Ne pas repartir des archives
> Elles sont antérieures à la séparation cours / TP. Le support à jour est celui listé ci-dessus.
