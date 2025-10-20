---
title: Recherche dans un index personnalisé
mermaid: true
eleventyNavigation:
    key: Recherche dans un index personnalisé
    parent: Mise en place d'un index de recherche personnalisé
    order: 2
    nav: guides-developpeur
---

{% from "components/component.njk" import component with context %}

En plus de l'index standard, il est possible de créer ses propres index de recherche. Ce sont les index custom.

Ils permettent d'intégrer des offres qui ne sont pas disponibles dans l'entrepôt Géoplateforme. Ces offres peuvent être intégrer dans un index custom par l'intermédiaire d'un fichier CSV ou JSON. La recherche se faisant non plus sur l'index géoplateforme mais sur l'index custom.

Le contenu des données est libre avec un certain formalisme imposé.

## Formalisme des fichiers sources

Au sein d'une livraison, tous les CSV et JSON doivent contenir les mêmes types de données et le même nombre de colonnes.

Les noms des colonnes doivent exclusivement utilisées des **caractères alphanumériques sans majuscules (a-z, 1-9 et _)**.

Les types disponibles pour chaque colonne sont : *string*, *date* et *geoJSON* ou *WKT*.

Chaque fichier CSV doit être accompagné d'un fichier de même nom au format CSVT décrivant le type de chaque colonne. Les fichiers JSON doivent être accompagnés d'un fichier schema.json décrivant le schema JSON auquel devra correspondre chaque fichier JSON.

### Fichiers CSV

Exemple de fichier **CSVT** utilisant une géométrie WKT :

```
String;String;Date;WKT

```

Exemple du fichier **CSV** correspondant :

```
name;description;date;geometry
Example Name;Example Description;08/01/2009;POINT(8.8249 47.2274)
Place Mayor;Une place historique au cœur de Madrid, réputée pour son architecture magnifique et son ambiance animée.;09/01/2009;POINT(-3.7079 40.4154)

```

Exemple de fichier **CSVT** utilisant une géométrie geoJSON :

```
String;String;Date;CoordX;CoordY

```

Exemple du fichier **CSV** correspondant :

```
name;description;date;geometry
Example Name;Example Description;08/01/2009;8.8249;47.2274
Place Mayor;Une place historique au cœur de Madrid, réputée pour son architecture magnifique et son ambiance animée.;09/01/2009;-3.7079;40.4154

```

Comme observé, le séparateur pour les CSV doit être ";".

### Fichiers JSON

Exemple de fichier **Schema JSON** utilisant une géométrie WKT :

```json
{
    "type": "array",
    "items" : {
      "type": "object",
      "properties": {
        "name": {"type": "string"},
        "date": {"type": "string", format: "date"},
        "geometry": {"type": "WKT"}
      }
    }
}

```

Exemple de fichier **JSON** correspondant :

```json
[
  {
      "name": "Example Object",
      "date": "2023-05-15",
      "geometry": "POINT(8.8249 47.2274)"
  }
]

```

Exemple de fichier **Schema JSON** utilisant une géométrie geoJSON de type Point:

```json
{
    "type": "array",
    "items" : {
        "type": "object",
        "properties": {
            "name": {"type": "string"},
            "date": {"type": "string", format: "date"},
            "geometry": {
                "type": "object",
                "properties" : {
                    "type" : {
                        "type" : "string",
                        "enum" : ["Point"]
                    },
                    "coordinates" :{
                        "type" : "array",
                        "minItems : 2
                        "items" : {
                            "type" : "number"
                        }
                    }
                }
            }
        }
    }
}
```

Exemple de fichier **JSON** correspondant :

```json
[
    {
        "titre" : "Titre1",
        "date" : "2023-05-15",
        "geometry" : {"type" : "Point" , "coordinates" : [100.0, 0.0]}
    }
]
```

### Search_Layer ou index custom similaire au standard

Quand une livraison a le flag is_search_layer, le format des fichiers CSV ou JSON est imposé. Comme on le verra par la suite, les index custom ayant ce flag auront exactement le même fonctionnement que celui de l'index standard.

Que ce soit avec le CSV et le JSON, la complétion du champ offeringId n'est pas obligatoire et il est possible de laisser ce champ vide pour chaque document.

#### Search_Layer avec un CSV

Le fichier **CSVT** doit contenir obligatoirement le format suivant : 

```
UUID;String;String;String;Boolean;String;String;String;String;String;String;String;String;String;String;String;WKT;String;Date;Array;String;Array;Array

```

