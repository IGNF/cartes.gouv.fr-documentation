---
title: Tout savoir sur les bâtiments de la BD TOPO® et le lien avec le RNB 
description: 
tags:
    - BD TOPO®
    - Donnée vecteur
eleventyNavigation:
    key: Tout savoir sur les bâtiments de la BD TOPO® et le lien avec le RNB 
    order: -20260922
date: 2026-09-22
---

{% from "components/component.njk" import component with context %}

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-topo-rnb/00-2026-09-bd-topo-rnb.png", "" %}

**L’information bâtimentaire de la BD TOPO®** a été initialisée dans les années 1990 à partir des anciennes bases de données cartographiques et mise à niveau en 2010 avec les données du parcellaire cadastral (Plan Cadastral Informatisé) dans le but d’être interopérable avec les autres référentiels IGN. 

La mise à jour des emprises au sol du bâti est effectuée depuis majoritairement par restitution photogrammétrique à partir des images aériennes acquises par l’IGN (une trentaine de départements volés par an), ce qui permet de cartographier de manière quasi exhaustive tous les bâtiments ayant une emprise au sol de plus de 20m2 tous les 3 ans. La BD TOPO® est aussi entretenue avec des bases locales de référence produites par des collectivités comme l’Eurométropole de Strasbourg ou la Métropole européenne de Lille. 

**Le Référentiel National des Bâtiments (RNB)** est un service public numérique, lancé en 2021 (sous le nom de Bat-ID) incubé à la Fabrique de la Donnée Territoriale et en cours de pérennisation au sein de l’IGN, qui répertorie l’ensemble des bâtiments du territoire et leur associe un identifiant unique et pérenne, appelé ID-RNB : [https://rnb.beta.gouv.fr](https://rnb.beta.gouv.fr/). 

Une fois attribué au bâtiment, cet identifiant pivot (ID-RNB), permet de simplifier le croisement et les échanges de données bâtimentaires entre les administrations publiques, les collectivités et les acteurs privés. En savoir plus sur les cas d’usage et les utilisateurs actuels du RNB : [https://rnb.beta.gouv.fr/cas](https://rnb.beta.gouv.fr/cas)

La communauté, en collaboration avec le CNIG  a proposé une nouvelle définition du <u>bâtiment</u> en cherchant à répondre au mieux aux attentes des utilisateurs : [https://rnb.beta.gouv.fr/definition](https://rnb.beta.gouv.fr/definition)

Le RNB a été initialisé à partir des données de la BDNB (Base de Données Nationale des Bâtiments), du CSTB (Centre Scientifique et Technique du Bâtiment) et de la BD TOPO®, notamment sur les départements d’Outre-Mer. Il est entretenu aujourd’hui à partir des données de la BD TOPO®, des bases adresses locales (BAL) et de plus en plus avec les contributions d’acteurs publics et privés avec son API et ses outils d’édition (plus de 650 000 contributions mi 2026), ce qui en fait une base de référence incontournable pour disposer de l’information bâtimentaire à jour au niveau national.  
[https://rnb.beta.gouv.fr/stats](https://rnb.beta.gouv.fr/stats) 

---

L’ID-RNB a été intégré une première fois dans la BD TOPO® en 2024 : 
-	Sous forme d’objets ponctuels sous le nom de « batiment_rnb_lien_bdtopo » ;  
-	Comme attribut « identifiant_rnb » de chaque bâtiment quand une correspondance BD TOPO® était possible. 

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-topo-rnb/01-2026-09-bd-topo-rnb.png", "Exemple de l’intégration du RNB dans la BD TOPO® à Dammartin-en-Goële (60)" %}

**L’enjeu pour les équipes BD TOPO® et RNB depuis un an est la synchronisation des 2 bases en vue de rendre les 2 référentiels cohérents et interopérables pour :**

-	Renforcer le rôle pivot RNB comme commun de l’information bâtimentaire en France, qui avec sa communauté de contributeurs repartage l’information la plus à jour. 
-	Enrichir le référentiel BD TOPO® pour garantir aux usagers une information bâti (enveloppes bâties 2D et identifiant unique) à jour, fiable et la plus exhaustive possible. 

---

#### Voici les principales évolutions à venir à partir de fin 2026 :

**Etape 1 : Disparition des très petits bâtiments (<5m2) au sein de la BD TOPO®**

Ces très petits objets (environ 600 000 dans la BD TOPO® à l’été 2026), reliquats d’incohérence entre le bâti et le cadastre (bâtiments découpés, très petits balcons), ne sont pas considérés comme des bâtiments au sens RNB. Ils vont être suivant les cas soit fusionnés avec le bâtiment principal adjacent soit supprimés. Cette opération sera réalisée d’ici octobre 2026 et visible à partir de l’édition de décembre 2026 de la BD TOPO®.

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-topo-rnb/02-2026-09-bd-topo-rnb.png", "" %}{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-topo-rnb/03-2026-09-bd-topo-rnb.png", "Exemple de fusion/suppression des très petits bâtiments issus du cadastre" %}

**Etape 2 : Mise à jour du lien Bati RNB au sein de la BD TOPO®** 

Cette opération permet de rattraper les nouveaux bâtis intégrés dans le RNB depuis 2 ans avec un identifiant. La couche ponctuelle « batiment_rnb_lien_bdtopo » sera mise à jour toutes les semaines et rediffusée dans les produits BD TOPO® et BD TOPO® Express à partir de l’édition de décembre 2026.
L’IGN envisage pour mars 2027 la mise à disposition des enveloppes bâties diffusées par le RNB en complément de l’information ponctuelle, notamment en vue de pouvoir repartager les emprises saisies directement par les contributeurs du RNB en plus des de l’information ponctuelle.  

**Etape 3 : Mise à jour de l’identifiant RNB au sein du bâti BD TOPO®** 

A partir de l’édition de décembre 2026, l’attribut « identifiant_rnb » sera mis à jour sur la quasi-intégralité des bâtiments BD TOPO® quand il est possible de faire une mise en correspondance unique entre un id ponctuel et l’enveloppe bâtie. Cela concernera 93% des bâtiments concernés fin 2026.  
Cette correspondance ne sera pas intégrale à fin 2026 en raison des différences localisées de découpages des enveloppes bâties réalisées par la BDNB (qui a permis d’initialiser le RNB sur la France Métropolitaine) et la BD TOPO®. 

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-topo-rnb/04-2026-09-bd-topo-rnb.png", "" %}

*Exemple ci dessus : chaque bâtiment sur le terrain (en vert) est découpé en 2 bâtiments RNB (en bleu) car le RNB suivant dans cette zone une découpe suivant la limite cadastrale. Il n’est donc pas possible dans cette zone de préserver l’enveloppe BD TOPO® et d’avoir un identifiant RNB cohérent pour le bâtiment.*

---

L’équipe BD TOPO® travaille avec l’équipe RNB sur ces cas complexes, en privilégiant au maximum l’ID RNB existant, pour passer à une correspondance 100% Bâti BD TOPO® – RNB d’ici fin 2027. 

L'IGN communiquera au fur et à mesure de l’avancée de ce chantier en 2027.

---

:::callout
**Nous contacter :** 

Si vous avez des questions autour de l’intégration des ID-RNB dans la BD TOPO® et la cohérence entre les deux jeux de données, n’hésitez pas à nous solliciter en retour via [contact.geoservices@ign.fr](mailto:contact.geoservices@ign.fr?subject=BDTOPO_RNB). 
:::

