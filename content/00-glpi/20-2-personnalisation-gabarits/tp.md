---
title: "TP 20-2. Construire un gabarit joli et lisible"
---

# TP 20-2 — Construire un gabarit joli et lisible

> Chapitre associé : [20-2-cours](/00-glpi/20-2-personnalisation-gabarits/)
> Durée : **30 minutes**

> [!NOTE] Mission
> Construire, morceau par morceau, un gabarit de notification GLPI propre et lisible : trois couleurs maximum, bon contraste, structure en tableau (compatible avec la plupart des clients mail).

> [!TIP] Règle d'or avant de commencer
> Un mail lisible tient en **3 couleurs** : une couleur de fond neutre, une couleur d'accent (en-tête / bouton), et un texte suffisamment foncé sur fond clair. Ajouter des couleurs n'ajoute pas de lisibilité — ça en enlève.

---

## A — Choisir la palette · 3 min

Avant d'écrire une ligne de CSS, fixer les couleurs et s'y tenir :

| Rôle                     | Couleur         | Code hexa | Pourquoi                                                         |
| ------------------------ | --------------- | --------- | ---------------------------------------------------------------- |
| Fond de l'en-tête        | Bleu nuit       | `#2C3E50` | Sombre et neutre, sert de repère visuel immédiat                 |
| Texte sur l'en-tête      | Blanc           | `#FFFFFF` | Contraste maximal sur fond sombre                                |
| Fond du corps            | Blanc           | `#FFFFFF` | Le fond le plus lisible pour du texte long                       |
| Texte du corps           | Gris très foncé | `#333333` | Moins agressif qu'un noir pur, reste très lisible                |
| Fond du bloc description | Gris très clair | `#F5F6FA` | Distingue la description du reste sans casser le contraste       |
| Bouton / lien d'action   | Bleu            | `#2F80ED` | Seule touche de couleur vive du mail — attire l'œil sur l'action |

> [!WARNING] Éviter le texte clair sur fond clair
> Un texte gris clair (`#AAAAAA`) sur fond blanc est illisible sur beaucoup d'écrans et dans le mode sombre de certains clients mail. Garder le texte principal à `#333333` ou plus foncé.

---

## B — Poser le CSS · 5 min

Ouvrir **Configuration → Notifications → Modèles de notifications** et créer un modèle nommé **Tickets Fournil** pour ne pas écraser le modèle **Tickets** fourni par GLPI. Choisir le type **Ticket**, enregistrer, puis remplir son champ **CSS**.

Coller ce CSS, qui reprend exactement la palette ci-dessus :

```css
.header {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 16px 20px;
}
.body {
  background-color: #ffffff;
  color: #333333;
  padding: 24px 20px;
}
.title {
  font-size: 20px;
  margin: 0 0 8px 0;
  color: #2c3e50;
}
.attributes {
  font-size: 13px;
  color: #777777;
  margin: 0 0 16px 0;
}
.content {
  background-color: #f5f6fa;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.5;
}
.button {
  background-color: #2f80ed;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  display: inline-block;
}
.footer {
  background-color: #f5f6fa;
  color: #999999;
  font-size: 11px;
  text-align: center;
  padding: 12px 20px;
}
```

**Sauvegarder.** Ce CSS ne s'affichera nulle part tant que le Corps HTML n'utilise pas ces classes — c'est l'étape suivante.

---

## C — Construire le HTML pas à pas · 15 min

Ouvrir l'onglet **Traductions de modèle** du modèle **Tickets Fournil**. Créer ou ouvrir sa **Traduction par défaut**, renseigner un sujet `[Fournil] ##ticket.title##`, puis basculer le **Corps HTML** en vue code source.

### C1 — Le conteneur

Toujours partir d'un `<table>` de largeur fixe : c'est ce qui fonctionne le mieux dans le plus grand nombre de clients mail (contrairement à Flexbox/Grid, peu supportés).

```html
<table
  role="presentation"
  width="100%"
  cellpadding="0"
  cellspacing="0"
  style="max-width:600px;margin:0 auto;font-family:Arial, sans-serif;"
></table>
```

### C2 — L'en-tête coloré

Ajouter à l'intérieur une première ligne avec la classe `.header` :

```html
<tr>
  <td class="header">Le Fournil Doré — Support</td>
</tr>
```

Sauvegarder et prévisualiser : le bandeau doit apparaître en bleu nuit avec le texte en blanc.

### C3 — Le titre et les informations du ticket

Ajouter une deuxième ligne, avec la classe `.body`, contenant le titre et les métadonnées :