Et voici avec le fichier **CSV** correspondant (le nom des colonnes n'est pas mofifiable) :

```
offeringId;layerName;title;description;open;thumbnail;type;endpointUrl;attribution_title;attribution_url;attribution_email;attribution_logo_format;attribution_logo_url;attribution_logo_width;attribution_logo_height;productionYear;extent;theme;publicationDate;keywords;licence;metadataUrls;srs
00112233-4455-6677-8899-aabbccddeeff;Example Layer;Example Title;This is an example description;true;https://example.com/thumbnail.jpg;WFS;https://example.com/endpoint;Example Attribution;https://example.com/attribution;contact@example.com;png;https://example.com/logo.png;100;50;2023;POINT(24.0212 5.0565);Example Theme;2023-08-03;["example"];Example License;["https://example.com/metadata1"];["EPSG:4326"]


```

#### Search_Layer avec un JSON

Le **Schema JSON** doit contenir obligatoirement le format suivant :

```json
{
   "type": "array",
   "items" : {
    "type":"object",
    "properties":{
        "offeringId":{
          "type":"string",
          "format":"uuid"
        },
        "layerName":{
          "type":"string"
        },
        "title":{
          "type":"string"
        },
        "description":{
          "type":"string"
        },
        "open":{
          "type":"boolean"
        },
        "thumbnail":{
          "type":"string"
        },
        "type":{
          "type":"string"
        },
        "endpointUrl":{
          "type":"string",
          "format":"uri"
        },
        "attribution":{
          "type":"object",
          "properties":{
              "title":{
                "type":"string"
              },
              "url":{
                "type":"string",
                "format":"uri"
              },
              "email":{
                "type":"string",
                "format":"email"
              },
              "logo":{
                "type":"object",
                "properties":{
                    "format":{
                      "type":"string"
                    },
                    "url":{
                      "type":"string",
                      "format":"uri"
                    },
                    "width":{
                      "type":"integer",
                      "minimum":1
                    },
                    "height":{
                      "type":"integer",
                      "minimum":1
                    }
                }
              }
          }
        },
        "productionYear":{
          "type":"integer"
        },
        "extent":{
          "type":"object"
        },
        "theme":{
          "type":"string"
        },
        "publicationDate":{
          "type":"string",
          "format":"date"
        },
        "keywords":{
          "type":"array",
          "items":{
              "type":"string"
          }
        },
        "licence":{
          "type":"string"
        },
        "metadataUrls":{
          "type":"array",
          "items":{
              "type":"string",
              "format":"uri"
          }
        },
        "srs":{
          "type":"array",
          "items":{
              "type":"string"
          }
        }
    }
   }
}

```

Et voici un exemple de fichier **JSON** correpondant (le nom des colonnes n'est pas modifiable) :

```json
[
  {
    "offeringId":"00112233-4455-6677-8899-aabbccddeeff",
    "layerName":"Example Layer",
    "title":"Example Title",
    "description":"This is an example description.",
    "open":true,
    "thumbnail":"https://example.com/thumbnail.jpg",
    "type":"example",
    "endpointUrl":"https://example.com/endpoint",
    "attribution":{
        "title":"Example Attribution",
        "url":"https://example.com/attribution",
        "email":"contact@example.com",
        "logo":{
          "format":"png",
          "url":"https://example.com/logo.png",
          "width":100,
          "height":50
        }
    },
    "productionYear":2023,
    "extent":{
        "type" : "Polygon", 
        "coordinates" : [[ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ]]
    },
    "theme":"Example Theme",
    "publicationDate":"2023-08-03",
    "keywords":[
        "example",
        "data",
        "json",
        "schema"
    ],
    "licence":"Example License",
    "metadataUrls":[
        "https://example.com/metadata1",
        "https://example.com/metadata2"
    ],
    "srs":[
        "EPSG:4326",
        "EPSG:3857"
    ]
  }
]

```

## Livraison des fichiers

Pour créer ces index custom, la première étape est de livrer les fichiers dans l'entrepôt.

Il faudra que le datastore possède la vérification *checkindex*, le storage *OPENSEARCH*, le traitement *index2index* et l'endpoint *gpf-research-private*.

Pour cela, on commence par créer la livraison :

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads
```

```json
{
    "type": "INDEX",
    "description": "TESTAUTOINDEXCUSTOM",
    "name": "TESTAUTOINDEXCUSTOM",
    "type_infos" : {
        "is_search_layer" : false
    },
    "srs": "EPSG:4326"
    }

```
???
<br>

C'est à cette étape qu'est défini le flag is_search_layer.

Il faut ensuite ajouter les fichiers à la livraison (exemple pour un CSV) :

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/example_wkt.csvt"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/example_wkt.csvt
```

    {{ component("table", {
        headers: ["Corps de requête Multipart"],
        data: [
            ["file = `example_wkt.csvt`"]
        ]
    }) }}

???
<br>

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/example_wkt.csv"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/example_wkt.csv
```
    {{ component("table", {
        headers: ["Corps de requête Multipart"],
        data: [
            ["file = `example_wkt.csv`"]
        ]
    }) }}

???
<br>

Il doit avoir autant de fichiers CSV que de fichiers CSVT dans la livraison.

Enfin, il ne reste plus qu'à clôturer la livraison :

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close
```

???
<br>

Une vérification va automatiquement être lancée pour vérifier la cohérence des fichiers. Il est possible de suivre le résultat de la vérification avec cette route :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}
```

???
<br>

Lorsque la vérification devient *passed*, il est possible de passer à la suite de la création de l'index.

Pour accéder aux logs de la vérification (en cas d'erreur par exemple) :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/checks/executions/{execution}/logs"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/checks/executions/{execution}/logs
```

???
<br>

## Traitements

Une fois la livraison terminée, le traitement utilisé est **index2index** qui permet de créer une donnéee stockée dans un stockage de type *OPENSEARCH*. Chaque ligne des CSV ou JSON vont être transformée en autant de document de recherche dans l'index custom.

Pour cela, il faut commencer par créer un traitement **index2index** :

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions
```

```json
{
    "processing": "{{ ids.processings.index2index }}",
    "inputs": {
        "upload": [
            "{upload}"
        ]
    },
    "output": {
        "stored_data": {
            "name" : "index",
            "storage_type" : "OPENSEARCH",
            "storage_tags": []
        }
    }
}
```
???
<br>

Cette requête donne un *execution_id* et un *stored_data_id* qu'il faut conserver pour la suite.

Il faut ensuite lancer le traitement avec la requête suivante :

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution}/launch"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution}/launch
```

???
<br>

Comme pour la livraison, on peut suivre le statut du traitement avec la requête suivante :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution}
```

???
<br>

Il est possible de suivre les logs du traitement :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution}/logs"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution}/logs
```

