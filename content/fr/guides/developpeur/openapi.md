---
title: Spécifications OpenAPI de l'API Entrepôt
date: git Last Modified
description: Détails de toutes les routes assurées par l'API Entrepôt
swaggerui: true
tags:
    - Spécifications OpenAPI
segments:
    - url: /guides/developpeur
      title: Guides développeur
eleventyNavigation:
    key: Spécifications OpenAPI de l'API Entrepôt
    order: 7
    nav: developpeur
---

{% from "components/component.njk" import component with context %}

{{ component("swaggerui", {
    url: "https://data.geopf.fr/api/v3/api-docs",
    targetId: "swagger-ui-demo"
}) }}
