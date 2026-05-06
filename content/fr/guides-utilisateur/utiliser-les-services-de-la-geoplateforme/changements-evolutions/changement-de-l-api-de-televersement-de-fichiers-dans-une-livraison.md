---
title: Changement de l’API de téléversement de fichiers dans une livraison
description: Changements sur l’infrastructure ont été faits impliquant une modification de l’interface de téléversement
tags:
    - Alimentation
    - Rupture
eleventyNavigation:
    key: Changement de l’API de téléversement de fichiers dans une livraison
    order: 24
---

{% from "components/component.njk" import component with context %}

## Changements

Afin d’améliorer les performances du téléversement de données, des changements sur l’infrastructure ont été faits impliquant une modification de l’interface de téléversement.

Cette modification est actuellement déployée sur l’environnement de qualification. Elle sera déployée le 20 février sur l’environnement de production.

Les téléversements en dehors des données dans une livraison (métadonnées, annexes, statiques, fichiers MD5 dans une livraison) restent inchangés.

### Ancien usage de l’API

??? POST "/datastores/{datastore}/uploads/{upload}/data"

```plain
/datastores/{datastore}/uploads/{upload}/data
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["file = `image.tif`"],
        ["path  = `data`"]
    ]
}) }}

???

<br>

### Nouvel usage de l’API

L’information du chemin où écrire le fichier dans la livraison (path) devient un paramètre de requête et doit préciser le nom du fichier. Cela permet de changer de nom de fichier par rapport à celui en local.

??? POST "/datastores/{datastore}/uploads/{upload}/data?path=data/image.tif"

```plain
/datastores/{datastore}/uploads/{upload}/data?path=data/image.tif
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["file = `image.tif`"]
    ]
}) }}

???