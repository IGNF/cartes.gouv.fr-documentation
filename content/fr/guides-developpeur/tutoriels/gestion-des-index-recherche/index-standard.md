---
title: Recherche dans l'index standard
description: Consultation du service de recherche de couche, identification des ressources publiées
mermaid: true
summary:
    visible: true
    depth: 2
eleventyNavigation:
    key: Recherche dans l'index standard
    parent: Index de recherche
    order: 1
    nav: guides-developpeur
---

{% from "components/component.njk" import component with context %}

La recherche standard permet de rechercher des informations de recherche (ou documents de recherche) à partir de la publication de ces types d'offre :

- WFS 
- WMS-RASTER
- WMS-VECTOR
- WMTS-TMS 
- DOWNLOAD
- ITINERARY ISOCURVE 
- ALTIMETRY

Les éléments de recherche sont synchronisés au moment de la publication (ou dépublication) des offres.

On considère que ces documents de recherche font partie de l'index géoplateforme.

## Recherche Standard

Il est possible de rechercher à partir de nombreux champs dans les documents de recherche (aucun des champs n'est obligatoire pour effectuer la recherche) :

??? POST "{{ urls.public.search }}/api/indexes/geoplateforme"

```title="Contenu"
{{ urls.public.search }}/api/indexes/geoplateforme
```

```json
{
    "title": "Titre",
    "layer_name":  "layer_name", // Nom technique de la ressource
    "description": "Description",
    "open": true, // Visibilité de l'offre
    "type": "WMS", // Type d'offre
    "theme": "Thématique",
    "keywords": "Mots clefs associés",
    "srs": "EPSG:4326", // Projections
    "shape": "GeoJSON", // liste de points géographiques du document
    // exemple : "shape": { "type": "MultiPoint", "coordinates": [ [ 68.0, 44.0 ], [ 78.0, 28.0 ] ]}
    "publication_date": {"min_publication_date": "2023-05-15", "max_publication_date": "2023-12-01"},
    // exemple : "publication_date" : { "min_publication_date" : "2023-05-15"}
    "production_years":  { "min": 1920, "max": 1922 },
    "aggregation": {"fields": ["type"]}, // pour demander une aggregation sur un champs des docuements de recherche
    "highlight": true, // Effectuer le highlight
    "attribution_title": "Géoportail",
    "attribution_email": "email",
    "metadata_urls": "true", // true pour ne retourner que les résultats avec une metadata URL
    "producers": "IGN"
}
```

```json
{
    "documents": [
        {
            "id": "4c2afe00-d2a4-4536-a254-e4025aa8daf7",
            "offering_id": "c39d62ca-f696-4f60-98a5-9b4e02a6b5c6",
            "index_name": "geoplateforme",
            "layer_name": "bdtopo_971:non_communication",
            "title": "Routes de non communication 971",
            "description": "Routes de non communication du département 971",
            "type": "WFS",
            "url": "https://{{ urls.public.wfs }}?service=WFS&version=2.0.0&request=DescribeFeatureType&typeNames=bdtopo_971:non_communication",
            "open": true,
            "theme": "BD_topo",
            "production_years": [
                2023
            ],
            "publication_date": "2023-09-18",
            "keywords": [
                "BD_Topo",
                "Routes"
            ],
            "extent": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            180,
                            -90
                        ],
                        [
                            180,
                            90
                        ],
                        [
                            -180,
                            90
                        ],
                        [
                            -180,
                            -90
                        ],
                        [
                            180,
                            -90
                        ]
                    ]
                ]
            },
            "metadata_urls": [],
            "srs": [
                "EPSG:5490"
            ],
            "extra": {
                "tag": "topo"
            },
            "producers": [
                "IGN"
            ],
            "highlights": {}
        },
        {
            "id": "ccbb7c1d-4031-4387-a1aa-bd72e209faf4",
            "offering_id": "c39d62ca-f696-4f60-98a5-9b4e02a6b5c6",
            "index_name": "geoplateforme",
            "layer_name": "bdtopo_971:troncon_de_route",
            "title": "Tronçons de route 971",
            "description": "Tronçons de route du département 971",
            "type": "WFS",
            "url": "{{ urls.public.wfs }}?service=WFS&version=2.0.0&request=DescribeFeatureType&typeNames=bdtopo_971:troncon_de_route",
            "open": true,
            "theme": "BD_topo",
            "production_years": [
                2023
            ],
            "publication_date": "2023-09-18",
            "keywords": [
                "BD-Topo",
                "Routes"
            ],
            "extent": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            180,
                            -90
                        ],
                        [
                            180,
                            90
                        ],
                        [
                            -180,
                            90
                        ],
                        [
                            -180,
                            -90
                        ],
                        [
                            180,
                            -90
                        ]
                    ]
                ]
            },
            "metadata_urls": [],
            "srs": [
                "EPSG:5490"
            ],
            "extra" : {
                "tag" : "topo"
            },
            "producers" : [
                "IGN"
            ],
            "highlights": {}
        }
    ],
    "aggregations": {}
}
```
???
<br>

Si aucun champ n'est précisé dans le JSON, la réponse obtenue renvoie tous les documents présent dans l'index géoplateforme.

#### Highlight

Le système du **highlight** permet de mettre en relief lors d'une recherche les éléments qui matchent celle-ci dans le texte.

Cela permet notamment de voir dans une petite liste de résultats possible au fur et à mesure que l'on écrit dans une barre de recherche, les matches potentiels.

Dans l'API de recherche cela se traduit par un champs highlight dans la réponse, avec le texte HTML issu du document matchant, déjà mis en relief.

#### Aggregation

Le système d'**agrégration** permet de donner plus d'information lors de l'expérience de recherche, sur les possibles regroupements des documents matchant une recherche.

Par exemple si notre recherche se base sur les années de production 1920 a 1922, et que nous demandons uns agrégations sur le theme, on pourrait avoir 100 documents qui ont tous pour thèmes "Paris", et 500 autres tous pour theme "Lyon".

Cela donne donc plus d'information sur notre recherche et l'utilisateur pourra peut-être affiner en incluyant Paris dans une future recherche.

L'aggregation n'est possible que sur des champs de texte.

#### Champs *theme*, *licence* et *thumbnail*

Ces champs doivent être définis manuellement en ajoutant des tags à la **configuration** de la donnée publiée. Le tag peut être ajouté au moment de la création de la configuration ou ajouté par la suite.

Voici un exemple pour ajouter les différents tags après la création d'une configuration :

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration}/tags"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration}/tags
```

```json
{
    "theme": "un nom de theme",
    "licence": "licence",
    "thumbnail": "thumbnail"
}
```
???
<br>

#### Champs *production_year* et *producer*

Les champs *production_year* et *producer* sont aussi à définir manuellement mais, cette fois-ci, il est à définir à partir d'un tag de la **stored_data** de la donnée publiée. De même, le tag peut être ajouté au moment de la création de la configuration ou ajouté par la suite :

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored_data}/tags"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored_data}/tags
```

