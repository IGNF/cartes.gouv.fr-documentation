---
title: Gestion des espaces de travail
description: Création des espaces de travail, affectation des ressources et définition des quotas. 
<br> :warning: Nécessite d'avoir le rôle ADMINISTRATEUR
mermaid: true
layout: layouts/parent.njk
eleventyNavigation:
    key: Gestion des espaces de travail
    parent: Espaces de travail
    order: 3
    nav: guides-developpeur
---

{% from "components/component.njk" import component with context %}

Le but de ce tutoriel est de permettre à des utilisateurs **ayant le rôle ADMINISTRATOR** de créer et modifier des espaces de travail pour permettre à des producteurs de données d'utiliser l'Entrepôt Géoplateforme.

## Lister les entités globales

Définir un espace de travail implique de connaître les ressources partagées pour les affecter avec quota. Il y 4 types de ressources partagées :

- Les espaces de stockages : **GET** `{{ urls.api_entrepot }}/administrator/storages`
- Les points d'accès pour la diffusion des données : **GET** `{{ urls.api_entrepot }}/administrator/endpoints`
- Les vérifications pour les livraisons : **GET** `{{ urls.api_entrepot }}/administrator/checks`
- Les traitements : **GET** `{{ urls.api_entrepot }}/administrator/processings`

## Créer la communauté

La communauté permet de définir les utilisateurs qui y ont accès et leurs droits. Le nom technique doit être URL-compliant et être unique. Il se retrouvera entre autres dans les URL publiques de téléchargement des annexes.

??? POST "{{ urls.api_entrepot }}/administrator/communities"

``` title="Contenu" 
{{ urls.api_entrepot }}/administrator/communities
```

```json
{
    "name": "Communauté des tutoriels",
    "technical_name": "tutoriels",
    "contact": "email",
    "public": true,
    "supervisor": "{user}"
}
```


```json
{
    "name": "Communauté des tutoriels",
    "technical_name": "tutoriels",
    "contact": "contact@ign.fr",
    "supervisor": {
        "email": "dave.lopper@ign.fr",
        "_id": "{user}",
        "last_name": "Lopper",
        "first_name": "Dave"
    },
    "public": true,
    "_id": "{community}"
}
```
???
<br>

Le superviseur est un utilisateur qui a forcément tous les droits sur la communauté et ne peut pas être enlevé. Cela assure la présence d'au moins une personne qui pourra en faire entrer d'autres.

## Créer l'entrepôt

Comme nous souhaitons mettre en place un espace de travail pour de producteur de données, nous allons associer à cette communauté d'utilisateurs un entrepôt. Une communauté sans entrepôt sera utile pour regrouper des consommateurs des flux et centraliser les permissions sur les offres de données (flux de diffusion).

C'est au niveau de l'entrepôt que l'on va affecter tout ou partie des ressources partagées, potentiellement avec quota. On crée dans l'exemple un entrepôt pour la gestion de base de la donnée vecteur (sans tuiles vectorielles). On liste après l'exemple les ressources à attribuer pour chaque usage et par type.

??? POST "{{ urls.api_entrepot }}/administrator/datastores"

``` title="Contenu" 
{{ urls.api_entrepot }}/administrator/datastores
```

```json
{
    "processings": [
        "{{ ids.processings['vector_to_db'] }}"
    ],
    "storages": {
        "data": [
            {
                "quota": 10000000000,
                "storage": "{{ ids.storages.postgresql }}"
            }
        ],
        "uploads": {
            "quota": 10000000000,
            "storage": "{{ ids.storages.s3_upload }}"
        },
        "annexes": {
            "quota": 10000000000,
            "storage": "{{ ids.storages.s3_annexe }}"
        }
    },
    "endpoints": [
        {
            "quota": 10,
            "endpoint": "{{ ids.endpoints.open.wmsv }}"
        },
        {
            "quota": 10,
            "endpoint": "{{ ids.endpoints.open.wfs }}"
        }
    ],
    "community": "{community}",
    "check": [
        "{{ ids.checks.standard }}",
        "{{ ids.checks.vector }}"
    ]
}
```


