---
title: Évolution de la licence SCAN 25 - SCAN 100
description: Modalités et conditions d’accès aux données numériques de cartographie IGN. Ce qui change au 1er novembre 2026 et pourquoi 
tags:
    - Cartes
    - Évolution
eleventyNavigation:
    key: Évolution de la licence SCAN 25 - SCAN 100
    order: -20260910
date: 2026-09-10
---

{% from "components/component.njk" import component with context %}

À compter du **1er novembre 2026**, l’IGN fait évoluer les conditions de tarification et de licence applicables aux données **SCAN 25® et SCAN 100® ainsi qu’aux flux « Cartes IGN », « Carte TOPO 25 » et « Sentiers de randonnée balisés ».** 

Cette évolution traduit une volonté **d’adapter le modèle aux nouveaux usages numériques,** de mieux encadrer la rediffusion des données et de prendre en compte l’évolution de l’écosystème de la randonnée et de la cartographie numérique. 

{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-licence-scan-25-scan-100/00-2026-09-licence-scan-25-scan100.png", "SCAN 25® Brinon-sur-Sauldre (18)" %}

---

### Données numériques de cartographie IGN : de quoi parle-t-on ?

Ce terme regroupe l’ensemble des données numériques cartographiques contenant des données tierces non libres. Il s’agit de : 

- La donnée [SCAN 25®](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-25)   
- La donnée [SCAN 100®](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-100)  
- La pyramide multi-échelle [Cartes IGN](https://cartes.gouv.fr/explorer-les-cartes/?c=3.749746,44.096017&z=10&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;1;0;0),GEOGRAPHICALGRIDSYSTEMS.MAPS$GEOPORTAIL:OGC:WMTS(2;1;1;0)&permalink=yes) composée notamment des données SCAN 25® et SCAN 100® 
- La pyramide multi-échelle [Carte TOPO 25](https://cartes.gouv.fr/explorer-les-cartes/?c=3.749746,44.096017&z=10&l=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(2;1;1;0),GEOGRAPHICALGRIDSYSTEMS.MAPS$GEOPORTAIL:OGC:WMTS(1;1;1;0)&permalink=yes) composée de la donnée SCAN 25® adaptée à différentes échelles de visualisation 

Cette offre sera enrichie de la donnée « sentiers de randonnée balisés » qui est la diffusion en tuiles vectorielles des sentiers présents sur le SCAN 25® et le SCAN 100® [(en savoir plus)](https://cartes.gouv.fr/aide/fr/partenaires/ign/generalites-ign/actualites/2026-07-plan-ign-hd-et-sentiers/).

---

### Ce qui ne change pas : les usages professionnels restent gratuits 

L’utilisation des données IGN à des fins **strictement professionnelles (BtoB)** reste gratuite, qu’elle soit réalisée en local ou en streaming, sous réserve du respect des conditions de la licence. 

Cette règle concerne par exemple les entreprises ou administrations qui utilisent les données cartographiques pour leurs propres besoins professionnels, dans leur système d’information géographique ou leur application web interne, sans les intégrer à une offre destinée au grand public. 

Cette orientation s’inscrit dans la continuité de la décision numéro 2021-295 prise en juin 2021 et qui avait étendu la gratuité des fonds numériques de cartographie aux usages professionnels. 

---

### En revanche, les applications, sites web et services numériques proposés au grand public restent concernés par une tarification. 

Cette tarification s’appuie sur quatre forfaits proposés pour les usages à destination du grand public (BtoC) :  

- **Streaming seul ;** 
- **Streaming + mise en cache ;** 
- **Téléchargement seul et commercialisation de supports préchargés ;** 
- **Téléchargement seul et commercialisation de services web.** 

---

###  Streaming seul : un nouveau mode de calcul fondé sur les données consommées 

Jusqu’à présent, la facturation du streaming reposait sur une logique de **transactions.** Le passage de la diffusion de ces données sur la Géoplateforme a imposé de revoir la manière de mesurer la consommation (consommation qui peut être suivie via son compte Géoplateforme). L’IGN fait donc évoluer son unité de mesure vers le **téraoctet (To) de données consommées.** 

---

### Le nouveau barème est le suivant : 

{{ component("table", {
    headers: ["Consommation annuelle", "Redevance"],
    data: [
        ["Moins de 1 To", "Gratuit"],
        ["De 1 à 20 To", "10 000 € HT/an"],
        ["De 20 à 50 To", "25 000 € HT/an"],
 	    ["Plus de 50 To", "50 000 € HT/an"]
    ]
}) }}

---

###  Streaming + mise en cache : passage de 6 € à 7 € par abonnement annuel et mise en place d’un abonnement mensuel (par utilisateur) 

Le forfait destiné aux applications qui permet à leurs utilisateurs de consulter les cartes en ligne mais aussi de les **télécharger et de les conserver en cache pour une utilisation hors connexion** évolue également. 

Resté stable depuis plus de 8 ans, le tarif passe de **6 € HT à 7 € HT par abonnement annuel et par utilisateur.** Pour les abonnements mensuels ou hebdomadaires, un nouveau tarif de **2 € HT par abonnement et par utilisateur est introduit.** 

L’apparition d’un tarif mensuel répond par ailleurs à l’évolution du marché : les offres des applications deviennent de plus en plus flexibles, avec des abonnements mensuels, annuels ou des périodes d’essai. 

---

###  Téléchargement et supports préchargés  

Le troisième forfait concerne notamment les acteurs qui proposent des données de cartographie numérique **préchargées sur un support,** ou qui permettent à leurs utilisateurs de télécharger des lots de données. 

Ce forfait concerne uniquement les données SCAN 25® et SCAN 100®. Les données disponibles exclusivement sous forme de flux, comme certaines composantes de la pyramide cartographique et les sentiers de randonnée balisés, ne sont pas concernées par ce mode d’exploitation.

---

###  Un nouveau forfait pour encadrer la rediffusion des données 

Une nouveauté apparaît avec le forfait **« téléchargement seul et commercialisation de services web ».** Il s’adresse aux éditeurs qui téléchargent les données SCAN 25® ou SCAN 100® pour ensuite les **rediffuser sous forme de services web ou de flux au sein de leur propre offre.** 

Ce dispositif n’avait pas d’équivalent dans le précédent barème. L’objectif est avant tout de **clarifier et encadrer la rediffusion** des données IGN par des éditeurs tiers. 

L’obtention du forfait nécessite la réalisation d’un contrat avec l’IGN et impose notamment un suivi des licences accordées ainsi que des usages finaux. Des dispositions d’audit permettent également à l’IGN de contrôler le respect des conditions de licence

---

### La reproduction papier  

Pour les cartes, topoguides et autres supports graphiques utilisant les données SCAN 25® ou SCAN 100®, le principe de redevance sur le chiffre d’affaires est maintenu. 

Le nouveau barème fixe la redevance à **6 % du chiffre d’affaires net généré par la vente du support.** Pour les supports distribués gratuitement, le barème est **inchangé**, avec notamment une gratuité pour les impressions inférieures à 100 000 dm². 

---


{% imageContent "/img/partenaires/ign/generalites/actualites/2026-09-licence-scan-25-scan-100/03-2026-09-licence-scan-25-scan100.png", "SCAN 25® Bourg-Saint-Maurice (73)" %}

---

### Pourquoi l’IGN fait-il évoluer les tarifs des licences d’exploitation des fonds cartographiques numériques ? 

Derrière ces modifications tarifaires se trouvent plusieurs raisons complémentaires et notamment l’évolution du marché de la cartographie. Les ventes de cartes papier s’érodent et, avec elles, les redevances versées aux partenaires qui contribuent à la production de certaines données. L’IGN cherche donc à trouver un nouvel équilibre entre **ouverture des données, soutien aux partenaires producteurs et maintien d’un modèle économique autour du 1 : 25 000.** Le numérique devient un enjeu central pour assurer la pérennité économique de cet écosystème.  

En outre, un certain nombre d’actions nous permettent actuellement d’étoffer et d’améliorer l’offre proposée aux différents utilisateurs et éditeurs, les travaux lancés pour réduire considérablement l’ancienneté du SCAN ou encore le développement d’une offre numérique vectorielle va dans ce sens. La donnée « sentiers de randonnée balisés » (avec une mise à jour mensuelle) intègrera à l’automne le pack cartographique, aux côtés du SCAN 25®, du SCAN 100®, de la pyramide multi-échelle Cartes IGN et de la Carte TOPO 25. 

Le passage à la Geoplateforme constitue également un élément déterminant. 

---

### La clé transitoire SCAN 25®, SCAN 100® et SCAN OACI sera arrêtée le 26 octobre 2026 

Afin d’assurer une continuité de service sur l’accès à ces données lors du passage à la Géoplateforme, une clé d’accès ouverte avait été mise à disposition : 

- WMTS : https://data.geopf.fr/private/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities&apikey=ign_scan_ws  
- WMS Raster : https://data.geopf.fr/private/wms-r?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&apikey=ign_scan_ws 


Ces deux clés seront arrêtées dans un mois, le **26 octobre 2026.** 

Si vous les utilisez encore, nous vous invitons à vous [créer un compte](https://sso.geopf.fr/realms/geoplateforme/protocol/openid-connect/auth?state=eyJyZWZlcmVyIjoiaHR0cHM6XC9cL2NhcnRlcy5nb3V2LmZyXC9yZWpvaW5kcmUtZGVzLWNvbW11bmF1dGVzIiwiYXBwIjpudWxsLCJzZXNzaW9uX2V4cGlyZWQiOm51bGwsIm5vbmNlIjoiNmQ4NTA1NjY2ODBhNmZlYTJiYTkxMzg5NTJlOTgwOTMiLCJleHAiOjE3ODg4NTA3NzR9.tEP3sX2W1cNoSBFUSkP2EZpESxGZqLpmFJrOYhNCQaI&scope=openid%20profile%20email&response_type=code&approval_prompt=auto&redirect_uri=https%3A%2F%2Fcartes.gouv.fr%2Flogin%2Fcheck&client_id=cartes-gouv-dev) sur cartes.gouv.fr pour rejoindre la communauté et vous créer votre clé privée. Un [tutoriel](https://cartes.gouv.fr/aide/fr/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/introduction) vous guide pas à pas sur cette opération. 

:::callout
La décision N°2026-0011-SOC-DP ainsi que le barème public détaillé des données numériques est disponible [ici](https://data.geopf.fr/annexes/ressources/documentation/Bareme_donnees_numériques_cartes_Nov2026.pdf) 
:::

:::callout
Les conditions générales des données numériques sont consultables [ici](https://data.geopf.fr/annexes/ressources/documentation/Conditions_generales_des_donnees_numérique_cartes-Nov2026.pdf)  
:::
 

Pour toutes questions sur ces évolutions de barème ou sur la fermeture de la clé gratuite, écrivez-nous à l’adresse : [contact.geoservices@ign.fr](mailto:contact.geoservices@ign.fr)