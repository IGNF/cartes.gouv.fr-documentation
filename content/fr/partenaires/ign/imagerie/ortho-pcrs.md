---
title: Ortho PCRS
description: Fond de plan d'images aériennes à très haute résolution 5 cm
tags:
    - Imagerie aérienne
    - THR
    - RVB
    - Plan
    - GE
edition: dernière
eleventyNavigation:
    key: Ortho PCRS
    order: 6
image:
    src: /img/partenaires/ign/imagerie/pcrs.png
    alt: Ortho PCRS
---

{% from "components/component.njk" import component with context %}

{% set tabnavLinks = [
  { title: "Description du produit", active: true },
  { title: "Disponibilités / Prévisions", url: "./disponibilites-previsions" },
  { title: "Actualités", url: "./actualites" }
] %}

{{ component("tabnav", { items: tabnavLinks }) }}

Consulter le catalogue : <a href="https://cartes.gouv.fr/catalogue/dataset/IGNF_PCRS" target="_blank" rel="noopener noreferrer" title="cartes.gouv.fr/catalogue/dataset/IGNF_PCRS - ouvre une nouvelle fenêtre">PCRS</a>
