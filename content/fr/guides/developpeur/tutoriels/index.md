---
title: Tutoriels d'utilisation de l'Entrepôt
description: Accès au différents tutoriels, par type de données et d'usage
date: git Last Modified
segments:
    - url: /guides/developpeur
      title: Guides développeur
eleventyNavigation:
    key: Tutoriels d'utilisation de l'Entrepôt
    order: 6
    nav: developpeur
---

{% from "components/component.njk" import component with context %}

<div class="fr-grid-row fr-grid-row--gutters">

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/developpeur/tutoriels/vecteur/",
    title: "Gestion des données vecteur",
    description: "Chargement de données vecteur, mise à jour, tuilage, publication en WMS, WFS et TMS",
    pictogram: "map/map.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/developpeur/tutoriels/raster/",
    title: "Gestion des données raster",
    description: "Chargement d'image géoréférencées, calcul et mise à jour de pyramide, diffusion en WMS, WMTS et TMS, service d'altimétrie",
    pictogram: "custom/raster.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/developpeur/tutoriels/archive/",
    title: "Gestion des données archives",
    description: "Chargement de fichiers archives, intégration, diffusion en téléchargement",
    pictogram: "custom/archive.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/developpeur/tutoriels/complement/",
    title: "Gestion des données complémentaires",
    description: "Téléversement et diffusion de fichiers annexes et métadonnées",
    pictogram: "document/document-add.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/developpeur/tutoriels/controle-des-acces/",
    title: "Contrôle des accès",
    description: "Authentification et accès à l'entrepôt et aux services de diffusion",
    pictogram: "system/padlock.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/developpeur/tutoriels/espace-travail/",
    title: "Gestion des espaces de travail",
    description: "Gestion d'une communauté et de ses membres",
    pictogram: "environment/human-cooperation.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/developpeur/tutoriels/recherche/",
    title: "Gestion des index de recherche",
    description: "Service de recherche des données de la Géoplateforme et gestion des index customs",
    pictogram: "digital/search.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/developpeur/tutoriels/espace-personnel/",
    title: "Gestion de l'espace personnel",
    description: "Hébergemenet de documents personnels (croquis) et partage",
    pictogram: "document/national-identity-card.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/developpeur/tutoriels/divers/",
    title: "Cas d'utilisation divers",
    description: "Mise en place de capacités de service personnalisées",
    pictogram: "leisure/paint.svg"
}) }}
</div>

</div>
