---
title: Gestion des données vecteur
description: Chargement de données vecteur, mise à jour, tuilage, publication en WMS, WFS et TMS
date: git Last Modified
tags:
    - Donnée vecteur
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

<div class="fr-grid-row--gutters fr-mb-1w">

<div class="fr-col fr-col-md-12">

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/vecteur/base/",
    title: "Alimentation et diffusion simple",
    description: "Téléversement de fichiers vecteurs, intégration en base de données, diffusion en WMS et WFS",
    image: {
        src: "/img/tutoriels/vecteur/base.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

<div class="fr-col fr-col-md-12">

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/vecteur/mise-a-jour/",
    title: "Alimentation par mise à jour",
    description: "Téléversement de fichiers vecteurs, injection dans une base de données déjà existante et diffusée",
    image: {
        src: "/img/tutoriels/vecteur/maj.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>

</div>
