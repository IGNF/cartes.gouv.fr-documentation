---
title: Publier ses propres données depuis cartes.gouv.fr
description: Fonctionnalité alimentation / diffusion
date: git Last Modified
tags:
    - Découverte
segments:
    - url: /producteur
      title: Documentation producteur
layout: layouts/profil_prod.njk
eleventyNavigation:
    key: Publier ses propres données depuis cartes.gouv.fr
    order: 1
    nav: prod
---

{% from "components/component.njk" import component with context %}

L’article suivant présente la fonctionnalité de chargement et diffusion de géo-données de cartes.gouv.fr. Elle permet aux utilisateurs de déposer de la donnée, la stocker, paramétrer des flux de diffusion et visualiser sur une carte.

:::info
Ce tutoriel détaille les étapes de mise en œuvre au travers du parcours « bac à sable », correspondant à l’offre « découverte ».
:::
:::callout Offre découverte
Une offre idéale pour éprouver les fonctionnalités disponibles et s’assurer de leur bonne adéquation à vos besoins.

- 100 Go hébergés sur un entrepôt mutualisé avec suppression trimestrielle
- 20 couches de donnée
- Support par email [geoplateforme@ign.fr](mailto:geoplateforme@ign.fr)
  :::

<div class="fr-grid-row fr-grid-row--gutters">

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/tutoriels/decouverte/ouvrir_cartesgouv/",
    title: "Ouvrir cartes.gouv.fr",
    pictogram: "digital/internet.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/tutoriels/decouverte/remplir_formulaire/",
    title: "Remplir le formulaire d’inscription",
    pictogram: "leisure/digital-art.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/tutoriels/decouverte/espace_decouverte/",
    title: "Accéder à l’espace de travail « Découverte »",
    pictogram: "leisure/book.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/tutoriels/decouverte/creer_wfs/",
    title: "Créer et publier un service WFS",
    pictogram: "map/map.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/tutoriels/decouverte/creer_wms/",
    title: "Créer et publier un service WMS",
    pictogram: "map/map.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/tutoriels/decouverte/creer_tms/",
    title: "Créer et publier un service TMS",
    pictogram: "map/map.svg"
}) }}
</div>

</div>
