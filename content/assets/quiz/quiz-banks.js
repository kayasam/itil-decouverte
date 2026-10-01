;(function () {
  "use strict"

  const chapters = {
    "01-introduction-itil": {
      chapter: "Chapitre 1 · Repères",
      title: "Introduction à ITIL",
      intro:
        "Vérifiez les origines d’ITIL et les notions de service, de valeur et de certification.",
      concepts: [
        [
          "Référentiel",
          "ITIL",
          "Référentiel de bonnes pratiques pour gérer les services informatiques",
        ],
        ["Origines", "OGC", "Organisme britannique qui a recensé les pratiques à l’origine d’ITIL"],
        [
          "Service",
          "Service IT",
          "Moyen de faciliter des résultats utiles sans faire gérer au client les coûts et risques spécifiques",
        ],
        [
          "Offre",
          "Produit",
          "Bien ou composant que l’on possède, contrairement à une capacité consommée à la demande",
        ],
        [
          "Valeur",
          "Cocréation de valeur",
          "Contribution conjointe du fournisseur et du consommateur à la valeur d’un service",
        ],
        [
          "Version",
          "ITIL v3",
          "Version organisée autour du cycle de vie du service en cinq grandes phases",
        ],
        [
          "Version",
          "ITIL 4",
          "Version centrée sur la valeur et compatible avec Agile, DevOps et Lean",
        ],
        [
          "Version",
          "ITIL 5",
          "Évolution intégrant notamment l’IA et l’Enterprise Service Management",
        ],
        [
          "Management",
          "ESM",
          "Application de la gestion des services à des domaines autres que l’informatique",
        ],
        [
          "Certification",
          "Foundation",
          "Niveau d’entrée qui valide la connaissance des concepts fondamentaux d’ITIL",
        ],
      ],
    },
    "02-concepts-fondamentaux": {
      chapter: "Chapitre 2 · Fondations",
      title: "Concepts fondamentaux d’ITIL 4",
      intro:
        "Testez votre compréhension des dimensions, du SVS, des principes et de la chaîne de valeur.",
      concepts: [
        [
          "Dimensions",
          "Organisations et personnes",
          "Dimension consacrée aux rôles, compétences, responsabilités et à la culture",
        ],
        [
          "Dimensions",
          "Information et technologie",
          "Dimension regroupant outils, logiciels, données et connaissances",
        ],
        [
          "Dimensions",
          "Partenaires et fournisseurs",
          "Dimension qui prend en compte les prestataires et ressources externes",
        ],
        [
          "Dimensions",
          "Flux de valeur et processus",
          "Dimension décrivant les activités qui transforment une demande en résultat",
        ],
        [
          "Environnement",
          "PESTLE",
          "Acronyme des facteurs politiques, économiques, sociaux, technologiques, légaux et environnementaux",
        ],
        [
          "Système",
          "SVS",
          "Modèle global montrant comment une organisation transforme opportunité et demande en valeur",
        ],
        [
          "Principes",
          "Se concentrer sur la valeur",
          "Principe qui invite à relier chaque action à un bénéfice utile pour les parties prenantes",
        ],
        [
          "Principes",
          "Commencer là où on en est",
          "Principe qui recommande d’évaluer et de réutiliser l’existant avant de reconstruire",
        ],
        [
          "Chaîne de valeur",
          "Fournir et supporter",
          "Activité consacrée à la livraison quotidienne des services et au traitement des incidents",
        ],
        [
          "Pratiques",
          "Pratique ITIL",
          "Ensemble de personnes, outils et procédures organisé pour atteindre un objectif",
        ],
      ],
    },
    "03-gestion-incidents": {
      chapter: "Chapitre 3 · Support",
      title: "Gestion des incidents",
      intro:
        "Validez la qualification, la priorité et le cycle de traitement d’un incident dans GLPI.",
      concepts: [
        [
          "Qualification",
          "Incident",
          "Interruption non planifiée ou réduction de la qualité d’un service",
        ],
        [
          "Qualification",
          "Demande de service",
          "Besoin planifié et normal, comme la création d’un compte ou l’installation d’un logiciel",
        ],
        ["Qualification", "Problème", "Cause réelle ou potentielle d’un ou plusieurs incidents"],
        ["Priorité", "Impact", "Étendue des utilisateurs ou services affectés par un incident"],
        [
          "Priorité",
          "Urgence",
          "Vitesse à laquelle une résolution est nécessaire pour limiter les conséquences",
        ],
        ["Priorité", "Priorité", "Niveau de traitement obtenu en combinant impact et urgence"],
        [
          "Cycle de vie",
          "Qualification",
          "Étape où le ticket reçoit type, catégorie, impact, urgence et priorité",
        ],
        [
          "Cycle de vie",
          "Diagnostic",
          "Recherche méthodique de la cause et d’une solution ou d’un contournement",
        ],
        [
          "Escalade",
          "Escalade fonctionnelle",
          "Transfert à une équipe disposant de compétences techniques plus spécialisées",
        ],
        [
          "Crise",
          "Incident majeur",
          "Incident à très fort impact traité avec une coordination et une communication renforcées",
        ],
      ],
    },
    "04-gestion-problemes": {
      chapter: "Chapitre 4 · Analyse",
      title: "Gestion des problèmes",
      intro:
        "Distinguez symptôme et cause racine, puis vérifiez la gestion des erreurs connues dans GLPI.",
      concepts: [
        ["Distinction", "Incident", "Symptôme à traiter rapidement afin de rétablir le service"],
        [
          "Distinction",
          "Problème",
          "Cause sous-jacente à rechercher pour empêcher la répétition des incidents",
        ],
        [
          "Approche",
          "Gestion réactive",
          "Analyse déclenchée après la répétition ou la gravité d’incidents observés",
        ],
        [
          "Approche",
          "Gestion proactive",
          "Recherche de tendances et faiblesses avant qu’elles ne provoquent de nouveaux incidents",
        ],
        [
          "Connaissance",
          "Erreur connue",
          "Problème analysé dont la cause ou un contournement est documenté",
        ],
        [
          "Continuité",
          "Solution de contournement",
          "Réponse temporaire qui réduit l’impact sans supprimer la cause racine",
        ],
        [
          "Analyse",
          "Cause racine",
          "Origine fondamentale dont la suppression évite normalement la récidive",
        ],
        [
          "Méthode",
          "Cinq pourquoi",
          "Technique qui répète la question pourquoi pour remonter du symptôme à la cause",
        ],
        [
          "Traçabilité",
          "Lier les incidents",
          "Association des tickets similaires à un même problème pour mesurer son impact",
        ],
        [
          "Outil",
          "Base de connaissances",
          "Emplacement où publier une erreur connue et son contournement pour les réutiliser",
        ],
      ],
    },
    "05-gestion-changements": {
      chapter: "Chapitre 5 · Maîtrise",
      title: "Gestion des changements",
      intro:
        "Contrôlez les types de changement, les approbations et les plans nécessaires avant un déploiement.",
      concepts: [
        [
          "Définition",
          "Changement",
          "Ajout, modification ou suppression volontaire pouvant affecter un service IT",
        ],
        [
          "Type",
          "Changement standard",
          "Opération fréquente, faible risque, documentée et pré-autorisée",
        ],
        ["Type", "Changement normal", "Modification évaluée et approuvée avant sa mise en œuvre"],
        [
          "Type",
          "Changement d’urgence",
          "Modification critique accélérée faute de temps pour le processus normal",
        ],
        ["Gouvernance", "CAB", "Comité qui évalue et autorise les changements normaux"],
        ["Gouvernance", "ECAB", "Comité restreint mobilisé pour les changements d’urgence"],
        [
          "Préparation",
          "Plan de déploiement",
          "Étapes détaillées permettant d’appliquer le changement de façon maîtrisée",
        ],
        [
          "Sécurité",
          "Plan de repli",
          "Procédure de retour à l’état précédent si le changement échoue",
        ],
        [
          "Validation",
          "Liste de vérifications",
          "Contrôles permettant de confirmer le bon fonctionnement après déploiement",
        ],
        [
          "Traçabilité",
          "Liaison GLPI",
          "Association du changement aux incidents ou au problème qui le justifient",
        ],
      ],
    },
    "06-sla-niveaux-service": {
      chapter: "Chapitre 6 · Engagements",
      title: "SLA et niveaux de service",
      intro:
        "Mesurez vos acquis sur les engagements, les délais et les escalades configurables dans GLPI.",
      concepts: [
        [
          "Engagement",
          "SLA",
          "Accord documenté entre fournisseur et client sur le service et le niveau attendu",
        ],
        ["Délai", "TTO", "Temps maximal entre la création d’un ticket et sa prise en charge"],
        ["Délai", "TTR", "Temps maximal entre la création d’un ticket et sa résolution complète"],
        [
          "Interne",
          "OLA",
          "Accord opérationnel entre équipes internes contribuant au même service",
        ],
        ["Structure GLPI", "SLM", "Conteneur qui regroupe les SLA et OLA d’un périmètre"],
        [
          "Prévention",
          "Niveau d’escalade",
          "Action ou alerte automatique déclenchée avant ou à l’échéance",
        ],
        ["Temps", "Calendrier", "Définition des plages ouvrées utilisées pour calculer les délais"],
        [
          "Affectation",
          "Application manuelle",
          "Sélection directe d’un SLA dans la section Niveaux de services du ticket",
        ],
        [
          "Affectation",
          "Moteur de règles",
          "Mécanisme recommandé pour attribuer automatiquement un SLA selon les critères du ticket",
        ],
        [
          "Pilotage",
          "Dépassement de SLA",
          "Situation où l’engagement de prise en charge ou de résolution n’est pas respecté",
        ],
      ],
    },
    "07-catalogue-services-cmdb": {
      chapter: "Chapitre 7 · Services",
      title: "Catalogue de services et CMDB",
      intro: "Vérifiez le rôle du catalogue, des CI et des relations de dépendance dans GLPI.",
      concepts: [
        [
          "Offre",
          "Catalogue de services",
          "Vue claire des services disponibles adaptée à un groupe de consommateurs",
        ],
        [
          "Catalogue",
          "Catalogue métier",
          "Présentation simple orientée usages et visible par les utilisateurs",
        ],
        [
          "Catalogue",
          "Catalogue technique",
          "Vue interne détaillant composants, dépendances et contrats",
        ],
        [
          "Configuration",
          "CI",
          "Élément de configuration qu’il faut gérer pour fournir un service",
        ],
        [
          "Configuration",
          "CMDB",
          "Base contenant les CI, leurs attributs et leurs relations durant leur cycle de vie",
        ],
        [
          "Comparaison",
          "Inventaire",
          "Liste d’équipements qui ne décrit pas nécessairement leurs dépendances",
        ],
        [
          "Dépendances",
          "Analyse d’impact",
          "Vue permettant d’identifier les services et équipements affectés par la panne d’un CI",
        ],
        [
          "GLPI",
          "Parc informatique",
          "Zone de GLPI qui constitue la base de la CMDB lorsqu’elle est enrichie de relations",
        ],
        [
          "Formulaires",
          "Form Creator",
          "Outil servant à créer des demandes guidées affichables dans le catalogue",
        ],
        [
          "Relation",
          "Dépendance",
          "Lien indiquant qu’un CI ou un service peut être affecté par l’état d’un autre",
        ],
      ],
    },
    "08-amelioration-continue": {
      chapter: "Chapitre 8 · Progrès",
      title: "Amélioration continue",
      intro:
        "Évaluez votre maîtrise du modèle en 7 étapes, des KPI et du suivi des actions d’amélioration.",
      concepts: [
        [
          "Philosophie",
          "Amélioration continue",
          "Démarche permanente consistant à mesurer, analyser, agir puis recommencer",
        ],
        [
          "Modèle",
          "Vision",
          "Première question du modèle qui clarifie l’objectif général poursuivi",
        ],
        ["Modèle", "État actuel", "Mesure de départ répondant à la question où en sommes-nous"],
        [
          "Modèle",
          "État cible",
          "Résultat mesurable répondant à la question où voulons-nous aller",
        ],
        [
          "Modèle",
          "Vérification",
          "Comparaison des nouveaux résultats avec la cible après la mise en œuvre",
        ],
        ["Mesure", "KPI", "Indicateur chiffré utilisé pour évaluer l’atteinte d’un objectif"],
        ["Mesure", "MTTR", "Délai moyen nécessaire pour résoudre les incidents"],
        [
          "Qualité",
          "Taux de réouverture",
          "Indicateur révélant les tickets considérés résolus puis ouverts de nouveau",
        ],
        [
          "Suivi",
          "Registre d’amélioration",
          "Liste priorisée des idées et actions d’amélioration avec leur statut",
        ],
        [
          "GLPI",
          "Statistiques",
          "Vues utilisées pour analyser volumes, délais, SLA, catégories et matériels concernés",
        ],
      ],
    },
  }

  // Questions rédigées pour les deux chapitres théoriques. La position des bonnes
  // réponses est équilibrée dans la source : cinq A, cinq B, cinq C et cinq D.
  const theoryQuestions = {
    "01-introduction-itil": [
      [
        "Vocabulaire",
        "Que signifie le sigle ITIL ?",
        [
          "Information Technology Infrastructure Library",
          "International Technology Integration Language",
          "Information Tools and Internet Logistics",
          "Infrastructure Technology Implementation Level",
        ],
        0,
        "ITIL signifie Information Technology Infrastructure Library : une bibliothèque de bonnes pratiques pour la gestion des services informatiques.",
      ],
      [
        "Définition",
        "Quelle description correspond le mieux à ITIL ?",
        [
          "Un logiciel de tickets",
          "Un référentiel de bonnes pratiques pour gérer les services informatiques",
          "Une norme ISO obligatoire",
          "Un langage de programmation",
        ],
        1,
        "ITIL propose des pratiques et un vocabulaire communs pour organiser la gestion des services.",
      ],
      [
        "Portée",
        "Que fournit ITIL à une organisation ?",
        [
          "La configuration technique de chaque serveur",
          "Une garantie automatique de certification",
          "Un cadre pour organiser le travail autour des services",
          "Un outil de supervision prêt à installer",
        ],
        2,
        "ITIL aide à organiser les activités et les décisions liées aux services ; il ne remplace pas les outils techniques.",
      ],
      [
        "Origines",
        "Dans quel contexte ITIL est-il né ?",
        [
          "Dans les réseaux sociaux des années 2010",
          "Dans un projet de normalisation du matériel",
          "Dans une entreprise de logiciels américaine",
          "Dans le secteur public britannique des années 1980",
        ],
        3,
        "ITIL vient d'un recensement de bonnes pratiques lancé au Royaume-Uni pour améliorer les services informatiques.",
      ],
      [
        "Origines",
        "Pourquoi le mot « Library » figure-t-il dans ITIL ?",
        [
          "Les premières pratiques ont été publiées sous forme de livres",
          "ITIL sert uniquement aux bibliothèques",
          "Chaque service doit posséder une bibliothèque de code",
          "La certification exige un catalogue de livres",
        ],
        0,
        "Le référentiel a d'abord été publié dans plusieurs ouvrages, d'où l'idée de bibliothèque.",
      ],
      [
        "Service",
        "Dans ITIL, un service aide surtout le client à…",
        [
          "Posséder tous les composants techniques",
          "Obtenir le résultat attendu sans gérer les coûts et risques spécifiques",
          "Administrer lui-même les serveurs",
          "Supprimer toute dépendance envers un fournisseur",
        ],
        1,
        "Le service facilite un résultat utile tout en laissant au fournisseur la gestion de certains coûts et risques spécifiques.",
      ],
      [
        "Service et produit",
        "Quel énoncé décrit un service plutôt qu'un produit ?",
        [
          "Un routeur livré dans son carton",
          "Un disque dur acheté par la DSI",
          "Un accès Wi-Fi utilisable au quotidien",
          "Une licence stockée dans un inventaire",
        ],
        2,
        "L'accès Wi-Fi est une capacité consommée pour obtenir un résultat ; les autres propositions désignent des composants ou biens.",
      ],
      [
        "Service et produit",
        "Quelle distinction le cours fait-il entre produit et service ?",
        [
          "Le produit est toujours numérique et le service toujours matériel",
          "Le service est possédé, le produit est utilisé",
          "Le service n'a pas besoin d'un fournisseur",
          "Le produit est un bien ou composant ; le service est une capacité utilisée",
        ],
        3,
        "Un produit peut contribuer à un service, mais la valeur du service se manifeste dans son usage.",
      ],
      [
        "Valeur",
        "Que signifie la cocréation de valeur ?",
        [
          "Fournisseur et consommateur contribuent tous deux à la valeur",
          "Le fournisseur décide seul de la valeur",
          "Le client fabrique l'infrastructure informatique",
          "La valeur est égale au prix du matériel",
        ],
        0,
        "La valeur d'un service dépend de ce que le fournisseur permet et de la façon dont le consommateur l'utilise.",
      ],
      [
        "Valeur",
        "Quel exemple illustre le mieux la valeur d'un service ?",
        [
          "Le nombre de serveurs disponibles dans un stock",
          "La possibilité de communiquer grâce à une messagerie fiable",
          "La longueur d'une procédure d'installation",
          "Le prix d'achat d'un commutateur",
        ],
        1,
        "La valeur est liée au résultat utile obtenu grâce au service, ici la communication.",
      ],
      [
        "ITIL v2",
        "Quel accent caractérise ITIL v2 dans le cours ?",
        [
          "L'intégration native de l'IA",
          "Le cycle de vie en cinq livres",
          "Une organisation centrée sur les processus",
          "L'extension aux fonctions RH et finances",
        ],
        2,
        "ITIL v2 a regroupé les pratiques autour des processus de gestion des services.",
      ],
      [
        "ITIL v3",
        "Autour de quoi ITIL v3 organise-t-il ses cinq livres ?",
        [
          "Des fabricants de matériel",
          "Des certifications techniques",
          "Des départements de l'entreprise",
          "Du cycle de vie du service",
        ],
        3,
        "ITIL v3 structure ses ouvrages autour des phases du cycle de vie du service.",
      ],
      [
        "ITIL 4",
        "Quelle idée occupe une place centrale dans ITIL 4 ?",
        [
          "La création de valeur par les services",
          "La possession de matériel",
          "La suppression des utilisateurs",
          "L'obligation d'utiliser un logiciel unique",
        ],
        0,
        "ITIL 4 met au centre la valeur créée par la gestion des services.",
      ],
      [
        "ITIL 4",
        "Quelles approches ITIL 4 intègre-t-il explicitement dans le cours ?",
        [
          "COBOL, FTP et BIOS",
          "Agile, DevOps et Lean",
          "Uniquement la méthode en cascade",
          "La comptabilité et la paie",
        ],
        1,
        "Le cours présente ITIL 4 comme compatible avec Agile, DevOps et Lean.",
      ],
      [
        "ITIL 5",
        "Quelle évolution est mise en avant pour ITIL 5 dans le cours ?",
        [
          "Le retour exclusif aux processus d'ITIL v2",
          "L'abandon de la gestion des services",
          "L'intégration de l'IA et l'extension à l'ESM",
          "Le remplacement de tous les services par du matériel",
        ],
        2,
        "Le cours associe ITIL 5 à l'IA et à l'Enterprise Service Management.",
      ],
      [
        "ESM",
        "Que désigne l'Enterprise Service Management (ESM) ?",
        [
          "L'achat centralisé des serveurs",
          "La supervision des réseaux seulement",
          "Une méthode de programmation",
          "L'application de la gestion des services au-delà de l'informatique",
        ],
        3,
        "L'ESM étend les méthodes de gestion des services à d'autres domaines de l'organisation.",
      ],
      [
        "Certification",
        "Quel est le niveau d'entrée du parcours de certification ITIL ?",
        ["Foundation", "Master", "Strategist", "Leader"],
        0,
        "Foundation valide la compréhension des notions fondamentales d'ITIL.",
      ],
      [
        "Certification",
        "Que valide principalement une certification ITIL Foundation ?",
        [
          "La capacité à réparer tout équipement",
          "La connaissance du vocabulaire et des concepts de base",
          "Le droit d'administrer un logiciel précis",
          "La maîtrise d'un langage de programmation",
        ],
        1,
        "Foundation porte sur les concepts fondamentaux de la gestion des services.",
      ],
      [
        "Vocabulaire",
        "Quel terme nomme l'organisation qui fournit un service ?",
        [
          "Consommateur de service",
          "Utilisateur final",
          "Fournisseur de service",
          "Équipement de service",
        ],
        2,
        "Le fournisseur de service met à disposition le service ; le consommateur en bénéficie.",
      ],
      [
        "Synthèse",
        "Quelle affirmation résume le mieux l'intérêt d'ITIL ?",
        [
          "ITIL rend inutile l'écoute des utilisateurs",
          "ITIL remplace automatiquement les outils IT",
          "ITIL impose une seule technologie",
          "ITIL donne un langage et des pratiques pour améliorer les services",
        ],
        3,
        "ITIL aide les équipes à partager des notions et à orienter leur travail vers des services utiles.",
      ],
    ],
    "02-concepts-fondamentaux": [
      [
        "Dimensions",
        "Combien de dimensions ITIL 4 invite-t-il à considérer pour gérer un service ?",
        ["Quatre", "Deux", "Six", "Sept"],
        0,
        "ITIL 4 décrit quatre dimensions complémentaires de la gestion des services.",
      ],
      [
        "Dimensions",
        "Quelle dimension traite des rôles, compétences et responsabilités ?",
        [
          "Information et technologie",
          "Organisations et personnes",
          "Partenaires et fournisseurs",
          "Flux de valeur et processus",
        ],
        1,
        "La dimension Organisations et personnes couvre les acteurs, leurs compétences et leur culture de travail.",
      ],
      [
        "Dimensions",
        "Outils, données et connaissances relèvent surtout de quelle dimension ?",
        [
          "Organisations et personnes",
          "Partenaires et fournisseurs",
          "Information et technologie",
          "Flux de valeur et processus",
        ],
        2,
        "La dimension Information et technologie couvre les outils, les données et les connaissances nécessaires aux services.",
      ],
      [
        "Dimensions",
        "Quelle dimension examine les prestataires externes ?",
        [
          "Organisations et personnes",
          "Information et technologie",
          "Flux de valeur et processus",
          "Partenaires et fournisseurs",
        ],
        3,
        "La dimension Partenaires et fournisseurs tient compte des contributions externes.",
      ],
      [
        "Dimensions",
        "Quelle dimension décrit l'enchaînement des activités qui produit un résultat ?",
        [
          "Flux de valeur et processus",
          "Information et technologie",
          "Partenaires et fournisseurs",
          "Organisations et personnes",
        ],
        0,
        "Les flux de valeur et processus décrivent comment les activités transforment une demande en résultat.",
      ],
      [
        "Dimensions",
        "Comment faut-il comprendre les quatre dimensions ?",
        [
          "Comme quatre étapes à exécuter dans l'ordre",
          "Comme quatre angles complémentaires sur un même service",
          "Comme quatre niveaux de certification",
          "Comme quatre logiciels à installer",
        ],
        1,
        "Les dimensions sont des angles d'analyse simultanés, pas des étapes successives.",
      ],
      [
        "PESTLE",
        "À quoi sert l'analyse PESTLE dans ce chapitre ?",
        [
          "À calculer la priorité d'un ticket",
          "À choisir un logiciel",
          "À repérer les facteurs externes qui influencent les services",
          "À décrire les six activités de la chaîne de valeur",
        ],
        2,
        "PESTLE regroupe les influences politiques, économiques, sociales, technologiques, légales et environnementales.",
      ],
      [
        "PESTLE",
        "Dans PESTLE, quelle catégorie couvre une nouvelle loi sur les données ?",
        ["Politique", "Sociale", "Technologique", "Légale"],
        3,
        "Une règle de droit relève du facteur légal.",
      ],
      [
        "SVS",
        "Que signifie SVS dans ITIL 4 ?",
        [
          "Service Value System, ou système de valeur des services",
          "Service Verification Standard",
          "Support and Versioning Scheme",
          "System Virtual Server",
        ],
        0,
        "Le SVS est le modèle global qui relie les composants de la gestion des services à la création de valeur.",
      ],
      [
        "SVS",
        "Quel ensemble contient uniquement des composants du SVS ?",
        [
          "Incidents, équipements, licences, serveurs, contrats",
          "Principes directeurs, gouvernance, chaîne de valeur, pratiques, amélioration continue",
          "PESTLE, matériel, réseau, stockage, sauvegarde",
          "Planifier, impliquer, construire, fournir, déployer",
        ],
        1,
        "Le SVS réunit cinq éléments : principes directeurs, gouvernance, chaîne de valeur, pratiques et amélioration continue.",
      ],
      [
        "Gouvernance",
        "Quel est le rôle de la gouvernance dans le SVS ?",
        [
          "Résoudre chaque ticket à la place du support",
          "Écrire le code de toutes les applications",
          "Fixer des orientations et veiller à leur respect",
          "Remplacer les quatre dimensions",
        ],
        2,
        "La gouvernance oriente l'organisation et vérifie que les décisions restent cohérentes avec cette direction.",
      ],
      [
        "Principes",
        "Quel principe recommande d'évaluer l'existant avant de reconstruire ?",
        [
          "Optimiser et automatiser",
          "Se concentrer sur la valeur",
          "Collaborer et promouvoir la visibilité",
          "Commencer là où on en est",
        ],
        3,
        "Commencer là où on en est invite à observer et à réutiliser ce qui fonctionne déjà.",
      ],
      [
        "Principes",
        "Quel principe conduit à avancer par petites étapes avec des retours réguliers ?",
        [
          "Progresser de façon itérative",
          "Penser de façon holistique",
          "Garder les choses simples et pratiques",
          "Se concentrer sur la valeur",
        ],
        0,
        "L'itération permet d'apprendre et d'ajuster le travail au fil des retours.",
      ],
      [
        "Principes",
        "Quel principe demande de considérer le système dans son ensemble ?",
        [
          "Optimiser et automatiser",
          "Penser et travailler de façon holistique",
          "Commencer là où on en est",
          "Progresser de façon itérative",
        ],
        1,
        "Une approche holistique tient compte des interactions entre les différentes parties du service.",
      ],
      [
        "Principes",
        "Quel principe met l'accent sur le partage d'information entre équipes ?",
        [
          "Garder les choses simples et pratiques",
          "Se concentrer sur la valeur",
          "Collaborer et promouvoir la visibilité",
          "Optimiser et automatiser",
        ],
        2,
        "Collaborer et promouvoir la visibilité réduit les silos et rend le travail compréhensible pour les parties prenantes.",
      ],
      [
        "Chaîne de valeur",
        "Quelle activité de la chaîne de valeur définit vision et priorités ?",
        ["Impliquer", "Obtenir / Construire", "Fournir et supporter", "Planifier"],
        3,
        "Planifier définit la direction, la stratégie et les priorités.",
      ],
      [
        "Chaîne de valeur",
        "Quelle activité sert à comprendre les besoins des parties prenantes ?",
        ["Impliquer", "Améliorer", "Obtenir / Construire", "Fournir et supporter"],
        0,
        "Impliquer entretient les relations et permet de comprendre les besoins des parties prenantes.",
      ],
      [
        "Chaîne de valeur",
        "Quelle activité concerne l'acquisition ou le développement de composants ?",
        ["Planifier", "Obtenir / Construire", "Améliorer", "Impliquer"],
        1,
        "Obtenir / Construire fournit les composants nécessaires au service.",
      ],
      [
        "Chaîne de valeur",
        "Comment les activités de la chaîne de valeur s'enchaînent-elles ?",
        [
          "Toujours dans un ordre unique",
          "Uniquement selon le cycle de vie d'ITIL v3",
          "Selon un parcours adapté à la demande et au résultat visé",
          "Sans jamais se répéter",
        ],
        2,
        "La chaîne de valeur ITIL 4 est flexible : les activités se combinent selon le besoin.",
      ],
      [
        "Pratiques",
        "Dans ITIL 4, qu'est-ce qu'une pratique ?",
        [
          "Un logiciel obligatoire",
          "Une étape isolée d'un processus",
          "Un indicateur financier",
          "Un ensemble de ressources organisé pour atteindre un objectif",
        ],
        3,
        "Une pratique réunit notamment personnes, outils et procédures autour d'un objectif.",
      ],
    ],
  }

  function buildTheoryQuestions(rows) {
    return rows.map(function (row) {
      return {
        theme: row[0],
        question: row[1],
        choices: row[2],
        answer: row[3],
        explanation: row[4],
      }
    })
  }

  function buildQuestions(concepts) {
    const questions = []
    concepts.forEach(function (concept, index) {
      const distractors = [1, 3, 6].map((offset) => concepts[(index + offset) % concepts.length])
      questions.push({
        theme: concept[0],
        question: "Quelle définition correspond à « " + concept[1] + " » ?",
        choices: [concept[2]].concat(distractors.map((item) => item[2])),
        answer: 0,
        explanation:
          "« " +
          concept[1] +
          " » désigne précisément : " +
          concept[2].toLowerCase() +
          ". Les autres propositions définissent « " +
          distractors.map((item) => item[1]).join(" », « ") +
          " ». Ce contraste permet de repérer les notions proches sans les confondre.",
      })
      questions.push({
        theme: concept[0],
        question: "Quel concept correspond à cette définition : « " + concept[2] + " » ?",
        choices: [concept[1]].concat(distractors.map((item) => item[1])),
        answer: 0,
        explanation:
          "Il s’agit de « " +
          concept[1] +
          " » : " +
          concept[2].toLowerCase() +
          ". À ne pas confondre avec « " +
          distractors[0][1] +
          " », qui correspond à " +
          distractors[0][2].toLowerCase() +
          ".",
      })
    })
    return questions
  }

  window.itilQuizBanks = {}
  Object.keys(chapters).forEach(function (id) {
    const chapter = chapters[id]
    window.itilQuizBanks[id] = {
      id,
      chapter: chapter.chapter,
      title: chapter.title,
      intro: chapter.intro,
      chapterLink: "../../" + id + "/",
      questions: theoryQuestions[id]
        ? buildTheoryQuestions(theoryQuestions[id])
        : buildQuestions(chapter.concepts),
    }
  })
})()
