---
title: Remplacement du Captchétat par le GéoCaptcha
description: Remplacement du Captchétat par le GéoCaptcha, correction d’un bug de publication d’annexe, correction des outputFormat sensible à la casse en WFS
tags:
    - Keycloak
    - Annexe
    - Vecteur
    - WFS
eleventyNavigation:
    key: Remplacement du Captchétat par le GéoCaptcha
    order: -20261028
date: 2026-10-28
---

## Changements

**Remplacement du Captchétat par le GéoCaptcha**

Le CAPTCHA affiché suite à une erreur d’authentification sera maintenant le GéoCaptcha développé par l’IGN. Ce CAPTCHA géographique fera se surperposer deux cartes différentes d’une même zone géographique qu’il faudra aligner correctement. Si besoin, il sera possible de passer par un CAPTCHA accessible en répondant à une question à la place

## Corrections de bugs

- [Annexe] Correction d’un bug où il pouvait être impossible de [publier une annexe](../../../../guides-developpeur/tutoriels/gestion-des-donnees-complementaires/gestion-des-annexes/publication/) qui avait le même chemin qu’une annexe supprimée précédemment
- [Vecteur] [WFS] Correction du fait que les `outputFormat` du [WFS]({{ urls.public.wfs }}?SERVICE=WFS&REQUEST=GetCapabilities&VERSION=2.0.0) étaient sensibles à la casse