???
<br>

Une fois que le traitement passe en **SUCCESS**, il est possible de passer à la suite de la création de l'index. Il est possible de vérifier la stored data générée :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored_data}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored_data}
```

???
<br>

## Configuration et publication

Une fois le traitement terminé, il faut créer la configuration de l'index custom :

??? POST "{{ urls.api_entrepot }}/{datastore}/datastores/configurations"

```title="Contenu"
{{ urls.api_entrepot }}/{datastore}/datastores/configurations
```

```json
{
"type":"SEARCH",
"name":"layer AUTO TEST INDEX20",
"layer_name":"layerAUTOTEST_INDEX20",
"type_infos":{
    "title":"title",
    "abstract":"abstract",
    "keywords":[
        "AUTO",
        "TEST"
    ],
    "bbox":{
        "west":0,
        "south":0,
        "north":90,
        "east":90
    },
    "used_data":[
        {
            "stored_data":"{stored_data}"
        }
    ]
},
"metadata":[  
],
"attribution":{
    "title":"newAttributionTitle",
    "url":"https://www.google.com/",
    "logo":{
        "format":"image/jpeg",
        "url":"https://www.google.com/",
        "width":90,
        "height":90
    }
}
}
```
???
<br>

On récupère l'id de la configuration en retour de cette requête.

Enfin, pour que l'index custom soit visible, il faut publié l'offre :

??? POST "{{ urls.api_entrepot }}/{datastore}/datastores/configurations/{configuration}/offerings"

```title="Contenu"
{{ urls.api_entrepot }}/{datastore}/datastores/configurations/{configuration}/offerings
```

```json
{
    "endpoint": "{{ ids.endpoints.private.search }}",
    "open": true
}
```
???
<br>

Le champ *open* permet de déterminer le niveau de visibilité de l'index custom :
    
- Pour *open=true*, l'index custom sera accessible à tous une fois l'utilisateur connecté sur la Géoplateforme (avec un compte Géoplateforme ou une autre clé)
- Pour *open=false*, l'index custom ne sera accessible qu'aux personnes ayant reçu une permission du gérant de l'index. Pour en savoir plus sur la création de permission et la gestion des clés, suivé [ce lien](../../controle-des-acces/diffusion/permission.md).

On peut surveiller le statut de la publication :

??? GET "{{ urls.api_entrepot }}/{datastore}/datastores/configurations/{configuration}/offerings"

```title="Contenu"
{{ urls.api_entrepot }}/{datastore}/datastores/configurations/{configuration}/offerings
```

???
<br>

Une fois l'offre en *PUBLISHED*, l'index custom est bien disponible et il est possible de rechercher dans cet index.

## Mise à jour d'un index

### Ajout de documents sur l'index

Pour ajouter des documents à un index, il faut livrer les nouveaux documents en respectant le schéma défini précédemment pour l'index. Il faut ensuite refaire un traitement avec la nouvelle livraison en précisant l'id de la donnée stockée de l'index à mettre à jour :

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions
```

```json
{
    "processing": "{{ ids.processings.index2index }}",
    "inputs": {
        "upload": [
            "{upload}"
        ],
        "stored_data": []
    },
    "output": {
        "stored_data": {
            "id" : "{stored_data}"
        }
    }
}
```
???
<br>

Une fois le traitement terminé, l'index est à jour et les nouveaux documents sont recherchables.

### Suppression ou modification de documents sur l'index

Pour supprimer ou modifier des documents d'un index, il faut dépublier l'index actuel et relivrer intégralement les documents de l'index (documents conservés et modifiés). Il faut bien revérifier avant de dépublier l'index que vous avez bien tous les documents de l'index afin de les relivrer par la suite. Après la livraison, il faut reprendre les étapes de traitements et de publication comme précédemment pour rendre de nouveau accessible l'index.