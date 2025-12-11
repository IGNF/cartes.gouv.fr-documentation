---
title: Calcul d’itinéraire
tags:
    - Itinéraire
    - API
    - Géoplateforme
    - Calcul
eleventyNavigation:
    key: Calcul d’itinéraire
    parent: Utiliser les services de la Géoplateforme
    order: 7
    nav: guides-utilisateur
summary:
    visible: true
    depth: 3
pictogram: "system/system.svg"
description: Tous les détails sur le service de calcul d’itinéraire de la Géoplateforme
---

{% from "components/component.njk" import component with context %}

## Présentation

L’API de calcul d’itinéraire de la Géoplateforme permet d’obtenir un itinéraire entre deux points selon un profil de parcours particulier.

Son usage est limité à 5 requêtes par seconde depuis une même adresse IP.

Le calcul peut être paramétré, en fonction du besoin, selon plusieurs options détaillées :

- la méthode de calcul : chemin le plus court ou le plus rapide
- le type de véhicule : piéton ou voiture
- l’expression de contraintes d’exclusion à prendre en compte pour le calcul de l’itinéraire
- l’ajout d’étapes intermédiaires.

Les données de référence utilisées au sein du service de calcul d’itinéraire proviennent du réseau routier et des tables de non communications de la base de données BD TOPO® de l’IGN.

L’API est interrogeable en méthodes GET et POST.

