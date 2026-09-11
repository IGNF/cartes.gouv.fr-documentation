---
title: Fichier descripteur de livraison
description: Le fichier descripteur de livraison est un fichier au format JSON permettant de décrire les données à livrer et les livraisons à créer.
eleventyNavigation:
    key: Fichier descripteur de livraison
    order: 6
---


<!--
CE DOCUMENT N'A PAS VOCATION A ÊTRE LU DIRECTEMENT OU VIA GITHUB :
les liens seront cassés, l'affichage ne sera pas correcte. Ne faites ça !

Consultez la doc en ligne ici : https://geoplateforme.github.io/sdk-entrepot/

Le lien vers cette page devrait être : https://geoplateforme.github.io/sdk-entrepot/upload_descriptor/
-->

## Définition

Le fichier doit contenir une liste de `datasets`. Chaque *dataset* représente une *livraison* et doit contenir les informations suivantes :

* la liste des dossiers à téléverser (attribut `data_dirs`) : les chemins **relatifs** vers les dossiers à téléverser ;
* les informations de la livraison à créer :
  * Nom (attribut `name`) : nom de la livraison (afin que vous puissiez l'identifier, choix libre) ;
  * Description (attribut `description`) : description de la livraison (choix libre) ;
  * Projection (attribut `srs`) : le code EPSG des données (ex : `EPSG:2154`) ;
  * Type (attribut `type`) : le type des données livrées. Le type de la livraison conditionne les types de fichiers de données qui seront attendus et les traitements qui pourront prendre en entrée cette livraison. Rien n'interdit de déposer des données avec des extensions incohérentes avec le type de livraison, mais elles ne seront potentiellement pas prises en compte par les vérifications et les traitements.
    * `RASTER` -> PNG, TIFF, JPEG, JPEG2000 ;
    * `VECTOR` -> SHP, CSV, GeoJSON ;
    * `ARCHIVE` -> Tout type de fichiers ;
* les commentaires et les tags à ajouter à la livraison :
  * `comments` : liste des commentaires à ajouter ;
  * `tags` : liste des tags à ajouter (clef-valeur).

## Exemple avec un dataset

Nous souhaitons livrer les données suivantes :

```txt
CANTON
├── CANTON.cpg
├── CANTON.dbf
├── CANTON.prj
├── CANTON.shp
└── CANTON.shx
```

Voici le fichier descripteur de livraison que l'on pourrait utiliser :

```json
{
    "datasets": [
        {
            "data_dirs": [
                "CANTON"
            ],
            "upload_infos": {
                "description": "Jeu d'exemple vecteur",
                "name": "EXAMPLE_DATASET_VECTOR",
                "srs": "EPSG:2154",
                "type": "VECTOR"
            },
            "comments": [
                "Ceci est un jeu de données d'exemple contenant des données vecteur"
            ],
            "tags": {
                "tuto": "oui"
            }
        }
    ]
}
```

## Exemple avec plusieurs dataset

Nous souhaitons livrer les données suivantes :

```txt
├── TABLE
│   ├── tableau_assemblage.cpg
│   ├── tableau_assemblage.dbf
│   ├── tableau_assemblage.prj
│   ├── tableau_assemblage.shp
│   └── tableau_assemblage.shx
└── IMAGES
    ├── dalle_01_01.tif
    ├── dalle_01_02.tif
    ├── dalle_02_01.tif
    └── dalle_02_02.tif
```

Nous avons deux types de données différents (vecteur et raster). Nous devons donc créer deux livraisons distinctes.

Voici le fichier descripteur de livraison que l'on pourrait utiliser :

```json
{
    "datasets": [
        {
            "data_dirs": [
                "IMAGES"
            ],
            "upload_infos": {
                "description": "Jeu d'exemple raster",
                "name": "EXAMPLE_DATASET_RASTER",
                "srs": "EPSG:2154",
                "type": "RASTER"
            },
            "comments": [
                "Ceci est un jeu de données d'exemple contenant des données raster"
            ],
            "tags": {
                "tuto": "oui"
            }
        },
        {
            "data_dirs": [
                "TABLE"
            ],
            "upload_infos": {
                "description": "Jeu d'exemple vecteur",
                "name": "EXAMPLE_DATASET_VECTOR",
                "srs": "EPSG:2154",
                "type": "VECTOR"
            },
            "comments": [
                "Ceci est un jeu de données d'exemple contenant des données vector"
            ],
            "tags": {
                "tuto": "oui"
            }
        }
    ]
}
```

## Envoi des données

Une fois le fichier descripteur de livraison créé, vous pouvez [envoyer les données](comme-executable.md#televerser-des-donnees) sur la Géoplateforme.