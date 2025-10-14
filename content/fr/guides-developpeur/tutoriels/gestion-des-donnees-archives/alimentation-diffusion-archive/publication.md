---
title: Configuration de la diffusion en téléchargement
mermaid: true
eleventyNavigation:
    key: Configuration de la diffusion en téléchargement
    parent: Alimentation et diffusion simple d'archives
    order: 3
    nav: guides-developpeur
summary:
    visible: true
    depth: 2
---

{% from "components/component.njk" import component with context %}

## Configuration de la diffusion

La configuration centralise toutes les informations nécessaires à la diffusion de données sur les services. À ce moment, on va contrôler les paramètres et détecter les erreurs ou conflits potentiels :

* nom de couche déjà pris (il doit y avoir unicité sur toutes les configurations DOWNLOAD de la plateforme)
* doublon dans le nom des sous-couches (si on veut diffuser plusieurs données ARCHIVE au sein d'une même configuration)

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```

```json
{
    "type": "DOWNLOAD",
    "name": "Limites administratives",
    "layer_name": "limites_administratives",
    "type_infos": {
        "title": {
            "fr": "Limites administratives",
            "en": "Administrative units"
        },
        "abstract": {
            "fr": "Limites administratives, au format Shapefile, sur la France métropolitaine"
        },
        "keywords": ["Tutoriel", "Limites administratives"],
        "product_identifier": "Admin Express",
        "used_data": [
            {
                "sub_name": "departements",
                "title": {
                    "fr": "Données départementales"
                },
                "abstract": {
                    "fr": "Départements et limites départementales, au format Shapefile, sur la France métropolitaine"
                },
                "keywords": ["Limites départementales"],
                "format": "SHP",
                "zone": "FXX",
                "stored_data": "{stored data}"
            }
        ]
    }
}
```
???
<br>

Si on ne précise pas de titre ou de résumé pour la donnée stockée diffusée, ce sera son nom qui sera utilisé. Les codes des langues sont ceux [ISO-639-1](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1).

Dans les sous-ressources, `format`, `zone` et `resolution` (non utilisé ici) s'appuieront sur les nomenclatures pour afficher au niveau du service de téléchargement des noms plus humains. On fournit ici les `term` et les `label` seront ajoutés. Si la valeur dans la configuration ne correspond à aucun term pour le type correspondant, le label prendra la même valeur. Le SRS de la donnée stockée sera également enrichie en utilisant la nomenclature. Dans le service de téléchargement, le `term` sera converti en URL pour respecter les spécifications Atom.

Voici un exemple pour voir la nomenclature des zones :

??? GET "{{ urls.api_entrepot }}/statics/nomenclatures"

``` title="Contenu" 
{{ urls.api_entrepot }}/statics/nomenclatures
```

    {{ component("table", {
        headers: ["Paramètres de requête"],
        data: [
            ["type = `ZONE`"]
        ]
    }) }}

```json
    [
        {
            "type": "ZONE",
            "label": "Paris",
            "term": "D075"
        },
        {
            "type": "ZONE",
            "label": "Ain",
            "term": "D001"
        },
        {
            "type": "ZONE",
            "label": "France métropolitaine",
            "term": "FXX"
        }
    ]
```
???
<br>

## Publication

À ce stade, aucune information n'a été envoyée aux serveurs de téléchargement assurant la diffusion. Cette synchronisation de la configuration sur les serveurs de diffusion, représentés par le point d'accès, se fait via la création d'une offre : la publication. Elle matérialise la présence d'une configuration sur un point d'accès.

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

C'est le point d'accès de type DOWNLOAD qui va nous intéresser.

### Création de l'offre

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration}/offerings"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration}/offerings
```

```json
{
    "endpoint": "{{ ids.endpoints.open.download }}",
    "open": true
}
```

```json
{
    "open": true,
    "available": true,
    "layer_name": "limites_administratives",
    "type": "DOWNLOAD",
    "status": "PUBLISHED",
    "configuration": {
        "name": "Limites administratives",
        "status": "PUBLISHED",
        "_id": "{configuration}"
    },
    "endpoint": {
        "name": "gpf-download",
        "_id": "{{ ids.endpoints.open.download }}"
    },
    "urls": [],
    "_id": "{offering}"
}
```
???
</br>

## Consultation du service de téléchargement

En consultant les [capacités du service de téléchargement]({{ urls.public.download }}/capabilities), on retrouve notre couche (on demande ici la réponse en JSON, c'est le format XML Atom par défaut). On va également filtrer sur nos valeurs spécifiques pour n'avoir que notre résultat.

??? GET "{{ urls.open.download }}/capabilities"

``` title="Contenu" 
{{ urls.open.download }}/capabilities
```

    {{ component("table", {
        headers: ["Paramètres de requête"],
        data: [
            ["crs = `https://www.opengis.net/def/crs/EPSG/0/2154`"],
            ["zone = `FXX`"],
            ["format = `SHP`"],
            ["editionDateTo = `2024-09-16`"]
        ]
    }) }}

    {{ component("table", {
        headers: ["En-tête de requête"],
        data: [
            ["Accept = `application/json`"]
        ]
    }) }}


```json
{
    "georssNs": "http://www.georss.org/georss",
    "gpfDlNs": "{{ urls.annexes }}/ressources/xsd/gpf_dl.xsd",
    "xmlns": "http://www.w3.org/2005/Atom",
    "inspireDlsNs": "http://inspire.ec.europa.eu/schemas/inspire_dls/1.0",
    "lang": "en",
    "page": 1,
    "pagesize": 20,
    "pagecount": 1,
    "totalentries": 1,
    "title": "Public Download Service of Géoplateforme",
    "subtitle": "This Download Service allows you to download public datasources",
    "id": "{{ urls.open.download }}/capabilities",
    "rights": "Conditions Générales d'Utilisation disponibles ici : https://cartes.gouv.fr/cgu-licences",
    "updated": "2024-09-17",
    "author":
    {
        "name": "Institut National de l'Information Géographique et Forestière",
        "email": "geoplateforme@ign.fr"
    },
    "link":
    [
        {
            "href": "{{ urls.open.download }}/capabilities",
            "rel": "self",
            "type": "application/atom+xml",
            "title": "This document",
            "bbox": null
        },
        {
            "href": "{{ urls.open.download }}/capabilities?lang=en",
            "hreflang": "en",
            "rel": "alternate",
            "type": "application/atom+xml",
            "title": "Public Download Service of Géoplateforme",
            "bbox": null
        },
        {
            "href": "{{ urls.open.download }}/capabilities?lang=fr",
            "hreflang": "fr",
            "rel": "alternate",
            "type": "application/atom+xml",
            "title": "Service de téléchargement public de la Géoplateforme",
            "bbox": null
        },
        {
            "href": "{{ urls.open.download }}/capabilities",
            "rel": "up",
            "type": "application/atom+xml",
            "bbox": null
        }
    ],
    "entry":
    [
        {
            "title": "Administrative units",
            "spatialDatasetIdentifierCode": "Admin Express",
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/resource/limites_administratives",
                    "rel": "alternate",
                    "type": "application/atom+xml",
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/resource/limites_administratives",
            "updated": "2024-09-16",
            "content": "Limites administratives, au format Shapefile, sur la France métropolitaine",
            "polygon": "-5.33254008 41.20611066 9.85432008 41.20611066 9.85432008 51.20324649 -5.33254008 51.20324649 -5.33254008 41.20611066",
            "editionDateStart": "2022-09-30",
            "editionDateEnd": "2022-09-30",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "zone":
            [
                {
                    "term": "FXX",
                    "label": "France métropolitaine"
                }
            ],
            "format":
            [
                {
                    "term": "SHP",
                    "label": "Shapefile"
                }
            ],
            "resolution":
            [
                {
                    "term": "1m",
                    "label": "Précision à 1 mètres"
                }
            ]
        }
    ]
}
```
???
<br>

Si on veut avoir le contenu de notre ressource de téléchargement `limites_administratives`, on suit [le lien dans l'entrée]({{ urls.public.download }}/resource/limites_administratives), c'est-à-dire les sous-ressources. Dans notre cas, on a une seule sous-ressource, `departements`.


??? GET "{{ urls.open.download }}/resource/limites_administratives"

``` title="Contenu" 
{{ urls.open.download }}/resource/limites_administratives
```

    {{ component("table", {
        headers: ["En-tête de requête"],
        data: [
            ["Accept = `application/json`"]
        ]
    }) }}
    
```json
{
    "georssNs": "http://www.georss.org/georss",
    "gpfDlNs": "{{ urls.annexes }}/ressources/xsd/gpf_dl.xsd",
    "xmlns": "http://www.w3.org/2005/Atom",
    "inspireDlsNs": "http://inspire.ec.europa.eu/schemas/inspire_dls/1.0",
    "lang": "en",
    "page": 1,
    "pagesize": 10,
    "pagecount": 1,
    "totalentries": 1,
    "title": "Administrative units",
    "subtitle": "Limites administratives, au format Shapefile, sur la France métropolitaine",
    "id": "{{ urls.open.download }}/resource/limites_administratives",
    "updated": "2024-09-16",
    "spatialDatasetIdentifierCode": "Admin Express",
    "link":
    [
        {
            "href": "{{ urls.open.download }}/resource/limites_administratives?lang=en",
            "hreflang": "en",
            "rel": "alternate",
            "type": "application/atom+xml",
            "title": "Administrative units",
            "bbox": null
        },
        {
            "href": "{{ urls.open.download }}/resource/limites_administratives?lang=fr",
            "hreflang": "fr",
            "rel": "alternate",
            "type": "application/atom+xml",
            "title": "Limites administratives",
            "bbox": null
        },
        {
            "href": "{{ urls.open.download }}/resource/limites_administratives",
            "rel": "self",
            "type": "application/atom+xml",
            "title": "This document",
            "bbox": null
        },
        {
            "href": "{{ urls.open.download }}/capabilities",
            "rel": "up",
            "type": "application/atom+xml",
            "bbox": null
        }
    ],
    "entry":
    [
        {
            "title": "Données départementales",
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/resource/limites_administratives/departements",
                    "rel": "alternate",
                    "type": "application/atom+xml",
                    "title": "Données départementales",
                    "bbox": "-5.33254008 41.20611066 9.85432008 51.20324649"
                }
            ],
            "id": "{{ urls.open.download }}/resource/limites_administratives/departements",
            "updated": "2024-09-16",
            "content": "Départements et limites départementales, au format Shapefile, sur la France métropolitaine",
            "polygon": "9.09172851 42.89115936 9.12915131 43.2450106 9.61454396 43.37599636 9.85432008 42.28024058 9.59263351 41.27883529 9.17895507 41.20611066 8.57606386 41.52172702 8.37515061 42.18155293 8.60679353 42.88081313 9.09172851 42.89115936 -5.11714547 48.69143916 -5.11904295 48.7036136 -3.53090169 49.07144036 -2.05981435 48.92176625 -2.39266145 49.61836715 -1.44304026 49.97518135 -0.28790953 49.71802866 1.16554867 50.22539848 1.2106405 51.10547173 2.68327037 51.20324649 4.36996119 50.39029281 5.12108028 50.52630512 5.36566614 50.02071857 7.44864671 49.52189837 8.75795607 49.11102171 8.46599244 48.64627595 7.99941283 47.83257925 7.55725079 47.1390034 6.89685602 46.70928797 7.3839402 46.33582437 7.64872697 45.69932199 7.59199086 44.80571585 8.1070412 44.4026185 8.14445803 43.87311823 7.46554269 43.21632897 6.55534602 42.85813836 5.32652298 42.92854218 4.0485537 43.1811621 3.59296671 42.79301466 3.90045719 42.26485025 3.25766156 42.10938675 0.45381917 42.38499265 -2.10506004 43.12661715 -1.60510675 43.99536685 -1.49342246 45.59517123 -2.88176427 46.80885968 -4.86703502 47.65004168 -5.33254008 48.29493047 -5.11714547 48.69143916",
            "editionDate": "2022-09-30",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "zone":
            [
                {
                    "term": "FXX",
                    "label": "France métropolitaine"
                }
            ],
            "format":
            [
                {
                    "term": "SHP",
                    "label": "Shapefile"
                }
            ],
            "resolution":
            [
                {
                    "term": "1m",
                    "label": "Précision à 1 mètres"
                }
            ]
        }
    ]
}
```
???
<br>

Pour connaître les fichiers téléchargeables, on va pouvoir demander le contenu de la sous-ressource en suivant le [lien de l'entrée]({{ urls.public.download }}/resource/limites_administratives/departements).

??? GET "{{ urls.open.download }}/resource/limites_administratives/departements"

``` title="Contenu" 
{{ urls.open.download }}/resource/limites_administratives/departements
```

{{ component("table", {
    headers: ["En-tête de requête"],
    data: [
        ["Accept = `application/json`"]
    ]
}) }}

```json
{
    "georssNs": "http://www.georss.org/georss",
    "gpfDlNs": "{{ urls.annexes }}/ressources/xsd/gpf_dl.xsd",
    "xmlns": "http://www.w3.org/2005/Atom",
    "inspireDlsNs": "http://inspire.ec.europa.eu/schemas/inspire_dls/1.0",
    "lang": "en",
    "page": 1,
    "pagesize": 10,
    "pagecount": 1,
    "totalentries": 10,
    "title": "Données départementales",
    "subtitle": "Départements et limites départementales, au format Shapefile, sur la France métropolitaine",
    "id": "{{ urls.open.download }}/resource/limites_administratives/departements",
    "updated": "2024-09-16",
    "zone":
    {
        "term": "FXX",
        "label": "France métropolitaine"
    },
    "format":
    {
        "term": "SHP",
        "label": "Shapefile"
    },
    "resolution":
    {
        "term": "1m",
        "label": "Précision à 1 mètre"
    },
    "editionDate": "2022-09-30",
    "link":
    [
        {
            "href": "{{ urls.open.download }}/resource/limites_administratives/departements?lang=fr",
            "hreflang": "fr",
            "rel": "alternate",
            "type": "application/atom+xml",
            "title": "Données départementales",
            "bbox": null
        },
        {
            "href": "{{ urls.open.download }}/resource/limites_administratives/departements",
            "rel": "self",
            "type": "application/atom+xml",
            "title": "This document",
            "bbox": null
        },
        {
            "href": "{{ urls.open.download }}/resource/limites_administratives",
            "rel": "up",
            "type": "application/atom+xml",
            "bbox": null
        }
    ],
    "entry":
    [
        {
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/download/limites_administratives/departements/DEPARTEMENT.cpg",
                    "rel": "alternate",
                    "type": "image/x-cpg",
                    "length": 6,
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/download/limites_administratives/departements/DEPARTEMENT.cpg",
            "content": "ed16c6bc54359dade2e7fafa83607f16",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "mime_type":
            [
                "image/x-cpg"
            ]
        },
        {
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/download/limites_administratives/departements/DEPARTEMENT.dbf",
                    "rel": "alternate",
                    "type": "application/octet-stream",
                    "length": 17186,
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/download/limites_administratives/departements/DEPARTEMENT.dbf",
            "content": "d9c1ff8f8980daa8f9b969a429987673",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "mime_type":
            [
                "application/octet-stream"
            ]
        },
        {
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/download/limites_administratives/departements/DEPARTEMENT.prj",
                    "rel": "alternate",
                    "type": "image/x-prj",
                    "length": 449,
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/download/limites_administratives/departements/DEPARTEMENT.prj",
            "content": "a125df3368127b8203a6c823c4e2b881",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "mime_type":
            [
                "image/x-prj"
            ]
        },
        {
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/download/limites_administratives/departements/DEPARTEMENT.shp",
                    "rel": "alternate",
                    "type": "application/x-shapefile",
                    "length": 3125208,
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/download/limites_administratives/departements/DEPARTEMENT.shp",
            "content": "ab9b820b4c50936862f45f21eb434d82",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "mime_type":
            [
                "application/x-shapefile"
            ]
        },
        {
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/download/limites_administratives/departements/DEPARTEMENT.shx",
                    "rel": "alternate",
                    "type": "application/octet-stream",
                    "length": 868,
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/download/limites_administratives/departements/DEPARTEMENT.shx",
            "content": "1b4b27aa51e8c981c80fc009c5612f36",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "mime_type":
            [
                "application/octet-stream"
            ]
        },
        {
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.cpg",
                    "rel": "alternate",
                    "type": "image/x-cpg",
                    "length": 6,
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.cpg",
            "content": "ed16c6bc54359dade2e7fafa83607f16",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "mime_type":
            [
                "image/x-cpg"
            ]
        },
        {
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.dbf",
                    "rel": "alternate",
                    "type": "application/octet-stream",
                    "length": 2039048,
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.dbf",
            "content": "d5b48ce0035f521dba949d29cf6c7770",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "mime_type":
            [
                "application/octet-stream"
            ]
        },
        {
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.prj",
                    "rel": "alternate",
                    "type": "image/x-prj",
                    "length": 449,
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.prj",
            "content": "a125df3368127b8203a6c823c4e2b881",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "mime_type":
            [
                "image/x-prj"
            ]
        },
        {
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.shp",
                    "rel": "alternate",
                    "type": "application/x-shapefile",
                    "length": 2527748,
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.shp",
            "content": "afd8b8f3d13da008b5305fe49e8ccab3",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "mime_type":
            [
                "application/x-shapefile"
            ]
        },
        {
            "link":
            [
                {
                    "href": "{{ urls.open.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.shx",
                    "rel": "alternate",
                    "type": "application/octet-stream",
                    "length": 72596,
                    "bbox": null
                }
            ],
            "id": "{{ urls.open.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.shx",
            "content": "bcef9e262f77e5b1dcfe1eed5e14f935",
            "category":
            [
                {
                    "term": "https://www.opengis.net/def/crs/EPSG/0/2154",
                    "label": "RGF93 v1 / Lambert-93 -- France"
                }
            ],
            "mime_type":
            [
                "application/octet-stream"
            ]
        }
    ]
}
```
???
<br>

On retrouve nos 10 fichiers, avec leur taille et leur signature MD5, téléchargeables :

* [LIMITE_DEPARTEMENT.dbf]({{ urls.public.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.dbf)
* [LIMITE_DEPARTEMENT.prj]({{ urls.public.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.prj)
* [LIMITE_DEPARTEMENT.cpg]({{ urls.public.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.cpg)
* [LIMITE_DEPARTEMENT.shp]({{ urls.public.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.shp)
* [LIMITE_DEPARTEMENT.shx]({{ urls.public.download }}/download/limites_administratives/departements/LIMITE_DEPARTEMENT.shx)
* [DEPARTEMENT.dbf]({{ urls.public.download }}/download/limites_administratives/departements/DEPARTEMENT.dbf)
* [DEPARTEMENT.prj]({{ urls.public.download }}/download/limites_administratives/departements/DEPARTEMENT.prj)
* [DEPARTEMENT.cpg]({{ urls.public.download }}/download/limites_administratives/departements/DEPARTEMENT.cpg)
* [DEPARTEMENT.shp]({{ urls.public.download }}/download/limites_administratives/departements/DEPARTEMENT.shp)
* [DEPARTEMENT.shx]({{ urls.public.download }}/download/limites_administratives/departements/DEPARTEMENT.shx)
