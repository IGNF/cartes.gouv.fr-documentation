---
title: Calcul d’isochrone/isodistance
tags:
    - Isochrone
    - Isodistance
eleventyNavigation:
    key: Calcul d’isochrone/isodistance
    parent: Accéder aux géodonnées
    order: 8
    nav: guides-utilisateur
summary:
    visible: true
---

{% from "components/component.njk" import component with context %}

## Présentation

L'API de calcul d'isochrone/isodistance de la Géoplateforme permet de déterminer l’ensemble des lieux que l’on peut atteindre depuis un point de départ ou dont il faut partir pour atteindre un point d’arrivée en un temps (isochrone) ou une distance (isodistance) donné(e).

Son usage est limité à 5 requêtes par seconde depuis une même adresse IP.

Le calcul peut être paramétré, en fonction du besoin, selon plusieurs options détaillées :

 * la méthode de calcul : isochrone ou isodistance
 * le type de véhicule : piéton ou voiture
 * la valeur de l'isochrone ou de l'isodistance
 * l’unité de la valeur de distance ou de durée

Les données de référence utilisées au sein du service de calcul d’isochrone et isodistance proviennent du réseau routier et des tables de non communications de la base de données BD TOPO® de l'IGN.

L’API est interrogeable en méthodes GET et POST.

