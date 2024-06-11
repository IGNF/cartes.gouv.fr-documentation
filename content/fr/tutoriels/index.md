---
title: Tutoriels d'utilisation de l'Entrepôt
description: Accès au différents tutoriels, par type de données et d'usage
date: git Last Modified
tags:
    - Index des tutoriels
---

{% from "components/component.njk" import component with context %}

{{ component("breadcrumb", {
    segments: [{
        url: "/developpeur/",
        title: "Documentation développeur"
    }]
}) }}

<div>

{{ component("card", {
    url: "/tutoriels/vecteur/",
    title: "Gestion des données vecteur",
    description: "Chargement de données vecteur, mise à jour, tuilage, publication en WMS, WFS et TMS",
    image: {
        src: "/img/tutoriels/vecteur.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}
{{ component("card", {
    url: "/tutoriels/raster/",
    title: "Gestion des données raster",
    description: "Chargement d'image géoréférencées, calcul et mise à jour de pyramide, diffusion en WMS, WMTS et TMS, service d'altimétrie",
    image: {
        src: "/img/tutoriels/raster.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

{{ component("card", {
    url: "/tutoriels/archive/",
    title: "Gestion des données archives",
    description: "Chargement de fichiers archives, intégration, diffusion en téléchargement",
    image: {
        src: "/img/tutoriels/archive.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

{{ component("card", {
    url: "/tutoriels/complement/",
    title: "Gestion des données complémentaires",
    description: "Téléversement et diffusion de fichiers annexes et métadonnées",
    image: {
        src: "/img/tutoriels/complement.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

{{ component("card", {
    url: "/tutoriels/controle-des-acces/",
    title: "Contrôle des accès",
    description: "Authentification et accès à l'entrepôt et aux services de diffusion",
    image: {
        src: "/img/tutoriels/cda.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

{{ component("card", {
    url: "/tutoriels/gestion/",
    title: "Gestion des espaces de travail",
    description: "Gestion d'une communauté et de ses membres",
    image: {
        src: "/img/tutoriels/gestion.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

{{ component("card", {
    url: "/tutoriels/recherche/",
    title: "Gestion des index de recherche",
    description: "Service de recherche des données de la Géoplateforme et gestion des index customs",
    image: {
        src: "/img/tutoriels/search.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

{{ component("card", {
    url: "/tutoriels/divers/",
    title: "Cas d'utilisation divers",
    description: "Mise en place de capacités de service personnalisées",
    image: {
        src: "/img/tutoriels/divers.png",
        alt: ""
    },
    addClass: "fr-card--horizontal-tier"
}) }}

</div>