```json
{
    "production_year": 2023,
    "producer": "IGN"
}
```
???
<br>

#### Champs *extra*

Le champ *extra* permet de stocker n'importe quelle information sur les entités de l'entrepôt et le service de recherche permet de récupérer une partie du champ extra de la configuration de la donnée. Seul ce qui sera dans le champ "_search" du champ extra sera récupéré dans le service de recherche.

Pour ajouter un champ extra dans la configuration :

??? PATCH "{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{configuration}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{configuration}
```

```json
{
    "extra": {
        "_search": {
            "toto": "titi"
        },
        "interne": "secret",
    }
}
```
???
<br>

Dans le service de recherche, nous retrouverons ainsi ce champ extra (après publication ou synchronisation de l'offre) :

```json
"extra": {
    "toto": "titi"
},
```

## Suggestions par champ(s)

La suggestion par champ permet une autocomplétion (sur les champs autorisés) du texte recherché suivant le champ demandé. La suggestion commence à partir de l'écriture de 3 lettres.

Les champs utilisables pour la suggestion sont *title*, *description*, *layer_name*, *theme*, *keywords*, *producers*, *type*, *production_years* et *metadata_urls*. Il est possible d'avoir une suggestion sur tous ces champs en même temps à partir d'une requête de ce type :

??? GET "{{ urls.public.search }}/api/indexes/geoplateforme/suggest"

```title="Contenu"
{{ urls.public.search }}/api/indexes/geoplateforme/suggest
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["text = `bd topo`"]
    ]
}) }}
    