```json
{
    "community": {
        "contact": "contact@ign.fr",
        "public": true,
        "_id": "{community}"
    },
    "processings": [
        "{{ ids.processings['vector_to_db'] }}"
    ],
    "name": "Communauté des tutoriels",
    "technical_name": "tutoriels",
    "endpoints": [
        {
            "use": 0,
            "quota": 10,
            "endpoint": {
                "name": "Service de diffusion WMS Vecteur principal",
                "technical_name": "gpf-geoserver-wms-v",
                "type": "WMS-VECTOR",
                "urls": [
                    {
                        "type": "WMS",
                        "url": "{{ urls.open.wmsv }}"
                    }
                ],
                "_id": "{{ ids.endpoints.open.wmsv }}",
                "open": true,
                "metadata_fi": "gpf-geoserver-wms-v"
            }
        },
        {
            "use": 0,
            "quota": 10,
            "endpoint": {
                "name": "Service de diffusion WFS principal",
                "technical_name": "gpf-geoserver-wfs",
                "type": "WFS",
                "urls": [
                    {
                        "type": "WFS",
                        "url": "{{ urls.open.wfs }}"
                    }
                ],
                "_id": "{{ ids.endpoints.open.wfs }}",
                "open": true,
                "metadata_fi": "gpf-geoserver-wfs"
            }
        }
    ],
    "storages": {
        "data": [
            {
                "use": 0,
                "quota": 10000000000,
                "storage": {
                    "name": "Stockage PostgreSQL standard Partenaires",
                    "type": "POSTGRESQL",
                    "labels": [
                        "PARTENAIRE",
                        "VECTEUR"
                    ],
                    "_id": "{{ ids.storages.postgresql }}"
                }
            }
        ],
        "upload": {
            "use": 0,
            "quota": 10000000000,
            "storage": {
                "name": "Stockage OpenIO pour les livraisons",
                "type": "S3",
                "labels": [
                    "LIVRAISON",
                    "PERF"
                ],
                "_id": "{{ ids.storages.s3_upload }}"
            }
        },
        "annexe": {
            "use": 0,
            "quota": 10000000000,
            "storage": {
                "name": "Stockage OpenIO pour les annexes",
                "type": "S3",
                "labels": [
                    "ANNEXE",
                    "PERF"
                ],
                "_id": "{{ ids.storages.s3_annexe }}"
            }
        }
    },
    "active": false,
    "_id": "{datastore}",
    "checks": [
        "{{ ids.checks.standard }}",
        "{{ ids.checks.vector }}"
    ]
}
```
???
<br>

Les quotas de stockage sont à définir en octets. Ceux sur les points d'accès sont en nombre d'offres.

??? ABSTRACT "Ressources par usage"

{{ component("table", {
    headers: ["Usage commun"],
    data: [
        ["Stockage : Stockage OpenIO pour les annexes = `" ~ ids.storages.s3_upload ~ "` (S3)"],
        ["Stockage : Stockage OpenIO pour les livraisons = `" ~ ids.storages.s3_annexe ~ "` (S3)"],
        ["Vérification : Vérification standard = `" ~ ids.storages.s3_upload ~ "` (S3)"],
        ["Point d'accès : Catalogue des métadonnées = `" ~ ids.endpoints.open.csw ~ "` (CSW)"]
    ]
}) }} 
    
{{ component("table", {
    headers: ["Usage vecteur"],
    data: [
        ["Stockage : Stockage en base pour les données vecteur des partenaires = `" ~ ids.storages.postgresql ~ "` (POSTGRESQL)`" ~ ids.storages.postgresql ~ "`(POSTGRESQL)"],
        ["Vérification : Vérification vecteur =  `" ~ ids.checks.vector ~ "`"],
        ["Traitement : Intégration en base = `" ~ ids.processings['vector_to_db'] ~ "`"],
        ["Point d'accès : Service de diffusion WMS Vecteur principal = `" ~ ids.endpoints.open.wmsv ~ "` (WMS-VECTOR)"],
        ["Point d'accès : Service de diffusion WFS principal = `" ~ ids.endpoints.open.wfs ~ "` (WFS)"]
    ]
}) }} 


{{ component("table", {
    headers: ["Usage vecteur avancé"],
    data: [
        ["Traitement : Calcul de pyramide vecteur = `" ~ ids.processings['db_to_pyramid'] ~ "`"],
        ["Point d'accès : Service de diffusion WMTS/TMS principal = `" ~ ids.endpoints.open.wmts ~ "` (WMTS-TMS)"]
    ]
}) }} 


{{ component("table", {
    headers: ["Usage raster"],
    data: [
        ["Stockage : Stockage OpenIO performant pour les données pyramides des partenaires = `" ~ ids.storages.s3_data_pyramid ~ "` (S3)"],
        ["Vérification : Vérification raster = `" ~ ids.checks.raster ~ "`"],
        ["Traitements : Calcul de pyramide raster = `" ~ ids.processings['raster_to_pyramid'] ~ "`"],
        ["Traitements : Calcul ou mise à jour de pyramide raster par moissonnage WMS = `" ~ ids.processings['wms_to_pyramid'] ~ "`"],
        ["Traitements : Fusion de pyramides raster = `" ~ ids.processings['pyramids_to_pyramid'] ~ "`"],
        ["Points d'accès : Service de diffusion WMS Raster principal = `" ~ ids.endpoints.open.wmsr ~ "` (WMS-RASTER)"],
        ["Points d'accès : Service de diffusion WMTS/TMS principal = `" ~ ids.endpoints.open.wmts ~ "` (WMTS-TMS)"]
    ]
}) }} 


