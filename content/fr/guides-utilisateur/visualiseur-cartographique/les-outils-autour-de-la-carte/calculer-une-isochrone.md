---
title: Calculer une isochrone
tags:
    - Cartes
    - Géoportail
    - Visualiseur
    - Outils
    - Périmètre
    - Isochrone
eleventyNavigation:
    key: Calculer une isochrone
    order: 6
    nav: guides-utilisateur
    parent: Les outils autour de la carte
pictogram: "custom/calculer-une-isochrone.svg"
description: Calculer une zone selon un temps de trajet ou une distance
summary:
    visible: true
    depth: 1
---

## Généralités

L’outil **« Calculer une zone selon un temps de trajet »** permet d’afficher sur la carte un périmètre contenant l’ensemble des points situés à une certaine distance (**« Isodistance »**) ou temps de trajet (**« Isochrone »**).

Vérifiez au préalable que l’outil est bien sélectionné dans le [catalogue d’outils](../../catalogue-d-outils/).

Cliquez sur l’icône de l’outil :

![Image décrivant l’icône de l’outil isochrone](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/01_calculer-une-isochrone.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Le panneau de l’outil s’ouvre alors :

![Image décrivant le panneau de l’outil isochrone](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/02_panneau-calculer-une-isochrone.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Mode de déplacement

Vous pouvez choisir de vous déplacer en voiture ou à pied :

![Image décrivant le choix du mode de déplacement](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/03_choix-du-mode-de-deplacement.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Point de départ ou d’arrivée

Choisissez un point en renseignant une adresse dans le cadre de saisie ou bien sélectionnez un point sur la carte grâce au bouton :

![Image décrivant comment renseigner un point de départ](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/04_point-de-depart.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Sélectionnez ensuite le sens du parcours :

![Image décrivant comment choisir le sens de parcours](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/05_sens-de-parcours.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Si le sens de parcours est **« Départ »** alors le point sélectionné sera le point de départ du calcul, sinon ce sera le point d’arrivée.

:::info
Cette option de sens n’a du sens que pour un trajet en voiture car les trajets piétons ne rencontrent pas de sens unique.
:::

---

## Distance ou temps de trajet

Définissez la distance ou le temps de trajet qui permettra de calculer le périmètre à partir du point de départ (ou d’arrivée) :

![Image décrivant comment paramétrer le temps ou la distance de trajet](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/06_temps-ou-distance.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Options supplémentaires

Pour un trajet en voiture vous aurez le choix de cocher ou décocher des options supplémentaires :

![Image décrivant les options de trajets](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/07_options-supplementaires.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Calculer le périmètre

Cliquez sur le bouton **« Calculer l’isodistance »** (si vous avez choisi une distance) ou **« Calculer l’isochrone »** (si vous avez choisi un temps de trajet) pour afficher le résultat sur la carte :

![Image décrivant le résultat du calcul d’isochrone](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/08_resultat-de-l-isochrone.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Cliquez sur l’icône **« Modifier le calcul »** pour revenir à l’étape précédente et modifier les options du calcul.

:::warning
Si vous cliquez sur un autre outil, puis que vous revenez à l’outil **« Calculer une zone selon un temps de trajet »**, alors cela entamera un nouveau calcul.
:::

---

## Enregistrer son résultat

Vous pouvez sauvegarder votre isochrone / isodistance en lui donnant un nom et en cliquant sur **« Enregistrer »** :

![Image décrivant comment enregistrer son résultat](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/09_enregistrer-l-isochrone.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Si vous souhaitez enregistrer votre résultat, il faut que vous soyez [connecté](../../../presentation-utilisateur/connexion) à votre compte au préalable.
:::

Vous retrouverez alors votre isochrone / isodistance avec son nouveau nom dans le [Gestionnaire de couches](../../gestionnaire-de-couches/), ainsi que dans votre espace personnel dans le [Menu cartes](../../menu-cartes/) :

![Image décrivant où on peut retrouver son résultat enregistré](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/10_isochrone-sauvegardee.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Si vous effectuez des modifications, pensez à enregistrer de nouveau votre isochrone / isodistance, sinon elles ne seront pas sauvegardées dans votre espace personnel.

---

## Exporter son résultat

Vous pouvez également exporter votre isochrone / isodistance en un fichier _*.geojson_ en cliquant sur le bouton **« Exporter »** :

![Image décrivant comment exporter son résultat en local](/img/guides-utilisateur/visualiseur-cartographique/les-outils-autour-de-la-carte/calculer-une-isochrone/11_exporter-son-isochrone.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

:::callout
Découvrez d’autres outils autour de la carte grâce aux pages suivantes et précédentes !
:::