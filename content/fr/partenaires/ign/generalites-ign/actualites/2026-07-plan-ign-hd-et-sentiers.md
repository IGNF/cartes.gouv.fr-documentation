---
title: Cet été l’IGN teste l’intérêt des utilisateurs pour deux nouvelles cartes
description: Découvrez le Plan IGN HD et les Sentiers de randonnée balisés qui sont mis en avant dans l’application mobile Cartes IGN !
tags:
    - Cartes
    - Plan IGN
eleventyNavigation:
    key: Cet été l’IGN teste l’intérêt des utilisateurs pour deux nouvelles cartes
    order: -20260709
date: 2026-07-09
---

Découvrez le Plan IGN HD et les Sentiers de randonnée balisés qui sont mis en avant dans l’application mobile [Cartes IGN](https://www.ign.fr/telechargez-application-cartographique-cartes-ign) !

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-07-plan-ign-hd-et-sentiers/00-plan-ign-hd-et-sentiers.png "Sentiers de randonnée balisés sur fond de Plan IGN HD"){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Sentiers de randonnée balisés sur fond de Plan IGN HD</figcaption>

---

#### Le Plan IGN HD

Nous en avons déjà parlé précédemment sous le nom de code [PLAN LiDAR](https://cartes.gouv.fr/aide/fr/partenaires/ign/generalites-ign/actualites/2026-01-planlidar/) et mis à disposition quelques jeux tests sur [l’île de La Réunion](https://cartes.gouv.fr/explorer-les-cartes?c=55.576541,-21.162119&z=14&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),PLANIGN.LIDAR.SURSOL$GEOPORTAIL:OGC:WMTS(2;1;1;0),PLANIGN.LIDAR.TERRAIN$GEOPORTAIL:OGC:WMTS(3;1;1;0)&w=&permalink=yes) et dans [les Alpes](https://cartes.gouv.fr/explorer-les-cartes?c=6.192058,44.948234&z=15&l=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0),PLANIGN.LIDAR.SURSOL$GEOPORTAIL:OGC:WMTS(2;1;1;0),PLANIGN.LIDAR.TERRAIN$GEOPORTAIL:OGC:WMTS(3;1;0;0)&w=&permalink=yes).

C’est un nouveau type de cartographie des paysages du territoire français qui intègre au fond de carte la richesse des informations d’ombrages issus des données réalisées dans le cadre du [programme LiDAR HD](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_MNS-LIDAR-HD) et d’occupation du sol issu des [données CoSIA](https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_COSIA), permettant de donner vie à une nouvelle représentation grande échelle très détaillée sur l’ensemble du territoire.

La version que vous retrouverez dans l’application met en avant des éléments au-dessus du sol, tels que la végétation, les bâtiments et leurs ombres portées.  

Le Plan IGN HD sera disponible sur l’intégralité des zones couvertes par le programme LiDAR HD, en licence ouverte, en septembre, dans les ressources proposées par l’IGN dans la Géoplateforme si cette phase de test est concluante. 

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-07-plan-ign-hd-et-sentiers/01-plan-ign-hd-et-sentiers.png "Couverture actuelle du Plan IGN HD dans l’application mobile Cartes IGN"){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Couverture actuelle du Plan IGN HD dans l’application mobile Cartes IGN</figcaption>

La technique utilisée exploite la précision centimétrique des données LiDAR HD pour produire une représentation cartographique du sursol à grande échelle au 1:5000. Le résultat final est l’empilement de nombreuses données, vectorielles pour certaines, images pour d’autres :

- La structure du relief repose sur la fusion d’un modèle numérique de terrain (MNT) qui accentue les ruptures de pente majeures, tandis que le modèle numérique de surface (MNS) intègre le sursol pérenne. En associant des ombrages unidirectionnels et multidirectionnels, le rendu révèle les microreliefs, quelle que soit leur orientation géographique. À cette base s’ajoute un raster d’ombres portées réelles, calculé par la simulation géométrique d’un vecteur lumineux selon l’azimut et l’altitude du soleil. Cette technique projette les zones d’ombre des obstacles topographiques du MNS. L’objectif est d’apporter de la profondeur au rendu.
- Les silhouettes du bâti et de la végétation sont soulignées par une technique d’encrage. Ce traitement, issu d’un calcul de pentes appliqué aux MNT et MNS, a pour but de faire ressortir les éléments structurants du paysage tout en améliorant la lisibilité des bâtis et des grands arbres en forêt, mais aussi des rochers en montagne.
- L’occupation du sol combine quant à elle une carte des classes et les données CoSIA issues d’une classification par intelligence artificielle. Quand la carte des classes isole le bâti et segmente la végétation selon sa hauteur, CoSIA enrichit la représentation et donne une information sur la nature du couvert végétal.
- Enfin, la carte est complétée par les données vectorielles de la BD TOPO®, représentées selon la symbolisation utilisée sur Plan IGN.

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-07-plan-ign-hd-et-sentiers/02-plan-ign-hd-et-sentiers.png "Données utilisées pour réaliser le Plan IGN HD"){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Illustration des données utilisées pour réaliser le Plan IGN HD</figcaption>

---

#### Les sentiers de randonnée balisés

C’est LA nouveauté de cet été ! Vous les connaissiez représentés en couleur magenta (et pas rose !) dans le SCAN 25® en version image. Ces sentiers ont été retravaillés pour être utilsés sous forme de tuiles vectorielles TMS ([Tile Map Service](https://cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/diffusion/tms/)).

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-07-plan-ign-hd-et-sentiers/03-plan-ign-hd-et-sentiers.png "GR® 654 Est"){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Consultation du GR® 654 Est via la couche Sentiers de randonnée balisés dans l’application mobile Cartes IGN</figcaption>

:::info Tuiles vectorielles, quésaco ?
Les tuiles vectorielles sont une technique de représentation qui permet de fournir des informations géographiques de façon performante à un navigateur web ou une application mobile. Ses avantages :
- **Le format est plus léger** que des tuiles images, ce qui réduit la bande passante utilisée des deux côtés ;
- **Le style du rendu est plus flexible** et peut être réalisé côté interface : un style particulier a d’ailleurs été créé pour cette donnée particulièrement, qui vous est proposé en visu dans l’application mobile Cartes IGN ;
- **Les cartes peuvent être plus interactives** : on peut, sélectionner un itinéraire, et connaitre son nom, la source de l’information, s’il fait partie des chemins de Compostelle, et un court descriptif de ce qu’il représente.
:::

Les sentiers et chemins représentés dans cette ressource correspondent à des itinéraires balisés, équipés de repères visuels facilitant l’orientation et garantissant un suivi du parcours en toute sécurité. Vous retrouverez : 
- L’offre proposée par la [Fédération Française de la Randonnée Pédestre](https://www.ffrandonnee.fr/) connus sous la marque GR®, PR® et GRP, un réseau d’environ 245 250 km d’itinéraires (métropole et outre-mer), toutes catégories d’itinéraires confondues dont 118 575 km de GR®, GR® de Pays et GR® Européens et 36 107 km de PR® labellisés.

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-07-plan-ign-hd-et-sentiers/04-plan-ign-hd-et-sentiers.png "GR® 10"){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Consultation du GR® 10 via la couche Sentiers de randonnée balisés dans l’application mobile Cartes IGN</figcaption>

- L’offre proposée par le [Club Vosgien](https://www.club-vosgien.eu/les-sentiers-du-club-vosgien/nos-itineraires-de-randonnee-2/#filter=r-fullyTranslatedLangus-,r-openState-,sb-sortedBy-0&zc=5.,6.92139,47.98992), un réseau de plus de 20 000 km de chemins de randonnée entretenus avec passion leurs bénévoles dévoués. 

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-07-plan-ign-hd-et-sentiers/05-plan-ign-hd-et-sentiers.png "Circuit court du Club Vosgien"){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Consultation d’un Circuit court du Club Vosgien via la couche Sentiers de randonnée balisés dans l’application mobile Cartes IGN</figcaption>

- L’offre compilée, assemblée, recalée et représentée avec passion depuis plus de 10 ans par les techniciens BD TOPO® de l’IGN en se servant des données ouvertes par les collectivités qui **répertorient, protègent et promeuvent les itinéraires de randonnée et de promenade** sur leurs territoires dans les plans départementaux de randonnées pédestre et des plans locaux de randonnées. Ces données n’étant pas systématiquement proposées sous formats ouverts, ces offres ont pu être levées parfois par GNSS directement par les agents IGN lors de leur travail de reconnaissance terrain.

Pour cette première version du flux, nous n’avons pas détaillé l’origine de l’information de chaque producteur et/ou gestionnaire local qui a été exploitée. Cette information a vocation à être fournie dans une prochaine version. De même, seuls les itinéraires destinés à la pratique pédestre sont représentés. Ils pourront venir progressivement s’enrichir d’autres pratiques (vélo, équestre, navigation fluviale…).

![Image illustrative](/img/partenaires/ign/generalites/actualites/2026-07-plan-ign-hd-et-sentiers/06-plan-ign-hd-et-sentiers.png "Circuit du Tuc des Neuf Églises"){.fr-responsive-img .frx-border-img .frx-img-contained}
<figcaption class="fr-content-media__caption fr-mb-6v" style="text-align: center;">Consultation du circuit du Tuc des Neuf Églises via la couche Sentiers de randonnée balisés dans l’application mobile Cartes IGN</figcaption>

Ces ressources vous sont offertes grâce aux partenariats de longue date qui lient l’IGN aux différentes associations locales et collectivités qui œuvrent au quotidien à offrir une offre de chemins balisés et sécurisés sur toute la France pour découvrir notre territoire en dehors des sentiers battus. 

La donnée Sentiers de randonnée balisés sera proposée fin 2026 à tous les utilisateurs dans les mêmes conditions et en complément du SCAN 25® à l’issue de cette phase de test et de retours utilisateurs.

:::callout Transmettez-nous vos avis et commentaires
Si vous souhaitez nous faire part de vos retours relatifs aux deux nouvelles cartes Plan IGN HD et Sentiers de randonnée balisés ou encore valoriser votre offre de chemins et d’itinéraires sur votre territoire, 
contactez-nous à l’adresse [contact.geoservices@ign.fr](mailto:contact.geoservices@ign.fr?subject=plan%20ign%20hd%20et%20sentiers)
:::

:::info SCAN 25®, Sentiers de randonnée balisés et licence d’utilisation et d’exploitation
L’IGN produit et édite les données SCAN 25®, SCAN 100® ainsi que les flux Cartes IGN, Carte TOPO 25 (SCAN 25®) et Sentiers de randonnée balisés avec des données de partenaires qui sont soumis eux-mêmes à des redevances versées par l’IGN à différents partenaires.

Ces données constituent une image numérique du territoire français à différentes échelles qui permettent de visualiser, localiser et positionner des informations géographiques, saisir et mettre à jour des données métiers. Ces données cartographiques faisant l’objet d’une diffusion publique ne sont pas soumises aux dispositions du titre 1 du livre III du Code des Relations entre le Public et l’Administration (CRPA) ni à l’exercice du droit d’accès à l’information environnementale (article L-124-1 du code de l’environnement).

En conséquence, ces données ne sauraient être communiquées en application du droit d’accès aux documents administratifs et à l’information environnementales et font l’objet d’une licence d’utilisation et d’exploitation spécifique. 
:::
