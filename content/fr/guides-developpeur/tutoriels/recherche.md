---
title: Index de recherche
description: Service de recherche des données de la Géoplateforme et gestion des index customs
tags:
    - Donnée indexée
eleventyNavigation:
    key: Index de recherche
    parent: Tutoriels d'utilisation de l'Entrepôt
    order: 7
    nav: developpeur
pictogram: digital/search.svg
---

{% from "components/component.njk" import component with context %}

<div class="fr-grid-row--gutters fr-mb-1w">

<div class="fr-col fr-col-md-12">

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/recherche/standard/",
    title: "Utilisation du service de recherche de couche",
    description: "Consultation du service de recherche de couche, identification des ressources publiées",
    image: {
        src: "/img/tutoriels/recherche/standard.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

<div class="fr-col fr-col-md-12">

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/recherche/custom/creation/",
    title: "Mise en place d'un index de recherche personnalisé",
    description: "Téléversement de fichiers d'index, intégration et mise à jour, diffusion via le service de recherche",
    image: {
        src: "/img/tutoriels/recherche/custom.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

</div>
