---
title: Téléversement d'un document personnel
layout: layouts/parent.njk
eleventyNavigation:
    key: Téléversement d'un document personnel
    parent: Gestion des documents personnels
    order: 1
    nav: guides-developpeur
pictogram: digital/data-visualization.svg
---
{% from "components/component.njk" import component with context %}

Les documents personnels permettent d'héberger des fichiers rattachés à son propre compte, sans avoir besoin d'un entrepôt. Il sera alors possible de le partager avec d'autres comptes pour qu'ils puissent le consulter, ou via une URL publique, permettant alors la consultation anonyme du fichier.

## Téléversement d'un fichier sous forme de document personnel

Il n'y a aucun contrôle sur le type de fichier téléversé, il sera stocké tel quel et son poids sera compté dans le quota de stockage des documents personnels (consultable via l'appel GET /users/me).

Le fichier utilisé dans cet exemple est [croquis.geojson](/data/tutoriels/complementaire/croquis.geojson)

??? POST "{{ urls.api_entrepot }}/users/me/documents"

```title="Contenu"
{{ urls.api_entrepot }}/users/me/documents
```

    {{ component("table", {
        headers: ["Corps de requête Multipart"],
        data: [
            ["file = `<croquis.geojson>`"],
            ["name = `Mon super croquis`"],
            ["description = `Un petit coucou géoréférencé à l'IGN`"],
            ["labels = `tutoriels,croquis`"]
        ]
    }) }}

```json
{
    "name": "Mon super croquis",
    "description": "Un petit coucou géoréférencé à l'IGN",
    "size": 5435,
    "mime_type": "application/octet-stream",
    "labels": [
        "tutoriels",
        "croquis"
    ],
    "_id": "{document}"
}
```
???
<br>

Les labels vont permettre de filtrer nos documents lors de recherches ultérieures. À ce stade, seul le compte propriétaire du document peut télécharger le fichier, via l'API Entrepôt ({{ urls.api_entrepot }}/users/me/documents/{document}/file).

