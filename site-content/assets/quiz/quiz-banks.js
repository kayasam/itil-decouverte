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

  function buildQuestions(concepts) {
    const questions = []
    concepts.forEach(function (concept, index) {
      const distractors = [1, 3, 6].map((offset) => concepts[(index + offset) % concepts.length])
      questions.push({
        theme: concept[0],
        question: "Quelle définition correspond à « " + concept[1] + " » ?",
        choices: [concept[2]].concat(distractors.map((item) => item[2])),
        answer: 0,
        explanation: concept[1] + " : " + concept[2] + ".",
      })
      questions.push({
        theme: concept[0],
        question: "Quel concept correspond à cette définition : « " + concept[2] + " » ?",
        choices: [concept[1]].concat(distractors.map((item) => item[1])),
        answer: 0,
        explanation: "Il s’agit de « " + concept[1] + " ».",
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
      questions: buildQuestions(chapter.concepts),
    }
  })
})()
