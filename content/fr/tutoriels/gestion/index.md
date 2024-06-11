---
title: Gestion des espaces de travail
description: Gestion d'une communauté et de ses membres
date: git Last Modified
tags:
    - Gestion
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
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/gestion/communaute/gestion_membres/",
    title: "Gestion des membres d'une communauté",
    description: "Ajout ou suppression de membres, définition des droits",
    image: {
        src: "/img/tutoriels/gestion/communaute.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>
