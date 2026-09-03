---
title: "Annexe — TP en binôme : jeu de rôle"
---

# Annexe — TP en binôme : « Un vrai utilisateur, un vrai technicien »

**Durée : 1h30** (version courte possible en 45 min, voir en fin de note)
**Format : binômes, jeu de rôle, non guidé**

---

## Le principe

Jusqu'ici, les ateliers vous donnaient les signalements déjà écrits, propres, classés. Ce n'est **jamais** comme ça dans la vraie vie. Dans la vraie vie, quelqu'un vous dit « ça marche pas » et se tait.

Ici, vous êtes deux :

- **L'utilisateur** reçoit des cartes de signalement. Il connaît la vérité sur sa panne, mais il ne la donne pas.
- **Le technicien** ne sait rien. Il doit poser des questions, qualifier, prioriser, tracer dans GLPI.

Puis vous **échangez les rôles** avec une nouvelle série de cartes.

Il n'y a pas de mode d'emploi dans ce TP. Vous décidez de tout.

---

## Rôle 1 — L'utilisateur

Vous recevez une feuille de cartes. Sur chaque carte : ce que vous dites, et ce que vous savez sans le dire.

**Vos règles :**

1. **Vous n'êtes pas technique.** Vous ne dites jamais « le spouleur d'impression est planté ». Vous dites « ça imprime pas ». Si vous employez un mot technique, vous perdez le personnage.
2. **Vous ne donnez que ce qu'on vous demande.** Les informations en dessous de la ligne de la carte, vous ne les lâchez **que** si le technicien pose la bonne question. S'il ne demande rien, vous ne dites rien.
3. **Vous avez un métier à faire.** Vous êtes vendeur, comptable ou boulanger — pas disponible en permanence. Vous avez le droit d'être pressé, agacé, ou de relancer.
4. **Vous ne touchez pas à GLPI.** Vous signalez à l'oral, comme un vrai utilisateur qui passe la tête par la porte ou téléphone.
5. **À la fin, c'est vous qui jugez.** Est-ce que vous vous êtes senti pris en charge ?

Vous déclenchez vos signalements **dans l'ordre que vous voulez**, et vous pouvez très bien en amener deux en même temps. C'est même conseillé.

---

## Rôle 2 — Le technicien

Vous ne savez rien à l'avance. Votre poste de travail, c'est GLPI.

**Votre objectif :** que tout ce qui s'est passé pendant la séance soit retrouvable dans GLPI par quelqu'un qui n'était pas là.

**Vous êtes libre de la méthode.** Personne ne vous dira sur quel bouton cliquer. En revanche, à la fin de la manche, on doit trouver dans GLPI :

- [ ] Chaque signalement qualifié en **incident** ou en **demande de service** — et le bon type
- [ ] Une **priorité** cohérente, que vous devez pouvoir justifier
- [ ] Un **suivi** par ticket : ce que vous avez demandé, ce que vous avez fait
- [ ] Une **solution** écrite sur chaque ticket résolu
- [ ] Au moins **un problème** ouvert, si vous détectez une cause racine
- [ ] Au moins **une fiche de base de connaissance**, si un cas peut se reproduire
- [ ] Un **changement**, si votre correction modifie durablement quelque chose

Tout ne s'applique pas forcément à toutes les cartes. **C'est à vous de décider ce qui s'applique** — et c'est exactement là qu'est l'exercice.

> [!WARNING]
> La règle de nommage tient toujours : préfixez tout ce que vous créez par votre prénom entre crochets.

---

## Déroulé

| Temps  | Ce qui se passe                                                                                        |
| ------ | ------------------------------------------------------------------------------------------------------ |
| 5 min  | Constitution des binômes, distribution de la **série A** à l'utilisateur. Le technicien ne la lit pas. |
| 30 min | **Manche 1.** L'utilisateur déclenche ses signalements, le technicien travaille dans GLPI.             |
| 10 min | **Débrief à deux** (grille ci-dessous).                                                                |
| 5 min  | Échange des rôles, distribution de la **série B**.                                                     |
| 30 min | **Manche 2.**                                                                                          |
| 10 min | Débrief à deux.                                                                                        |
| 15 min | Mise en commun en groupe.                                                                              |

---

## Le débrief à deux

À faire à chaud, avant d'échanger les rôles. **L'utilisateur parle en premier.**

### Ce que dit l'utilisateur

| Question                                                                      |     |
| ----------------------------------------------------------------------------- | --- |
| Me suis-je senti pris en charge ? Sur une échelle de 1 à 5.                   |     |
| À quel moment ai-je su que quelqu'un s'occupait de mon problème ?             |     |
| Y a-t-il eu un moment de silence où je me suis demandé si on m'avait oublié ? |     |
| Le technicien a-t-il compris mon vrai besoin, ou seulement ce que j'ai dit ?  |     |
| Quelle question aurait-il pu me poser plus tôt ?                              |     |

### Ce que dit le technicien

| Question                                                   |     |
| ---------------------------------------------------------- | --- |
| Quel signalement m'a le plus induit en erreur au départ ?  |     |
| Quelle information m'a manqué le plus longtemps ?          |     |
| Est-ce que ma priorisation initiale a tenu jusqu'au bout ? |     |
| Qu'est-ce que j'ai laissé sans trace dans GLPI ?           |     |

### La vérification qui fait mal

Le technicien ferme sa session. L'utilisateur ouvre GLPI et essaie de reconstituer **sa propre matinée** uniquement à partir des tickets.

Est-ce qu'il y arrive ? C'est le seul test qui compte : un ticket sert à quelqu'un qui n'était pas là.

---

## Mise en commun — les questions du groupe

- Sur quelle carte les deux binômes ont-ils divergé le plus sur la priorité ? Pourquoi ?
- Qui a ouvert un **problème** ? Sur quel signal ?
- Qui a créé une **fiche de connaissance** ? Est-ce que le cas méritait vraiment d'être documenté ?
- Y a-t-il eu un signalement qui n'était **pas du ressort de l'IT** ? Comment a-t-il été traité ?
- Un ticket a-t-il été résolu sans que l'utilisateur soit prévenu ? Combien de temps a duré le silence ?

---

## Ce qui est évalué

Rien n'est noté sur la rapidité. Trois choses comptent :

1. **La qualification.** Incident ou demande ? Le bon type dès le départ évite tout le reste.
2. **La traçabilité.** Un ticket sans suivi ni solution est un ticket perdu.
3. **La communication.** Un utilisateur informé attend sans râler. Un utilisateur dans le silence relance, s'énerve, et finit par contourner l'IT.

Le meilleur binôme n'est pas celui qui a résolu le plus vite. C'est celui dont on peut reconstituer la matinée en lisant GLPI.

---

## Version courte (45 min)

Si le temps manque :

- Une seule manche, pas d'échange de rôles
- L'utilisateur ne joue que les cartes **1, 3 et 5** de sa série
- 25 min de jeu, 10 min de débrief à deux, 10 min de mise en commun

Les cartes 3 et 5 sont les plus riches : l'une mène à un problème, l'autre force à casser toute la priorisation en cours.
