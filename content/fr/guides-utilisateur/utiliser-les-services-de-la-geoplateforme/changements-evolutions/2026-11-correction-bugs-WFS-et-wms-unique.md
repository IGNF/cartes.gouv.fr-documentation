---
title: Correction de bugs sur le WFS et le WMS Unique
description: Correction outpoutformat WFS sensible à la casse, correction de la présence de double ou triple "/wfs" dans certaines requêtes, correction de formalisme d’un message d’erreur en WMS Unique
tags:
    - Vecteur
    - WFS
    - WMS Unique
eleventyNavigation:
    key: Correction de bugs sur le WFS et le WMS Unique
    order: -20261110
date: 2026-11-10
---

## Corrections de bugs

- [Vecteur] [WFS] Correction du fait que les `outputFormat` du [WFS]({{ urls.public.wfs }}?SERVICE=WFS&REQUEST=GetCapabilities&VERSION=2.0.0) étaient sensibles à la casse
- [Vecteur] [WFS] Correction de la présence de double ou triple `/wfs` dans les requêtes [`GetCapabilities`]({{ urls.public.wfs }}?SERVICE=WFS&REQUEST=GetCapabilities&VERSION=2.0.0) et [`DescribeFeatureType`]({{ urls.public.wfs }}?SERVICE=WFS&REQUEST=DescribeFeatureType&VERSION=2.0.0) en WFS
- [WMS Unique] Correction d’un problème de formalisme dans la réponse d’erreur lorsque le nombre de couches requêté simultanément dépasse le maximum de 2