```json
[
    {
        "index": "geoplateforme",
        "score": 7.445484,
        "source": {
            "id": "48da29c4-e826-4136-8f2d-062ce122a432",
            "offering_id": "4f417630-aca2-4046-9d79-c068e2e9e9df",
            "index_name": "geoplateforme",
            "layer_name": "bdtopo_971",
            "title": "bdtopo_971",
            "description": "BD Topo allégé du département 971",
            "type": "WMS",
            "url": "{{ urls.public.wmsv }}?service=WMS&version=1.3.0&request=DescribeLayer&layers=bdtopo_971",
            "open": true,
            "publication_date": "2023-08-25",
            "keywords": [],
            "extent": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            180,
                            -90
                        ],
                        [
                            180,
                            90
                        ],
                        [
                            -180,
                            90
                        ],
                        [
                            -180,
                            -90
                        ],
                        [
                            180,
                            -90
                        ]
                    ]
                ]
            },
            "metadata_urls": [],
            "srs": [
                "EPSG:5490"
            ]
        }
    },
    {
        "index": "geoplateforme",
        "score": 7.375906,
        "source": {
            "id": "4c2afe00-d2a4-4536-a254-e4025aa8daf7",
            "offering_id": "c39d62ca-f696-4f60-98a5-9b4e02a6b5c6",
            "index_name": "geoplateforme",
            "layer_name": "bdtopo_971:non_communication",
            "title": "Routes de non communication 971",
            "description": "Routes de non communication du département 971",
            "type": "WFS",
            "url": "{{ urls.public.wfs }}?service=WFS&version=2.0.0&request=DescribeFeatureType&typeNames=bdtopo_971:non_communication",
            "open": true,
            "theme": "BD_topo",
            "production_year": 2023,
            "publication_date": "2023-09-18",
            "keywords": [
                "BD_Topo",
                "Routes"
            ],
            "extent": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            180,
                            -90
                        ],
                        [
                            180,
                            90
                        ],
                        [
                            -180,
                            90
                        ],
                        [
                            -180,
                            -90
                        ],
                        [
                            180,
                            -90
                        ]
                    ]
                ]
            },
            "metadata_urls": [],
            "srs": [
                "EPSG:5490"
            ]
        }
    },
    {
        "index": "geoplateforme",
        "score": 7.375906,
        "source": {
            "id": "ccbb7c1d-4031-4387-a1aa-bd72e209faf4",
            "offering_id": "c39d62ca-f696-4f60-98a5-9b4e02a6b5c6",
            "index_name": "geoplateforme",
            "layer_name": "bdtopo_971:troncon_de_route",
            "title": "Tronçons de route 971",
            "description": "Tronçons de route du département 971",
            "type": "WFS",
            "url": "{{ urls.public.wfs }}?service=WFS&version=2.0.0&request=DescribeFeatureType&typeNames=bdtopo_971:troncon_de_route",
            "open": true,
            "theme": "BD_topo",
            "production_year": 2023,
            "publication_date": "2023-09-18",
            "keywords": [
                "BD-Topo",
                "Routes"
            ],
            "extent": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            180,
                            -90
                        ],
                        [
                            180,
                            90
                        ],
                        [
                            -180,
                            90
                        ],
                        [
                            -180,
                            -90
                        ],
                        [
                            180,
                            -90
                        ]
                    ]
                ]
            },
            "metadata_urls": [],
            "srs": [
                "EPSG:5490"
            ]
        }
    }
]
```
???
<br>

