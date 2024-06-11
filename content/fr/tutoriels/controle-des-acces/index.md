---
title: Contrôle des accès
description: Authentification et accès à l'entrepôt et aux services de diffusion
date: git Last Modified
tags:
    - Contrôle des accès
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
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/controle-des-acces/entrepot/creation_compte/",
    title: "Contrôle des accès à l'API Entrepôt",
    description: "Création du compte sur le gestionnaire d'identité, authentification et consommation de l'API Entrepôt",
    image: {
        src: "/img/tutoriels/controle-des-acces/entrepot.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

{{ component("card", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/tutoriels/production/controle-des-acces/diffusion/",
    title: "Contrôle des accès aux services de diffusion",
    description: "Définition des permissions, gestion des clés et de leurs accès",
    image: {
        src: "/img/tutoriels/controle-des-acces/diffusion.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>
