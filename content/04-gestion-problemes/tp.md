---
title: "TP 04. Gestion des problèmes"
aliases:
  - "/04-gestion-problemes/tp/04-tp"
---

# TP 04 — Rechercher la cause des pannes récurrentes

> [!TIP] Ressource du TP
>
> - <a href="https://kayasam.github.io/itil-decouverte/telechargements/tp/04-tp.md" download>Télécharger ce TP en Markdown</a>

> Chapitre associé : [04-cours](/04-gestion-problemes/). Travaillez avec votre compte Super-Admin, dans **Le Fournil Doré**. La demandeuse des incidents reste **Claire Rousseau**.

## A — Constituer l'historique

Le ticket `Nouvelle panne de IMP-NAN-OPENSPACE-01` du TP 03 est le premier dossier de cet exercice. Deux anciens signalements de Claire sont **simulés** : vous les saisissez aujourd'hui pour étudier une récurrence, sans modifier artificiellement les dates de GLPI.

Créer deux tickets de type **Incident**, catégorie **Matériel > Imprimante**, demandeuse `claire.rousseau`, lieu **Nantes > Open space** :

| Ticket simulé                                      | Description                                          | Solution de contournement                          |
| -------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------- |
| `File d'impression bloquée — IMP-NAN-OPENSPACE-01` | Les documents restent dans la file, sans impression. | Vider la file et relancer le service d'impression. |
| `Imprimante introuvable — IMP-NAN-OPENSPACE-01`    | Le poste de Claire ne voit plus l'imprimante.        | Redémarrer l'imprimante et reconnecter le poste.   |

Dans chacun, lier `IMP-NAN-OPENSPACE-01` dans **Éléments**, noter la solution et passer à **Résolu**. Le TP utilise **ces trois tickets précis** ; les tickets d'essai de l'initiation GLPI restent dans l'historique du laboratoire.

## B — Ouvrir le problème

Dans **Assistance → Problèmes → Ajouter**, créer :

| Champ                  | Valeur                                                                                                                            |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Titre                  | `Pannes récurrentes — IMP-NAN-OPENSPACE-01`                                                                                       |
| Demandeur / attribué à | Votre compte Super-Admin                                                                                                          |
| Catégorie              | Matériel > Imprimante                                                                                                             |
| Description            | Trois incidents de Claire touchent la même imprimante. Les redémarrages rétablissent le service, mais ne suppriment pas la cause. |
| Entité                 | Le Fournil Doré                                                                                                                   |

Lier les trois tickets au problème, puis l'imprimante. Vérifier depuis le problème que les trois dossiers et l'équipement sont visibles.

## C — Documenter l'analyse

**Hypothèse de laboratoire :** le pilote installé sur le poste de Claire devient instable après certaines mises à jour Windows. Ce scénario sert à distinguer **hypothèse**, **solution de contournement** et **correction définitive** ; il ne constitue pas un diagnostic réel de l'imprimante.

Dans le problème, consigner :

- les indices : plusieurs symptômes, même équipement, rétablissement temporaire après redémarrage ;
- la vérification à faire : comparer la version du pilote et l'historique des mises à jour du poste ;
- le contournement : relancer le service d'impression ou réinstaller le pilote précédent ;
- la correction proposée : tester une version stable du pilote sur le poste de Claire, puis prévoir son déploiement contrôlé.

Si l'analyse du scénario est acceptée, passer le problème au statut **Erreur connue** et laisser la correction définitive au changement du TP 05.

## Contrôle

- [ ] Trois incidents de Claire sont liés à `IMP-NAN-OPENSPACE-01`.
- [ ] Un problème distinct relie les trois tickets et l'imprimante.
- [ ] Le contournement est séparé de la correction proposée.
- [ ] Tous les objets sont dans **Le Fournil Doré**.
