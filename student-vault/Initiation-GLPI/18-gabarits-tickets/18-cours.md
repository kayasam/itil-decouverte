---
title: "18. Gabarits de tickets"
---

# 18 — Gabarits de tickets · Cours

> [!TIP] Pour pratiquer
> - [[18-tp|Faire le TP]]
> - [[00-INDEX|Revenir au sommaire]]

## Un exemple qui sert vraiment

« Internet ne marche pas » est difficile à traiter sans connaître le **poste touché**, l'**étendue de la panne** et les **tests déjà faits**. Nous allons créer le gabarit **Incident réseau — diagnostic guidé** pour les futurs tickets de Claire dans **Le Fournil Doré**.

![[glpi-18-gabarit.svg]]
*La catégorie et le type du ticket déterminent le gabarit à appliquer.*

> [!NOTE] Ce que fait le gabarit
> - Il rend **Titre** et **Lieu** obligatoires.
> - Il préremplit la **Description** avec les symptômes à recueillir et un aide-mémoire de diagnostic.
> - Il laisse l'**urgence** à sa valeur normale : le diagnostic permettra de juger la gravité.
> - Il s'applique aux **incidents** de la catégorie **Réseau > Internet** ; les demandes de cette catégorie gardent leur propre réglage.

## Les commandes dans la description

La première partie est destinée à recueillir le signalement. La seconde aide le technicien à noter **la commande, le résultat et son interprétation**.

| Commande | Ce qu'elle vérifie |
| --- | --- |
| `ping -c 4 1.1.1.1` sous Linux ; `ping -n 4 1.1.1.1` sous Windows | La possibilité de joindre une adresse IP externe depuis la machine testée. |
| `nslookup example.org` | La résolution d'un nom par le DNS configuré sur cette machine. |
| `ss -tuln` sous Linux | Les ports TCP et UDP locaux ouverts, si l'incident concerne aussi un service de la machine. |

> [!WARNING] Bien interpréter les résultats
> - Lancer les commandes **sur la machine concernée**. Un test réussi sur le serveur GLPI ne prouve pas que le poste du demandeur fonctionne.
> - Un `ping` bloqué par un pare-feu ne suffit pas, seul, à conclure qu'Internet est coupé.
> - `ss` renseigne sur les ports **locaux** : ce n'est pas un test de DNS ni d'accès à Internet.

## 1. Créer et configurer le gabarit

Aller dans **Assistance → Tickets → Gabarits de tickets → + Ajouter**. Saisir un nom clair, comme **Incident réseau — diagnostic guidé**, puis cliquer sur **Ajouter**. Les onglets de réglage apparaissent après la création.

Dans **Champs obligatoires**, ajouter **Titre**, puis **Lieu**. C'est ce qui fait apparaître les astérisques dans le formulaire.

![[glpi11-18-champs-obligatoires.png]]


Dans **Champs prédéfinis**, choisir **Description** et saisir un texte structuré. Utiliser des titres et des listes dans l'éditeur rend le formulaire plus facile à parcourir.

![[glpi11-18-description-predefinie.png]]


> [!TIP] Garder une description utile
> Les questions et les commandes sont **modifiables** dans le ticket. Remplacer les points de suspension par des observations ; ne pas laisser une liste de commandes sans résultats.

Les onglets **Champs masqués** et **Champs en lecture seule** existent aussi. Ici, ils restent vides : aucun champ n'a besoin d'être caché ou verrouillé pour ce diagnostic.

## 2. Relier le gabarit à la catégorie

Ouvrir **Configuration → Intitulés → Catégories ITIL → Réseau > Internet**. Dans **Gabarit pour un incident**, choisir **Incident réseau — diagnostic guidé**, puis **Sauvegarder**.

![[glpi11-18-categorie-internet-gabarit.png]]


> [!NOTE] Le type compte aussi
> GLPI distingue **Gabarit pour un incident** et **Gabarit pour une demande**. Si aucun gabarit n'est défini pour le type et la catégorie choisis, GLPI cherche celui du profil, puis celui de l'entité.

## 3. Vérifier le résultat

> [!CHECK] Contrôle rapide
> 1. Ouvrir **Prévisualisation** dans le gabarit.
> 2. Ouvrir **Assistance → Créer un ticket**.
> 3. Choisir **Incident**, puis **Réseau > Internet**.
> 4. Vérifier la description préparée et les astérisques sur **Titre** et **Lieu**.

> [!SUMMARY] À retenir
> Un gabarit prépare la **bonne information**, au **bon moment**. Ici, il rappelle les tests réseau et oblige à situer la panne, sans décider à l'avance de son urgence.

## Sources

- [GLPI — Gestion des gabarits](https://help.glpi-project.org/documentation/fr/modules/overview/templates)
- [GLPI — FAQ sur les tickets et leurs gabarits](https://help.glpi-project.org/faq/fr/glpi/ticket)
