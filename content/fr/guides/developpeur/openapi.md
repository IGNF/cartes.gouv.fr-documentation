---
title: Spécifications OpenAPI de l'API Entrepôt
description: Détails de toutes les routes assurées par l'API Entrepôt
swaggerui: true
tags:
    - Spécifications OpenAPI
eleventyNavigation:
    key: Spécifications OpenAPI de l'API Entrepôt
    order: 7
    nav: developpeur
pictogram: custom/swagger.svg
---

{% from "components/component.njk" import component with context %}

{{ component("swaggerui", {
    url: "https://data.geopf.fr/api/v3/api-docs",
    targetId: "swagger-ui-demo"
}) }}
