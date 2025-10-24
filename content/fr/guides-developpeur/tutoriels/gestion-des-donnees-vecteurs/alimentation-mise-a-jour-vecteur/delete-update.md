---
title: Suppression et modification de données
eleventyNavigation:
    key: Suppression et modification de données
    parent: Alimentation par mise à jour vecteur
    order: 4
    nav: guides-developpeur
---

{% from "components/component.njk" import component with context %}

On peut également réaliser des suppressions et des modifications dans les tables de la donnée cible. Suppressions et modifications se font via des fichiers eu format CSV :

* Des suppressions dans une table se fait via la livraison d'un fichier CSV `<nom de la table>.delete`. Chaque ligne de ce fichier donnera une instruction d'un DELETE dont le filtre est défini par les champs précisés.
* Des modifications dans un table se fait via la livraison d'un fichier CSV `<nom de la table>.update`. La table cible doit avoir une clé primaire de définie et le fichier CSV doit préciser les valeurs des attributs de cette clé primaire. Chaque ligne de ce fichier donnera une instruction d'un UPDATE dont le filtre est défini par les champs de la clé primaire et les champs modifiés par les autres champs présent.

Les suppressions sont jouées en premier, puis les modifications et enfin les insertions via des fichiers vecteurs comme vu précédemment.

## Livraison des modifications

Exemple :

{{ component("download", {
      title: "Télécharger (CSV de suppression)",
      href: "/data/tutoriels/alimentation-maj/installation.delete",
      detail: "CSV - 45o"
}) }}

```html title="Contenu"

{{ "public/data/tutoriels/alimentation-maj/installation.delete" | readFILE | safe }}

```

{{ component("download", {
      title: "Télécharger (CSV de modification)",
      href: "/data/tutoriels/alimentation-maj/installation.update",
      detail: "CSV - 187o"
}) }}

```html title="Contenu"
{{ "public/data/tutoriels/alimentation-maj/installation.update" | readFILE | safe }}
```


### Déclarer la livraison

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads
```

```json
{
    "description": "Suppression des données",
    "name": "Modification et suppression de données",
    "type": "VECTOR",
    "srs": "EPSG:4326"
}
```

```json
{
    "name": "Modification et suppression de données",
    "description": "Suppression des données",
    "type": "VECTOR",
    "status": "OPEN",
    "srs": "EPSG:4326",
    "contact": "contact@ign.fr",
    "size": 0,
    "last_event": {
        "title": "Création",
        "date": "2023-10-20T10:17:58.178975406",
        "initiator": {
            "last_name": "Lopper",
            "first_name": "Dave",
            "_id": "{user}"
        }
    },
    "_id": "{upload suppression modification}"
}
```
???
<br>

### Téléverser les fichiers CSV

📄 `<installation.update>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}/data?path=data/installation.update"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}/data?path=data/installation.update
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<installation.update>`"]
    ]
}) }}

???
<br>

📄 `<installation.delete>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}/data?path=data/installation.delete"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}/data?path=data/installation.delete
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<installation.delete>`"]
    ]
}) }}

???
<br>

### Contrôler le contenu

Afin de vérifier que tous les fichiers ont bien été déposés, et l'éventuelle arborescence :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}/tree"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}/tree
```

```json
[
    {
        "type": "DIRECTORY",
        "name": "data",
        "size": 232,
        "children": [
            {
                "type": "FILE",
                "name": "installation.delete",
                "size": 45
            },
            {
                "type": "FILE",
                "name": "installation.update",
                "size": 187
            }
        ]
    }
]
```
???
<br>


## Terminer la livraison

### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}/close"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}/close
```

???
<br>

### Consultation des vérifications sur ma livraison

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}/checks"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}/checks
```

```json
{
    "asked": [
        {
            "check": {
                "name": "Vérification vecteur",
                "_id": "{{ ids.checks.vector }}"
            },
            "_id": "{execution}"
        },
        {
            "check": {
                "name": "Vérification standard",
                "_id": "{{ ids.checks.standard }}"
            },
            "_id": "{execution}"
        }
    ],
    "in_progress": [],
    "passed": [],
    "failed": []
}
```
???
<br>

