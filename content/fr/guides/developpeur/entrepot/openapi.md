---
title: Spécifications OpenAPI de l'API Entrepôt
description: Détails de toutes les routes assurées par l'API Entrepôt
date: git Last Modified
swaggerui: true
tags:
    - Spécifications OpenAPI
segments:
    - url: /guides/developpeur
      title: Guides développeur
layout: layouts/developpeur.njk
eleventyNavigation:
    key: Spécifications OpenAPI de l'API Entrepôt
    order: 3
    nav: developpeur
---

{% from "components/component.njk" import component with context %}

{{ component("swaggerui", {
    url: "https://data.geopf.fr/api/v3/api-docs",
    targetId: "swagger-ui-demo"
}) }}
