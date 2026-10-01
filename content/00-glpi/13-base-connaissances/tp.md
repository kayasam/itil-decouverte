---
title: "TP 13. Base de connaissances"
---

# TP 13 — Publier une aide pour Claire

> Chapitre associé : [13-cours](/00-glpi/13-base-connaissances/)

## Mission

Avec votre compte Super-Admin, transformer l'incident d'imprimante du TP 12 en article utile à Claire. Tous les articles et leurs cibles restent dans **Le Fournil Doré**.

## A — Article de FAQ

1. Ouvrir **Outils → Base de connaissances → Ajouter**.
2. Titre : `Imprimante de Nantes : premiers contrôles`.
3. Catégorie : **Matériel** si elle a été créée au chapitre 08 ; cocher **FAQ**.
4. Contenu :

   1. Vérifier que `IMP-NAN-OPENSPACE-01` est allumée.
   2. Vérifier sa connexion au réseau.
   3. Faire une impression test.
   4. Si l'erreur persiste, ouvrir un ticket **Matériel → Imprimante** et indiquer le lieu **Nantes → Open space**.

5. Dans **Cibles**, choisir **Le Fournil Doré**, sans sous-entités. Enregistrer et vérifier que l'article est publié.

## B — Note interne

Créer un second article `Diagnostic réseau de IMP-NAN-OPENSPACE-01`, avec les vérifications techniques effectuées dans le ticket. Ne pas cocher **FAQ**. Limiter la cible au profil **Super-Admin** sur **Le Fournil Doré**, si ce contrôle est proposé par votre version.

## C — Vérifier

Se connecter comme Claire : chercher « Imprimante de Nantes » dans la FAQ. L'article public doit apparaître ; la note interne ne doit pas apparaître dans sa FAQ. Revenir sur le compte Super-Admin et vérifier les deux articles.

![glpi11-13-faq-claire.png](/00-glpi/images/glpi11-13-faq-claire.png)

_Vue de Claire : la FAQ est visible ; la note interne n’apparaît pas._
