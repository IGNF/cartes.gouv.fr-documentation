---
title: Détail des différentes entités manipulées
eleventyNavigation:
    key: Détail des différentes entités manipulées
    parent: Concepts de l'Entrepôt
    order: 2
    nav: guides-developpeur
pictogram: digital/data-visualization.svg
---

{% from "components/component.njk" import component with context %}

{{ component("table", {
    headers: ["Nom français", "Définition", "Terminologie API"],
    data: [
        ["Utilisateur", "Une personne authentifiée sur la plateforme", "user"],
        ["Communauté", "Groupe d'utilisateurs avec certains droits sur la communauté en elle même et sur son éventuel entrepôt associé. Le terme 'espace de travail' désigne une communauté et l'entrepôt associé.", "community"],
        ["Entrepôt", "Ensemble de données, fichiers statiques, configurations. Le terme 'espace de travail' désigne une communauté et l'entrepôt associé.", "datastore"],
        ["Livraison", "Une donnée temporaire, point d'entrée des données sur la plateforme, exploitable par des traitements", "upload"],
        ["Vérification", "Un script de vérification disponible sur la plateforme, exécutable sur une livraison", "check"],
        ["Exécution de vérification", "Une exécution d'une vérification sur une livraison en particulier", "check execution"],
        ["Donnée stockée", "Une donnée stockée de manière pérenne sur l'entrepôt", "stored_data"],
        ["Traitement", "Un script de traitement des données, avec des paramètres et des contraintes sur le type de données en entrée et un type de donnée en sortie", "processing"],
        ["Exécution de traitement", "Une exécution d'un traitement, avec des données en entrée et une en sortie, des valeurs de paramètre", "processing execution"],
        ["Annexe", "Document indépendant, dont on choisit si il est diffusé publiquement et selon quel chemin", "annexe"],
        ["Configuration", "Ensemble d'informations décrivant la manière de diffuser des données sur un géoservice", "configuration"],
        ["Statique", "Fichier de configuration utilisé côté entrepôt, au niveau de la diffusion ou des traitement", "static"],
        ["Offre", "Entité représentant la présence d'une configuration sur un point d'accès", "offering"],
        ["Point d'accès", "Entité représentant un ensemble de serveurs de diffusion géographique, accessible via une URL", "endpoint"],
        ["Permission", "Possibilité d'accès à une offre donnée à un utilisateur ou une communauté", "permission"],
        ["Accès", "Autorisation d'une clé à consommer une offre", "access"],
        ["TMS", "Un Tile Matrix Set, statique pour la plateforme, utilisé par les données stockées de type pyramide ROK4", "tms"],
        ["Clé", "Information d'identification à ajouter aux requêtes de consultation des services de diffusion à accès restreint", "key"],
        ["Document", "Document indépendant, attaché au compte utilisateur et partageable", "document"]
    ]
}) }}

![Liens entre les différentes entités](/img/entrepot/liens-entites.png "Liens entre les différentes entités"){.fr-responsive-img .frx-border-img .frx-img-contained}

![Workflow d'utilisation de l'entrepôt Géoplateforme annoté](/img/entrepot/workflow-annote.png "Workflow d'utilisation de l'entrepôt Géoplateforme annoté avec les entités entrepôt manipulée lors de l'étape"){.fr-responsive-img .frx-border-img .frx-img-contained}
