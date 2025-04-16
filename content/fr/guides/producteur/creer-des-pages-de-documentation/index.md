---
title: Créer des pages de documentation
tags:
    - Documentation
segments:
    - url: /guides/producteur
      title: Guides producteur
date: git Last Modified
eleventyNavigation:
    key: Créer des pages de documentation
    order: 3
    nav: producteur
---

{% from "components/component.njk" import component with context %}

L’article suivant présente la fonctionnalité de création, modification et publication de documentation partenaire sur le site de documentation de Cartes.gouv.fr.

:::info
texte dans une bulle info.
:::
:::callout TitreDuBlocGris
TExte dans un bloc gris
:::

<div class="fr-grid-row fr-grid-row--gutters">

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/producteur/decouverte/ouvrir_cartesgouv/",
    title: "titre de la card",
    pictogram: "digital/internet.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/producteur/decouverte/remplir_formulaire/",
    title: "Remplir le formulaire d’inscription",
    pictogram: "leisure/digital-art.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/producteur/decouverte/espace_decouverte/",
    title: "Accéder à l’espace de travail « Découverte »",
    pictogram: "leisure/book.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/producteur/decouverte/creer_wfs/",
    title: "Créer et publier un service WFS",
    pictogram: "map/map.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/producteur/decouverte/creer_wms/",
    title: "Créer et publier un service WMS",
    pictogram: "map/map.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/producteur/decouverte/creer_tms/",
    title: "Créer et publier un service TMS",
    pictogram: "map/map.svg"
}) }}
</div>

</div>
