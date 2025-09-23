---
title: Exemple d'ajout de colonne avec valeur paramétrable

mermaid: true
eleventyNavigation:
    key: Exemple d'ajout de colonne avec valeur paramétrable
    parent: Dérivation d'une donnée vecteur en base
    order: 1
    nav: guides-developpeur
---


{% from "components/component.njk" import component with context %}



Dans cet exemple, on part de la donnée des écorégions du tutoriel de base, publiée en WFS, que l'on va modifier en ajoutant une colonne.

## Téléversement d'un fichier SQL de dérivation

Toutes ces actions vont être définie au format SQL, dans un fichier statique. Ce fichier n'a pas vocation à contenir de la donnée, mais simplement des instructions de modification

:material-file: Exemple :
  {{ component("download", {
    title: "derivation.sql",
    href: "/data/tutoriels/alimentation-maj/derivation.sql",
    detail: "SQL - 133Ko"
}) }}

```sql title="Contenu"
ALTER TABLE ecoregions ADD COLUMN test_add_column integer; 

UPDATE ecoregions
   SET test_add_column = nnh * {{ params.multiply }};
```


Ce fichier va permettre :

- D'ajouter une colonne à la table `ecoregions`
- De remplir avec pour valeur celle de l'attribut `nnh` multipliée par un nombre fourni en paramètre de l'exécution de traitement. La syntaxe {% raw %}`{{ params.<x> }}`{% endraw %} permet de rendre dynamique ces scripts de dérivation.


{{ component("segmented", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<derivation.sql>`"],
        ["type = DERIVATION-SQL"],
        ["name = Ajout d'une colonne et calcul par multiplication"]
    ]
}) }}

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/statics"

``` title="Contenu" 
https://data.geopf.fr/api/datastores/{datastore}/statics 
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<derivation.sql>`"],
        ["type = DERIVATION-SQL"],
        ["name = Ajout d'une colonne et calcul par multiplication"]
    ]
}) }}



### Corps de réponse JSON
```json
{
  "name": "Ajout d'une colonne et calcul par multiplication",
  "type": "DERIVATION-SQL",
  "_id": "{sql derivation}",
  "type_infos": {
    "used_variables": [
      "params.multiply"
    ]
  }
}
```
???
## Contrôle des données avant dérivation

En consultant la donnée en WFS, notamment sa table attributaire, on retrouve le contenu suivant.

![Table attributaire avant dérivation](/img/guides-developpeur/vecteur/derivation_avant.png)

## Jeu de la dérivation sur une donnée

### Configuration de l'exécution de traitement

On utilise le traitement de dérivation vecteur.

:::warning "Points d'attentions"
Pour la donnée en sortie, on ne précise pas un nom, mais l'identifiant de notre donnée stockée initialisée juste avant. On précise également cette donnée comme étant en entrée de notre exécution. On va donc modifier une donnée plutôt qu'en créer une nouvelle.
:::

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions
```

### Corps de réponse JSON
```json
{
    "processing": "{{ ids.processings['db-to-db'] }}",
    "inputs": {
        "stored_data": [
            "{stored data}"
        ]
    },
    "output": {
        "stored_data": {
            "id": "{stored data}"
        }
    },
    "parameters": {
        "derivations": [
            "{sql derivation}"
        ],
        "params": {
            "multiply": "3"
        }
    }
}
```

### Corps de réponse JSON
```json
{
    "processing": {
        "name": "Génération ou mise à jour d’une donnée vecteur à partir d’une donnée vecteur",
        "_id": "{{ ids.processings['db-to-db'] }}"
    },
    "status": "CREATED",
    "creation": "2024-02-16T14:51:24.152451997Z",
    "inputs": {
        "upload": []
        "stored_data": [
            {
                "name": "Pays et éco-régions",
                "type": "VECTOR-DB",
                "status": "MODIFYING",
                "srs": "EPSG:3857",
                "_id": "{stored data}"
            }
        ]
    },
    "output": {
        "stored_data": {
            "name": "Pays et éco-régions",
            "type": "VECTOR-DB",
            "status": "MODIFYING",
            "srs": "EPSG:3857",
            "_id": "{stored data}"
        }
    },
    "parameters": {
        "derivations": [
            "{sql derivation}"
        ],
        "params": {
            "multiply": "3"
        }
    },
    "_id": "{execution dérivation}}"
}
```
???
### Déclenchement de cette exécution

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution dérivation}/launch"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/processings/executions/{execution dérivation}/launch
```

??? 
## Consultation de la donnée

On peut voir le nouveau champ apparaître dans la description de la donnée

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored data}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/stored_data/{stored data}
```

### Corps de réponse JSON
```json
{
    "name": "Pays et écorégions",
    "type": "VECTOR-DB",
    ....
    "_id": "{stored data}",
    "type_infos": {
        "relations": [
            {
                "name": "pays",
                "type": "TABLE",
                "attributes": {
                    "id": "integer",
                    "un": "integer",
                    "fid": "integer",
                    "lat": "double precision",
                    "lon": "double precision",
                    "area": "integer",
                    "fips": "character varying(2)",
                    "geom": "geometry(Polygon,4326)",
                    "iso2": "character varying(2)",
                    "iso3": "character varying(3)",
                    "name": "character varying(50)",
                    "region": "integer",
                    "pop2005": "bigint",
                    "subregion": "integer"
                },
                "primary_key": [
                    "fid"
                ]
            },
            {
                "name": "ecoregions",
                "type": "TABLE",
                "attributes": {
                    "id": "integer",
                    "fid": "integer",
                    "nnh": "integer",
                    "geom": "geometry(Polygon,4326)",
                    "color": "character varying",
                    "realm": "character varying",
                    "eco_name": "character varying",
                    "nnh_name": "character varying",
                    "color_bio": "character varying",
                    "color_nnh": "character varying",
                    "biome_name": "character varying",
                    "test_add_column": "integer"
                },
                "primary_key": [
                    "fid"
                ]
            }
        ]
    }
}
```
???
## Contrôle des données après dérivation

Comme la structure a changé (ajout d'une colonne), il faut resynchroniser l'offre pour que le serveur de diffusion prenne connaissance de ce changement. Dans le cas d'un ajout, la consultation fonctionne mais la nouvelle colonne n'apparait pas. Dans le cas d'une suppression, on aura des erreurs car le serveur de diffusion aura des échec de lecture sur la colonne disparue. De manière générale, quand la structure est modifiée avec ce traitement, il est préférable de resynchroniser toutes les offres utilisant la donnée stockée modifiée.

??? PUT "{{ urls.api_entrepot }}/datastores/{datastore}/offerings/{offering wfs}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/offerings/{offering wfs}
```

???

Si vous utilisez QGis, il peut être nécessaire de vider le cache pour qu'il ne garde pas l'ancienne description de la couche WFS. On retrouve désormais le contenu suivant.

![Table attributaire après dérivation](/img/guides-developpeur/vecteur/derivation_apres.png)
