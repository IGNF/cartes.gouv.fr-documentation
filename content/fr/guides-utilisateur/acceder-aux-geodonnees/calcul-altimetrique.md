---
title: Calcul altimétrique
tags:
    - Altimétrie
eleventyNavigation:
    key: Calcul altimétrique
    parent: Accéder aux géodonnées
    order: 6
    nav: guides-utilisateur
---

## 1 - Présentation

L’API de calcul altimétrique de la Géoplateforme permet d’obtenir l’altitude d’un ou de plusieurs points et un profil altrimétrique le long d’une courbe.

Son usage est limité à 5 requêtes par seconde depuis une même adresse IP.

Elle s’appuie sur des ressources altimétriques pour fournir des altitudes. Ainsi, lancer un calcul en sollicitant une ressource altimétrique basée sur la donnée RGE ALTI® donnera un résultat différent du même calcul sollicitant une ressource altimétrique basée sur la donnée BD ALTI®, en raison des différences de résolution et de précision entre ces deux produits.

L’API est interrogeable en méthodes GET et POST.

Son swagger est accessible ici : [swagger du calcul altimétrique](https://data.geopf.fr/altimetrie/swagger-ui/index.html).

## 2 - Consulter la liste des ressources

La liste des ressources disponibles via l’API est consultable via la requête :

```plain
https://data.geopf.fr/altimetrie/resources
```

Cette requête a pour paramètre optionnel **keywords** permettant de filtrer les ressources en fonction de leurs mots clés.

Exemples d’interrogations filtrées sur le mot clé « Altitude », puis sur les deux mots clés « Altitude » et « Exemple » :

```plain
https://data.geopf.fr/altimetrie/resources?keywords=Altitude
```

```plain
https://data.geopf.fr/altimetrie/resources?keywords=Altitude&keywords=Exemple
```

## 3 - Consulter le détail d’une ressource

Les informations détaillées (emprise des données, sources, etc.) d’une ressource sont consultables via la requête :

```plain
https://data.geopf.fr/altimetrie/resources/{id_ressource}
```

Exemple d’interrogation sur la ressource d’identifiant « ign_rge_alti_wld » (RGE ALTI® de l’IGN) :

```plain
https://data.geopf.fr/altimetrie/resources/ign_rge_alti_wld
```

## 4 - Calculer des altitudes

### 4.1 - Déterminer l’altitude d’un ou plusieurs points via la méthode GET

Ce calcul permet d’obtenir l’altitude d’un ou plusieurs points à partir de leurs coordonnées géographiques. Il est accessible via l’URL suivante :

```plain
https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.{format}
```

La requête a pour caractéristiques :

- Méthode : GET
- Paramètres obligatoires :
    - **format** :
        - Description : format de sortie
        - Format : texte
        - Valeurs possibles : json, xml
    - **lon** :
        - Description : liste des longitudes
        - Format : liste de décimaux (texte)
        - Valeurs possibles : de -180 à +180
        - Contraintes : nombre de longitudes identique au nombre de latitudes, limité à 5 000
    - **lat** :
        - Description : liste des latitudes
        - Format : liste de décimaux (texte)
        - Valeurs possibles : de -90 à +90
        - Contraintes : nombre de latitudes identique au nombre de longitudes, limité à 5 000
    - **resource** :
        - Description : identifiant de la donnée altimétrique sollicitée
        - Format : texte
- Paramètres facultatifs :
    - **delimiter** :
        - Description : caractère utilisé pour séparer les longitudes et les latitudes
        - Format : texte
        - Valeurs possibles : « | » ou « ; » ou « , »
    - **indent** :
        - Description : choix d’une réponse indentée
        - Format : booléen (texte)
        - Valeurs possibles : false (réponse non indentée), true (réponse indentée)
        - Valeur par défaut : false
    - **measures** :
        - Description : choix d’une altitude d’une source unique ou de plusieurs sources (dans ce cas avec informations sur la source et la précision)
        - Format : booléen (texte)
        - Valeurs possibles : false (une altitude par point), true (une ou plusieurs altitudes par point en fonction du nombre de pyramides associées à la « resource »)
        - Valeur par défaut : false
    - **zonly** :
        - Description : choix d’un tableau d’altitudes ou d’une réponse étendue
        - Format : booléen (texte)
        - Valeurs possibles : false (réponse étendue), true (simple tableau de valeurs)
        - Valeur par défaut : false

:::info
- Pour un point située dans une zone non couverte par la donnée, l’altitude renvoyée sera « -99999 »
- Les altitudes fournies sont arrondies à 2 chiffres après la virgule
:::

Exemple de requête et résultat en JSON :

```plain
https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.json?lon=1.48|1.49&lat=43.54|43.55&resource=ign_rge_alti_wld&delimiter=|&indent=false&measures=false&zonly=false
```

```json
{
    "elevations": [
        {
            "lon": 1.48,
            "lat": 43.54,
            "z": 164.34,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.49,
            "lat": 43.55,
            "z": 141.33,
            "acc": "Variable suivant la source de mesure"
        }
    ]
}
```

Exemple de requête et résultat en XML :

```plain
https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.xml?lon=1.48|1.49&lat=43.54|43.55&resource=ign_rge_alti_wld&delimiter=|&indent=false&measures=false&zonly=false
```

```xml
<elevations>
    <elevation>
        <lon>1.48</lon>
        <lat>43.54</lat>
        <z>164.34</z>
        <acc>Variable suivant la source de mesure</acc>
    </elevation>
    <elevation>
        <lon>1.49</lon>
        <lat>43.55</lat>
        <z>141.33</z>
        <acc>Variable suivant la source de mesure</acc>
    </elevation>
</elevations>
```

Exemple de requête et résultat en JSON, sous forme de tableau de valeurs, avec réponse indentée :

```plain
https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.json?lon=1.48|1.49&lat=43.54|43.55&resource=ign_rge_alti_wld&delimiter=|&indent=true&measures=false&zonly=true
```

```json
{
    "elevations": [164.34, 141.33]
}
```

Exemple de requête et résultat en JSON, sous forme de tableau de valeurs, avec réponse indentée et mesures multiples :

```plain
https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.json?lon=1.48;1.49&lat=43.54;43.55&resource=ign_rge_alti_wld&delimiter=;&indent=true&measures=true&zonly=false
```

```json
{
    "elevations": [
        {
            "lon": 1.48,
            "lat": 43.54,
            "z": 164.34,
            "acc": "Variable suivant la source de mesure",
            "measures": [
                {
                    "z": 164.34,
                    "source_name": "RGE Alti IGN",
                    "source_measure": "Fixed value",
                    "acc": "Variable suivant la source de mesure",
                    "title": "Pyramide RGE Alti France Enti\u00e8re (M\u00e9tropole, DOM et COM couvertes)"
                }
            ]
        },
        {
            "lon": 1.49,
            "lat": 43.55,
            "z": 141.33,
            "acc": "Variable suivant la source de mesure",
            "measures": [
                {
                    "z": 141.33,
                    "source_name": "RGE Alti IGN",
                    "source_measure": "Fixed value",
                    "acc": "Variable suivant la source de mesure",
                    "title": "Pyramide RGE Alti France Enti\u00e8re (M\u00e9tropole, DOM et COM couvertes)"
                }
            ]
        }
    ]
}
```

### 4.2 - Déterminer l’altitude d’un ou plusieurs points via la méthode POST

Ce calcul permet d’obtenir l’altitude d’un ou plusieurs points à partir de leurs coordonnées géographiques. Il est accessible via l’URL suivante :

```plain
https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.{format}
```

Il utilise la méthode POST et nécessite donc de fournir en entrée un « body » sous la forme d’un objet JSON.

Exemple d’appel :

```bash
curl -X 'POST' \
  'https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevation.json' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "lon": "1.48",
  "lat": "43.54",
  "resource": "string",
  "delimiter": "|",
  "indent": "false",
  "measures": "false",
  "zonly": "false"
}'
```

### 4.3 - Déterminer le profil altimétrique d’une courbe via la méthode GET

Ce calcul permet d’obtenir un profil en long. Il est accessible via l’URL suivante :

```plain
https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevationLine.{format}
```

La requête **elevationLine** a les mêmes caractéristiques que la requête **elevation**, avec en supplément :

- Paramètres facultatifs supplémentaires :
    - **profile_mode** :
        - Description : mode de calcul altimétrique
        - Format : texte
        - Valeurs possibles : simple (calcul classique), accurate (permet de doubler la valeur du paramètre « sampling » afin de gagner en précision mais avec un temps de réponse plus long)
        - Valeur par défaut : simple
    - **sampling** :
        - Description : nombre de points constituant l’échantillonnage
        - Format : entier
        - Valeurs possibles : de 2 à 5000
        - Valeur par défaut : le nombre de couples (lon,lat)
        - Contrainte : ne doit pas dépasser 5000

Exemple de requête et résultat en JSON en profile_mode « simple » :

```plain
https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevationLine.json?lon=1.48|1.49&lat=43.54|43.55&resource=ign_rge_alti_wld&delimiter=|&indent=true&measures=false&profile_mode=simple&sampling=4
```

```json
{
    "elevations": [
        {
            "lon": 1.48,
            "lat": 43.54,
            "z": 164.34,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.4833333333333334,
            "lat": 43.54333333333333,
            "z": 152.62,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.4866666666666666,
            "lat": 43.54666666666667,
            "z": 145.1,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.49,
            "lat": 43.55,
            "z": 141.33,
            "acc": "Variable suivant la source de mesure"
        }
    ],
    "height_differences": {
        "positive": 0,
        "negative": 23.00999999999999
    }
}
```

Exemple de requête et résultat en JSON en profile_mode « accurate » :

```plain
https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevationLine.json?lon=1.48|1.49&lat=43.54|43.55&resource=ign_rge_alti_wld&delimiter=|&indent=true&measures=false&profile_mode=accurate&sampling=4
```

```json
{
    "elevations": [
        {
            "lon": 1.48,
            "lat": 43.54,
            "z": 164.34,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.4814285714285713,
            "lat": 43.54142857142857,
            "z": 159.39,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.4828571428571429,
            "lat": 43.542857142857144,
            "z": 155.07,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.4842857142857142,
            "lat": 43.544285714285714,
            "z": 149.4,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.4857142857142858,
            "lat": 43.54571428571428,
            "z": 146.7,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.487142857142857,
            "lat": 43.54714285714285,
            "z": 144.53,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.4885714285714287,
            "lat": 43.54857142857143,
            "z": 142.59,
            "acc": "Variable suivant la source de mesure"
        },
        {
            "lon": 1.49,
            "lat": 43.55,
            "z": 141.33,
            "acc": "Variable suivant la source de mesure"
        }
    ],
    "height_differences": {
        "positive": 0,
        "negative": 23.00999999999999
    }
}
```

### 4.4 - Déterminer le profil altimétrique d’une courbe via la méthode POST

Ce calcul permet d’obtenir un profil en long. Il est accessible via l’URL suivante :

```plain
https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevationLine.{format}
```

Il utilise la méthode POST et nécessite donc de fournir en entrée un « body » sous la forme d’un objet JSON.

Exemple d’appel :

```bash
curl -X 'POST' \
  'https://data.geopf.fr/altimetrie/1.0/calcul/alti/rest/elevationLine.json' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "lon": "1.48",
  "lat": "43.54",
  "resource": "string",
  "delimiter": "|",
  "indent": "false",
  "measures": "false",
  "zonly": "false"
}'
```
