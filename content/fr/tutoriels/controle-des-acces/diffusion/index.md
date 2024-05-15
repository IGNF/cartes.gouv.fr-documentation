---
title: Gestion des clés
description: Comment gérer ses clés d'accès aux services de diffusion
date: git Last Modified
tags:
    - Contrôle des accès
    - Diffusion
---

En tant que consommateur de données, c'est également via l'API que l'on va pouvoir configuer ses clés d'accès. Cela n'implique pas d'avoir accès à une entrepôt, ni même d'être le membre d'une communauté.

## Consultation des permissions

L'ensemble des permissions qui m'ont été personnellement donnée ou qui ont été données à une communauté à laquelle l'utilisateur appartient constitue une sorte de catalogue de données qu'il va être possible de consommer.

### Récupérer ses permissions personnelles

??? GET /users/me/permissions

**Url :** GET `{{ urls.api_entrepot }}/users/me/permissions`

**Paramètres de requête**

-   personal = `true`
-   community = `false`

**Corps de réponse JSON**

```json
[
    {
        "licence": "Accès restreint",
        "end_date": "2023-06-23T14:00:00Z",
        "offerings": [
            {
                "type": "WFS",
                "visibility": "PRIVATE",
                "status": "PUBLISHED",
                "layer_name": "pays_ecoregions",
                "open": false,
                "available": true,
                "_id": "{offering}"
            }
        ],
        "only_oauth": false,
        "_id": "{permission utilisateur}"
    }
]
```

???
<br>

En tant que bénéficiaire de cette permission personnelle, je peux la supprimer si elle ne m'intéresse pas.

### Récupérer ses permissions communautaires

??? GET {{ urls.api_entrepot }}/users/me/permissions

**Paramètres de requête**

-   personal = `false`
-   community = `true`

**Corps de réponse JSON**

```json
[
    {
        "licence": "Accès restreint",
        "end_date": "2023-06-23T14:00:00Z",
        "offerings": [
            {
                "type": "WFS",
                "visibility": "PRIVATE",
                "status": "PUBLISHED",
                "layer_name": "pays_ecoregions",
                "open": false,
                "available": true,
                "_id": "{offering}"
            }
        ],
        "only_oauth": false,
        "_id": "{permission communauté}"
    }
]
```

???
<br>

Les deux permissions donnent accès à la même offre. Lors de la configuration de la clé, il sera important de préciser quelle permission exploiter, en gardant à l'esprit qu'il est possible de perdre le droit de consommer des données si la permission est modifiée par le diffuseur de la donnée.

### Consulter une permission

Dans la suite, nous allons exploiter la permission personnelle. Il est possible d'avoir plus d'informations sur celle ci.

??? GET {{ urls.api_entrepot }}/users/me/permissions/{permission utilisateur}

**Corps de réponse JSON**

```json
[
    {
        "licence": "Accès restreint",
        "end_date": "2023-06-23T14:00:00Z",
        "offerings": [
            {
                "type": "WFS",
                "visibility": "PRIVATE",
                "status": "PUBLISHED",
                "layer_name": "pays_ecoregions",
                "open": false,
                "available": true,
                "_id": "{offering}"
            }
        ],
        "only_oauth": false,
        "_id": "{permission communauté}"
    }
]
```

???
<br>

## Gérer une clé d'accès

Sans clé d'accès, il n'est pas possible de consulter le service de diffusion, même pour une [requête de capacité du service]({{ urls.private.wfs }}?REQUEST=GetCapabilities&SERVICE=WFS&VERSION=2.0.0).

??? GET {{ urls.private.wfs }}

**Paramètres de requête**
_ REQUEST = `GetCapabilities`
_ SERVICE = `WFS` \* VERSION = `2.0.0`

**Corps de réponse XML**

```xml
<html>
    <head><title>401 Authorization Required</title></head>
    <body>
        <center><h1>401 Authorization Required</h1></center>
    </body>
</html>
```

???
<br>

La clé d'accès est un moyen de s'identifier lors de l'utilisation des services de diffusion. Il existe trois type d'identification :

