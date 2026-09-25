---
title: BD France, des premiers outils pour construire en commun le référentiel géographique national de demain
description: À l'occasion des Géodatadays 2026, l'IGN a présenté les avancées du programme BD France et plusieurs plugins QGIS développés pour faciliter la contribution, le contrôle et le partage de l'information géographique au sein de votre logiciel SIG.
tags:
    - BD France
    - Donnée vecteur
    - Évolution
eleventyNavigation:
    key: BD France, des premiers outils pour construire en commun le référentiel géographique national de demain
    order: -20260922
date: 2026-09-22
---

{% from "components/component.njk" import component with context %}
{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-france-outil/05-2026-09-bd-france-outil.png", "GéoDataDays septembre 2026" %}

---

Lors des Géodatadays, l’IGN est revenu sur les ambitions du programme BD France, qui vise à transformer la façon de produire la BD TOPO® vers un commun de données géographiques de référence, produit et entretenu avec sa communauté. 

Cette démarche repose sur un principe simple : une information = une responsabilité. Chaque acteur est invité à produire, maintenir ou enrichir les données pour lesquelles il dispose de la meilleure connaissance et de la plus grande légitimité. Collectivités, services de l’État, gestionnaires d’infrastructures, services de secours ou encore opérateurs de réseaux contribuent ainsi, chacun à leur niveau, à une description partagée du territoire.

Au-delà des données elles-mêmes, la BD France s’appuie sur quatre piliers : des données géographiques de référence, une communauté d’acteurs engagés, une connaissance experte organisée par thématiques et des services permettant d’utiliser, de contribuer et de se synchroniser avec cette donnée. C’est dans cette dernière dimension que les outils QGIS présentés lors des Géodatadays prennent tout leur sens.

---

### Des outils dans QGIS pour signaler ou éditer la donnée BD TOPO®

Corriger un nom de voie, mettre à jour une zone d’activité ou d’intérêt ou signaler une évolution du territoire directement depuis son logiciel métier préféré, c’est possible depuis plusieurs années. <u>Le plugin **IGN Espace Collaboratif**</u>, déjà largement utilisé, permet de créer et suivre des signalements, de partager des mises à jour et, dans certains cas, d’éditer directement de la donnée, tout ça depuis QGIS. Il constitue le premier outil pour faciliter les échanges entre les producteurs de données de terrain et les données de référence maintenues par l’IGN. L’installation de ce plugin se fait depuis les dépôts officiels QGIS.

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-france-outil/00-2026-09-bd-france-outil.png", "Plugin générique espace collaboratif" %}

---

La nouveauté, c’est que l’IGN développe et met à disposition depuis l’été différents plugins QGIS destinés à faciliter cette contribution à la donnée de référence, à commencer par le plugin **"Plugins MANAGER"**, disponible depuis la rentrée dans le dépôt officiel QGIS. Il permet d’organiser et gérer les versions des différents plugins outils et assistants développés par l’IGN qu’ils soient sur GitHub ou sur les dépôts officiels QGIS, selon un profil. 

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-france-outil/01-2026-09-bd-france-outil.png", "Plugin manager" %}

---

###  Des assistants thématiques pour faciliter l’édition de la donnée sur des thèmes précis 

Certains contributeurs de la BD TOPO® peuvent être amenés à corriger une information ou enrichir la description du réseau routier en **l’éditant** depuis QGIS. Directement inspiré de l’outillage des techniciens de production de l’IGN, derrière ces différents assistants se trouve la même idée : simplifier la mise à jour de la donnée par ceux qui la connaissent le mieux. Les contrôles intégrés permettent ensuite d’assurer une meilleure cohérence avant son partage avec les autres acteurs.
- L’<u>**Assistant**</u> Route (plugin ID : 5975) propose une saisie guidée, des contrôles automatiques et des mécanismes d'harmonisation des attributs spécifiquement pour le thème routier.
- L’**Assistant** Odonyme répond à une problématique comparable pour les noms de voies.

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-france-outil/02-2026-09-bd-france-outil.png", "Plugin assistant route" %}

---

### Des plugins pour faciliter le respect des spécifications et la qualité de l’information produite à plusieurs

Certaines fonctionnalités présentées lors des Géodatadays ont été développées à la demande de notre communauté de contributeurs, pour accompagner les opérations de contrôle et de qualification des données saisies ou encore pour faciliter les modifications sur plusieurs objets à la fois.
 Dans ce cas, on retrouve **Altibonne** (plugin ID 5928), permettant de visualiser et corriger des profils altimétriques sur des objets linéaires ou surfaciques ou encore **Shortest path** qui permet de sélectionner le plus court chemin en sélectionnant un tronçon de départ et d’arrivée sur des objets linéaires d’une même couche : modifier le sens d’écoulement sur l’ensemble des tronçons d’un cours d’eau devient ainsi plus rapide. 

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-france-outil/03-2026-09-bd-france-outil.png", "Altibonne permettant de visualiser et de corriger l’altimétrie d’un objet" %}

---

###  Faciliter le partage et la diffusion des données

La collaboration autour de la donnée ne se limite pas à sa production. Elle repose également sur la capacité à accéder aux données, à les diffuser et à les valoriser.
On rappelle que le plugin **Géoplateforme pour QGIS** (plugin ID : 4426) permet d’accéder directement aux données et services de la Géoplateforme depuis son environnement de travail. Il facilite également la publication de géoservices, la documentation des ressources produites et leur intégration dans les flux de travail existants.

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-bd-france-outil/04-2026-09-bd-france-outil.png", "Plugin géoplateforme" %}


Cette approche contribue à rendre les services nationaux plus accessibles et à simplifier leur appropriation par les communautés d’utilisateurs spécialisées. 

---

###  Envie d’en savoir plus ? 

Contribution, contrôle qualité, synchronisation et diffusion : plusieurs briques sont aujourd'hui soit disponibles soit en test pour accompagner les producteurs de données dans leurs usages quotidiens. [Découvrez ces plugins dans le dépôt officiel QGIS.](https://plugins.qgis.org/plugins/author/G%C3%A9r%C3%B4me%20PECHEUR%20(IGN)/)

D’ici un petit mois, la communauté BD France verra le jour, vous pourrez ainsi échanger et partager vos retours avec ceux qui les utilisent déjà. En attendant l’ouverture de la communauté dédiée, vous pouvez déjà vous préinscrire, vous serez ainsi informés dès sa mise en ligne : [Formulaire préinscription - Communautés usages BD FRANCE - Expertise et territoire.](https://analytics-eu.clickdimensions.com/ignfr-agj1s/pages/etfhjl29efgojnweunaahg.html?PageId=8e47d112bd5df111a8267c1e5276801e)

---
Enfin, notre réseau est disponible pour vous accompagner dans la prise en main de ces outils aussi bien à Paris que dans [les territoires](https://macarte.ign.fr/carte/8Pokw7/Modele-DR-interne) 
