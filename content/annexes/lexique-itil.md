---
title: "Lexique ITIL"
aliases:
  - "Vocabulaire ITIL"
  - "Glossaire ITIL"
---

# Lexique ITIL

Ce lexique rassemble les termes employés pendant la formation. Les définitions sont formulées
pour un usage opérationnel dans un service support et dans GLPI.

> [!TIP] Comment utiliser ce lexique
> Recherchez d'abord le mot-clé, puis reformulez sa définition avec un exemple du Fournil Doré.
> Les termes anglais sont conservés lorsqu'ils sont couramment utilisés en entreprise.

## A

### Amélioration continue — _Continual Improvement_

Démarche permanente consistant à mesurer les résultats, identifier un progrès utile, agir, vérifier
l'effet obtenu puis recommencer. Elle concerne tous les niveaux du système de valeur des services.

### Analyse d'impact

Étude des utilisateurs, services et éléments de configuration susceptibles d'être affectés par un
incident ou un changement. Dans GLPI, elle peut être visualisée à partir des relations de la CMDB.

## C

### CAB — _Change Advisory Board_

Comité consultatif qui évalue les changements normaux, leurs bénéfices, leurs risques, leur planning
et leur préparation avant de les autoriser.

### Catalogue de services

Vue structurée des services disponibles pour un groupe d'utilisateurs. Il présente ce que l'IT peut
fournir et guide la création de demandes complètes et correctement qualifiées.

### Catalogue métier

Partie du catalogue visible par les utilisateurs, rédigée dans un langage simple et orientée vers
leurs besoins : demander un accès, installer un logiciel ou signaler une panne.

### Catalogue technique

Vue interne décrivant les composants, dépendances, contrats et équipes nécessaires à la fourniture
des services.

### Cause racine — _Root Cause_

Origine fondamentale d'un ou plusieurs incidents. La supprimer doit empêcher ou réduire durablement
leur réapparition.

### Chaîne de valeur des services — _Service Value Chain_

Ensemble flexible de six activités ITIL 4 : planifier, améliorer, impliquer, concevoir et faire
évoluer, obtenir/construire, fournir et supporter.

### Changement

Ajout, modification ou suppression volontaire d'un élément pouvant avoir un effet direct ou indirect
sur un service.

### Changement d'urgence

Changement nécessaire très rapidement pour traiter ou prévenir un impact critique. Son évaluation est
accélérée, généralement par un ECAB, mais sa traçabilité reste obligatoire.

### Changement normal

Changement qui doit être évalué, autorisé et planifié selon le processus habituel avant son exécution.

### Changement standard

Changement fréquent, documenté, de faible risque et préautorisé. Il suit une procédure éprouvée sans
passer à chaque fois devant le CAB.

### CI — _Configuration Item_ ou élément de configuration

Tout élément qu'il faut gérer pour fournir un service : ordinateur, imprimante, logiciel, serveur,
switch, contrat ou documentation.

### CMDB — _Configuration Management Database_

Base contenant les CI, leurs caractéristiques et surtout leurs relations. Elle permet de comprendre
les dépendances et les impacts d'une panne ou d'un changement.

### Cocréation de valeur

Principe selon lequel la valeur d'un service est produite conjointement par le fournisseur et le
consommateur. Un service maintenu mais mal utilisé ne produit pas toute la valeur attendue.

### Contournement — _Workaround_

Solution temporaire qui réduit l'impact d'un incident ou d'un problème sans supprimer sa cause
racine. Il doit être documenté pour être réutilisable.

## D

### Demande de service — _Service Request_

Demande normale et planifiée d'un utilisateur, par exemple créer un compte ou installer un logiciel.
Elle se distingue d'un incident, car aucun service n'est nécessairement en panne.

### Dépendance

Relation entre deux CI ou entre un CI et un service. Elle indique qu'une défaillance de l'un peut
affecter le fonctionnement de l'autre.

## E

### ECAB — _Emergency Change Advisory Board_

Groupe restreint habilité à évaluer rapidement un changement d'urgence lorsque le délai normal de
réunion du CAB n'est pas compatible avec la situation.

### Erreur connue — _Known Error_

Problème analysé dont la cause ou au moins un contournement est connu et documenté. Une erreur connue
peut exister avant la mise en œuvre de la correction définitive.

### Escalade fonctionnelle

Transfert d'un ticket vers une personne ou une équipe possédant une expertise technique plus adaptée.

### Escalade hiérarchique

Information ou mobilisation d'un niveau de management en raison de l'impact, du risque, du délai ou
du besoin de coordination, sans nécessairement changer l'équipe technique.

### ESM — _Enterprise Service Management_

Application des principes de gestion des services à l'ensemble de l'organisation, par exemple aux
ressources humaines, aux finances ou à la logistique, et pas seulement à l'informatique.

## G

### Gestion des incidents — _Incident Management_

Pratique dont l'objectif est de rétablir le fonctionnement normal d'un service aussi vite que
possible et de limiter l'impact sur les utilisateurs.

### Gestion des problèmes — _Problem Management_

