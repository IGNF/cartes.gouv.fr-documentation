---
title: Harmonisation de la publicité des offres
description: Une offre n'a plus d'attribut visibility mais un champ open.
tags:
    - Évolution
    - Publication
eleventyNavigation:
    key: Harmonisation de la publicité des offres
    order: 23
---

## Changements

Une offre n'a plus d'attribut visibility mais un champ open.

Les règles sont les suivantes :

  - Si une offre est sur un point d'accès open, elle est forcément open=true
  - Si une offre est sur un point d'accès restreint :
      - open=false signifiera qu'on doit avoir une permission personnelle ou communautaire à exploiter pour pouvoir créer un accès sur cette offre à une clé
      - open=true signifiera qu'on pourra créer un accès entre une clé et cette offre sans permission. Tous ces accès sans permission seront supprimés si l'offre repasse en open=false
      - Dans tous les cas, l'offre ne sera consommable avec une clé que si un accès a été créé, avec ou sans permission
