---
title: Connexion à l'API Entrepôt
mermaid: true
eleventyNavigation:
    key: Connexion à l'API Entrepôt
    parent: Contrôle des accès à l'API Entrepôt 
    order: 1
    nav: guides-developpeur
---

La procédure pour créer un compte Géoplateforme/Cartes.gouv.fr et se connecter (voir [Inscription/ Se connecter via Cartes.gouv.fr](/fr/guides-utilisateur/presentation-utilisateur/connexion))

Une fois le compte existant, on va pouvoir manipuler l'API Entrepôt.

## Qui suis-je ?

Un premier appel va permettre de récupérer nos informations personnelles et principalement les communautés dont nous sommes membres.

??? GET "{{ urls.api_entrepot }}/users/me"

``` title="Contenu" 
{{ urls.api_entrepot }}/users/me
```

```json
{
    "email": "dave.lopper@ign.fr",
    "creation": "2023-02-01T09:45:10.725069Z",
    "last_call": "2023-03-24T17:02:32.676055Z",
    "communities_member": [
        {
            "rights": [
                "ANNEX",
                "UPLOAD",
                "BROADCAST",
                "PROCESSING",
                "COMMUNITY"
            ],
            "community": {
                "name": "Communauté des tutoriels",
                "technical_name": "tutoriels",
                "datastore": "{datastore}",
                "supervisor": "{user}",
                "public": true,
                "_id": "{community}"
            }
        }
    ],
    "technical": false,
    "administrator": false,
    "_id": "{user}",
    "last_name": "Lopper",
    "first_name": "Dave"
}
```
???
<br>

L'identifiant de votre utilisateur est une information :

* à fournir à un gestionnaire de communauté si vous voulez la rejoindre
* à l'adresse `geoplateforme@ign.fr` si vous souhaitez qu'un espace de travail soit créé pour vous (en tant que producteur ou gestionnaire de consommateur de données).

Lorsque la communauté est associée à un entrepôt, on a également dans cette réponse son identifiant. Cet identifiant d'entrepôt sera systèmatiquement présent dans les routes d'appels à l'API pour l'alimentation précisant au sein de quel entrepôt on souhaite travailler.

On voit également les droits que l'on a dans chaque communauté, limitant les actions autorisées.

La vidéo suivante montre comment avoir ces informations en utilisant l'[interface Swagger]({{ urls.swagger }}).

<video controls style="display: block; margin: 0 auto;" width="560" height="315">
  <source src="/videos/recuperation_id_utilisateur_swagger.webm" type="video/webm">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>


## Quelles possibilités a mon entrepôt ?

La plateforme dispose de ressources globales pour permettre l'alimentation et la diffusion de données :

* Des vérifications
* Des traitements
* Des espaces de stockage
* Des grappes de serveur de diffusion, les points d'accès 

Ces ressources sont individuellement mises à disposition des entrepôts, avec quotas.

Pour voir celles accessibles par mon entrepôt (la réponse dépend des ressources qui vous ont été allouées) :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}
```

```json
{
    "community": {
        "contact": "contact@ign.fr",
        "public": true,
        "_id": "{community}"
    },
    "processings": [
        "{{ ids.processings['vector-to-db'] }}"
        "{{ ids.processings['archive-to-archive'] }}",
        "{{ ids.processings['db-to-pyramid'] }}",
        "{{ ids.processings['raster-to-pyramid'] }}",
        "{{ ids.processings['pyramids-to-pyramid'] }}"
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
        },
        {
            "use": 0,
            "quota": 10,
            "endpoint": {
                "name": "Service de diffusion WMS Raster principal",
                "technical_name": "gpf-rok4-server-wms-r",
                "type": "WMS-RASTER",
                "urls": [
                    {
                        "type": "WMS",
                        "url": "{{ urls.open.wmsr }}"
                    }
                ],
                "_id": "{{ ids.endpoints.open.wmsr }}",
                "open": true,
                "metadata_fi": "gpf-rok4-server-wms-r"
            }
        },{
            "use": 0,
            "quota": 10,
            "endpoint": {
                "name": "Service de diffusion WMTS/TMS principal",
                "technical_name": "gpf-rok4-server-wmts-tms",
                "type": "WMTS-TMS",
                "urls": [
                    {
                        "type": "WMTS",
                        "url": "{{ urls.open.wmts }}"
                    },
                    {
                        "type": "TMS",
                        "url": "{{ urls.open.tms }}"
                    }
                ],
                "_id": "{{ ids.endpoints.open.wmts }}",
                "open": true,
                "metadata_fi": "gpf-rok4-server-wmts-tms"
            }
        },{
            "use": 0,
            "quota": 10,
            "endpoint": {
                "name": "Service de téléchargement principal",
                "technical_name": "gpf-download",
                "type": "DOWNLOAD",
                "urls": [
                    {
                        "type": "DOWNLOAD",
                        "url": "{{ urls.open.download }}"
                    }
                ],
                "_id": "{{ ids.endpoints.open.download }}",
                "open": true,
                "metadata_fi": "gpf-download"
            }
        },{
            "use": 0,
            "quota": 100,
            "endpoint": {
                "name": "Service de diffusion de métadonnées principal",
                "technical_name": "gpf-geonetwork",
                "type": "CSW",
                "urls": [
                    {
                        "type": "CSW",
                        "url": "{{ urls.open.csw }}"
                    }
                ],
                "_id": "{{ ids.endpoints.open.csw }}",
                "open": true,
                "metadata_fi": "gpf-geonetwork"
            }
        }
    ],
    "storages": {
        "data": [
            {
                "use": 0,
                "quota": 10000000000,
                "storage": {
                    "name": "Stockage OpenIO performant pour les données pyramides des partenaires",
                    "type": "S3",
                    "labels": [
                        "PARTENAIRE",
                        "PYRAMIDE",
                        "PERF"
                    ],
                    "_id": "{{ ids.storages.s3_data_pyramid }}"
                }
            },
            {
                "use": 0,
                "quota": 10000000000,
                "storage": {
                    "name": "Stockage OpenIO performant pour les données archives des partenaires",
                    "type": "S3",
                    "labels": [
                        "PARTENAIRE",
                        "ARCHIVE",
                        "PERF"
                    ],
                    "_id": "{{ ids.storages.s3_data_archive }}"
                }
            },
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
    "active": true,
    "_id": "{datastore}",
    "checks": [
        "{{ ids.checks.standard }}",
        "{{ ids.checks.vector }}",
        "{{ ids.checks.raster }}",
        "{{ ids.checks.archive }}",
        "{{ ids.checks['pyramid-rok4'] }}"
    ]
}
```
???
<br>