---
title: Guides développeur
layout: layouts/accueil.njk
eleventyNavigation:
    key: Guides développeur
    order: 3
    nav: main
sidemenuNav: guides-developpeur
---

## Toutes les ressources techniques pour utiliser cartes.gouv.fr et les briques de la Géoplateforme

Consultez nos guides, FAQ, tutoriels et documentations techniques pour vous accompagner dans la prise en main des outils de la Géoplateforme et cartes.gouv.fr.

### Entrepôt Géoplateforme

{% from "components/component.njk" import component with context %}

<div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">

<div class="fr-col-md-6">

{{ component("tile", {
    url: false,
    externalUrl: "https://geoplateforme.github.io/sdk-entrepot/",
    title: "Documentation du SDK python",
    description: "Pour consommer l'API Entrepôt plus facilement avec des scripts développés en python",
    pictogram: "digital/coding.svg"
}) }}

</div>

</div>