Les documents obtenus sont classés selon un score calculé par OpenSearch (et fourni dans la réponse).

Il est possible de ne rechercher que dans un seul champ en ajoutant un paramètre *fields* à la requête :

??? GET "{{ urls.public.search }}/api/indexes/geoplateforme/suggest"

```title="Contenu"
{{ urls.public.search }}/api/indexes/geoplateforme/suggest
```

{{ component("table", {
    headers: ["Paramètres de requête"],
    data: [
        ["text = `bd topo`"],
        ["fields = `keywords`"]
    ]
}) }}
    

```json
[
    {
        "index": "geoplateforme",
        "score": 6.0209093,
        "source": {
            "id": "4c2afe00-d2a4-4536-a254-e4025aa8daf7",
            "offering_id": "c39d62ca-f696-4f60-98a5-9b4e02a6b5c6",
            "index_name": "geoplateforme",
            "layer_name": "bdtopo_971:non_communication",
            "title": "Routes de non communication 971",
            "description": "Routes de non communication du département 971",
            "type": "WFS",
            "url": "{{ urls.public.wfs }}?service=WFS&version=2.0.0&request=DescribeFeatureType&typeNames=bdtopo_971:non_communication",
            "open": true,
            "theme": "BD_topo",
            "production_year": 2023,
            "publication_date": "2023-09-18",
            "keywords": [
                "BD_Topo",
                "Routes"
            ],
            "extent": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            180,
                            -90
                        ],
                        [
                            180,
                            90
                        ],
                        [
                            -180,
                            90
                        ],
                        [
                            -180,
                            -90
                        ],
                        [
                            180,
                            -90
                        ]
                    ]
                ]
            },
            "metadata_urls": [],
            "srs": [
                "EPSG:5490"
            ]
        }
    },
    {
        "index": "geoplateforme",
        "score": 6.0209093,
        "source": {
            "id": "ccbb7c1d-4031-4387-a1aa-bd72e209faf4",
            "offering_id": "c39d62ca-f696-4f60-98a5-9b4e02a6b5c6",
            "index_name": "geoplateforme",
            "layer_name": "bdtopo_971:troncon_de_route",
            "title": "Tronçons de route 971",
            "description": "Tronçons de route du département 971",
            "type": "WFS",
            "url": "{{ urls.public.wfs }}?service=WFS&version=2.0.0&request=DescribeFeatureType&typeNames=bdtopo_971:troncon_de_route",
            "open": true,
            "theme": "BD_topo",
            "production_year": 2023,
            "publication_date": "2023-09-18",
            "keywords": [
                "BD-Topo",
                "Routes"
            ],
            "extent": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            180,
                            -90
                        ],
                        [
                            180,
                            90
                        ],
                        [
                            -180,
                            90
                        ],
                        [
                            -180,
                            -90
                        ],
                        [
                            180,
                            -90
                        ]
                    ]
                ]
            },
            "metadata_urls": [],
            "srs": [
                "EPSG:5490"
            ]
        }
    }
]
```
???
<br>

Il est aussi possible de préciser plusieurs champs sur lesquels effectuer la suggestion (exemple : *fields* = *keywords*, *title*)

## Autocomplétion de titre

L'autocomplétion de titre permet de corriger les mots d'une recherche pour correspondre aux mots des champs du document. L'autocomplétion de titre est utilisable sur les champs suivants : *title*, *description*, *theme* et *keywords*.

Sans précision du champs précisé, l'autocomplétion a lieu sur le champ *title* :