Son swagger est accessible ici : [swagger du calcul d'isochrone/isodistance](https://www.geoportail.gouv.fr/depot/swagger/itineraire.html).

## Capacités de l'API (getCapabilities)

La requête **getCapabilities** permet de découvrir les capacités de l'API : les opérations possibles, les ressources disponibles et les options proposées.

Elle est accessible via l’URL suivante : 

```plain
https://data.geopf.fr/navigation/getCapabilities
```

Cette requête ne requiert aucun paramètre.

## Calculer une isochrone ou une isodistance

Le calcul d'isochrone/isodistance est accessible via l’URL suivante :

https://data.geopf.fr/navigation/isochrone

Les paramètres également précisés dans le [swagger du calcul d'isochrone/isodistance](https://www.geoportail.gouv.fr/depot/swagger/itineraire.html) sont les suivants :

### Calculer une isochrone ou une isodistance via la méthode GET


 * Paramètres obligatoires :
    * **point**
        * Point de départ exprimé dans le CRS, par défaut, de la ressource (EPSG:4326) (exemple : 2.337306,48.849319).
    * **resource**
        * bdtopo-osrm : les calculs sont effectués avec le moteur « OSRM » , il permet des performances de calcul élevées mais présente un choix limité dans le paramétrage des requêtes notamment pour les l’expression des contraintes.
        * bdtopo-valhalla : les calculs sont effectués avec le moteur « Valhalla » : il présente les mêmes avantages et inconvénients qu'OSRM, mais avec des performances un peu moindres. Nous vous conseillons de plutôt utiliser les ressources OSRM.
        * bdtopo-pgr : les calculs sont effectués avec le moteur « pgRouting », il permet un plus grand choix dans le paramétrage des requêtes notamment pour l’expression des contraintes et pour la récupération d'attributs issus de la BD TOPO®. Cependant, les performances de calcul de ce moteur sont très inférieures à celles d'OSRM et Valhalla, nous vous conseillons donc de choisir de manière préférentielle OSRM, et de n'opter pour pgRouting que si vous avez des besoins précis concernant les contraintes de calcul et/ou les attributs récupérés.
    * **costValue**
        * Valeur du coût utilisé pour le calcul (une distance ou un temps selon l'optimisation choisie). L'unité dépendra des paramètres distanceUnit et timeUnit.
    * **costType**
        * Type du coût utilisé pour le calcul. L'unité dépendra des paramètres distanceUnit et timeUnit.
        * Valeurs possibles : celles listées dans le getCapabilities (distance, time)
 * Paramètres facultatifs :
    * **profile**
        * Moyen de déplacement utilisé pour le calcul.
        * Valeurs possibles : celles listées dans le getCapabilities (car, pedestrian...)
    * **direction**
        * Cela permet de définir le sens du parcours. Soit on définit un point de départ et on obtient les points d'arrivé potentiels. Soit on définit un point d'arrivé et on obtient les points de départ potentiels.
        * Valeurs possibles : celles listées dans le getCapabilities (departure, arrival) 
    * **constraints**
        * Contraintes utilisées pour le calcul.
        * Valeurs possibles : celles listées dans le getCapabilities (exemple : "banned","key":"wayType","operator":"=","value":"tunnel")
    * **geometryFormat**
        * Format des géométries dans la réponse.
        * Valeurs possibles : celles listées dans le getCapabilities (geojson, polyline)
    * **distanceUnit**
        * Unité de distance renvoyée.
        * Valeurs possibles : celles listées dans le getCapabilities (kilometer, meter) 
    * **timeUnit**
        * Unité du temps renvoyé.
        * Valeurs possibles : celles listées dans le getCapabilities (hour, minute, second...) 
    * **crs**
        * Projection des géométries
        * Valeurs possibles : celles listées dans le getCapabilities (EPSG:4326...) 

Exemple de requête : 

```plain
{%raw %}
https://data.geopf.fr/navigation/isochrone?gp-access-lib=3.4.2&resource=bdtopo-valhalla&point=2.416679,48.86116&direction=departure&costType=distance&costValue=2000&profile=pedestrian&timeUnit=second&distanceUnit=meter&crs=EPSG:4326&constraints={%22constraintType%22:%22banned%22,%22key%22:%22wayType%22,%22operator%22:%22=%22,%22value%22:%22tunnel%22}
{% endraw %}
```

### Calculer une isochrone ou une isodistance via la méthode POST

En utilisant la méthode POST, il est nécessaire de fournir en entrée un "body" sous la forme d'un objet JSON.

Exemple d'appel :

```sh
curl -X 'POST' \
  'https://data.geopf.fr/navigation/isochrone' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "point": "2.337306,48.849319",
  "resource": "bdtopo-valhalla",
  "costValue": "300",
  "costType": "time",
}'
```

## Caractéristiques des règles de calcul pour les isochrones/isodistances

Les données de navigation sont issues de la BD TOPO® (réseau routier et table de non communications).

Le graphe est dérivé de la BD TOPO®, apparié sur la BD CARTO® pour certains éléments. Il est disponible sur la France entière, Départements et Régions d’Outre-Mer inclus. **Il est régulièrement mis à jour, sa date d’actualité est renseignée par le champ « resourceVersion » dans la réponse du service.**

### Vitesse voiture

Le nouveau mode de calcul des vitesses (septembre 2023) s’inspire très largement de l’algorithme élaboré par le SDIS44. Il est décomposé en deux étapes :

    le calcul de vitesses brutes en fonction des attributs propres à l’objet Tronçon de route (nature, importance, urbain…),
    ensuite, pour une partie d’entre eux, des pénalités liées au réseau ou à l’environnement (bâti, sinuosité…) sont appliquées.

{{ component("table", {
    title: "Vitesses moyennes par ordre de traitement",
    headers: ["Conditions", "Vitess moyenne VL"],
    data: [
        ["Etat de l’objet ≠ « En service »", "0"],
        ["Accès véhicule léger = « Physiquement impossible » ou « Restreint aux ayants droit »", "0"],
        ["Nature = « Escalier » ou « Sentier »", "0"],
        ["Privé = vrai", "0"],
        ["Nature de la restriction = « Plot amovible » ou « Voie de tramway utilisable par les véhicules de secours » ou « Voie verte » ou « Aménagement mixte hors voie verte » ou « Piste cyclable » ou « Entrée avec gardien » ou « Passage barré »", "0"],
        ["Partage un point avec un objet Point du réseau de Nature = « Barrière »", "0"],
        ["Nature = « Route empierrée »", "10"],
        ["Nature = « Chemin »", "1"],
        ["Importance = 6", "10"],
        ["Largeur de chaussée < 2.9 et ≠ 0.0 et non null", "10"],
        ["Intersecte un objet Equipement de transport de Nature = « Péage »", "50"],
        ["Partage un point ou est à moins de 0.2 m d’un objet Point du réseau de Nature = « Passage à niveau »", "50"],
        ["Nature = « Type autoroutier » et Classement administratif = « Autoroute », Importance = 1 et Urbain = faux", "125"],
        ["Nature = « Type autoroutier » et Classement administratif = « Autoroute », Importance = 1 et Urbain = vrai", "100"],
        ["Nature = « Type autoroutier » et Classement administratif = « Autoroute », Importance = 2 et Urbain = faux", "115"],
        ["Nature = « Type autoroutier » et Classement administratif = « Autoroute », Importance = 2 et Urbain = vrai", "95"],
        ["Nature = « Type autoroutier » et Classement administratif = « Autoroute », Importance = 3 et Urbain = faux", "100"],
        ["Nature = « Type autoroutier » et Classement administratif = « Autoroute », Importance = 3 et Urbain = vrai", "90"],
        ["Nature = « Type autoroutier » et Classement administratif ≠ « Autoroute », Importance = 1 et Urbain = faux", "105"],
        ["Nature = « Type autoroutier » et Classement administratif ≠ « Autoroute », Importance = 1 et Urbain = vrai", "95"],
        ["Nature = « Type autoroutier » et Classement administratif ≠ « Autoroute », Importance = 2 et Urbain = faux", "100"],
        ["Nature = « Type autoroutier » et Classement administratif ≠ « Autoroute », Importance = 2 et Urbain = vrai", "90"],
        ["Nature = « Type autoroutier » et Classement administratif ≠ « Autoroute », Importance = 3 et Urbain = faux", "95"],
        ["Nature = « Type autoroutier » et Classement administratif ≠ « Autoroute », Importance = 3 et Urbain = vrai", "85"],
        ["Nature = « Type autoroutier » et Classement administratif ≠ « Autoroute », Importance = 4 et Urbain = faux", "90"],
        ["Nature = « Type autoroutier » et Classement administratif ≠ « Autoroute », Importance = 4 et Urbain = vrai", "67"]
    ]
}) }}

*les vitesses brutes sont ensuite diminuées par une pénalité liée à la longueur et à la sinuosité du tronçon, à la
densité du bâti environnant, ainsi qu’à la proximité d’écoles.

#### Calcul des pénalités

**Préalable : calcul des zones de densité de bâtiments**

Une carte de chaleur est calculée à partir de la classe Bâtiment. Les objets sélectionnés sont :

 * ‘Construction légère’ = faux ou null,
 * ‘Etat de l’objet’ = « En service »,
 * Surface comprise entre 35 et 2000 m².

Le centroïde de chaque objet est ensuite pondéré par la hauteur du bâti (en cas de hauteur nulle, la valeur de 6 m est prise). À partir de cette carte, 3 intervalles de valeurs sont surfacifiés : « zone habitée », « centre dense » et « hyper-centre ». Cette donnée de contexte est mise à jour annuellement.

{{ component("table", {
    title: "Calcul des pénalités uniques",
    headers: ["Dénomination", "Condition", "Pénalité"],
    data: [
        ["Impasses", "Le tronçon a une valence de 1 sur le graphe des tronçons de vitesse ≠ 0 et sa longueur < 200 m", "50%"],
        ["Rond-point", "Le point médian intersecte la zone de densité « zone habitée »", "15%"],
        ["Rond-point", "Le point médian intersecte la zone de densité « centre dense »", "30%"],
        ["Rond-point", "Le point médian intersecte la zone de densité « hyper centre »", "40%"]
    ]
}) }}

La vitesse brute est diminuée de cette pénalité : vitesse moyenne = vitesse brute * (1 –pénalité).

La valeur est enfin arrondie à 5 km/h supérieur pour les objets d’importance 1 à 4, et à 5 km/h inférieur pour les objets d’importance 5.

**Calcul des pénalités cumulées**

//TODO

Les pénalités sont ensuite additionnées, avec toutefois un plafond de 80%.

La vitesse brute est diminuée de cette somme des pénalités (vitesse moyenne = vitesse brute * (1 – somme des pénalités)).

La valeur est enfin arrondie à 5 km/h supérieur pour les objets d’importance 1 à 4 et à 5 km/h inférieur pour les objets d’importance 5 ou 6.

Contrainte sur l'attribut : Valeur obligatoire (calculée).

### Vitesse piéton

Pour les piétons, les calculs sont basés sur les critères suivants :

 * NATURE = ‘Autoroute’ & IMPORTANCE = ‘1’ –> 0 km/h
 * NATURE = ‘Autoroute’ & IMPORTANCE = ‘2’ –> 0 km/h
 * NATURE = ‘Autoroute’ & IMPORTANCE = ‘3’ –> 0 km/h
 * Autres axes –> 4 km/h
