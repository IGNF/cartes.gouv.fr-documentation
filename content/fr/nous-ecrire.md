---
title: Nous écrire
layout: layouts/accueil.njk
tags:
    - Assistance
    - Aide
eleventyNavigation:
    key: Nous écrire
    order: 5
    nav: main
sidemenuNav: nous-ecrire
---

{% from "components/component.njk" import component with context %}

{{ component("card", {
    url: false,
    externalUrl: "https://cartes.gouv.fr/nous-ecrire",
    title: "Alimentation et diffusion simple",
    description: "Téléversement d'images géoréférencées, calcul de pyramide raster, diffusion en WMS, WMTS et TMS",
    image: {
        src: "/img/tutoriels/raster/base.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}
