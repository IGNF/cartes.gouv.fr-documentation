---
title: Contrôle des accès
description: Authentification et accès à l'entrepôt et aux services de diffusion
tags:
    - Contrôle des accès
eleventyNavigation:
    key: Contrôle des accès
    parent: Tutoriels d'utilisation de l'Entrepôt
    order: 5
    nav: developpeur
pictogram: system/padlock.svg
---

{% from "components/component.njk" import component with context %}

<div class="fr-grid-row--gutters fr-mb-1w">

<div class="fr-col fr-col-md-12">

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

</div>

<div class="fr-col fr-col-md-12">

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

</div>