Son swagger est accessible ici : [swagger du calcul d’itinéraire](https://www.geoportail.gouv.fr/depot/swagger/itineraire.html).

---

## Capacités de l’API (getCapabilities)

La requête getCapabilities permet de découvrir les capacités de l’API : les opérations possibles, les ressources disponibles et les options proposées.

Elle est accessible via l’URL suivante : 

```plain
https://data.geopf.fr/navigation/getCapabilities
```

Cette requête ne requiert aucun paramètre.

---

## Calculer un itinéraire

Le calcul d’itinéraire est accessible via l’URL suivante :

```plain
https://data.geopf.fr/navigation/itineraire
```

Les paramètres également précisés dans le swagger du calcul d’itinéraire sont les suivants :

### Calculer un itinéraire via la méthode GET

- Paramètres obligatoires :
    - **resource**
        - bdtopo-osrm : les calculs sont effectués avec le moteur « OSRM », il permet des  performances de calcul élevées mais présente un choix limité dans le paramétrage des  requêtes notamment pour l’expression des contraintes.
        - bdtopo-valhalla : les calculs sont effectués avec le moteur « Valhalla », il  présente les mêmes avantages et inconvénients qu’OSRM, mais avec des performances un  peu moindres. Nous vous conseillons de plutôt utiliser les ressources OSRM.
        - bdtopo-pgr : les calculs sont effectués avec le moteur « pgRouting », il permet un  plus grand choix dans le paramétrage des requêtes notamment pour l’expression des  contraintes et pour la récupération d’attributs issus de la BD TOPO®. Cependant, les  performances de calcul de ce moteur sont très inférieures à celles d’OSRM et  Valhalla, nous vous conseillons donc de choisir de manière préférentielle OSRM, et de  n’opter pour pgRouting que si vous avez des besoins précis concernant les contraintes  de calcul et/ou les attributs récupérés.
    - **start**
        - Point de départ exprimé dans le CRS, par défaut, de la ressource (EPSG:4326)  (exemple : 2.337306,48.849319).
    - **end**
        - Point d’arrivée exprimé dans le CRS, par défaut, de la ressource (EPSG:4326) (exemple : 2.367776,48.852891).
- Paramètres facultatifs :
    - **intermediates**
        - Points intermédiaires sur votre itinéraire.
    - **profile**
        - Moyen de déplacement utilisé pour le calcul.
        - Valeurs possibles : celles listées dans le getCapabilities (car, pedestrian...)
    - **optimization**
        - Mode de calcul utilisé pour déterminer l’itinéraire.
        - Valeurs possibles : celles listées dans le getCapabilities (fastest, shortest) 
    - **geometryFormat**
        - Format des géométries dans la réponse.
        - Valeurs possibles :celles listées dans le getCapabilities  (geojson, polyline)
    - **constraints**
        - Contraintes utilisées pour le calcul.
        - Valeurs possibles : celles listées dans le getCapabilities (exemple : "banned", "key":"wayType","operator":"=","value":"tunnel")
    - **getSteps**
        - Présence des étapes dans la réponse.
        - Valeurs possibles : true, false
    - **getBbox**
        - Présence de l’emprise de l’itinéraire dans la réponse.
        - Valeurs possibles : true, false
    - **distanceUnit**
        - Unité de distance renvoyée.
        - Valeurs possibles : celles listées dans le getCapabilities (kilometer, meter) 
    - **timeUnit**
        - Unité du temps renvoyé.
        - Valeurs possibles : celles listées dans le getCapabilities (hour, minute,  second...) 
    - **crs**
        - Projection des géométries.
        - Valeurs possibles : celles listées dans le getCapabilities (EPSG:4326...) 
    - **waysAttributes**
        - Attributs des tronçons à afficher dans la réponse.
        - Valeurs possibles : celles listées dans le getCapabilities (name...)

Exemple de requête :

```plain
{% raw %}
https://data.geopf.fr/navigation/itineraire?resource=bdtopo-osrm&start=2.337306,48.849319&end=2.367776,48.852891&profile=car&optimization=fastest&constraints=%7B%22constraintType%22:%22banned%22,%22key%22:%22wayType%22,%22operator%22:%22=%22,%22value%22:%22autoroute%22%7D&getSteps=true&getBbox=true&distanceUnit=kilometer&timeUnit=hour&crs=EPSG:4326
{% endraw %}
```

### Calculer un itinéraire via la méthode POST

En utilisant la méthode POST, il est nécessaire de fournir en entrée un "body" sous la forme d’un objet JSON.

Exemple d’appel :

```bash
curl -X 'POST' \
  'https://data.geopf.fr/navigation/itineraire' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "start": "2.337306,48.849319",
  "end": "2.367776,48.852891",
  "resource": "bdtopo-osrm",
  "profile": "car"
}'
```

---

## Caractéristiques des règles de calcul pour les itinéraires

Les données de navigation sont issues de la BD TOPO® (réseau routier et table de non communications).

Le graphe est dérivé de la BD TOPO®, apparié sur la BD CARTO® pour certains éléments. Il est disponible sur la France entière, Départements et Régions d’Outre-Mer inclus. **Il est régulièrement mis à jour, sa date d’actualité est renseignée par le champ « resourceVersion » dans la réponse du service.**

### Vitesse voiture

Le nouveau mode de calcul des vitesses (septembre 2023) s’inspire très largement de l’algorithme élaboré par le SDIS44. Il est décomposé en deux étapes :

- le calcul de vitesses brutes en fonction des attributs propres à l’objet Tronçon de route (nature, importance, urbain…),
- ensuite, pour une partie d’entre eux, des pénalités liées au réseau ou à l’environnement (bâti, sinuosité…) sont appliquées.

#### Vitesses brutes

{{ component("table", {
    title: "Vitesses moyennes par ordre de traitement",
    class: "fr-table--multiline",
    headers: ["Conditions", "Vitesse moyenne VL"],
    data: [
        ["État de l’objet ≠ « En service »", "0"],
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

{{ component("table", {
    title: "Vitesses brutes par ordre de traitement",
    class: "",
    headers: ["Conditions", "Vitesse brute avant pénalités"],
    data: [
        ["Nature = « Rond-Point »", "25*"],
        ["Nature = « Bretelle » et Importance = 1 à 4", "60*"],
        ["Nature = « Bretelle » et Importance = 5 ou 6", "55*"],
        ["Importance = 1 ou 2 et Urbain = faux", "80*"],
        ["Importance = 1 ou 2 et Urbain = vrai", "50*"],
        ["Importance = 3 et Urbain = faux", "75*"],
        ["Importance = 3 et Urbain = vrai", "50*"],
        ["Importance = 4 et Urbain = faux", "70*"],
        ["Importance = 4 et Urbain = vrai", "45*"],
        ["Importance = 5 et Urbain = faux", "55*"],
        ["Importance = 5 et Urbain = vrai", "40*"]
    ]
}) }}

*les vitesses brutes sont ensuite diminuées par une pénalité liée à la longueur et à la sinuosité du tronçon, à la
densité du bâti environnant, ainsi qu’à la proximité d’écoles.

#### Calcul des pénalités

**Préalable : calcul des zones de densité de bâtiments**

Une carte de chaleur est calculée à partir de la classe Bâtiment. Les objets sélectionnés sont :

- ‘Construction légère’ = faux ou null,
- ‘Etat de l’objet’ = « En service »,
- Surface comprise entre 35 et 2000 m².

Le centroïde de chaque objet est ensuite pondéré par la hauteur du bâti (en cas de hauteur nulle, la valeur de 6 m est prise). À partir de cette carte, 3 intervalles de valeurs sont surfacifiés : « zone habitée », « centre dense » et « hyper-centre ». Cette donnée de contexte est mise à jour annuellement.

{{ component("table", {
    title: "Calcul des pénalités uniques",
    headers: ["Dénomination", "Condition", "Pénalité"],
    data: [
        ["Impasses", "Le tronçon a une valence de 1 sur le graphe des tronçons de vitesse ≠ 0 et sa longueur < 200 m", "50%"],
        ["Rond-point", "Le point médian intersecte la zone de densité « zone habitée »", "15%"],
        ["Rond-point", "Le point médian intersecte la zone de densité « centre dense »", "30%"],
        ["Rond-point", "Le point médian intersecte la zone de densité « hyper-centre »", "40%"]
    ]
}) }}

La vitesse brute est diminuée de cette pénalité : vitesse moyenne = vitesse brute * (1 - pénalité).

La valeur est enfin arrondie à 5 km/h supérieur pour les objets d’importance 1 à 4, et à 5 km/h inférieur pour les objets d’importance 5.

{{ component("table", {
    title: "Calcul des pénalités cumulées",
    headers: ["Dénomination", "Condition", "Pénalité"],
    data: [
        ["Densité", "Le point médian intersecte la zone de densité « zone habitée »","15%"],
        ["Densité", "Le point médian intersecte la zone de densité « centre dense »","30%"],
        ["Densité", "Le point médian intersecte la zone de densité « hyper-centre »","40%"],
        ["Passage protégé", "Le tronçon est à moins de 80 m d’une <Zone d’activité ou d’intérêt> de Nature = « Enseignement primaire » ou « Collège » ou « Mairie » ou Nature détaillée = « Crèche » ET urbain = Vrai OU intersecte les zones de densité « centre dense » ou « zone habitée » ET n’intersecte pas la zone de densité « hyper-centre »", "15%"],
        ["Longueur", "Tronçon dont la longueur est inférieure ou égale à 80 m ET dont la nature est différente de « Route empierrée », « chemin » et « sentier » ET possède à ses deux sommets 3 liens ou plus avec des tronçons de nature différentes de « Route empierrée », « chemin » et « sentier ».", "(80 - longueur) / 4"],
        ["Relance ronds-points proches (tronçons connexes)", "La longueur inférieure à 300 m ET le tronçon touche 2 tronçons de Nature = « Rond-point »", "Arrondi entier le plus proche (300 - longueur) / 5 (coût maximum : 60%)"],
        ["Relance ronds-points proches (tronçons connexes)", "La longueur inférieure à 300 m ET le tronçon touche 4 tronçons de Nature = « Rond-point »", "Arrondi entier le plus proche (300 - longueur) / 7.5 (coût maximum : 40%)"],
        ["Sinuosité", "Longueur du tronçon / distance entre les 2 extrémités >= 1.25", "20%"],
        ["Sinuosité", "Longueur du tronçon / distance entre les 2 extrémités >= 1.05", "10%"],
        ["Stop", "La longueur du tronçon < 300 m hors Nature « Bretelle ». Si un tronçon d’importance 3 touche un seul tronçon d’importance 1 ou 2", "Arrondi entier le plus proche (300 - longueur) / 3.75 (coût maximum : 80%)"],
        ["Stop", "La longueur du tronçon < 300 m hors Nature « Bretelle ». Si un tronçon d’importance 4 touche un seul tronçon d’importance 1 à 3", "Arrondi entier le plus proche (300 - longueur) / 3.75 (coût maximum : 80%)"],
        ["Stop", "La longueur du tronçon < 300 m hors Nature « Bretelle ». Si un tronçon d’importance 5 touche un seul tronçon d’importance 1 à 4", "Arrondi entier le plus proche (300 - longueur) / 3.75 (coût maximum : 80%)"],
        ["Stop", "La longueur du tronçon < 300 m hors Nature « Bretelle ». Si un tronçon d’importance 3 touche au moins deux tronçons d’importance 1 ou 2", "Arrondi entier le plus proche (300 - longueur) / 5 (coût maximum : 60%)"],
        ["Stop", "La longueur du tronçon < 300 m hors Nature « Bretelle ». Si un tronçon d’importance 4 touche au moins deux tronçons d’importance 1 à 3", "Arrondi entier le plus proche (300 - longueur) / 5 (coût maximum : 60%)"],
        ["Stop", "La longueur du tronçon < 300 m hors Nature « Bretelle ». Si un tronçon d’importance 5 touche au moins deux tronçons d’importance 1 à 4", "Arrondi entier le plus proche (300 - longueur) / 5 (coût maximum : 60%)"],
        ["Largeur « rurale »", "Le tronçon n’est pas en zone urbaine, sa nature est différente de « Bretelle », son importance est 3 ou 4 et sa largeur est inférieure à 5 m", "15%"]
    ]
}) }}

Les pénalités sont ensuite additionnées, avec toutefois un plafond de 80%.

La vitesse brute est diminuée de cette somme des pénalités (vitesse moyenne = vitesse brute * (1 - somme des pénalités)).

La valeur est enfin arrondie à 5 km/h supérieur pour les objets d’importance 1 à 4 et à 5 km/h inférieur pour les objets d’importance 5 ou 6.

Contrainte sur l’attribut : Valeur obligatoire (calculée).

### Vitesse piéton

Pour les piétons, les calculs sont basés sur les critères suivants :

- NATURE = ‘Autoroute’ & IMPORTANCE = ‘1’ <span class="fr-icon-arrow-right-line"></span> 0 km/h
- NATURE = ‘Autoroute’ & IMPORTANCE = ‘2’ <span class="fr-icon-arrow-right-line"></span> 0 km/h
- NATURE = ‘Autoroute’ & IMPORTANCE = ‘3’ <span class="fr-icon-arrow-right-line"></span> 0 km/h
- Autres axes <span class="fr-icon-arrow-right-line"></span> 4 km/h
