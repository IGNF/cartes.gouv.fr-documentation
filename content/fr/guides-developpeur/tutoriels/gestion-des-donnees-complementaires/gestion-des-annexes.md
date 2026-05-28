---
title: Gestion des annexes
description: Téléversement de fichiers en tant qu’annexe et publication
layout: layouts/parent_nav_tertiaire.njk
eleventyNavigation:
    key: Gestion des annexes
    order: 1
pictogram: digital/data-visualization.svg
tertiaryTitle: Téléversement
subTitle: Téléversement d’une annexe
---

{% from "components/component.njk" import component with context %}

Les annexes permettent d’héberger des fichiers à destination des applications clientes mais qui ne sont pas utilisés au sein de la plateforme. Si des serveurs ou des traitements de la plateforme ont besoin de fichiers, ce sont les fichiers statiques (static) qui sont destinés à cet usage (les styles GeoServer par exemple).

Une annexe aura une ou plusieurs URL publiques d’accès définies par l’utilisateur une fois publiée.

### Téléversement d’un fichier sous forme d’annexe

Il n’y a aucun contrôle sur le type de fichier téléversé, il sera stocké tel quel et son poids sera compté dans le quota de stockage des annexes.

Voici le fichier utilisé dans cet exemple :

![Carte de la Bretagne](/img/guides-developpeur/complementaire/imagette.jpg){.fr-responsive-img .frx-img-contained}

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/annexes"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/annexes
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;imagette.jpg&gt;"],
        ["paths = imagettes/rgealti.jpg"],
        ["paths = quickview/rgealti.jpg"]
    ]
}) }}

```json
{
    "paths": [
        "/imagettes/rgealti.jpg",
        "/quickview/rgealti.jpg"
    ],
    "size": 18415,
    "mime_type": "image/jpeg",
    "published": false,
    "_id": "{annexe}"
}
```

???

<br>

À ce stade, elle n’est accessible que par l’API Entrepôt, aux utilisateurs membres de la communauté, via son identifiant.