{{ component("table", {
    headers: ["Usage archive"],
    data: [
        ["Stockage : Stockage OpenIO performant pour les données archives des partenaires = `" ~ ids.storages.s3_data_archive ~ "` (S3)"],
        ["Vérification : Vérification archive = `" ~ ids.checks.archive ~ "`"],
        ["Traitements : Recopie d'une archive livrée = `" ~ ids.processings['archive_to_archive'] ~ "`"],
        ["Points d'accès : Service de Téléchargement principal = `" ~ ids.endpoints.open.download ~ "` (DOWNLOAD)"]
    ]
}) }} 

???
<br>

??? ABSTRACT "Toutes les ressources par type"

{{ component("table", {
    headers: ["Vérifications"],
    data: [
        ["Vérification standard = `" ~ ids.checks.standard ~ "`"],
        ["Vérification raster = `" ~ ids.checks.raster ~ "`"],
        ["Vérification vecteur  = `" ~ ids.checks.vector ~ "`"],
        ["Vérification archive = `" ~ ids.checks.archive ~ "`"],
        ["Vérification pyramide ROK4 = `" ~ ids.checks['pyramid_rok4'] ~ "`"]
    ]
}) }} 


{{ component("table", {
    headers: ["Traitements"],
    data: [
        ["Intégration de données vecteur livrées en base = `" ~ ids.processings['vector_to_db'] ~ "`"],
        ["Recopie d'une archive livrée = `" ~ ids.processings['archive_to_archive'] ~ "`"],
        ["Calcul de pyramide raster  = `" ~ ids.processings['raster_to_pyramid'] ~ "`"],
        ["Calcul ou mise à jour de pyramide raster par moissonnage WMS = `" ~ ids.processings['wms_to_pyramid'] ~ "`"],
        ["Fusion de pyramides raster = `" ~ ids.processings['pyramids_to_pyramid'] ~ "`"],
        ["Calcul de pyramide vecteur = `" ~ ids.processings['db_to_pyramid'] ~ "`"]
    ]
}) }} 



{% set data = [] %}

{% set _ = data.push(["S3 : Stockage OpenIO pour les livraisons = `" ~ ids.storages.s3_upload ~ "`"]) %}
{% set _ = data.push(["S3 : Stockage OpenIO pour les annexes = `" ~ ids.storages.s3_annexe ~ "`"]) %}
{% set _ = data.push(["S3 : Stockage OpenIO performant pour les données pyramides = `" ~ ids.storages.s3_data_pyramid ~ "`"]) %}
{% set _ = data.push(["S3 : Stockage OpenIO performant pour les données archives = `" ~ ids.storages.s3_data_archive ~ "`"]) %}

{% set postgresEntry = "POSTGRESQL : Stockage PostgreSQL standard = `" ~ ids.storages.postgresql ~ "`" %}

{% set OPENSEARCHEntry = "OPENSEARCH  : Stockage OpenSearch standard = `" ~ ids.storages.postgresql_routing.opensearch ~ "`" %}

{% if ids.storages.opensearch %}
    {% set OPENSEARCHEntry = OPENSEARCHEntry
      + "<br>* OPENSEARCH : `" ~ ids.storages.postgresql_routing.opensearch ~ "`" %}
{% endif %}

{% set _ = data.push([postgresEntry]) %}
{% set _ = data.push([OPENSEARCHEntry]) %}
{{ component("table", {
    headers: ["Stockages"],
    data: data
}) }}


{% set accessData = [] %}

