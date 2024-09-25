---
title: Gestion de l'espace personnel
description: Hébergemenet de documents personnels (croquis) et partage
date: git Last Modified
tags:
    - Espace personnel
    - Index des tutoriels
segments:
    - url: /developpeur
      title: Documentation développeur
    - url: /tutoriels
      title: Tutoriels
---

{% from "components/component.njk" import component with context %}

<div class="fr-grid-row--gutters fr-mb-1w">

<div class="fr-col fr-col-md-12">

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/complement/documents/televersement/",
    title: "Gestion des documents personnels",
    description: "Téléversement, modification et suppression des documents",
    image: {
        src: "/img/tutoriels/espace-personnel/gestion.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

<div class="fr-col fr-col-md-12">

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/complement/documents/partage/",
    title: "Partage des documents personnels",
    description: "Partage individualisé et authentifié ou partage public des documents personnels",
    image: {
        src: "/img/tutoriels/espace-personnel/partage.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

</div>
