---
title: Gestion des styles pour la diffusion WMS de données vecteur
eleventyNavigation:
    key: Gestion des styles pour la diffusion WMS de données vecteur
    order: 4
summary:
    visible: true
tertiaryTitle: Gestion des styles
---

{% from "components/component.njk" import component with context %}

Pour certains types de diffusion, le serveur de diffusion peut avoir besoin de fichiers de configuration. Dans le cas de la diffusion WMS à partir de données vecteur, assurée par GeoServer, ce sont des styles au format SLD et des FTL qui sont utilisés. Afin de les déposer au sein de l’entrepôt, le concept de fichier statique (<span lang="en">_static_</span>) est exploité.

### Génération d’un SLD

Après l’export des styles depuis QGIS dans son format, il est nécessaire d’utiliser l’outil GeoStyler en ligne de commande pour les convertir :

```bash
$  geostyler-cli -o ecoregions.sld -t sld -s qgis ecoregions.qml
✔ File "ecoregions.qml" translated successfully. Output written to ecoregions.sld
$  geostyler-cli -o pays.sld -t sld -s qgis pays.qml
✔ File "pays.qml" translated successfully. Output written to pays.sld
```

:::warning
Chaque outil d’export peut entraîner des comportements différents. Au final, le SLD sera interprété par GeoServer sur la Géoplateforme. Le plugin [GeoCat Bridge](https://plugins.qgis.org/plugins/geocatbridge/) peut également être utilisé.
:::

{{ component("download", {
    title: "ecoregions.sld",
    href: "/data/tutoriels/alimentation-diffusion-simple/ecoregions.sld",
    detail: "SLD - 10.6Ko"
}) }}

{{ component("download", {
    title: "pays.sld",
    href: "/data/tutoriels/alimentation-diffusion-simple/pays.sld",
    detail: "SLD - 847o"
}) }}

### Écriture de FTL

Ces [fichiers FTL](https://docs.geoserver.org/stable/en/user/tutorials/freemarker.html) permettent de mettre en forme la réponse HTML lors des appels au GetFeatureInfo.

{{ component("download", {
    title: "ecoregions.ftl",
    href: "/data/tutoriels/alimentation-diffusion-simple/ecoregions.ftl",
    detail: "FTL - 118o"
}) }}

```plain
/data/tutoriels/alimentation-diffusion-simple/ecoregions.ftl
```

{{ component("download", {
    title: "pays.ftl",
    href: "/data/tutoriels/alimentation-diffusion-simple/pays.ftl",
    detail: "FTL - 75o"
}) }}

```plain
/data/tutoriels/alimentation-diffusion-simple/pays.ftl
```

### Téléversement dans l’entrepôt

On dépose les 4 fichiers de configuration (2 SLD et 2 FTL).

📄 `<ecoregions.sld>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/statics"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/statics
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;ecoregions.sld&gt;"],
        ["type = GEOSERVER-STYLE"],
        ["name = Style pour les écorégions"]
    ]
}) }}

```json
{
    "name": "Style pour les écorégions",
    "type": "GEOSERVER-STYLE",
    "_id": "{sld ecoregions}",
    "type_infos": {
        "used_attributes": ["biome_name"]
    }
}
```

???

<br>

📄 `<pays.sld>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/statics"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/statics
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;pays.sld&gt;"],
        ["type = GEOSERVER-STYLE"],
        ["name = Style pour les pays"]
    ]
}) }}

```json
{
    "name": "Style pour les pays",
    "type": "GEOSERVER-STYLE",
    "_id": "{sld pays}",
    "type_infos": {}
}
```

???

<br>

📄 `<ecoregions.ftl>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/statics"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/statics
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;ecoregions.ftl&gt;"],
        ["type = GEOSERVER-FTL"],
        ["name = FTL pour les écorégions"]
    ]
}) }}

```json
{
    "name": "FTL pour les écorégions",
    "type": "GEOSERVER-FTL",
    "_id": "{ftl ecoregions}",
    "type_infos": {
        "used_attributes": ["biome_name", "eco_name"]
    }
}
```

???

<br>

📄 `<pays.ftl>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/statics"

```plain
{{ urls.api_entrepot }}/datastores/{datastore}/statics
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;pays.ftl&gt;"],
        ["type = GEOSERVER-FTL"],
        ["name = FTL pour les pays"]
    ]
}) }}

```json
{
    "name": "FTL pour les pays",
    "type": "GEOSERVER-FTL",
    "_id": "{ftl pays}",
    "type_infos": {
        "used_attributes": ["name"]
    }
}
```

???