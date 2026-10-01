---
title: "17. Informations financières"
---

# 17 — Suivre l'achat d'un équipement

> [!NOTE] Objectif
> Compléter l'achat, la garantie et le contrat du poste de Claire `PC-REN-02`, dans l'entité racine **Le Fournil Doré**.

> [!TIP] Dans ce chapitre
> - [[17-tp|Faire l'atelier]]
> - [[09-cours|Revoir la fiche du poste]]

## Les quatre briques

Une fiche d'équipement peut indiquer **combien il a coûté**, **qui l'a vendu**, **quel budget l'a financé** et **quelle garantie ou quel contrat le couvre**.

![[glpi-17-gestion.svg]]

| Menu | Objet |
|---|---|
| **Gestion → Fournisseurs** | Vendeur ou prestataire |
| **Gestion → Budgets** | Enveloppe de dépenses |
| **Gestion → Contrats** | Accord de maintenance, support ou location |
| **Parc → Ordinateurs → PC-REN-02 → Gestion** | Achat, valeur, garantie et liens financiers du poste |

Le **fabricant** du poste et son **fournisseur** peuvent être différents. Le fournisseur désigne ici l'entreprise qui l'a vendu.

## Méthode 1 — Interface GLPI

Se connecter avec votre compte Super-Admin et sélectionner **Le Fournil Doré** sans « Arborescence ».

1. Créer le fournisseur **Informatique Atlantique** dans **Gestion → Fournisseurs**.
2. Créer le budget **Informatique Fournil 2026** dans **Gestion → Budgets**.
3. Créer le contrat **Maintenance postes Fournil 2026** dans **Gestion → Contrats**.
4. Ouvrir `PC-REN-02` dans **Parc → Ordinateurs → Gestion**. Activer les informations financières et administratives si GLPI le demande.
5. Saisir la date d'achat, la valeur, le fournisseur, le budget, l'amortissement et la garantie, puis sauvegarder.
6. Dans l'onglet **Contrats** du poste, associer le contrat et vérifier le lien.

![[glpi11-17-finances-pc-claire.png]]

*Les informations financières du poste de Claire dans GLPI 11.*

![[glpi11-17-contrat-pc-claire.png]]

*Le contrat de maintenance lié au même poste.*

La date d'expiration de garantie dépend du **début de garantie** et de sa **durée**. Le **TCO** additionne la valeur de l'équipement et les coûts d'intervention saisis dans GLPI. Une intervention sans coût enregistré ne fait pas augmenter le TCO. La **valeur nette comptable** tient compte de l'amortissement et des dates.

## Méthode 2 — CLI

La CLI GLPI 11 du lab ne fournit pas de commande pour créer un fournisseur, un budget, un contrat ou modifier les informations financières d'un ordinateur. Utiliser l'interface pour ce chapitre.

## À retenir

Le lieu **Rennes → Open space** du poste reste une position physique ; le poste et les objets financiers appartiennent à **Le Fournil Doré**.

Source : [Informations financières d'un élément — GLPI](https://help.glpi-project.org/documentation/fr/modules/tabs/management).