??? GET "{{ urls.public.search }}/api/indexes/geoplateforme/suggest_autocomplete"

```title="Contenu"
{{ urls.public.search }}/api/indexes/geoplateforme/suggest_autocomplete
```


    {{ component("table", {
        headers: ["Paramètres de requête"],
        data: [
            ["text = `rout de communiation`"]
        ]
    }) }}
    

```json
[
    {
        "text": "de",
        "offset": 5,
        "length": 2,
        "options": []
    },
    {
        "text": "rout",
        "offset": 0,
        "length": 4,
        "options": [
            {
                "text": "route",
                "score": 0.75,
                "freq": 1
            },
            {
                "text": "routes",
                "score": 0.5,
                "freq": 1
            }
        ]
    },
    {
        "text": "communiation",
        "offset": 8,
        "length": 12,
        "options": [
            {
                "text": "communication",
                "score": 0.9166667,
                "freq": 1
            }
        ]
    }
]
```
???
<br>

Mais, il est possible de préciser le champ sur lequel s'appuie l'autocomplétion à partir du filtre *field* :

??? GET "{{ urls.public.search }}/api/indexes/geoplateforme/suggest_autocomplete"

```title="Contenu"
{{ urls.public.search }}/api/indexes/geoplateforme/suggest_autocomplete
```

    {{ component("table", {
        headers: ["Paramètres de requête"],
        data: [
            ["text = `rout de communiation`"],
            ["field = `keywords`"]
        ]
    }) }}

    

```json
[
    {
        "text": "rout",
        "offset": 0,
        "length": 4,
        "options": [
            {
                "text": "routes",
                "score": 0.5,
                "freq": 2
            }
        ]
    },
    {
        "text": "communiation",
        "offset": 8,
        "length": 12,
        "options": []
    },
    {
        "text": "de",
        "offset": 5,
        "length": 2,
        "options": []
    }
]
```
???
<br>

## Consultation par ID d'un document

Il est possible de retrouver un document de recherche à partir de son ID :

??? GET "{{ urls.public.search }}/api/indexes/geoplateforme/documents/{document}"

```title="Contenu"
{{ urls.public.search }}/api/indexes/geoplateforme/documents/{document}
```    

```json
{
    "id": "4c2afe00-d2a4-4536-a254-e4025aa8daf7",
    "offering_id": "c39d62ca-f696-4f60-98a5-9b4e02a6b5c6",
    "index_name": "geoplateforme",
    "layer_name": "bdtopo_971:non_communication",
    "title": "Routes de non communication 971",
    "description": "Routes de non communication du département 971",
    "type": "WFS",
    "url": "{{ urls.public.wfs }}?service=WFS&version=2.0.0&request=DescribeFeatureType&typeNames=bdtopo_971:non_communication",
    "open": true,
    "theme": "BD_topo",
    "production_year": 2023,
    "publication_date": "2023-09-18",
    "keywords": [
        "BD_Topo",
        "Routes"
    ],
    "extent": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    180,
                    -90
                ],
                [
                    180,
                    90
                ],
                [
                    -180,
                    90
                ],
                [
                    -180,
                    -90
                ],
                [
                    180,
                    -90
                ]
            ]
        ]
    },
    "metadata_urls": [],
    "srs": [
        "EPSG:5490"
    ]
}
```
???
<br>

## Consultation par offres

Il est possible de récupérer tous les ids de document issus d'une offre :

??? GET "{{ urls.public.search }}/api/indexes/geoplateforme/offerings/{offering}"
    
```title="Contenu"
{{ urls.public.search }}/api/indexes/geoplateforme/offerings/{offering}
```

```json
[
    {
        "id": "4c2afe00-d2a4-4536-a254-e4025aa8daf7"
    },
    {
        "id": "ccbb7c1d-4031-4387-a1aa-bd72e209faf4"
    }
]
```
???
<br>
