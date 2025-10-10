---
title: Données complémentaires
description: Téléversement et diffusion de fichiers annexes et métadonnées
tags:
    - Donnée complémentaire
eleventyNavigation:
    key: Données complémentaires
    parent: Tutoriels d'utilisation de l'Entrepôt
    order: 5
    nav: guides-developpeur
pictogram: document/document-add.svg
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
