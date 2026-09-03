---
title: "07 tp serveur partage"
aliases:
  - "/tp/07-tp-serveur-partage"
---

# 07 — Catalogue de services et CMDB · TP — serveur mutualisé

> [!TIP] Ressource du TP
>
> - <a href="https://kayasam.github.io/itil-decouverte/telechargements/tp/07-tp-serveur-partage.md" download>Télécharger ce TP en Markdown</a>

> **Contexte de déploiement** : un seul serveur GLPI pour tout le groupe, chaque stagiaire a un compte nominatif.
> Chaque objet créé doit être préfixé par le prénom du stagiaire.

---

## Atelier — Catalogue et cartographie au Fournil Doré

---

### Partie 1 — Explorer le catalogue de services existant

`Assistance` → `Catalogue de services`

Observer les tuiles déjà configurées :

| Tuile                | Description                               |
| -------------------- | ----------------------------------------- |
| Signaler un incident | Lié au formulaire de création d'incident  |
| Demander un service  | Lié au formulaire de demande de service   |
| Demande de matériel  | Lié au formulaire de demande d'équipement |

Cliquer sur **« Signaler un incident »** et observer le formulaire qui s'ouvre. Comparer avec la création de ticket manuelle (`Assistance → Créer un ticket`) : le formulaire du catalogue est plus guidé, avec moins de champs visibles.

**Question, à noter et débattre** : quelle tuile manque selon vous pour Le Fournil Doré ? Chacun en propose une, on compare.

---

### Partie 2 — Cartographier l'imprimante dans la CMDB

:::info
**Contexte** — Vous voulez documenter que `IMP-NAN-OPENSPACE-01` dépend d'un switch réseau situé en salle serveur de Nantes. Si le switch tombe, l'imprimante devient inaccessible depuis les postes de travail.
:::

**Étape 1 — Créer votre switch**

Chacun crée le sien, préfixé, pour ne pas se marcher dessus :

`Parc` → `Matériels réseau` → **+ Ajouter**

| Champ | Valeur                         |
| ----- | ------------------------------ |
| Nom   | `SW-NAN-SRVROOM-[VotrePrénom]` |
| Type  | Switch                         |
| Lieu  | Nantes > Salle serveur         |

**Étape 2 — Ouvrir l'analyse d'impact de l'imprimante**

`Parc` → `Imprimantes` → `IMP-NAN-OPENSPACE-01` → onglet **Analyse d'impact**

**Étape 3 — Ajouter votre switch au graphe**

Cliquer sur l'icône **+** dans la barre d'outils à droite du graphe, puis choisir :

- Type : **Matériel réseau**
- Élément : votre switch `SW-NAN-SRVROOM-[VotrePrénom]`

**Étape 4 — Définir la relation**

Dans le graphe, reliez le switch à l'imprimante avec une flèche. Le sens indique la dépendance : **l'imprimante dépend du switch**, donc la flèche va du switch vers l'imprimante.

**Étape 5 — Observer**

:::warning
Vous allez voir apparaître **les switches de vos trois collègues** sur le même graphe. C'est voulu, et c'est une leçon en soi : la CMDB est une **base commune**. Si chacun y documente dans son coin sans convention, elle devient rapidement illisible — exactement ce que vous avez sous les yeux.

En production, c'est pour ça qu'une CMDB a un propriétaire et des règles de nommage strictes.
:::

---

### Checklist de fin d'atelier

- [ ] Mon switch `SW-NAN-SRVROOM-[MonPrénom]` est créé dans le parc
- [ ] Il apparaît dans l'analyse d'impact de l'imprimante
- [ ] La flèche de dépendance va bien du switch vers l'imprimante

---

### Discussion

- Quel est l'intérêt de documenter les dépendances **avant** qu'une panne survienne ?
- Que se passerait-il si le serveur de fichiers était ajouté à la CMDB comme dépendance des postes utilisateurs ? Quel bénéfice en cas d'incident ?
- Comment le catalogue de services peut-il réduire le nombre de tickets mal qualifiés ?
- Au vu du graphe encombré que vous venez d'obtenir : quelles règles mettriez-vous en place pour une CMDB à 50 équipements ?

---
