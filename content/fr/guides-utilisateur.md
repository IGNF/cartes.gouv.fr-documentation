---
title: Guides utilisateur
layout: layouts/accueil.njk
tags:
    - Utilisateur
eleventyNavigation:
    key: Guides utilisateur
    order: 1
    nav: main
sidemenuNav: guides-utilisateur
---

## Toutes les ressources pour utiliser cartes.gouv.fr

Consultez nos guides, FAQ, tutoriels et documentations techniques pour vous accompagner dans la prise en main des outils de cartes.gouv.fr.

### Services Géoplateforme de diffusion, calcul et recherche

{% from "components/component.njk" import component with context %}

<div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

<div class="fr-col-6">

{{ component("tile", {
    url: false,
    externalUrl: "https://geoservices.ign.fr/documentation/services/services-geoplateforme",
    title: "Documentation des services Géoplateforme de diffusion, calcul et recheche",
    description: "Des services pour accéder aux géodatas hébergées sur la Géoplateforme",
    pictogram: "leisure/book.svg"
}) }}

</div>

</div>
