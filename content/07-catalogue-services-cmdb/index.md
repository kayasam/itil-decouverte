---
title: "07. Catalogue de services et CMDB"
aliases:
  - "/cours/07-catalogue-services-cmdb"
---

# 07 — Catalogue de services et CMDB · Cours

> [!TIP] Ressources du chapitre
>
> - [Faire le quiz — 20 questions](https://kayasam.github.io/itil-decouverte/cours/quiz/07-catalogue-services-cmdb.html)
> - <a href="https://kayasam.github.io/itil-decouverte/telechargements/cours/07-catalogue-services-cmdb.md" download>Télécharger ce cours en Markdown</a>

---

> [!NOTE] Objectif de cette section
> Comprendre à quoi sert un catalogue de services et une CMDB, et les mettre en pratique dans GLPI : explorer le catalogue existant et cartographier les dépendances entre équipements.

---

## Le catalogue de services

### Définition ITIL 4

> _"Le catalogue de services est une vue des services du fournisseur de services, adaptée à un consommateur de service spécifique."_

En clair : c'est la **liste des services IT disponibles**, présentée de façon claire aux utilisateurs. Comme un menu au restaurant — on ne demande pas n'importe quoi, on choisit parmi ce qui est proposé.

### Pourquoi c'est utile

Sans catalogue de services, les utilisateurs ne savent pas ce que l'IT peut faire pour eux. Ils envoient des mails à n'importe qui, appellent directement les techniciens, ou ne demandent rien du tout et se débrouillent seuls.

Avec un catalogue :

| Utilisateur                             | Technicien                                           |
| --------------------------------------- | ---------------------------------------------------- |
| Sait ce qu'il peut demander             | Reçoit des demandes standardisées                    |
| Ouvre un ticket via un formulaire guidé | Moins de re-travail, moins d'informations manquantes |
| Gagne en autonomie                      | Gagne du temps                                       |

### Les deux types de catalogue

**Catalogue de services métier** — Ce que voient les utilisateurs. Langage simple, orienté usage : "Installer un logiciel", "Signaler une panne", "Créer un compte".

**Catalogue de services technique** — Ce que voit l'IT. Détaille les composants, les dépendances, les contrats. Moins visible, mais essentiel pour la gestion interne.

> Au Fournil Doré, Thomas commence par le catalogue métier — c'est ce que verront Marie, Ahmed et Claire au quotidien.

---

## La CMDB

### Définition ITIL 4

> _"La CMDB (Configuration Management Database) est une base de données qui stocke les enregistrements de configuration tout au long de leur cycle de vie."_

Un **CI** (Configuration Item — Élément de Configuration) est tout ce qui doit être géré pour fournir un service IT : un ordinateur, une imprimante, un logiciel, un serveur, un switch réseau, un contrat, voire un document.

### Pourquoi la CMDB est cruciale

La CMDB répond à la question : **"Si cet élément tombe en panne, qu'est-ce qui est impacté ?"**

> Exemple : l'imprimante IMP-NAN-OPENSPACE-01 est connectée au switch réseau SW-NAN-01. Si le switch tombe, l'imprimante devient inaccessible. Si la CMDB documente ce lien, GLPI peut afficher automatiquement tous les équipements impactés lors d'un incident sur le switch.

La CMDB est aussi la mémoire du parc : versions logicielles, dates d'achat, garanties, relations entre équipements.

### CI vs Parc informatique

Dans GLPI, le parc informatique **est** la CMDB. Chaque ordinateur, imprimante, switch, logiciel enregistré est un CI. La différence avec un simple inventaire, c'est les **relations** entre CI — c'est ça qui fait la valeur d'une vraie CMDB.

| Simple inventaire   | CMDB                                                  |
| ------------------- | ----------------------------------------------------- |
| Liste d'équipements | Équipements + leurs relations                         |
| "On a 5 PC"         | "PC-01 dépend du SW-01, qui dépend du serveur SRV-01" |
| Vue statique        | Vue dynamique des dépendances                         |

---

## Dans GLPI

### Le catalogue de services

`Assistance → Catalogue de services`

Les utilisateurs voient des tuiles, chacune correspondant à un service. En cliquant dessus, ils accèdent à un formulaire guidé (créé avec le Form Creator) qui génère automatiquement un ticket avec les bonnes informations.

> L'ajout de nouvelles entrées au catalogue se fait via le **Form Creator** (`Administration → Formulaires`) en cochant "Afficher dans le catalogue de services" lors de la création d'un formulaire.

### La CMDB — Analyse d'impact

Sur la fiche de chaque équipement dans le Parc, l'onglet **Analyse d'impact** ouvre une vue graphique interactive. On y voit le CI au centre, et on peut y connecter d'autres CI avec des flèches de dépendance.

`Parc → Ordinateurs → [un ordinateur] → onglet Analyse d'impact`

Les icônes disponibles dans la vue graphique :

- **+** : ajouter un élément lié
- Flèche : définir le sens de la dépendance
- Corbeille : supprimer un lien

### Les liens entre équipements

![itil-cmdb-dependances.svg](/Ressources/images/itil-cmdb-dependances.svg)

L'onglet **Liens** (sur chaque équipement) permet également de lier des CI de façon plus simple, sans passer par la vue graphique.

---

---

## Résumé du chapitre

| Concept               | À retenir                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| Catalogue de services | Vue des services IT disponibles, présentée aux utilisateurs sous forme de tuiles ou formulaires |
| CI                    | Tout élément géré dans la CMDB (ordinateur, imprimante, logiciel, switch…)                      |
| CMDB                  | Base de données des CI et de leurs relations — c'est le Parc informatique GLPI enrichi de liens |
| Analyse d'impact      | Vue graphique GLPI des dépendances entre CI                                                     |
| Dépendance            | Lien entre deux CI indiquant qu'un en impacte un autre en cas de panne                          |

---
