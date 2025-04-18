---
title: Créer des pages de documentation
tags:
    - Documentation
    - Partenaire
segments:
    - url: /guides/producteur
      title: Guides producteur
date: git Last Modified
eleventyNavigation:
    key: Créer des pages de documentation
    order: 2
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
    url: "/guides/producteur/creer-des-pages-de-documentation/installation-documentation/",
    title: "Installation de la documentation",
    pictogram: "digital/internet.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/producteur/creer-des-pages-de-documentation/previsualiser-le-site-en-local/",
    title: "prévisualiser le site en local",
    pictogram: "digital/internet.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/producteur/creer-des-pages-de-documentation/rediger-documentation/",
    title: "Rédiger sa documentation",
    pictogram: "leisure/digital-art.svg"
}) }}
</div>

<div class="fr-col-md-4">
{{ component("tile", {
    url: "/guides/producteur/creer-des-pages-de-documentation/demander-pull-request/",
    title: "Demander la fusion au dépôt principal",
    pictogram: "leisure/book.svg"
}) }}
</div>

</div>