## Modification des données

### Configuration de l'exécution de traitement

On utilise à nouveau le traitement d'intégration de données vecteur.

:::warning Points d'attentions
    Pour la donnée en sortie, on ne précise pas un nom, mais l'identifiant de notre donnée stockée initialisée juste avant. On va donc modifier une donnée plutôt qu'en créer une nouvelle. Par défaut, le traitement d'intégration ne prend pas en compte les fichiers de suppressions et modifications, pour limiter les mauvaises manipulations. On va donc préciser en paramètre que nous voulons faire ce genre d'action.
:::

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions
```

```json
{
    "processing": "{{ ids.processings['vector-to-db'] }}",
    "inputs": {
        "upload": [
            "{upload suppression modification}}"
        ]
    },
    "output": {
        "stored_data": {
            "id": "{stored data}"
        }
    },
    "parameters": {
        "update": true,
        "delete": true
    }
}
```


```json
{
    "processing": {
        "name": "Intégration de données vecteur livrées en base",
        "_id": "{{ ids.processings['vector-to-db'] }}"
    },
    "status": "CREATED",
    "creation": "2023-10-20T12:44:07.451183707Z",
    "inputs": {
        "upload": [
            {
                "type": "VECTOR",
                "name": "Installations classées pour la protection de l'environnement",
                "status": "CLOSED",
                "srs": "EPSG:4326",
                "_id": "{upload suppression modification}"
            }
        ],
        "stored_data": []
    },
    "output": {
        "stored_data": {
            "name": "Installations classées pour la protection de l'environnement",
            "type": "VECTOR-DB",
            "status": "GENERATED",
            "srs": "EPSG:4326",
            "_id": "{stored data}"
        }
    },
    "parameters": {
        "update": true,
        "delete": true
    },
    "_id": "{execution suppression modification}}"
}
```
???
<br>

### Déclenchement de cette exécution

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution suppression modification}/launch"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution suppression modification}/launch
```

???
<br>

## Consultation de la donnée

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored data}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored data}
```

```json
{
    "name": "Installations classées pour la protection de l'environnement",
    "type": "VECTOR-DB",
    "srs": "EPSG:4326",
    "contact": "contact@ign.fr",
    "extent": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    7.11555778,
                    46.26953767
                ],
                [
                    7.11555778,
                    50.15761815
                ],
                [
                    4.0492738,
                    50.15761815
                ],
                [
                    4.0492738,
                    46.26953767
                ],
                [
                    7.11555778,
                    46.26953767
                ]
            ]
        ]
    },
    "last_event": {
        "title": "Modification",
        "date": "2023-05-24T16:32:50.838863",
        "initiator": {
            "_id": "{user}"
        }
    },
    "tags": {},
    "storage": {
        "type": "POSTGRESQL",
        "labels": []
    },
    "size": 1073152,
    "status": "GENERATED",
    "_id": "{stored data}",
    "type_infos": {
        "relations": [
            {
                "name": "installation",
                "type": "TABLE",
                "attributes": [
                    "id",
                    "nom_ets",
                    "adresse",
                    "commune",
                    "lib_regime",
                    "url_fiche",
                    "lib_seveso",
                    "geom"
                ],
                "primary_key": [
                    "id"
                ]
            },
            {
                "name": "installation_autorisation",
                "type": "VIEW",
                "attributes": [
                    "id",
                    "nom_ets",
                    "adresse",
                    "commune",
                    "lib_regime",
                    "url_fiche",
                    "lib_seveso",
                    "geom"
                ],
                "primary_key": []
            }
        ]
    }
}
```
???
<br>

## Nettoyage de la livraison

Maintenant que la donnée a été stockée de manière pérenne, on peut supprimer la livraison et son contenu :

??? DELETE "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload suppression modification}
```

