---
title: Convertir un lien issu du Géoportail
tags:
    - iframe
    - Convertir
    - Permalien
eleventyNavigation:
    key: Convertir un lien issu du Géoportail
    order: 7
pictogram: map/backpack.svg
summary:
    visible: true
    depth: 1
---

Vous avez inséré sur votre site une carte créée sur le Géoportail ou partagé une donnée via un lien (permalien) ? Pour garantir la pérennité de ces accès, vous devez les rendre compatibles avec cartes.gouv.fr.

Le convertisseur de permaliens est un outil simple qui permet de convertir vos anciens liens en quelques secondes.

**Comment faire ?**
- 1. Récupérez votre lien Géoportail actuel ou le code <iframe> présent sur votre site.
- 2. Rendez-vous sur : https://ignf.github.io/permalink-converter/.
- 3. Collez votre élément dans le champ prévu à cet effet.
- 4. Cliquez sur "Convertir" : vous obtenez immédiatement votre nouveau lien ou code d'intégration.

**Exemple de lien pris en charge :**
```njk
{% raw %}
    https://www.geoportail.gouv.fr/carte?c=2.765163483556678,48.41229536131638&z=12&l0=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2::GEOPORTAIL:OGC:WMTS(1)&d1=4762965(1;h)&v2=PLAN.IGN::GEOPORTAIL:GPP:TMS(0.71;s:standard)&l3=ORTHOIMAGERY.ORTHOPHOTOS::GEOPORTAIL:OGC:WMTS(0.55)&permalink=yes
{% endraw %}
```

Cette conversion vers le format cartes.gouv.fr est disponible depuis janvier 2026. Nous vous invitons à effectuer cette mise à jour dès maintenant.