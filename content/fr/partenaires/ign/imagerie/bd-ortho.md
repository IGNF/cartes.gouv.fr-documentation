---
title: BD ORTHO®
description: La France vue du ciel tous les 3 ans depuis 2020
tags:
    - Imagerie aérienne
    - HVD
    - Millésimes
    - RVB
    - IRC
    - Anthropocène
    - Plan
    - GE
edition: dernière
eleventyNavigation:
    key: BD ORTHO®
    order: 2
image:
    src: /img/partenaires/ign/imagerie/bd-ortho.png
    alt: BD ORTHO®
---

{% from "components/component.njk" import component with context %}

{% set tabnavLinks = [
  { title: "Description du produit", active: true },
  { title: "Disponibilités / Prévisions", url: "./disponibilites-previsions" },
  { title: "Actualités", url: "./actualites" },
  { title: "Contrôles qualités", url: "./controles-qualites" }
] %}

{{ component("tabnav", { items: tabnavLinks }) }}

Consulter le catalogue : <a href="https://cartes.gouv.fr/catalogue/dataset/IGNF_BD-ORTHO" target="_blank" rel="noopener noreferrer" title="cartes.gouv.fr/catalogue/dataset/IGNF_BD-ORTHO - ouvre une nouvelle fenêtre">BD ORTHO®</a>

Fond de plan d'images aériennes de référence à haute résolution 20 cm.
