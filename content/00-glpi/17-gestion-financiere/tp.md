---
title: "TP 17. Informations financières"
---

# TP 17 — Suivre l'achat du poste de Claire

> Chapitre associé : [17-cours](/00-glpi/17-gestion-financiere/)

## Mission

Avec votre compte Super-Admin, compléter la fiche financière de `PC-REN-02`. Fournisseur, budget, contrat et ordinateur appartiennent tous à **Le Fournil Doré**.

## A — Créer les références

1. Dans **Gestion → Fournisseurs**, créer **Informatique Atlantique**.
2. Dans **Gestion → Budgets**, créer **Informatique Fournil 2026**, valeur **5 000 €**, période du **01/01/2026** au **31/12/2026**.
3. Dans **Gestion → Contrats**, créer **Maintenance postes Fournil 2026**, début **01/01/2026**, durée **12 mois**.

## B — Compléter `PC-REN-02`

Ouvrir **Parc → Ordinateurs → PC-REN-02 → Gestion**. Activer les informations financières si nécessaire, puis saisir :

| Champ             | Valeur                    |
| ----------------- | ------------------------- |
| Date d'achat      | 20/01/2026                |
| Fournisseur       | Informatique Atlantique   |
| Budget            | Informatique Fournil 2026 |
| Valeur            | 850 €                     |
| Amortissement     | Linéaire sur 3 ans        |
| Début de garantie | 20/01/2026                |
| Durée de garantie | 36 mois                   |

Enregistrer. Dans l'onglet **Contrats** du poste, associer **Maintenance postes Fournil 2026**.

## C — Vérifier

Rouvrir `PC-REN-02` et contrôler la valeur, le fournisseur, le budget, la garantie et le contrat. Dans le budget, retrouver le poste associé. La dotation linéaire théorique est **850 ÷ 3 ≈ 283,33 € par an** ; la valeur nette affichée dépend des dates et du réglage de l'exercice financier.
