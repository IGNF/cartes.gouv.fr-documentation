---
title: Publication en WMS
mermaid: true
eleventyNavigation:
    key: Publication en WMS
    parent: Gestion de données MNT
    order: 3
    nav: guides-developpeur
---

{% from "components/component.njk" import component with context %}

## Mise en place d'un style

Les données MNT ont un format particulier : les images possèdent un unique canal contenant des valeurs flottantes. Les flux WMS et WMTS permettent de récupérer les données brutes (pour d'éventuels calculs), mais leur affichage peut s'avérer complexe.

En WMS, on va permettre la demande de donnée symbolisée, en appliquant des teintes hypsométriques. Afin que le consommateur des flux puisse connaître les caractéristiques de ces teintes, nous allons mettre en ligne la légende, qui sera référencée dans le style via son URL.

Nous allons partir sur une représentation qui, sur la donnée en exemple, donne le résultat suivant.

![Teintes hypsométriques](/img/guides-developpeur/raster/mnt/mnt_hypso.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Avec la légende :

![Légende](/img/guides-developpeur/raster/mnt/hypso_legende.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Hébergement de la légende sous forme d'annexe

Pour obtenir une URL publique pointant sur notre légende, nous allons la téléverser dans l'entrepôt sous forme d'annexe, en demandant la publication immédiate.

📄 `<hypso_legende.png>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/annexes"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/annexes
```

    {{ component("table", {
        headers: ["Corps de requête Multipart"],
        data: [
            ["file = `<hypso_legende.png>`"],
            ["paths = legendes/teintes_hypsometriques.png"],
            ["published = `true`"],
            ["labels = legende"]
        ]
    }) }}
???
<br>

L'ajout d'un label facilite la recherche des annexes et leur gestion (publication/dépublication).

La légende est maintenant accessible à l'URL `{{ urls.annexes }}/{technical_name}/legendes/teintes_hypsometriques.png`.

### Téléversement du style à destination du serveur WMS

Le style permettant au serveur WMS d'appliquer ces teintes aux donnée MNT est le suivant :

```json title="Contenu de hypso.json"
{
	"identifier": "hypsometrique",
    "title": "Teintes hypsométriques",
	"abstract": "Teintes hypsométriques",
	"keywords": ["MNT"],
    "legend": {
        "format": "image/png",
        "url": "{{ urls.annexes }}/{technical_name}/legendes/teintes_hypsometriques.png",
        "height": 118,
        "width": 87,
        "min_scale_denominator": 0,
        "max_scale_denominator": 10000000
    },
    "palette": {
        "max_value": 3.40282e+38,
        "rgb_continuous": true,
        "alpha_continuous": true,
        "colours": [
            { "value": -100000, "red": 0, "green": 0, "blue": 0, "alpha": 0 },
            { "value": -98000, "red": 0, "green": 0, "blue": 0, "alpha": 0 },
            { "value": 0, "red": 161, "green": 225, "blue": 143, "alpha": 255 },
            { "value": 500, "red": 48, "green": 164, "blue": 16, "alpha": 255 },
            { "value": 1500, "red": 237, "green": 239, "blue": 0, "alpha": 255 },
            { "value": 2000, "red": 225, "green": 0, "blue": 0, "alpha": 255 },
            { "value": 2500, "red": 0, "green": 0, "blue": 0, "alpha": 255 },
            { "value": 4000, "red": 255, "green": 255, "blue": 255, "alpha": 255 }
        ]
    }
}
```

On y précise bien les informations sur la légende associée. Le champ `identifier` sera l'identifiant public que les consommateurs du WMS pourront préciser dans les requêtes pour demander l'utilisation de ce style.

📄 `hypso.json`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/statics"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/statics
```

    {{ component("table", {
        headers: ["Corps de requête Multipart"],
        data: [
            ["file = <hypso.json>"],
            ["type = ROK4-STYLE"],
            ["name = Teintes hypsométriques"]
        ]
    }) }}
  

```json
{
    "name": "Teintes hypsométriques",
    "type": "ROK4-STYLE",
    "_id": "{style hypso}",
    "type_infos": {
        "identifier": "hypsometrique",
        "legend_url": "{{ urls.annexes }}/{technical_name}/legendes/teintes_hypsometriques.png"
    }
}
```
???
<br>

Pour que la même couche puisse être aussi interrogée au format brut, nous allons déposer un style qui ne modifie pas la donnée

```json title="Contenu de normal.json"
{
	"identifier": "normal",
    "title": "Données brutes",
	"abstract": "Données brutes, sans transformation",
	"keywords": ["MNT"],
    "legend": {
        "format": "image/jpeg",
        "url": "https://data.geopf.fr/annexes/ressources/legendes/LEGEND.jpg",
        "height": 69,
        "width": 280,
        "min_scale_denominator": 0,
        "max_scale_denominator": 10000000
    }
}
```

On y précise bien les informations sur la légende associée. Le champ `identifier` sera l'identifiant public que les consommateurs du WMS pourront préciser dans les requêtes pour demander l'utilisation de ce style. Une même couche ne peut pas avoir deux styles qui ont le même `identifier`.

📄 `normal.json`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/statics"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/statics
```
    {{ component("table", {
        headers: ["Corps de requête Multipart"],
        data: [
            ["file = <normal.json>"],
            ["type = ROK4-STYLE"],
            ["name = Données brutes"]
        ]
    }) }}  

```json
{
    "name": "Données brutes",
    "type": "ROK4-STYLE",
    "_id": "{style normal}",
    "type_infos": {
        "identifier": "normal",
        "legend_url": "https://data.geopf.fr/annexes/ressources/legendes/LEGEND.jpg"
    }
}
```
???
<br>

## Configuration de la diffusion

Nous allons publier la donnée selon une couche, avec les deux styles. Le style mis en premier sera celui appliqué par défaut si aucun style n'est précisé dans la requête GetMap.

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```

```json
{
    "type": "WMS-RASTER",
    "name": "MNT LidarHD données brutes",
    "layer_name": "lidarhd",
    "type_infos": {
        "title": "MNT LidarHD",
        "abstract": "MNT LidarHD brut",
        "keywords": [
            "MNT", "LidarHD"
        ],
        "styles": [
            "{style normal}",
            "{style hypso}"
        ],
        "interpolation": "NEAREST-NEIGHBOUR",
        "used_data": [
            {
                "bottom_level": "18",
                "top_level": "0",
                "stored_data": "{stored data MNT}"
            }
        ]
    },
    "getfeatureinfo": {
        "stored_data": true
    }
}
```
???
<br>

## Envoi sur les services de diffusion

Seule la création d'une offre sur un point d'accès (publication) permet d'envoyer les informations de configuration au serveurs de diffusion.

### Consultation des points de diffusion disponibles

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}
```

```json
{{ "public/data/tutoriels/alimentation-diffusion-simple/globales/production/endpoints.json" | readJSON | safe }}
```
???
<br>

### Publication

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wms lidarhd}/offerings"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wms lidarhd}/offerings
```

```json
{
    "endpoint": "{{ ids.endpoints.open.wmsr }}",
    "open": true
}
```
???
<br>

On peut vérifier la présence de notre couche `lidarhd` dans le [getCapabilities du service]({{ urls.public.wmsr }}?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0), avec la présence des deux styles.

Dans QGis, on retrouve la légende déposée sous forme d'annexe.

![Visualisation MNT avec teintes hypsométriques dans QGis](/img/guides-developpeur/raster/mnt/qgis_mnt_legend.png){.fr-responsive-img .frx-border-img .frx-img-contained}
