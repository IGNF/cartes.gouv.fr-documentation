---
title: Données raster
description: Chargement d'image géoréférencées, calcul et mise à jour de pyramide, diffusion en WMS, WMTS et TMS, service d'altimétrie
tags:
    - Donnée raster
eleventyNavigation:
    key: Données raster
    parent: Tutoriels d'utilisation de l'Entrepôt
    order: 2
    nav: guides-developpeur
pictogram: custom/raster.svg
---

{% from "components/component.njk" import component with context %}

<div class="fr-grid-row--gutters fr-mb-1w">

<div class="fr-col fr-col-md-12">

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/raster/base/",
    title: "Alimentation et diffusion simple",
    description: "Téléversement d'images géoréférencées, calcul de pyramide raster, diffusion en WMS, WMTS et TMS",
    image: {
        src: "/img/tutoriels/raster/base.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

<div class="fr-col fr-col-md-12">

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/raster/mise-a-jour/",
    title: "Alimentation par mise à jour",
    description: "Téléversement d'images géoréférencées, mise à jour de pyramide par injection ou par référence, composition a posteriori",
    image: {
        src: "/img/tutoriels/raster/maj.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

<div class="fr-col fr-col-md-12">

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/raster/mnt/",
    title: "Gestion de données MNT",
    description: "Téléversement d'images à canal flottant, calcul de pyramide, diffusion en WMS et utilisation dans le service d'altimétrie",
    image: {
        src: "/img/tutoriels/raster/mnt.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

</div>
