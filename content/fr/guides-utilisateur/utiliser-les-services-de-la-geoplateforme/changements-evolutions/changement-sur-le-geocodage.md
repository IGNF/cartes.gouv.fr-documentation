---
title: Changement sur le Géocodage
description: Ajout de nouveaux paramètres de filtrage et du support des valeurs multiples pour certains paramètres de filtrage du service géocodage
tags:
    - Géocodage
eleventyNavigation:
    key: Changement sur le Géocodage
    order: -20260422
date: 2026-04-22
---

## Changements

**Ajout de nouveaux paramètres de filtrage au géocodage**

Plusieurs paramètres sont ajoutés au Géocodage :
- « depcode » ajouté à « autocompletion » et « search » : filtre pour les index address et poi. Il permet de filtrer les résultats par code de département.
- « zipcode » ajouté à « autocompletion » : filtre pour les index address et poi. Il permet de filtrer les résultats par code postal.

<br>

**Ajout du support des valeurs multiples pour certains paramètres de filtrage du géocodage**

**Ajout du support des valeurs multiples sur certains paramètres de filtrage avec des limites pour éviter les abus. Voici la liste des paramètres concernés :**
- « postcode » : accepte jusqu'à 50 valeurs séparées par des virgules.
- « citycode » : accepte jusqu'à 50 valeurs séparées par des virgules.
- « category » : accepte jusqu'à 10 valeurs séparées par des virgules.
- « depcode » : (nouveau paramètre) accepte jusqu'à 10 valeurs séparées par des virgules.