???
<br>

## Consultation du flux WMS

Notre flux WMS retourne désormais la donnée modifiée sur les Ardennes et le Doubs.

![Comparaison avant / après de la suppression](/img/guides-developpeur/vecteur/comparaison_suppression.png){.fr-responsive-img .frx-border-img .frx-img-contained}

??? GET "{{ urls.public.wmsv }}?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo&BBOX=47.15389042500531502,5.95024509374819122,47.37809636403335389,6.16439800318477449&CRS=EPSG:4326&WIDTH=916&HEIGHT=959&LAYERS=installations_classees&STYLES=&FORMAT=image/png&QUERY_LAYERS=installations_classees&INFO_FORMAT=application/json&I=437&J=478&FEATURE_COUNT=10"

```title="Contenu"
{{ urls.public.wmsv }}?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetFeatureInfo&BBOX=47.15389042500531502,5.95024509374819122,47.37809636403335389,6.16439800318477449&CRS=EPSG:4326&WIDTH=916&HEIGHT=959&LAYERS=installations_classees&STYLES=&FORMAT=image/png&QUERY_LAYERS=installations_classees&INFO_FORMAT=application/json&I=437&J=478&FEATURE_COUNT=10
```

    === "Avant"

```json
{
    "type": "FeatureCollection",
    "features":
    [
        {
            "type": "Feature",
            "id": "installation_autorisation_ad93fd1b-d2be-4dc2-8860-63f86e469ca2.fid-4a7acf16_18ad0a2e739_-43de",
            "geometry":
            {
                "type": "Point",
                "coordinates":
                [
                    6.051,
                    47.267
                ]
            },
            "geometry_name": "geom",
            "properties":
            {
                "id": 10060,
                "nom_ets": "CURTIL PLASTIQUE",
                "adresse": "12 chemin de l'Ermitage",
                "commune": "BESANCON",
                "lib_regime": "Autorisation",
                "url_fiche": "https://www.georisques.gouv.fr/risques/installations/donnees/details/0005902181",
                "lib_seveso": "Non Seveso"
            },
            "bbox":
            [
                6.051,
                47.267,
                6.051,
                47.267
            ]
        }
    ],
    "totalFeatures": "unknown",
    "numberReturned": 1,
    "timeStamp": "2023-10-20T13:43:19.684Z",
    "crs":
    {
        "type": "name",
        "properties":
        {
            "name": "urn:ogc:def:crs:EPSG::4326"
        }
    },
    "bbox":
    [
        6.051,
        47.267,
        6.051,
        47.267
    ]
}
```

    === "Après"

```json
{
    "type": "FeatureCollection",
    "features":
    [
        {
            "type": "Feature",
            "id": "installation_autorisation_ad93fd1b-d2be-4dc2-8860-63f86e469ca2.fid-4a7acf16_18ad0a2e739_-43de",
            "geometry":
            {
                "type": "Point",
                "coordinates":
                [
                    6.051,
                    47.267
                ]
            },
            "geometry_name": "geom",
            "properties":
            {
                "id": 10060,
                "nom_ets": "CURTIL PLASTIQUE",
                "adresse": "12 chemin de l'Ermitage",
                "commune": "BESANÇON",
                "lib_regime": "Autorisation",
                "url_fiche": "https://www.georisques.gouv.fr/risques/installations/donnees/details/0005902181",
                "lib_seveso": "Non Seveso"
            },
            "bbox":
            [
                6.051,
                47.267,
                6.051,
                47.267
            ]
        }
    ],
    "totalFeatures": "unknown",
    "numberReturned": 1,
    "timeStamp": "2023-10-20T13:43:19.684Z",
    "crs":
    {
        "type": "name",
        "properties":
        {
            "name": "urn:ogc:def:crs:EPSG::4326"
        }
    },
    "bbox":
    [
        6.051,
        47.267,
        6.051,
        47.267
    ]
}
```
???
<br>