Pratique visant à réduire la probabilité et l'impact des incidents en identifiant leurs causes,
leurs contournements et leurs erreurs connues.

### Gouvernance

Moyens par lesquels l'organisation est dirigée et contrôlée : orientations, décisions, règles,
responsabilités et suivi de leur respect.

## I

### Impact

Mesure de l'étendue des conséquences d'un incident : nombre d'utilisateurs touchés, criticité du
service, perte financière ou interruption d'activité.

### Incident

Interruption non planifiée d'un service ou réduction de sa qualité. Une lenteur importante peut donc
être un incident même si le service reste partiellement disponible.

### Incident majeur — _Major Incident_

Incident dont l'impact justifie une procédure spécifique, une coordination renforcée, des décisions
rapides et une communication régulière avec les parties prenantes.

### ITIL — _Information Technology Infrastructure Library_

Référentiel de bonnes pratiques pour organiser la gestion des services et créer de la valeur. ITIL
n'est ni un logiciel, ni une procédure technique, ni une norme ISO.

### ITSM — _IT Service Management_

Ensemble des capacités et pratiques utilisées pour concevoir, fournir, supporter et améliorer les
services informatiques.

## K

### KPI — _Key Performance Indicator_

Indicateur chiffré choisi pour mesurer l'atteinte d'un objectif, par exemple le taux de résolution
dans les délais, le MTTR ou le taux de réouverture.

## M

### Matrice de priorité

Outil qui combine l'impact et l'urgence afin d'obtenir un niveau de priorité cohérent pour le ticket.

### MTTR — _Mean Time To Resolve_

Durée moyenne nécessaire pour résoudre les incidents sur une période donnée. Le périmètre et les
heures prises en compte doivent être précisés pour interpréter correctement cet indicateur.

## O

### OLA — _Operational Level Agreement_

Accord opérationnel interne entre équipes contribuant au même service. Il soutient le respect du SLA
conclu avec les utilisateurs ou le client.

## P

### PESTLE

Acronyme des facteurs externes politiques, économiques, sociaux, technologiques, légaux et
environnementaux susceptibles d'influencer les services.

### Plan de déploiement

Description ordonnée des actions nécessaires pour mettre en œuvre un changement, avec les acteurs,
les prérequis et le planning.

### Plan de repli — _Rollback Plan_

Procédure préparée avant le changement pour revenir à un état stable si le déploiement échoue ou
produit des effets indésirables.

### Pratique ITIL

Ensemble de ressources organisationnelles conçu pour accomplir un travail ou atteindre un objectif :
personnes, compétences, outils, informations, partenaires et procédures.

### Priorité

Ordre de traitement d'un ticket, généralement déterminé par la combinaison de son impact et de son
urgence. Elle ne dépend pas uniquement de la personne qui demande.

### Problème

Cause réelle ou potentielle d'un ou plusieurs incidents. Le problème recherche le « pourquoi »,
alors que l'incident vise d'abord le rétablissement rapide du service.

## R

### Registre d'amélioration — _Improvement Register_

Liste structurée des idées et actions d'amélioration avec leur valeur attendue, leur priorité, leur
responsable et leur état d'avancement.

### Résolution

Action ou ensemble d'actions qui rétablit le service et permet de considérer l'incident comme traité.
Elle doit être documentée avant la clôture du ticket.

## S

### Service

Moyen de permettre la cocréation de valeur en facilitant les résultats recherchés par le client sans
qu'il ait à gérer lui-même certains coûts et risques spécifiques.

### SLA — _Service Level Agreement_

Accord documenté entre un fournisseur de services et un client précisant les services requis et les
niveaux attendus, notamment les délais de prise en charge et de résolution.

### SLM — _Service Level Management_

Gestion des niveaux de service. Dans GLPI, le SLM sert aussi de conteneur pour regrouper les SLA et
les OLA d'un même périmètre.

### SVS — _Service Value System_

Modèle global d'ITIL 4 montrant comment les composants et activités de l'organisation transforment
une opportunité ou une demande en valeur.

## T

### Ticket

Enregistrement traçable d'un incident ou d'une demande. Il rassemble la description, les acteurs,
la qualification, les actions, les délais et la solution.

### TTO — _Time To Own_

Délai maximal entre la création d'un ticket et sa prise en charge effective par un technicien ou une
équipe.

### TTR — _Time To Resolve_

Délai maximal entre la création d'un ticket et sa résolution complète. Il mesure le délai global de
traitement, pas seulement le temps de travail actif du technicien.

## U

### Urgence

Vitesse à laquelle une résolution est nécessaire pour éviter ou limiter les conséquences. Elle est
combinée à l'impact pour déterminer la priorité.

## V

### Valeur

Bénéfices, utilité et importance perçus d'un service par ses parties prenantes. La valeur ne se réduit
pas à la performance technique d'un outil.

### Valeur des services

Résultat utile obtenu grâce à la combinaison des activités, ressources et pratiques de l'organisation.
Dans ITIL, cette valeur est cocréée avec les consommateurs du service.
