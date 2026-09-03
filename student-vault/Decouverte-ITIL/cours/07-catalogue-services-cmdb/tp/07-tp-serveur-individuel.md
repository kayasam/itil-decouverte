# 07 — Catalogue de services et CMDB · TP — serveur individuel

> **Contexte de déploiement** : chaque stagiaire dispose de son propre GLPI, monté pendant les 3 jours de formation GLPI.
> Aucun préfixe nécessaire, les objets du scénario (utilisateurs, imprimante) ont été créés par le stagiaire lui-même.

---

## Atelier — Catalogue et cartographie au Fournil Doré

---

### Partie 1 — Explorer le catalogue de services existant

`Assistance` → `Catalogue de services`

Observer les tuiles déjà configurées :

| Tuile | Description |
|-------|-------------|
| Signaler un incident | Lié au formulaire de création d'incident |
| Demander un service | Lié au formulaire de demande de service |
| Demande de matériel | Lié au formulaire de demande d'équipement |

Cliquer sur **« Signaler un incident »** et observer le formulaire qui s'ouvre. Comparer avec la création de ticket manuelle (`Assistance → Créer un ticket`) : le formulaire du catalogue est plus guidé, avec moins de champs visibles.

**Question, à noter et débattre** : quelle tuile manque selon vous pour Le Fournil Doré ? Chacun en propose une, on compare.

---

### Partie 2 — Cartographier l'imprimante dans la CMDB

:::info
**Contexte** — Vous voulez documenter que `IMP-NAN-OPENSPACE-01` dépend d'un switch réseau situé en salle serveur de Nantes. Si le switch tombe, l'imprimante devient inaccessible depuis les postes de travail.
:::

**Étape 1 — Créer le switch**

`Parc` → `Matériels réseau` → **+ Ajouter**

| Champ | Valeur |
|-------|--------|
| Nom | `SW-NAN-SRVROOM-01` |
| Type | Switch |
| Lieu | Nantes > Salle serveur |

**Étape 2 — Ouvrir l'analyse d'impact de l'imprimante**

`Parc` → `Imprimantes` → `IMP-NAN-OPENSPACE-01` → onglet **Analyse d'impact**

**Étape 3 — Ajouter le switch au graphe**

Cliquer sur l'icône **+** dans la barre d'outils à droite du graphe, puis choisir :
- Type : **Matériel réseau**
- Élément : le switch `SW-NAN-SRVROOM-01`

**Étape 4 — Définir la relation**

Dans le graphe, reliez le switch à l'imprimante avec une flèche. Le sens indique la dépendance : **l'imprimante dépend du switch**, donc la flèche va du switch vers l'imprimante.

:::info
**Étape 5 — Observer**

La vue graphique montre maintenant deux CI reliés. Si un incident est créé sur le switch, GLPI peut signaler que l'imprimante en dépend — et donc anticiper l'impact sur les utilisateurs de l'open space.

Ajoutez mentalement la suite : combien d'utilisateurs dépendent de cette imprimante ? Combien d'équipements dépendent de ce switch ? C'est cette cascade que la CMDB rend visible avant la panne.
:::

---

### Checklist de fin d'atelier

- [ ] Le switch `SW-NAN-SRVROOM-01` est créé dans le parc
- [ ] Il apparaît dans l'analyse d'impact de l'imprimante
- [ ] La flèche de dépendance va bien du switch vers l'imprimante

---

### Discussion

- Quel est l'intérêt de documenter les dépendances **avant** qu'une panne survienne ?
- Que se passerait-il si le serveur de fichiers était ajouté à la CMDB comme dépendance des postes utilisateurs ? Quel bénéfice en cas d'incident ?
- Comment le catalogue de services peut-il réduire le nombre de tickets mal qualifiés ?
- Au vu du graphe encombré que vous venez d'obtenir : quelles règles mettriez-vous en place pour une CMDB à 50 équipements ?

---
