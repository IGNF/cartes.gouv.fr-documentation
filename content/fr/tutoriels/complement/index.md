---
title: Gestion des données complémentaires
description: Téléversement et diffusion de fichiers annexes et métadonnées
date: git Last Modified
tags:
    - Donnée complémentaire
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
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/complement/annexes/televersement/",
    title: "Gestion des annexes",
    description: "Téléversement de fichiers en tant qu'annexe et publication",
    image: {
        src: "/img/tutoriels/complement/annexes.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

<div class="fr-col fr-col-md-12">

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/complement/metadonnees/televersement/",
    title: "Gestion des métadonnées",
    description: "Téléversement de fichiers en tant que métadonnée et publication",
    image: {
        src: "/img/tutoriels/complement/metadonnees.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

</div>
