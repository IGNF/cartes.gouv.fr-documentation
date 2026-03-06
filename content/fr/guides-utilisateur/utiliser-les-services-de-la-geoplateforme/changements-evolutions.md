---
title: Changements & évolutions de la Géoplateforme
description: Retrouver les dernières évolutions de la Géoplateforme
eleventyNavigation:
    key: Changements & évolutions de la Géoplateforme
    order: 11
pictogram: digital/innovation.svg
---

{% from "components/component.njk" import component with context %}

<div class="fr-grid-row fr-grid-row--gutters fr-mb-6v" data-pagefind-ignore>
<div class="fr-col-12 fr-col-md-6">
    {{ component("card", {
        title: "Changements sur les services Vecteur",
        url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/changements-sur-les-services-vecteur",
        description: "Des changements sur les services Vecteur (entre autres) sont prévus le 4 mars 2026",
        tags: ["WFS", "WMS Vecteur", "CSW", "WMTS"],
        date: "2026-03-04" | jsDateObject
    }) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Modification de l’interface Keycloak",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/modification-de-linterface-keycloak",
    description: "Des modifications sur l’interface du Keycloak sont prévues le 25 février 2026",
    tags: ["Keycloak", "Itinéraire"],
    date: "2026-02-25" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Correction de bugs et modification d’informations dans les GetCaps",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/correction-de-bugs-et-modification-dinformations-dans-les-getcaps",
    description: "Des correction de bugs et modification d’informations dans les GetCaps sont prévus le 11 février 2026",
    tags: ["Extraction", "Keycloak", "TMS"],
    date: "2026-02-11" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Changements dans l’entrepot",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/changements",
    description: "",
    tags: ["Entrepôt","Géocodage"],
    date: "2026-01-28" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Correction de bugs sur la génération de graph itinéraire",
    description: "Des corrections de bugs sur la génération de graph itinéraire sont prévues le 21 janvier 2026",
    tags: ["Itinéraire"],
    date: "2026-01-21" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Montée de version Géocodage",
    description: "Une montée de version du service Géocodage est prévue le mercredi 14 janvier 2026 à partir de 15h. Jusqu’à la fin de journée, des perturbations pourront être observés sur le service Géocodage suite à cette montée de version",
    tags: ["Geocage","WFS"],
    date: "2026-01-14" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Modification descriptif service",
    description: "Des modifications des descriptions des services sont prévus le 7 janvier 2026",
    tags: ["WFS","WMS-V","Géocodage","Téléchargement","WMTS"],
    date: "2026-01-07" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Correction du HTML du GetFeatureInfo WMS Vecteur",
    description: "La correction du HTML du GetFeatureInfo WMS Vecteur est prévue le 27 novembre 2025. Celui-ci n’était pas valide dans sa construction",
    tags: ["WMS-V"],
    date: "2025-11-27" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Montée de version ROK4 + autres changements/corrections de bugs",
    description: "Des corrections de bugs et changements sont prévues le 20 novembre 2025",
    tags: ["ROK4","Orchestrateur","Document","Offre","Entrepôt"],
    date: "2025-11-20" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Livraison 30/10",
    description: "Des corrections de bugs sont prévues le 30 octobre 2025",
    tags: ["Keycloak","Orchestrateur","Entrepôt","Géocodage"],
    date: "2025-10-30" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Nouveau service Validateurs + changements sur l’API Entrepot",
    description: "Divers modifications sont prévues sur l’API entrepot. Ces changements auront lieu le 9 octobre 2025.",
    tags: ["Changement","Entrepôt","Validateur"],
    date: "2025-10-09" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Passage à France Connect V2 + correction de bugs",
    description: "Des corrections de bugs sont aussi prévues. Ces changements auront lieu le 25 septembre 2025.",
    tags: ["Changement","Correction bugs","IAM","Keycloak","Statistiques"],
    date: "2025-09-25" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Correction de bugs + ajout de TMS",
    description: "Des corrections de bugs sont aussi prévues. Ces changements auront lieu le 12 août 2025.",
    tags: ["Changement","Correction bugs","IAM","Keycloak","Statistiques"],
    date: "2025-08-12" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Divers changements sur l’API Entrepôt",
    description: "Divers modifications ont été faites sur l’API entrepot. Ces changements ont eu lieu le 24 juillet 2025",
    tags: ["Changement","Entrepôt"],
    date: "2025-07-24" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Liste des point d’accès d’un entrepôt",
    description: "Il est possible de consulter les points d’accès disponible pour un entrepôt avec la nouvelle route d’API GET /datastores/{datastore}/endpoints, avec des filtrages sur les noms, types et quotas.",
    tags: ["Évolution","Entrepôt"],
    date: "2025-06-30" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Ajout de filtrages sur les champs de certaines entités",
    description: "Il est possible de filtrer certaines entités sur leur nom, leur nom de couche ou encore leur type mime selon les disponibilités des attributs, avec des caractères joker.",
    tags: ["Évolution","Entrepôt"],
    date: "2025-06-30" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Dérivation vecteur",
    description: "Un nouveau traitement permet de modifier le contenu et même la structure d’une donnée stockée de type VECTOR-DB via des templates SQL. Un tutoriel décrit la démarche ici.",
    tags: ["Évolution","Entrepôt"],
    date: "2025-03-25" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Publication du champ extra sur le service de recherche de couche",
    description: "Il est possible d’ajouter des informations personnalisées au niveau du document de la couche sur le service de recherche via le champ extra de la configuration.",
    tags: ["Évolution","Diffusion","Recherche"],
    date: "2025-03-25" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Notion d’organisme",
    description: "L’organisme permet de regrouper des communautés et de permettre la consultation de leurs contenu via un point d’entrée unique",
    tags: ["Évolution","Diffusion","Recherche"],
    date: "2025-02-15" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Mise en cohérence de la notion de publicité des offres",
    description: "Afin de mettre en cohérence la notion de publicité des offres, des modifications ont été apportées sur les champs des offres et sur le fonctionnement du contrôle des accès.",
    tags: ["Évolution","Diffusion","Recherche"],
    date: "2025-01-14" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Paramètre fields dans la lecture de collection",
    description: "Il est désormais possible de préciser les champs à retourner pour chaque entité de la collection demandée. L’identifiant est toujours retourné.",
    tags: ["Évolution","Global"],
    date: "2024-11-25" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Champ extra sur les entités",
    description: "Un nouveau champ extra est disponible sur les entités d’un entrepôt. Celui ci est un objet JSON libre et permet de stocker des informations complexes adaptées à vos usages.",
    tags: ["Évolution","Global"],
    date: "2024-11-10" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Harmonisation de la publicité des offres",
    description: "Une offre n’a plus d’attribut visibility mais un champ open. ",
    tags: ["Changement","Publication"],
    date: "2024-03-06" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Changement de l’API de téléversement de fichiers dans une livraison",
    description: "Afin d’améliorer les performances du téléversement de données, des changements sur l’infrastructure ont été faits impliquant une modification de l’interface de téléversement.",
    tags: ["Changement","Publication"],
    date: "2024-02-20" | jsDateObject
}) }}
</div>
</div>