```html
<tr>
  <td class="body">
    <h1 class="title">##ticket.title##</h1>
    <p class="attributes">
      Ouvert par ##ticket.authors## le ##ticket.creationdate## — Statut : ##lang.ticket.status##
    </p>
  </td>
</tr>
```

> [!TIP] Pourquoi `.title` et `.attributes` sont séparés
> Le titre doit ressortir (`.title` : plus grand, couleur d'accent). Les métadonnées doivent rester discrètes (`.attributes` : petit, gris). Mélanger les deux dans un seul style rend tout illisible d'un coup d'œil.

### C4 — Le bloc description, bien distinct

Toujours dans la cellule `.body`, ajouter le bloc `.content` juste après :

```html
<div class="content">##ticket.description##</div>
```

Le fond gris très clair (`#F5F6FA`) et la bordure fine suffisent à isoler la description du reste, sans couleur supplémentaire.

### C5 — Le bouton d'action

Toujours dans `.body`, sous le bloc description, ajouter le seul élément en couleur vive du mail :

```html
<p style="text-align:center;margin:24px 0;">
  <a href="##ticket.url##" class="button">Voir le ticket</a>
</p>
```

> [!IMPORTANT] Une seule couleur d'accent
> Le bleu du bouton (`#2F80ED`) doit être la **seule** touche vive de tout le mail. S'il y avait déjà un lien ou un texte de cette couleur ailleurs, l'œil ne saurait plus où regarder en premier.

### C6 — Le pied de page

Fermer avec une dernière ligne `.footer` :

```html
<tr>
  <td class="footer">Ce mail est envoyé automatiquement par GLPI — ne pas répondre directement.</td>
</tr>
```

### C7 — Le résultat assemblé

```html
<table
  role="presentation"
  width="100%"
  cellpadding="0"
  cellspacing="0"
  style="max-width:600px;margin:0 auto;font-family:Arial, sans-serif;"
>
  <tr>
    <td class="header">Le Fournil Doré — Support</td>
  </tr>
  <tr>
    <td class="body">
      <h1 class="title">##ticket.title##</h1>
      <p class="attributes">
        Ouvert par ##ticket.authors## le ##ticket.creationdate## — Statut : ##lang.ticket.status##
      </p>
      <div class="content">##ticket.description##</div>
      <p style="text-align:center;margin:24px 0;">
        <a href="##ticket.url##" class="button">Voir le ticket</a>
      </p>
    </td>
  </tr>
  <tr>
    <td class="footer">
      Ce mail est envoyé automatiquement par GLPI — ne pas répondre directement.
    </td>
  </tr>
</table>
```

---

## D — Tester dans smtp4dev · 7 min

**D1.** Associer **Tickets Fournil** à la notification **New Ticket** dans son onglet **Gabarits** (voir [chapitre 20](/00-glpi/20-notifications/)).

**D2.** Avec Claire, créer un nouveau ticket `Test rendu HTML pour Claire` dans **Le Fournil Doré**. Revenir sur le compte Super-Admin pour vérifier son numéro.

**D3.** Ouvrir smtp4dev → boîte **Claire Rousseau** → ouvrir le mail reçu à `claire@fournil-dore.fr`.

> [!SUCCESS] Résultat attendu
>
> - Bandeau bleu nuit en haut, texte blanc lisible.
> - Titre du ticket bien visible, métadonnées discrètes juste en dessous.
> - Bloc description sur fond gris clair, bien séparé du reste.
> - Un seul bouton bleu « Voir le ticket », aucune autre couleur vive dans le mail.

> [!TIP] Si les couleurs n'apparaissent pas
>
> - Vérifier que le CSS a bien été sauvegardé dans le champ **CSS** du gabarit (pas dans le Corps HTML).
> - Vérifier que les classes utilisées dans le HTML (`class="header"`…) sont orthographiées à l'identique dans le CSS.
> - Certains clients mail ignorent les balises `<style>` : c'est pourquoi les styles sont posés par classes reconnues par GLPI, pas par une feuille de style externe.

---

## Questions rapides

1. Pourquoi limiter la palette à 3 couleurs plutôt que d'en utiliser 5 ou 6 ?
2. Pourquoi utiliser un `<table>` plutôt que des `<div>` avec Flexbox pour la mise en page ?
3. Quelle est la différence entre le champ **CSS** du gabarit et le **Corps HTML** d'une traduction ?
4. Pourquoi le bouton d'action est-il la seule couleur vive du mail ?