-   Le hash en paramètre de requête `api_key` ou en header `X-Key`
-   Une authentification `Basic`
-   Une authentification `Bearer` (jeton généré par le gestionnaire d'identité). C'est l'authentification forte, qui peut être nécessaire pour exploiter les permissions dont le champ `only_oauth` est à vrai.

### Créer une clé d'accès simple

Nous allons ici voir un exemple de mise en place d'une clé de type HASH.

??? POST {{ urls.api_entrepot }}/users/me/keys

**Corps de requête JSON**

```json
{
    "name": "Ma clé HASH",
    "type": "HASH",
    "type_infos": {
        "hash": "masupercle"
    }
}
```

**Corps de réponse JSON**

```json
{
    "name": "Ma clé HASH",
    "type": "HASH",
    "whitelist": [],
    "blacklist": [],
    "type_infos": {
        "hash": "masupercle"
    },
    "_id": "{key HASH}"
}
```

???
<br>

Quelque soit le type de clé, il est possible de préciser des conditions d'utilisation de la clé :

-   Limiter les IP pouvant l'utiliser (whitelist)
-   Bloquer des IP (blacklist)
-   Forcer le referer
-   Forcer le user agent

Il est maintenant possible [d'interroger le service]({{ urls.private.wfs }}?REQUEST=GetCapabilities&SERVICE=WFS&VERSION=2.0.0&apikey=masupercle). Cependant, aucune couche ne semble disponible, car nous n'avons pas encore donné de droit à cette clé.

### Gérer les accès à la clé

Les permissions ouvrent des droits a priori sur des offres, mais c'est à la charge du propriétaire de la clé de définir les accès aux offres. Un accès est un lien entre une clé et une offre, en exploitant une permission. On peut ajouter plusieurs accès à des offres en un appel, tant que c'est la même permission qui permet les accès.

??? POST {{ urls.api_entrepot }}/users/me/keys/{key HASH}/accesses

**Corps de requête JSON**

```json
{
    "permission": "{permission utilisateur}",
    "offerings": ["{offering}"]
}
```

???
<br>

On peut connaître toutes les offres que la clé peut consommer avec l'appel suivant.

??? GET {{ urls.api_entrepot }}/users/me/keys/{key HASH}/accesses

**Corps de réponse JSON**

```json
[
    {
        "permission": {
            "licence": "Accès restreint",
            "end_date": "2023-06-23T14:00:00Z",
            "only_oauth": false,
            "_id": "{permission utilisateur}"
        },
        "offering": {
            "visibility": "PRIVATE",
            "open": false,
            "available": true,
            "layer_name": "pays_ecoregions",
            "type": "WFS",
            "status": "PUBLISHED",
            "_id": "{offering}"
        },
        "_id": "{access}"
    }
]
```

???
<br>

On peut maintenant voir les couches correspondantes à l'offre dans les [capacités du serveur]({{ urls.private.wfs }}?REQUEST=GetCapabilities&SERVICE=WFS&VERSION=2.0.0&apikey=masupercle).

??? GET {{ urls.private.wfs }}

**Paramètres de requête**

-   REQUEST = `GetCapabilities`
-   SERVICE = `WFS`
-   VERSION = `2.0.0`
-   apikey = `masupercle`

**Corps de réponse XML**

```xml
<FeatureTypeList>
    <FeatureType
        xmlns:pays_ecoregions="http://pays_ecoregions">
        <ows:Keywords>
            <ows:Keyword>Tutoriel</ows:Keyword>
            <ows:Keyword>Données mondiales</ows:Keyword>
        </ows:Keywords>
        <Name>pays_ecoregions:pays</Name>
        <ows:WGS84BoundingBox>
            <ows:UpperCorner>175.0 85.0</ows:UpperCorner>
            <ows:LowerCorner>-175.0 -75.0</ows:LowerCorner>
        </ows:WGS84BoundingBox>
        <Title>Pays du monde</Title>
        <Abstract>Pays du monde</Abstract>
        <DefaultCRS>urn:ogc:def:crs:EPSG::3857</DefaultCRS>
    </FeatureType>
    <FeatureType
        xmlns:pays_ecoregions="http://pays_ecoregions">
        <ows:Keywords>
            <ows:Keyword>Tutoriel</ows:Keyword>
            <ows:Keyword>Données mondiales</ows:Keyword>
        </ows:Keywords>
        <Name>pays_ecoregions:regions_ecologiques</Name>
        <ows:WGS84BoundingBox>
            <ows:UpperCorner>175.0 85.0</ows:UpperCorner>
            <ows:LowerCorner>-175.0 -75.0</ows:LowerCorner>
        </ows:WGS84BoundingBox>
        <Title>Régions écologiques</Title>
        <Abstract>Grandes régions naturelles mondiales</Abstract>
        <DefaultCRS>urn:ogc:def:crs:EPSG::3857</DefaultCRS>
    </FeatureType>
</FeatureTypeList>
```

???
<br>

Il est aussi possible de mettre la clé dans le header `apikey` plutôt qu'en paramètre de requête.

![Clé HASH dans QGis](/img/tutoriels/controle-des-acces/diffusion/qgis_cle_hash.png){.fr-responsive-img}

### Créer une clé de type BASIC

Nous allons ajouter à cette clé des limites d'utilisation, un user agent particulier qui limite l'usage de la clé au client QGis. À noter que l'ajout d'un filtrage par referer ne peut être considéré comme une méthode de sécurisation forte.

??? POST {{ urls.api_entrepot }}/users/me/keys

**Corps de requête JSON**

```json
{
    "name": "Ma clé BASIC",
    "type": "BASIC",
    "user_agent": ".*QGIS.*",
    "type_infos": {
        "login": "cestmoi",
        "password": "cestmaclesecrète"
    }
}
```

**Corps de réponse JSON**

```json
{
    "name": "Ma clé BASIC",
    "type": "BASIC",
    "whitelist": [],
    "blacklist": [],
    "user_agent": ".*QGIS.*",
    "type_infos": {
        "login": "cestmoi",
        "password": "ff4728a2a0058c14b6c0297408c8825a1fa15132"
    },
    "_id": "{key BASIC}"
}
```

???
<br>

L'affectation d'accès sur cette clé se fait exactement comme pour la première clé.

Afin que les requêtes passent, il est maintenant nécessaire que le header "Referer" contienne une valeur avec QGIS (cela permet par exemple d'accepter toutes les requêtes venant de QGis, quelque soit la version et le système d'exploitation).

![Clé BASIC dans QGis](/img/tutoriels/controle-des-acces/diffusion/qgis_cle_basic.png){.fr-responsive-img}

### Créer une clé de type OAUTH2

Cette clé est un moyen de préciser que l'on va consommer les services de diffusion en utilisant son compte. Ce mode d'identification de la consommation est considéré comme la seule sécurisation forte. C'est pourquoi certaines permissions peuvent n'autoriser leur usage qu'avec de telles clés. Comme chaque utilisateur n'a qu'un compte, il ne peut se créer qu'une seule clé de ce type.

??? POST {{ urls.api_entrepot }}/users/me/keys

**Corps de requête JSON**

```json
{
    "name": "Ma clé OAUTH2",
    "type": "OAUTH2",
    "type_infos": {}
}
```

**Corps de réponse JSON**

```json
{
    "name": "Ma clé OAUTH2",
    "type": "OAUTH2",
    "whitelist": [],
    "blacklist": [],
    "type_infos": {},
    "_id": "{key OAUTH}"
}
```

???
<br>

L'affectation d'accès sur cette clé se fait exactement comme pour la première clé.

![Clé OAUTH2 dans QGis](/img/tutoriels/controle-des-acces/diffusion/qgis_cle_oauth2.png){.fr-responsive-img}

-   URL de requête : `{{ urls.iam }}/protocol/openid-connect/auth`
-   URL du jeton : `{{ urls.iam }}/protocol/openid-connect/token`
-   Client ID : `qgis`
-   Secret client : `{{ secrets.qgis }}`
