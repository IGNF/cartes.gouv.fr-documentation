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

<div class="fr-grid-row fr-grid-row--gutters">

<div class="fr-col-md-3">
{{ component("tile", {
    url: "/tutoriels/vecteur/",
    title: "Gestion des données vecteur",
    description: "Chargement de données vecteur, mise à jour, tuilage, publication en WMS, WFS et TMS",
    pictogram: "map/location-france.svg"
}) }}
</div>

<div class="fr-col-md-3">
{{ component("tile", {
    url: "/tutoriels/raster/",
    title: "Gestion des données raster",
    description: "Chargement d'image géoréférencées, calcul et mise à jour de pyramide, diffusion en WMS, WMTS et TMS, service d'altimétrie",
    pictogram: "map/map.svg"
}) }}
</div>

<div class="fr-col-md-3">
{{ component("tile", {
    url: "/tutoriels/archive/",
    title: "Gestion des données archives",
    description: "Chargement de fichiers archives, intégration, diffusion en téléchargement",
    pictogram: "document/document-download.svg"
}) }}
</div>

<div class="fr-col-md-3">
{{ component("tile", {
    url: "/tutoriels/complement/",
    title: "Gestion des données complémentaires",
    description: "Téléversement et diffusion de fichiers annexes et métadonnées",
    pictogram: "document/document-add.svg"
}) }}
</div>

<div class="fr-col-md-3">
{{ component("tile", {
    url: "/tutoriels/controle-des-acces/",
    title: "Contrôle des accès",
    description: "Authentification et accès à l'entrepôt et aux services de diffusion",
    pictogram: "system/padlock.svg"
}) }}
</div>

<div class="fr-col-md-3">
{{ component("tile", {
    url: "/tutoriels/gestion/",
    title: "Gestion des espaces de travail",
    description: "Gestion d'une communauté et de ses membres",
    pictogram: "environment/human-cooperation.svg"
}) }}
</div>

<div class="fr-col-md-3">
{{ component("tile", {
    url: "/tutoriels/recherche/",
    title: "Gestion des index de recherche",
    description: "Service de recherche des données de la Géoplateforme et gestion des index customs",
    pictogram: "digital/search.svg"
}) }}
</div>

<div class="fr-col-md-3">
{{ component("tile", {
    url: "/tutoriels/divers/",
    title: "Cas d'utilisation divers",
    description: "Mise en place de capacités de service personnalisées",
    pictogram: "leisure/paint.svg"
}) }}
</div>

</div>
