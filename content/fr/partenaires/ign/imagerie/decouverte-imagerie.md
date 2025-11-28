---
title: Découverte de l’offre produit
description: Comprendre et comparer ce que contient l’offre de données et services Imagerie de l’Institut National de l’Information Géographique et Forestière
eleventyNavigation:
    key: Découverte de l’offre produit
    parent: Imagerie
    order: 1
    nav: ign
---

{% from "components/component.njk" import component with context %}

{% set tabnavLinks = [
  { title: "Présentation", active: true },
  { title: "Choisir mon produit", url: "./produit-imagerie" }
] %}

{{ component("tabnav", { items: tabnavLinks }) }}
