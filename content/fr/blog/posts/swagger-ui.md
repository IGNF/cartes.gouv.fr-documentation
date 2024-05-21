---
title: Intégration du Swagger UI
description: Comment intégrer le Swagger UI dans une page du site ?
date: git Last Modified
swaggerui: true
tags:
    - composant
---

Chaque composant peut être inclus dans un fichier Nunjucks `.njk` ou Markdown `.md`.

## Exemple d'utilisation

```njk
{% raw %}
{% from "components/component.njk" import component with context %}
{{ component("swaggerui", {
    url: "https://data-qua.priv.geopf.fr/api/v3/api-docs",
    targetId: "swagger-ui-demo"
}) }}
{% endraw %}
```

Le format complet de l'objet en paramètre est le suivant :

```json
{
    "url": "string",
    "targetId": "string",
    "docExpansion": "full|list|none*"
}
```

## Rendu

{% from "components/component.njk" import component with context %}
{{ component("swaggerui", {
    url: "https://data-qua.priv.geopf.fr/api/v3/api-docs",
    targetId: "swagger-ui-demo"
}) }}
