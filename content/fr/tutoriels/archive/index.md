---
title: Gestion des données archives
description: Chargement de fichiers archives, intégration, diffusion en téléchargement
date: git Last Modified
tags:
    - Donnée archive
    - Index des tutoriels
---

{% from "components/component.njk" import component with context %}

{{ component("breadcrumb", {
    segments: [{
        url: "/developpeur/",
        title: "Documentation développeur"
    },{
        url: "/tutoriels/",
        title: "Tutoriels"
    }]
}) }}

<div>

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/archive/base/",
    title: "Alimentation et diffusion simple",
    description: "Téléversement de fichiers, copie, diffusion en telechargement",
    image: {
        src: "/img/tutoriels/archive/base.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>
