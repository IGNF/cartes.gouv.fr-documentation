---
title: BD ORTHO® Historique
description: Fond de plan d'images aériennes au 20ème siècle
tags:
    - Imagerie aérienne
    - Millésimes
    - Noir et blanc
    - Anthropocène 
    - ME
edition: historique
eleventyNavigation:
    key: BD ORTHO® Historique
    order: 5
image:
    src: /img/partenaires/ign/imagerie/ortho-histo.png
    alt: BD ORTHO® Historique
---

{% from "components/component.njk" import component with context %}

{% set tabnavLinks = [
  { title: "Description du produit", active: true },
  { title: "Disponibilités / Prévisions", url: "./disponibilites-previsions" },
  { title: "Actualités", url: "./actualites" }
] %}

{{ component("tabnav", { items: tabnavLinks }) }}

Consulter le catalogue : <a href="https://cartes.gouv.fr/catalogue/dataset/IGNF_BD-ORTHO-HISTO" target="_blank" rel="noopener noreferrer" title="cartes.gouv.fr/catalogue/dataset/IGNF_BD-ORTHO-HISTO - ouvre une nouvelle fenêtre">BD ORTHO® Historique</a>
