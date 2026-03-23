---
title: Nouveaux plans transfrontaliers à très grande échelle en Europe et en outre-mer
description: L’IGN a mis en place un premier fond de carte test à grande échelle issu des données OSM dans un style Plan IGN
tags:
    - Plan IGN
eleventyNavigation:
    key: Nouveaux plans transfrontaliers à très grande échelle en Europe et en outre-mer
    order: 17
date: 2025-09-30
---

Dans le cadre de sa mission de description du territoire, l’IGN produit des cartes papiers et numériques sur la France hexagonale et les territoires et départements d’Outre-Mer suivants : Guadeloupe, Guyane, Martinique, Mayotte, La Réunion, Saint-Barthélemy, Saint-Martin, Saint-Pierre-et-Miquelon.

Cependant, de nombreux usagers publics locaux et nationaux comme des particuliers remontent régulièrement le besoin à l’IGN de disposer des fonds cartographiques numériques sur les territoires frontaliers pour :

* Utiliser des supports cartographiques adaptés à la randonnée et au tourisme de plein air en zones frontalières (particulièrement dans les Alpes et les Pyrénées),
* Réaliser des plans de situation sur les zones frontalières ou autour des territoires ultramarins,
* Disposer de fonds de cartes sur les territoires ultramarins non couverts par l’IGN, l’Europe, voire le monde dans des outils carto web ou SIG jusqu’à la grande échelle.

Pour les usages liés à la randonnée et au tourisme de plein air, l’IGN diffuse d’ores et déjà les fonds de cartes 25k des autres IGN européens sur une bande de quelques kilomètres autour des frontières. 

Pour les autres usages, l’IGN explore plusieurs possibilités dont l’utilisation de données Open Street Map (OSM) à grande échelle pour compléter les fonds cartographiques IGN.

**Dans ce cadre, L’IGN a mis en place un premier fond de carte test à grande échelle issu des données Open Street Map ([https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright)) sous licence OdBL ([https://opendatacommons.org/licenses/odbl/1-0/](https://opendatacommons.org/licenses/odbl/1-0/)) dans un style Plan IGN.**

![Exemple de plan sur Berne, Suisse](/img/partenaires/ign/generalites/actualites/2025-05-fonds-de-carte-visuel1-bern.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Le fond de carte test est disponible à grande échelle (niveaux de zoom 13 à 18) sur les zones frontalières (en rouge sur la carte) terrestres et ultramarines (Antilles et Pacifique). Exemple sur Berne et Pape’ete. Le style utilisé est quasi identique au style standard du Plan IGN.

Pape’ete :  [https://cartes.gouv.fr/cartes?c=-149.565106,-17.536231&z=15&l=PLAN.IGN$GEOPORTAIL:GPP:TMS(1;1;1;0;sans_toponymes),PLAN.OSM$GEOPORTAIL:GPP:TMS(3;1;1;0;osm-etranger)&w=&permalink=yes](https://cartes.gouv.fr/cartes?c=-149.565106,-17.536231&z=15&l=PLAN.IGN$GEOPORTAIL:GPP:TMS(1;1;1;0;sans_toponymes),PLAN.OSM$GEOPORTAIL:GPP:TMS(3;1;1;0;osm-etranger)&w=&permalink=yes)

Berne : [https://cartes.gouv.fr/cartes?c=7.449142,46.947567&z=17&l=PLAN.IGN$GEOPORTAIL:GPP:TMS(1;1;1;0;sans_toponymes),PLAN.OSM$GEOPORTAIL:GPP:TMS(3;1;1;0;osm-etranger)&w=&permalink=yes](https://cartes.gouv.fr/cartes?c=7.449142,46.947567&z=17&l=PLAN.IGN$GEOPORTAIL:GPP:TMS(1;1;1;0;sans_toponymes),PLAN.OSM$GEOPORTAIL:GPP:TMS(3;1;1;0;osm-etranger)&w=&permalink=yes)

![Exemple de plan sur Pape’ete](/img/partenaires/ign/generalites/actualites/2025-05-fonds-de-carte-visuel2-papeete.png){.fr-responsive-img .frx-border-img .frx-img-contained}

#### Couverture actuelle

Les données couvrent partiellement ou totalement les pays et territoires suivants (voir la carte et zones en rouge) :

* Belgique
* Luxembourg
* Allemagne
* Suisse
* Italie
* Andorre
* Espagne
* Nouvelle-Calédonie
* Wallis et Futuna
* Polynésie Française
* Antilles (Antigua-et-Barbuda, Anguilla, Barbade, Grenade, Montserrat, Saint-Kitts-et-Nevis, Saint-Vincent-et-les-Grenadines, Sainte-Lucie)

![Couverture mondiale](/img/partenaires/ign/generalites/actualites/2025-05-fonds-de-carte-visuel3-couverture-monde.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Zoom couverture sur les frontières de la France métropolitaine](/img/partenaires/ign/generalites/actualites/2025-05-fonds-de-carte-visuel4-couverture-metropole.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Suivant les retours utilisateurs, la couverture pourrait être étendue à d’autres territoires européens et limitrophes. L’IGN étudie à la possibilité de fournir un fond de carte Monde.

#### Actualité

Les données affichées ont été importées depuis les outils de la communauté OSM au mois d’avril 2025. Une mise à jour trimestrielle est envisagée dans un premier temps. Suivant les retours utilisateurs elle pourrait être plus régulière.

#### Utilisation

Le plan est disponible en tuiles vectorielles. Pour l’utiliser vous avez 2 URLs distinctes

* Données : [https://data.geopf.fr/tms/1.0.0/PLAN.OSM/{z}/{x}/{y}.pbf](https://data.geopf.fr/tms/1.0.0/PLAN.OSM/{z}/{x}/{y}.pbf)
* Style : [https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/osm-etranger.json](https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/osm-etranger.json)

Il est conseillé d’utiliser le fond de carte Plan IGN (Plan IGN v2 en WMS/WMTS ou PLAN IGN en tuiles vectorielles) en complément de ce fond de carte en zone frontalière.

[Plus d’informations sur le service de tuiles vectorielles](/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/diffusion/tms/)

#### Exemple Avant/Après à Strasbourg

![Aperçu sur Strasbourg avant](/img/partenaires/ign/generalites/actualites/2025-05-fonds-de-carte-visuel5-sbg-avant.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Aperçu sur Strasbourg après](/img/partenaires/ign/generalites/actualites/2025-05-fonds-de-carte-visuel6-sbg-apres.png){.fr-responsive-img .frx-border-img .frx-img-contained}

#### Exemple Avant/Après à Hendaye

![Aperçu sur Hendaye avant](/img/partenaires/ign/generalites/actualites/2025-05-fonds-de-carte-visuel7-hendaye-avant.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Aperçu sur Hendaye après](/img/partenaires/ign/generalites/actualites/2025-05-fonds-de-carte-visuel8-hendaye-apres.png){.fr-responsive-img .frx-border-img .frx-img-contained}

#### Nous faire des retours

Ce fond cartographique vous intéresse ? Vous voulez partager avec nous vos retours sur les représentations et les contenus cartographiques des données OSM ? Partager vos besoins en termes de cartographie transfrontalière ? Venez échanger avec nous pour construire les futures cartes terrain de demain !

Contactez-nous via [contact.geoservices@ign.fr](mailto:contact.geoservices@ign.fr) avec « PLAN OSM ». Suivant les retours utilisateurs et les besoins recensés, nous envisageons d’étendre la couverture et d’entretenir régulièrement les données. Nous referons le point d’ici la fin de l’automne 2025 sur les perspectives autour de cette cartographie transfrontalière.