{# Services open #}
{% set _ = accessData.push(["Service de diffusion WFS principal = `" ~ ids.endpoints.open.wfs ~ "` (WFS)"]) %}
{% set _ = accessData.push(["Service de diffusion WMTS/TMS principal = `" ~ ids.endpoints.open.wmts ~ "` (WMTS-TMS)"]) %}
{% set _ = accessData.push(["Service de diffusion WMS Raster principal = `" ~ ids.endpoints.open.wmsr ~ "` (WMS-RASTER)"]) %}
{% set _ = accessData.push(["Service de diffusion WMS Vecteur principal = `" ~ ids.endpoints.open.wmsv ~ "` (WMS-VECTOR)"]) %}
{% set _ = accessData.push(["Service de Téléchargement principal = `" ~ ids.endpoints.open.download ~ "` (DOWNLOAD)"]) %}

{# Service CSW + optionnels #}
{% set cswEntry = "Service de diffusion CSW = `" ~ ids.endpoints.open.csw ~ "` (METADATA)" %}
{% if ids.endpoints.open.alti %}
  {% set cswEntry = cswEntry + "<br> Service d'altimétrie : `" ~ ids.endpoints.open.alti ~ "` (ALTI)" %}
{% endif %}
{% if ids.endpoints.open.itinerary %}
  {% set cswEntry = cswEntry + "<br> Service d'itinéraire et d'isochrone : `" ~ ids.endpoints.open.itinerary ~ "` (ITINERARY-ISOCURVE)" %}
{% endif %}
{% if ids.endpoints.open.search %}
  {% set cswEntry = cswEntry + "<br> Service de recherche : `" ~ ids.endpoints.open.search ~ "` (SEARCH)" %}
{% endif %}
{% set _ = accessData.push([cswEntry]) %}

{# Services restreints #}
{% set _ = accessData.push(["Service de téléchargement privé = `" ~ ids.endpoints.private.download ~ "` (DOWNLOAD)"]) %}
{% set _ = accessData.push(["Service de diffusion WFS privé = `" ~ ids.endpoints.private.wfs ~ "` (WFS)"]) %}
{% set _ = accessData.push(["Service de diffusion WMS Vecteur privé = `" ~ ids.endpoints.private.wmsv ~ "` (WMS-VECTOR)"]) %}
{% set _ = accessData.push(["Service de diffusion WMS Raster privé = `" ~ ids.endpoints.private.wmsr ~ "` (WMS-RASTER)"]) %}

{# Service WMTS privé + optionnels #}
{% set wmtsEntry = "Service de diffusion WMTS/TMS privé = `" ~ ids.endpoints.private.wmts ~ "` (WMTS-TMS)" %}

{% if ids.endpoints.private.alti %}
  {% set wmtsEntry = wmtsEntry + " </br> Service d'altimétrie : `" ~ ids.endpoints.private.alti ~ "` (ALTI)" %}
{% endif %}

{% if ids.endpoints.private.itinerary %}
  {% set wmtsEntry = wmtsEntry + " </br> Service d'itinéraire et d'isochrone : `" ~ ids.endpoints.private.itinerary ~ "` (ITINERARY-ISOCURVE)" %}
{% endif %}

{% if ids.endpoints.private.search %}
  {% set wmtsEntry = wmtsEntry + " </br> Service de recherche : `" ~ ids.endpoints.private.search ~ "` (SEARCH)" %}
{% endif %}

{% set _ = accessData.push([wmtsEntry]) %}

{{ component("table", {
  headers: ["Points d'accès"],
  data: accessData
}) }}


## Activer l'entrepôt

À ce stade, l'entrepôt n'est pas utilisable car non activé. Pour l'activer, il suffit de modifier son champ `active`:

??? PATCH "{{ urls.api_entrepot }}/administrator/datastores/{datastore}"

``` title="Contenu" 
{{ urls.api_entrepot }}/administrator/datastores/{datastore}
```

```json
{
    "active": true
}
```
???
<br>

Par la suite, il sera possible de désactiver un entrepôt pour bloquer instantanément tous les nouveaux appels sur celui ci. Rien n'est supprimé, mais cela permet de mettre en sécurité un entrepôt pour lequel une utilisation frauduleuse ou dangereurse est détectée.

## Modifier un espace de travail

Il est possible de changer le superviseur d'une communauté après coup :

??? PATCH "{{ urls.api_entrepot }}/administrator/communities/{community}"

``` title="Contenu" 
{{ urls.api_entrepot }}/administrator/communities/{community}
```

```json
{
    "supervisor": "id nouveau superviseur"
}
```
???
<br>

On peut également modifier les quotas après coup, ou donner accès à de nouveaux traitements. Il n'est pas nécessaire de tout fournie, mais seulement les parties à changer. Un exemple ici pour augmenter le quota de l'espace de livraison à 100 Go :

??? request-patch "{{ urls.api_entrepot }}/administrator/datastores/{datastore}"

``` title="Contenu" 
{{ urls.api_entrepot }}/administrator/datastores/{datastore}
```

```json
{
    "storages": {
            "uploads": {
            "quota": 100000000000,
            "storage": "{{ ids.storages.s3_upload }}"
        }
    }
}
```
???
<br>
