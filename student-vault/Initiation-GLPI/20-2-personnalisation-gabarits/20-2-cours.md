---
title: "20-2. Personnaliser le rendu HTML/CSS d'un gabarit de notification"
---

# 20-2 — Personnaliser le rendu HTML/CSS d'un gabarit

> [!NOTE] Objectif
> Aller au-delà du modèle de notification du chapitre 20 : construire un mail pour Claire avec un en-tête, des couleurs et les balises GLPI.

> [!TIP] Avant de commencer
> - Relire [[20-cours-fil-rouge|le chapitre 20]] pour le fonctionnement général (SMTP → modèle → notification).
> - Ce chapitre s'appuie sur l'exemple officiel de la documentation GLPI, pas sur une capture du lab Fournil Doré : il sert de référence à adapter, pas de procédure figée.
> - [[20-2-tp|Faire le TP]] pour construire, pas à pas, un gabarit complet avec une palette simple et lisible.

---

## 1. Où se construit le rendu

Chemin : **Configuration → Notifications → Modèles de notifications**.

Un gabarit a deux niveaux de mise en forme :

| Niveau | Où | Rôle |
|---|---|---|
| **CSS du gabarit** | Champ **CSS** du modèle | Styles réutilisés par toutes les traductions de ce gabarit |
| **Corps HTML** | Onglet **Traductions de modèle** → langue | Structure HTML de ce message, dans laquelle le CSS s'applique |

> [!IMPORTANT] Un gabarit, plusieurs traductions
> Le champ **CSS** est unique par gabarit. Chaque **traduction** (Français, English…) a son propre **Corps HTML**, mais elles partagent le même CSS. Modifier le CSS impacte donc toutes les langues d'un coup.

---

## 2. Mise en forme rapide avec l'éditeur

Dans le **Corps HTML** d'une traduction, l'éditeur WYSIWYG permet, sans toucher au code :

| Action | Comment |
|---|---|
| **Gras / italique** | Sélectionner le texte → bouton correspondant |
| **Lien cliquable** | Clic droit sur le texte → *Link* → coller l'URL (souvent `##ticket.url##`) |
| **Titres** | Sélectionner → menu *Format* → *Headings* |
| **Image (logo)** | Insérer une image → redimensionner par clic droit |
| **Tableau** | Insérer un tableau → utile pour un en-tête avec logo + titre |

> [!EXAMPLE] En-tête de mail classique
> Un tableau à une ligne, deux colonnes : le logo dans la première cellule, `##ticket.title##` et `##lang.ticket.status##` dans la seconde, fond bleu foncé et texte blanc via le CSS.

Pour voir et modifier directement le HTML généré, l'éditeur propose un bouton pour **basculer en vue code source**.

---

## 3. Structurer avec des classes CSS

L'exemple officiel GLPI utilise des classes dédiées pour styler chaque type d'élément de la timeline d'un ticket :

| Classe CSS | Élément visé | Rendu suggéré |
|---|---|---|
| `.header` | Bandeau du haut (logo, titre) | Fond de couleur, texte clair |
| `.title` | Titre du ticket | Gras, taille augmentée |
| `.attributes` | Bloc d'informations (statut, date…) | Texte discret |
| `.timeline` | Conteneur de l'historique | Marge, bordure |
| `.ITILFollowup` | Un suivi | Fond gris clair |
| `.TicketTask` | Une tâche | Fond jaune pâle |
| `.ITILSolution` | Une solution | Fond bleu clair |
| `.request` | Le message initial du demandeur | Fond vert clair |

```css
.header { background-color: #1b3a5c; color: #ffffff; padding: 10px; }
.timeline { border: 1px solid #ddd; border-radius: 4px; margin: 10px 0; padding: 8px; }
.ITILFollowup { background-color: #f2f2f2; }
.TicketTask { background-color: #fdf6e3; }
.ITILSolution { background-color: #e8f4fb; }
.request { background-color: #eafaf1; }
```

> [!TIP] Rester simple
> Toutes les boîtes mail ne supportent pas le CSS moderne (Flexbox, Grid). Rester sur `background-color`, `border`, `padding`, `margin`, `color` garantit un rendu correct partout, y compris dans smtp4dev.

---

## 4. Les balises avancées : boucles et conditions

Le [[20-cours-fil-rouge|chapitre 20]] présente les valeurs simples (`##ticket.title##`…). Pour afficher un historique complet (suivis, tâches, résolutions), GLPI ajoute trois familles de balises :

### Traduction automatique des libellés

| Balise | Rôle |
|---|---|
| `##lang.ticket.status##` | Le libellé du statut, déjà traduit dans la langue du destinataire |
| `##lang.ticket.url##` | Le libellé du lien, traduit |

### Boucle sur la timeline

```text
##FOREACHtimelineitems##
  ##timelineitems.author## — ##timelineitems.date##
  ##timelineitems.description##
##ENDFOREACHtimelineitems##
```

| Balise | Valeur |
|---|---|
| `##timelineitems.author##` | Auteur de l'élément (suivi, tâche…) |
| `##timelineitems.date##` | Date de l'élément |
| `##timelineitems.description##` | Contenu de l'élément |

Pour limiter l'affichage aux derniers éléments (éviter un mail interminable sur un vieux ticket) :

```text
##FOREACH LAST 5 timelineitems## … ##ENDFOREACHtimelineitems##
```

### Conditions

```text
##IFticket.storestatus=4##
  Ce ticket est actuellement en attente.
##ENDIFticket.storestatus##
```

`##ticket.storestatus##` est le **code numérique** du statut (ex. `4` = en attente), pratique pour un test `IF` alors que `##ticket.status##` donne le libellé affichable.

> [!EXAMPLE] Deux usages différents
> - **Nouveau ticket** : pas besoin de boucle, un gabarit simple avec les attributs du ticket suffit (c'est le gabarit **Tickets** vu au chapitre 20).
> - **Suivi / tâche / résolution** : utiliser `FOREACH` pour afficher l'historique, utile pour que le destinataire voie tout l'échange sans ouvrir GLPI.

---

## 5. Traduire un gabarit personnalisé

Une fois la traduction par défaut (souvent en anglais ou en français) terminée :

1. Ouvrir le **Corps HTML**, passer en vue code source, **copier** le code.
2. Créer une nouvelle traduction dans une autre langue (menu des traductions du modèle).
3. **Coller** le code copié.
4. Adapter uniquement le **texte statique** (phrases d'accompagnement) — les balises `##...##` restent identiques, elles se traduisent toutes seules via `##lang.xxx##` pour les libellés système.

> [!WARNING] Ne pas traduire les balises
> `##ticket.title##` reste `##ticket.title##` dans toutes les langues. Seul le texte autour change. Une balise mal recopiée (espace, faute de frappe) ne sera pas reconnue et s'affichera telle quelle dans le mail.

---

## À retenir

> [!SUMMARY] Les couches d'un gabarit avancé
> - **CSS** (un par gabarit) définit les styles, réutilisés par toutes les traductions.
> - **Corps HTML** (un par traduction) structure le message avec ces classes.
> - `##FOREACH…##…##ENDFOREACH…##` affiche une liste (ex. la timeline du ticket).
> - `##IF…##…##ENDIF…##` affiche du contenu selon une condition (ex. le statut).
> - Une traduction se construit en copiant le code source d'une autre langue, puis en adaptant le texte fixe — jamais les balises.

Documentation : [exemple de gabarit de notification GLPI](https://help.glpi-project.org/documentation/modules/configuration/notifications/template_example).
