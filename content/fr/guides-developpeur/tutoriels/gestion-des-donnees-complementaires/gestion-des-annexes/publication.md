---
title: Publication d'une annexe
layout: layouts/parent.njk
eleventyNavigation:
    key: Publication d'une annexe
    parent: Gestion des annexes
    order: 2
    nav: guides-developpeur
pictogram: digital/data-visualization.svg
---

La publication de l'annexe va rendre les URL publiques accessible. L'URL finale d'une annexe est de la forme : `{racine du service de diffusion des annexes}/{nom technique de l'entrepôt}/{paths de l'annexe}`.

L'ajout au chemin du nom technique de l'entrepôt permet de gérer l'unicité d'un chemin de publication d'une annexe seulement au sein d'un entrepôt. Ce nom est récupérable avec l'appel **GET** `/datastores/{identifiant de l'entrepôt de travail}`. Dans l'exemple qui suit, la racine d'accès public aux annexes de mon entrepôt est {{ urls.annexes }}/{technical_name}.

Publier une annexe revient à modifier son statut de publication.

??? PATCH "{{ urls.api_entrepot }}/datastores/{datastore}/annexes/{annexe}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/annexes/{annexe}
```

```json
{
    "published": true
}
```

```json
{
    "paths": ["/imagettes/rgealti.jpg", "/quickview/rgealti.jpg"],
    "size": 18415,
    "mime_type": "image/jpeg",
    "published": true,
    "labels": [],
    "_id": "{annexe}"
}
```

???
<br>

Les URL suivantes sont maintenant disponibles :

- {{ urls.annexes }}/{technical_name}/imagettes/rgealti.jpg
- {{ urls.annexes }}/{technical_name}/quickview/rgealti.jpg

Les étiquettes (labels), non utilisées ici, permettent de rechercher plus facilement des annexes via l'API Entrepôt et de publier par paquet.
