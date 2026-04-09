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
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/correction-de-bugs-sur-la-generation-de-graph-itineraire",
    description: "Des corrections de bugs sur la génération de graph itinéraire sont prévues le 21 janvier 2026",
    tags: ["Itinéraire"],
    date: "2026-01-21" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Montée de version Géocodage",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/montee-de-version-geocodage",
    description: "Une montée de version du service Géocodage est prévue le mercredi 14 janvier 2026 à partir de 15h. Jusqu’à la fin de journée, des perturbations pourront être observés sur le service Géocodage suite à cette montée de version",
    tags: ["Geocage","WFS"],
    date: "2026-01-14" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Modification descriptif service",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/modification-descriptif-service",
    description: "Des modifications des descriptions des services sont prévus le 7 janvier 2026",
    tags: ["WFS","WMS-V","Géocodage","Téléchargement","WMTS"],
    date: "2026-01-07" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Correction du HTML du GetFeatureInfo WMS Vecteur",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/correction-du-html-du-getfeatureinfo-wms-vecteur",
    description: "La correction du HTML du GetFeatureInfo WMS Vecteur est prévue le 27 novembre 2025. Celui-ci n’était pas valide dans sa construction",
    tags: ["WMS-V"],
    date: "2025-11-27" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Montée de version ROK4 + autres changements/corrections de bugs",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/montee-de-version-rok4-autres-changementscorrections-de-bugs",
    description: "Des corrections de bugs et changements sont prévues le 20 novembre 2025",
    tags: ["ROK4","Orchestrateur","Document","Offre","Entrepôt"],
    date: "2025-11-20" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Livraison 30/10",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/redis-geocodage",
    description: "Des corrections de bugs sont prévues le 30 octobre 2025",
    tags: ["Keycloak","Orchestrateur","Entrepôt","Géocodage"],
    date: "2025-10-30" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Nouveau service Validateurs + changements sur l’API Entrepot",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/nouveau-service-validateurs-changements-sur-lapi-entrepot",
    description: "Divers modifications sont prévues sur l’API entrepot. Ces changements auront lieu le 9 octobre 2025.",
    tags: ["Changement","Entrepôt","Validateur"],
    date: "2025-10-09" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Passage à France Connect V2 + correction de bugs",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/passage-a-france-connect-v2--correction-de-bugs",
    description: "Des corrections de bugs sont aussi prévues. Ces changements auront lieu le 25 septembre 2025.",
    tags: ["Changement","Correction bugs","IAM","Keycloak","Statistiques","Altimétrie","Orchestrateur","Itineraire","Entrepot"],
    date: "2025-09-25" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Correction de bugs + ajout de TMS",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/correction-de-bugs-ajout-de-tms",
    description: "Des corrections de bugs sont aussi prévues. Ces changements auront lieu le 12 août 2025.",
    tags: ["Changement","Entrepot","Correction bugs","WFS","Authentification","LIDAR"],
    date: "2025-08-12" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Divers changements sur l’API Entrepôt",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/divers-changements-sur-lapi-entrepot",
    description: "Divers modifications ont été faites sur l’API entrepot. Ces changements ont eu lieu le 24 juillet 2025",
    tags: ["Changement","Entrepôt"],
    date: "2025-07-24" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Liste des point d’accès d’un entrepôt",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/liste-des-points-d-acces-d-un-entrepot",
    description: "Il est possible de consulter les points d’accès disponible pour un entrepôt avec la nouvelle route d’API GET /datastores/{datastore}/endpoints, avec des filtrages sur les noms, types et quotas.",
    tags: ["Évolution","Entrepôt"],
    date: "2025-06-30" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Ajout de filtrages sur les champs de certaines entités",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/ajout-de-filtrages-sur-les-champs-de-certaines-entites",
    description: "Il est possible de filtrer certaines entités sur leur nom, leur nom de couche ou encore leur type mime selon les disponibilités des attributs, avec des caractères joker.",
    tags: ["Évolution","Global"],
    date: "2025-06-30" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Dérivation vecteur",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/derivation-vecteur",
    description: "Dérivation d'une donnée vecteur en base. Ces changements ont eu lieu le 25 mars 2025",
    tags: ["Évolution","Alimentation","Vecteur"],
    date: "2025-03-25" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Publication du champ extra sur le service de recherche de couche",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/publication-du-champ-extra-sur-le-service-de-recherche-de-couche",
    description: "Il est possible d’ajouter des informations personnalisées au niveau du document de la couche sur le service de recherche via le champ extra de la configuration.",
    tags: ["Évolution","Diffusion","Recherche"],
    date: "2025-03-25" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Notion d’organisme",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/notion-d-organisme",
    description: "L’organisme permet de regrouper des communautés et de permettre la consultation de leurs contenu via un point d’entrée unique",
    tags: ["Évolution","Publication"],
    date: "2025-02-15" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Mise en cohérence de la notion de publicité des offres",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/mise-en-coherence-de-la-notion-de-publicite-des-offres",
    description: "Afin de mettre en cohérence la notion de publicité des offres, des modifications ont été apportées sur les champs des offres et sur le fonctionnement du contrôle des accès.",
    tags: ["Changement","Publication"],
    date: "2025-01-14" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Paramètre fields dans la lecture de collection",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/parametre-fields-dans-la-lecture-de-collection",
    description: "Il est désormais possible de préciser les champs à retourner pour chaque entité de la collection demandée. L’identifiant est toujours retourné.",
    tags: ["Évolution","Global"],
    date: "2024-11-25" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Champ extra sur les entités",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/champ-extra-sur-les-entites",
    description: "Un nouveau champ extra est disponible sur les entités d’un entrepôt. Celui ci est un objet JSON libre et permet de stocker des informations complexes adaptées à vos usages.",
    tags: ["Évolution","Global"],
    date: "2024-11-10" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Harmonisation de la publicité des offres",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/harmonisation-de-la-publicite-des-offres",
    description: "Une offre n’a plus d’attribut visibility mais un champ open. ",
    tags: ["Changement","Publication"],
    date: "2024-03-06" | jsDateObject
}) }}
</div>

<div class="fr-col-12 fr-col-md-6">
{{ component("card", {
    title: "Changement de l’API de téléversement de fichiers dans une livraison",
    url: "/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/changements-evolutions/changement-de-l-api-de-televersement-de-fichiers-dans-une-livraison",
    description: "Afin d’améliorer les performances du téléversement de données, des changements sur l’infrastructure ont été faits impliquant une modification de l’interface de téléversement.",
    tags: ["Changement","Alimentation","Rupture"],
    date: "2024-02-20" | jsDateObject
}) }}
</div>
</div>