---
title: Extraction
description: Tous les détails sur le service d’extraction de la Géoplateforme
tags:
    - Extraction
    - API
    - Géoplateforme
eleventyNavigation:
    key: Extraction
    order: 11
pictogram: custom/document-upload.svg
summary:
    visible: true
    depth: 1
---

## Présentation

Le service d’extraction vecteur de la Géoplateforme est disponible au travers d’une _<span lang="en">API REST</span>_ répondant au standard _<span lang="en">OGC API Processes</span>_.

Il permet à un utilisateur authentifié de la Géoplateforme de réaliser un export de données vecteur en sélectionnant lui-même quelles tables, quels champs attributaires de ces tables et/ou quelle emprise spatiale de ces tables il souhaite exporter. L’utilisateur choisit en plus quelle est la projection de sortie de ses données ainsi que le format de donnée qu’il récupère parmi : _<span lang="en">Shapefile</span>_, _<span lang="en">GeoPackage</span>_, _<span lang="en">GeoJSON</span>_, _<span lang="en">GeoParquet</span>_, _<span lang="en">GML</span>_ ou _<span lang="en">PGDUMP</span>_.

La liste des données extractibles est conditionnée à l’utilisateur connecté. Ce dernier peut disposer de données accessibles à l’ensemble des utilisateurs de la Géoplateforme tout comme il peut disposer de données extractibles spécifiquement pour son profil. Ce choix de mise à disposition est fait par le producteur de données. Cet aspect fait l’objet de la dernière rubrique de la présente documentation.

Le fonctionnement de l’_<span lang="en">API</span>_ d’extraction vecteur de la Géoplateforme est donc intimement lié à celui de l’_<span lang="en">API</span>_ Entrepôt de la Géoplateforme.

## Quand utiliser ce service ?

L’usage de ce service est à privilégier lorsque les lots de données prêts à télécharger (via le service de téléchargement de la Géoplateforme) ne correspondent pas à votre périmètre de travail ou que le temps nécessaire à la récréation de ce lot de données selon votre périmètre de travail est plus court via le service d’extraction.

Par exemple :
- Vous travaillez pour un EPCI qui est à cheval sur 2 ou 3 départements et vous souhaitez télécharger la BD TOPO® de votre territoire : il sera plus rapide de réaliser l’extraction de la BD TOPO® à l’emprise de votre territoire que de télécharger les trois départements complets pour ne conserver que les quelques communes qui vous intéressent.
- Vous travaillez à l’échelle d’une région et le lot de données qui vous intéresse n’est disponible qu’au niveau départemental : il est vraisemblablement plus intéressant de continuer à utiliser le service de téléchargement en récupérant chaque département pour les agréger ensuite localement.

<br>

## Accès au <span lang="en">swagger</span>

La documentation _<span lang="en">swagger</span>_ permettant d’accéder aux détails des routes et paramètres pour réaliser une extraction vecteur est accessible ici :
- Pour l’_<span lang="en">API</span>_ Entrepôt (partie « Accéder aux ressources extractibles » et « Pour un producteur de données ») : [https://data.geopf.fr/api/swagger-ui/index.html](https://data.geopf.fr/api/swagger-ui/index.html){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/swagger-ui/index.html - ouvre une nouvelle fenêtre"}
- Pour l’_<span lang="en">API</span>_ d’extraction vecteur (le reste de cette documentation) : [https://data.geopf.fr/extraction/swagger-ui/index.html](https://data.geopf.fr/extraction/swagger-ui/index.html){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/extraction/swagger-ui/index.html - ouvre une nouvelle fenêtre"}

<br>

## Limites d’usage

Chaque compte utilisateur de la Géoplateforme ne peut exécuter qu’une seule extraction en même temps. Une extraction est considérée comme terminée et le quota réinitialisé dès lors que l’extraction s’est terminée en succès ou en échec.

Par ailleurs le service est configuré de telle sorte que, pour l’ensemble des utilisateurs déclenchant une extraction, 20 extractions peuvent tourner en simultanée. Cela implique la constitution d’une file d’attente dès lors que ce quota est rempli et donc des temps de mise à disposition des extractions de chacun qui peuvent être conjoncturellement rallongés.

## Généralités liées au standard <span lang="en">OGC API Processes</span>

### Capabilities

L’_<span lang="en">URL</span>_ de capabilities correspond à la racine du service : https://data.geopf.fr/extraction 

Conformément au standard _<span lang="en">OGC API Processes</span>_, cette _<span lang="en">URL</span>_ référence les _<span lang="en">URL</span>_ de niveau immédiatement inférieur :
- Lien vers le swagger
- Lien vers l’_<span lang="en">URL</span>_ de conformité
- Lien vers la liste des process d’extraction
- Lien vers la liste des travaux d’extraction

<br>

### Conformance

L’_<span lang="en">URL</span>_ de conformance (ou conformité) renvoie vers les pages des différentes parties du standard _<span lang="en">OGC</span>_ avec lesquelles cette _<span lang="en">API</span>_ est conforme.

L’accès à cette information n’est pas strictement nécessaire à l’exécution d’une extraction vecteur.

## Accéder aux ressources extractibles et obtenir les infos clés (nom des tables, projection, structure attributaire)

Pour connaitre la liste des données qui lui sont accessibles en extraction, un utilisateur dispose de deux routes **_<span lang="en">API</span>_ Entrepôt** :
- _<span lang="en">GET</span>_ [https://data.geopf.fr/api/users/me/stored_data](https://data.geopf.fr/api/users/me/stored_data){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/users/me/stored_data - ouvre une nouvelle fenêtre"} : Permet d’obtenir la liste de l’ensemble des données qui me sont accessibles, possiblement en restreignant cette liste selon différents critères
- _<span lang="en">GET</span>_ <a href="https://data.geopf.fr/api/users/me/stored_data/{stored_data}" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/users/me/stored_data/{stored_data} - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/users/me/stored_data/{stored_data}</a> : À partir de la route précédente, on obtient un identifiant de données **« _id »** qui sera placé en paramètre obligatoire permettant d’avoir le détail de cette donnée

<br>

Pour l’ensemble des paramètres et valeurs de ces paramètres vous êtes invités à consulter le **_<span lang="en">swagger</span>_**.

Néanmoins, ces routes ayant des usages qui vont au-delà de la seule _<span lang="en">API</span>_ d’extraction, on va faire ici un zoom sur quelques paramètres qui peuvent être mobilisés à bon escient pour faciliter l’identification d’une ressource à extraire.

### Paramètres et valeurs d’intérêt pour identifier une donnée extractible

Les paramètres que l’on mentionne ici sont exclusivement à mobiliser dans la requête :

_<span lang="en">GET</span>_ [https://data.geopf.fr/api/users/me/stored_data](https://data.geopf.fr/api/users/me/stored_data){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/users/me/stored_data - ouvre une nouvelle fenêtre"}

Ils sont listés dans l’ordre d’apparition dans le _<span lang="en">swagger</span>_.
- **« type »** et **« VECTOR-DB »** : Permet de restreindre la liste des résultats aux seules données mobilisables par l’_<span lang="en">API</span>_ d’extraction : des données de type vecteur.
- **« name »** : Permet d’identifier une donnée par son nom. Le **caractère joker « % »** permet la recherche sur un contenu partiel. La chaine de texte à préciser est **insensible à la casse**. Ainsi, une chaine « %BD%TOPO% » trouvera des données comme « Ma BDTOPO », « BD TOPO » ou encore « BDTOPO_septembre_2025 ».
- **« lon »** et **« lat »** : Où des coordonnées latitude - longitude (_<span lang="en">EPSG</span>_ : _<span lang="en">WGS84</span>_ en degrés décimaux) d’un point d’intérêt sont intersectées avec l’emprise des données : si le point est intersecté, la donnée est listée, sinon elle n’est pas listée.
- **« before »** et/ou **« after »** : Permet de ne conserver que les données créées avec une certaine actualité de date.
- **« page »** et **« limit »** : Comme tous les résultats de l’_<span lang="en">API</span>_ Entrepôt, les résultats de cette route sont paginés. La première page porte le numéro 1, et la limite est fixée à 10 éléments par défaut, 50 éléments au maximum. Pensez à bien parcourir les pages pour vous assurer que votre résultat attendu ne se situe pas en page 2 ou plus loin encore.

<br>

### Attributs d’intérêt d’une donnée extractible pour préparer l’extraction

Une fois la donnée d’intérêt identifiée ci-dessus et son **« _id »** récupéré, il peut être injecté dans la requête de détail :

_<span lang="en">GET</span>_ <a href="https://data.geopf.fr/api/users/me/stored_data/{stored_data}" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/users/me/stored_data/{stored_data} - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/users/me/stored_data/{stored_data}</a>

Où « {stored_data} » sera remplacé par la valeur de cet **« _id »** sans les doubles quotes.

On obtient en réponse, un contenu du type suivant (toujours en _<span lang="en">JSON</span>_) :
```json
{
    "creation": "2025-09-03T14:14:23.666532Z",
    "name": "Pays et écorégions",
    "type": "VECTOR-DB",
    "open": false,
    "srs": "EPSG:4326",
    "contact": "email",
    "extent": {
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
                // une série de coordonnées en WGS84
            ]
        },
        "type": "Feature"
    },
    "size": 9912320,
    "status": "GENERATED",
    "_id": "c746ce1d-e38c-42c4-a9a3-ef34d5bbea40",
    "type_infos": {
        "relations": [
            {
                "name": "ecoregions",
                "type": "TABLE",
                "attributes": {
                    "id": "integer",
                    "fid": "bigint",
                    "nnh": "integer",
                    "geom": "geometry(MultiPolygon,4326)",
                    "color": "character varying",
                    "realm": "character varying",
                    // ...
                },
                "primary_key": [
                    "ogc_fid"
                ]
            },
            {
                "name": "pays",
                "type": "TABLE",
                "attributes": {
                    "id": "integer",
                    "un": "integer",
                    "fid": "bigint",
                    "lat": "double precision",
                    // ...
                },
                "primary_key": [
                    "ogc_fid"
                ]
            }
        ]
    }
}
```

Parmi les attributs en résultat certains sont particulièrement utiles pour préparer son extraction.

Ces attributs intéressants sont listés ci-dessous dans l’ordre dans lequel on les trouve dans la réponse :
- **« srs »** : Donne le code _<span lang="en">EPSG</span>_ de la projection des données que l’on va extraire. Cette information est particulièrement utile dans le cas où on prévoit d’employer un filtre spatial.

    :::info
    Il sera intéressant pour des questions de performance, de fournir la géométrie de filtrage dans la même projection que celle des données stockées sur la Géoplateforme.
    :::

- **« extent »** : Il s’agit de la géométrie en _<span lang="en">GeoJSON</span>_, décrivant de manière détaillée, l’emprise des données disponibles. Là aussi, si un filtre spatial est envisagé, il peut être utile de tester en amont, que la géométrie de filtrage envisagée recoupe la géométrie de la donnée source, au risque sinon de se retrouver avec un export vide.
- **« type_infos »** et **« relations »** : C’est le cœur de la réponse qui présente un intérêt particulier pour préparer l’export puisque c’est dans cette partie que l’on va trouver la liste de tables exportables :
    - **« name »** : Le nom de la table sera systématiquement **en minuscule et sans espace ni caractères spéciaux**.
    - **« attributes »** : Il s’agit d’un objet _<span lang="en">JSON</span>_ dont le contenu est le nom de chaque champ et son type en base de données. Il faut donc prévoir d’extraire cette liste d’attributs qui devra être mentionnée, pour chaque table, soit en totalité, soit sur une sélection d’intérêt, dans la déclaration du processus d’extraction. L’information du type aura son intérêt en cas d’utilisation d’un ou plusieurs champs dans la clause de filtrage d’extraction pour adapter les fonctions et la syntaxe à mobiliser en fonction du type de champ. Idem pour le type de géométrie (et notamment la présence d’une coordonnée Z qui peut jouer sur le comportement de certaines fonctions spatiales).

<br>

## Lier une donnée extractible à son processus d’extraction

Lors de l’étape précédente on a donc isolé un identifiant de donnée extractible sous l’attribut **« _id »** et prenant la forme d’un <span lang="en">_UUID_</span>.

En basculant sur l’**_<span lang="en">API</span>_ d’extraction vecteur**, la route est :

_<span lang="en">GET</span>_ [https://data.geopf.fr/extraction/processes](https://data.geopf.fr/extraction/processes){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/extraction/processes - ouvre une nouvelle fenêtre"}

On récupère une liste de processus d’extraction décrits par :
- Un **« _id »** identifiant de manière unique un processus d’extraction lié à une donnée particulière
- Un **« title »** mentionnant « Extraction vecteur depuis » + l’attribut **« name »** de la donnée extractible identifiée plus haut
- Une **« description »** reprenant la description de la donnée extractible identifiée plus haut.
- Un ensemble de deux **« links »** pointant d’une part vers la route de détail de tel ou tel processus d’extraction, ainsi que la route de détail de la donnée extractible qui y est lié
- Restent deux attributs propres au standard _<span lang="en">API Processes</span>_ : **« outputTransmission »** et **« jobControlOptions »** de type tableau et qui vaudront toujours respectivement « reference » et « async-execute »

<br>

L’information clé à extraire ici est la valeur du bon **« _id »** qui correspond à celui de la donnée que l’on souhaite extraire.

Or un identifiant **« _id »** est toujours composé de la même manière : « identifiant du traitement générique d’extraction » + « _ » + « identifiant de la donnée à extraire ». La valeur de **« _id »** du traitement générique d’extraction étant « 8ab6236b-21d8-471a-a07b-f84a5921f9f5 », **il suffit donc de construire l’identifiant de l’extraction comme « 8ab6236b-21d8-471a-a07b-f84a5921f9f5 » + « _ » + « identifiant de la donnée d’intérêt »**.

## Obtenir les détails (paramètres mobilisables) d’un processus d’extraction

Sur l’_<span lang="en">API</span>_ d’extraction vecteur, la route est :

_<span lang="en">GET</span>_ <a href="https://data.geopf.fr/extraction/processes/{processID}" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/extraction/processes/{processID} - ouvre une nouvelle fenêtre">https://data.geopf.fr/extraction/processes/{processID}</a>

Elle permet d’obtenir, en plus des informations précédentes, les informations suivantes :
- **« version »** : La version du traitement, actuellement « 1.0.0 ».
- **« inputs »** : Liste l’ensemble des paramètres pour configurer une extraction. Chacun de ces paramètres sera détaillé dans la rubrique « [Paramétrer une extraction](#parametrer-une-extraction) ». L’information à retenir ici est que l’on trouve pour chaque paramètre, son nom, une description de son impact et des valeurs attendues ainsi que de son caractère obligatoire ou pas, cette information est donnée par l’élément **« minOccur »**. Si **« minOccur »** est à 1, alors le paramètre est obligatoire, si **« minOccur »** vaut 0, le paramètre est facultatif.
- **« outputs »** : Définit le contenu des sorties, on retrouve systématiquement un log d’export, un résumé d’extraction en _<span lang="en">JSON</span>_ et en cas de succès un résultat téléchargeable sur une instance du service de téléchargement Géoplateforme, correspondant à un flux _<span lang="en">ATOM XML</span>_.

<br>

## Paramétrer une extraction

Grâce aux informations accumulées aux étapes précédentes, il est possible de paramétrer et déclencher sa première extraction.

La configuration de l’extraction et son déclenchement se font en un seul et même appel _<span lang="en">API</span>_ via la route :

_<span lang="en">POST</span>_ <a href="https://data.geopf.fr/extraction/processes/{processID}/execution" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/extraction/processes/{processID}/execution - ouvre une nouvelle fenêtre">https://data.geopf.fr/extraction/processes/{processID}/execution</a>

On configure, dans le corps de requête ci-dessous, une extraction type pour une donnée contenant deux tables de données.

On trouvera au-dessous de ce corps de requête type, un descriptif détaillé et exhaustif des différents paramètres et leur contenu.
```json
{
    "inputs": {
        "relations": {
            "table_1": { 
                "attributes": [ 
                    "attribut1",
                    "attribut2",
                    "attribut3",
                    // ...
                    "attribut_geometrie"
                ],
                "filters": "ST_intersects(attribut_geometrie,st_transform(st_setsrid('POLYGON ((893173.37413014 6245898.77978964,897816.865990493 6246039.4916642,897852.043959132 6241747.77949023,893208.552098779 6241501.53370976,893208.552098779 6241501.53370976,893173.37413014 6245898.77978964))'::geometry,2154),2154)) AND attribut1='Valeur texte de filtrage'" 
            },
            "table_2": { 
            	"attributes": [
                    "attribut1",
                    "attribut2",
                    "attribut3",
                    // ...
                    "attribut_geometrie"
                ],
                "filters": "ST_intersects(attribut_geometrie,st_transform(st_setsrid('POLYGON ((893173.37413014 6245898.77978964,897816.865990493 6246039.4916642,897852.043959132 6241747.77949023,893208.552098779 6241501.53370976,893208.552098779 6241501.53370976,893173.37413014 6245898.77978964))'::geometry,2154),2154))" 
            }
        },
        "format": "GPKG",
        "append": true,
        "compression": "7zip",
        "srs": "EPSG:3857",
        "lifetime": 336
    },
    "outputs": {
        "logs": {},
        "summary": {},
        "extractedData": {}
    }
}
```

Dans la partie **« inputs »** du corps de requête, on va donc trouver les paramètres d’entrée du traitement. Cette partie sera la plus détaillée.

La partie **« outputs »** ayant un comportement autonome, on ne la détaillera pas, elle doit être reprise telle que mentionnée dans le corps de requête exemple pour chaque extraction.

Dans la partie **« inputs »** donc :
- Le paramètre **« relations »** définit sous la forme d’un objet (sa déclaration commence par un caractère « { » et se termine par un caractère « } ») la liste des tables qui vont être exportées. Chaque table exportée devient elle-même un objet de la forme :
    ```json
    "nom_technique_table": { 
        "attributes": [
            // une liste nommant les attributs que l’on veut conserver
        ],
        "filters" : "syntaxe de filtrage" 
    }
    ```
    - Le nom technique de la table et la liste des attributs, pour rappel, sont identifiés via la rubrique « [Accéder aux ressources extractibles et obtenir les infos clés (nom des tables, projection, structure attributaire)](#acceder-aux-ressources-extractibles-et-obtenir-les-infos-cles-nom-des-tables-projection-structure-attributaire) ».
    - La liste des **« attributes »** débute par un « [ » et se termine par un « ] ». Elle reprend le nom technique de chaque attribut, **entre doubles quotes**, étant **séparé du précédent par une virgule**. Si on souhaite exporter **tous les attributs**, on doit **mentionner explicitement chaque attribut**.
    
        :::info
        La syntaxe _<span lang="en">SQL</span>_ n’est pas autorisée dans cette partie. La géométrie étant un champ attributaire comme un autre, si on souhaite un export spatial, il faut mentionner le champ géométrie dans cette partie.
        :::

    - Le paramètre **« filters »** contient entre doubles quotes, une **syntaxe** _<span lang="en">PostgreSQL</span>_/_<span lang="en">PostGIS</span>_ permettant de filtrer les objets d’une couche. Tout ce qu’il est possible de faire dans un **_<span lang="en">WHERE PostgreSQL</span>_/_<span lang="en">PostGIS</span>_ mono-couche** est autorisé.

        :::info
        L’appel d’une sous-requête n’est pas permis. Les requêtes multi-tables ne sont pas permises. La combinaison de requêtes spatiales et/ou de requêtes spatiales avec des critères alphanumériques ou de date est tout à fait admise.
        :::

        L’utilisateur est invité à se référer à la documentation en ligne de _<span lang="en">PostgreSQL</span>_/_<span lang="en">PostGIS</span>_ pour en savoir plus sur les fonctions et syntaxes associées mobilisables et ce pour les versions suivantes de _<span lang="en">PostgreSQL</span>_ : v12 et de _<span lang="en">PostGIS</span>_ : v3.3.

    :::warning
    Plus le critère de filtrage est complexe, plus l’export est long. Nous invitons donc chaque utilisateur à mesurer la complexité de ses critères de filtrage en recherchant l’optimisation de chaque processus.
    :::

- Le paramètre **« format »** précise le format d’export des données. Seules sont autorisées les valeurs entre doubles quotes suivantes :
    - « GPKG » (_<span lang="en">GeoPackage</span>_)
    - « GML » (_<span lang="en">Geography Markup Language</span>_)
    - « GEOJSON »
    - « ESRI SHAPEFILE »
    - « PARQUET » (_<span lang="en">GeoParquet</span>_)
    - « PGDUMP » (Format de sauvegarde _<span lang="en">PostgreSQL</span>_/_<span lang="en">PostGIS</span>_ compatible avec les utilitaires de remontée en base locale tels que pg_restore ou psql)

    :::info
    Chaque format est à préciser tel que mentionné ci-dessus (sensible à la casse) et entre doubles quotes.
    :::

- Le paramètre **« append »** doit être compris comme étant combiné (et donc dépendant) avec le paramètre **« format »**. Il s’agit d’un paramètre booléen qui prend donc **en valeur soit « true » soit « false »**. L’emploi de la valeur **« true »** n’est **compatible** qu’avec les formats qui peuvent être multicouches, à savoir **_<span lang="en">GPKG</span>_** et **_<span lang="en">PGDUMP</span>_**. Si la valeur **« true »** est employée avec un autre format, elle ne sera pas prise en compte, c’est-à-dire que le traitement ne déclenchera pas d’erreur, mais on obtiendra en sortie un fichier par table demandée dans l’objet relations.
- Le paramètre **« compression »** prend comme unique valeur possible **« 7zip »**. En étant mentionné, il permet d’obtenir un résultat compressé, donc possiblement (suivant le format choisi) beaucoup moins volumineux et donc plus rapide à récupérer. À noter que **la compression va automatiquement découper le résultat en fichiers d’archive de 4 Go chacun maximum**. Donc si le résultat d’export fait 7 Go, l’utilisateur aura à récupérer en intégralité un fichier « mon_fichier.001.7z » et un fichier « mon_fichier.002.7z » avant de pouvoir exploiter l’export depuis son environnement.
- Le paramètre **« srs »** permet de produire une extraction dans une projection différente de celle de la donnée stockée sur la Géoplateforme. La valeur attendue est un code EPSG entre double quotes sous la forme « EPSG:code_proj ». Attention au fait que **toute demande de reprojection induit un allongement du temps d’export**. Il convient donc de mentionner ce paramètre à bon escient, suivant la projection des données d’entrée et seulement en cas de réelle utilité.
- Le paramètre **« lifetime »** permet de paramétrer la durée de rétention du résultat d’un export une fois celui-ci réalisé. La valeur de ce paramètre s’entend en heures. Sa valeur est comprise entre 7 et 336 (soit 14 jours). Passé l’expiration de ce délai, le résultat de l’extraction est automatiquement supprimé du point de diffusion et l’utilisateur devra renouveler sa demande d’extraction. Il convient là aussi à chacun de rechercher le strict délai de rétention qui convient à son cas de figure et ne pas faire porter à la Géoplateforme un fichier qui sera récupéré dès le lendemain de son extraction.

:::info
Lors de l’exécution de cette requête, **un contrôle des informations saisies est réalisé** : le nom des tables est-il cohérent avec le processus appelé ? Les attributs sont-ils là aussi bien présents ? Le format déclaré est-il connu ? etc. En revanche, **aucune cohérence de la clause de filtrage n’est effectuée** tant en termes de pure **syntaxe _<span lang="en">PostgreSQL</span>_** que de **capacité de ce filtre à alimenter concrètement un export** avec de la donnée. Autrement dit, il est possible que la clause de filtrage que l’utilisateur va déterminer **déclenche un export vide**.
:::

## Exploiter la réponse de la demande d’exécution de traitement

En retour de l’exécution de la requête d’extraction, l’utilisateur reçoit une réponse du type :
```json
{
    "jobID": "d9f4c2d7-c73c-405c-9a8c-c33e6f29c9db",
    "status": "running",
    "message": "Extraction des données demandées en cours",
    "created": "2025-10-13T14:55:07.278666682Z",
    "updated": "2025-10-13T14:55:07.278666682Z",
    "links": [
        {
            "rel": "describedBy",
            "type": "application/json",
            "title": "Job d9f4c2d7-c73c-405c-9a8c-c33e6f29c9db",
            "href": "/jobs/d9f4c2d7-c73c-405c-9a8c-c33e6f29c9db"
        }
    ],
    "started": "2025-10-13T14:55:07.278666682Z",
    "processID": "8ab6236b-21d8-471a-a07b-f84a5921f9f5_50edff37-30c7-4ce6-8a4a-8ca960a43974",
    "type": "process"
}
```
- **« jobID »** : Cette information doit être conservée pour suivre l’exécution du traitement et récupérer les résultats
- **« status »** : Donne l’état de déroulement du traitement, en sortie d’exécution le statut prendra la valeur « running »
- **« message »** : Donne en texte clair l’état du traitement, ce message est seulement disponible en français
- **« created »**, **« updated »** et **« started »** : Des informations d’horodatage de déclenchement du traitement et de lancement concret de l’exécution du traitement
- **« links »** : Donne le lien vers la route d’_<span lang="en">API</span>_ qui permet de suivre l’exécution du traitement
- **« processID »** : Rappel de l’identifiant du process d’exécution qui a été mobilisé pour l’export
- **« type »** : Information relative au standard _<span lang="en">OGC</span>_, toujours de valeur « process »

<br>

## Suivre le déroulé de l’extraction

Une fois le traitement d’extraction démarré par l’exécution de la requête précédente, il est possible, voire utile de suivre le déroulé des opérations via la route :

_<span lang="en">GET</span>_ <a href="https://data.geopf.fr/extraction/jobs/{jobID}" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/extraction/jobs/{jobID} - ouvre une nouvelle fenêtre">https://data.geopf.fr/extraction/jobs/{jobID}</a>

L’utilisateur reçoit un retour qui ressemble trait pour trait au retour reçu à l’étape précédente et ce jusqu’à ce que l’extraction termine en échec ou en succès, auquel cas il obtiendra un retour de ce type :
```json
{
    "jobID": "38d43c19-d974-42ba-9d9b-11cf524b5b61",
    "status": "failed",
    "message": "Erreur lors de l’extraction des données",
    "created": "2025-11-25T13:37:20.845151Z",
    "finished": "2025-11-25T13:40:27.769106Z",
    "updated": "2025-11-25T13:40:28.459020Z",
    "links": [
        {
            "rel": "self",
            "type": "application/json",
            "title": "Job 38d43c19-d974-42ba-9d9b-11cf524b5b61",
            "href": "/jobs/38d43c19-d974-42ba-9d9b-11cf524b5b61"
        },
        {
            "rel": "describedBy",
            "type": "application/json",
            "title": "Résultats du job 38d43c19-d974-42ba-9d9b-11cf524b5b61",
            "href": "/jobs/38d43c19-d974-42ba-9d9b-11cf524b5b61/results"
        }
    ],
    "started": "2025-11-25T13:37:20.845151Z",
    "processID": "8ab6236b-21d8-471a-a07b-f84a5921f9f5_50edff37-30c7-4ce6-8a4a-8ca960a43974",
    "type": "process"
}
```
En plus des informations détaillées à l’étape précédente on retrouve :
- **« finished »**, un élément d’horodatage de la fin du traitement. En cas de demande d’extraction récurrente il est utile d’observer le différentiel « created – finished » pour le cas échéant adapter l’horaire de déclenchement de son extraction
- **« status »** qui a évolué soit vers une valeur « successful » soit vers une valeur « failed »
- dans **« links »**, un second élément dans le tableau de réponse, décrit par « "rel": "describedBy" » et qui permet d’obtenir directement la route d’_<span lang="en">API</span>_ à exécuter pour prendre connaissance du résultat ou du log d’erreur en cas d’échec

<br>

## Récupérer le résultat de l’extraction

Une fois le traitement terminé à l’étape précédente, on peut donc exécuter la route d’obtention des résultats via :

_<span lang="en">GET</span>_ <a href="https://data.geopf.fr/extraction/jobs/{jobID}/results" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/extraction/jobs/{jobID}/results - ouvre une nouvelle fenêtre">https://data.geopf.fr/extraction/jobs/{jobID}/results</a>

On reçoit alors un retour du type :
```json
{
    "logs": "[\"2025-12-04 10:32:19,317INFO||gpf-extraction-vector-db||7||Ouverture du fichier de configuration\",\"2025-12-04 10:32:19,331INFO||cli||224||Extraction de données vecteurs\",\"2025-12-04 10:32:19,568INFO||cli||224||Création de l’utilisateur temporaire\",\"2025-12-04 10:32:19,613INFO||cli||224||Début des traitements : 2025-12-04T10:32:19Z\",\"2025-12-04 10:44:17,555INFO||cli||224||Fin des traitements : 2025-12-04T10:44:17Z\",\"2025-12-04 10:44:17,556INFO||cli||224||Génération et upload du fichier de métadonnées\",\"2025-12-04 10:44:17,649INFO||cli||224||Copie des données vers le S3\",\"2025-12-04 10:45:24,393INFO||core||612||Calcul et upload du fichier __descriptor.json\",\"2025-12-04 10:45:25,991INFO||core||612||Mise à jour des informations de la données stockée\",\"2025-12-04 10:45:25,991INFO||cli||224||Suppression de l’utilisateur temporaire\"]",
    "summary": {
        "rel": "describedBy",
        "type": "application/json",
        "title": "Informations sur le processus d’extraction",
        "href": "https://data.geopf.fr/extraction/telechargement/download/extraction_b1f8cdc1-7dd3-4536-a4aa-d484c8023878/data/extraction.json"
    },
    "extractData": {
        "rel": "describedBy",
        "type": "application/atom+xml",
        "title": "Résultats du processus d’extraction",
        "href": "https://data.geopf.fr/extraction/telechargement/resource/extraction_b1f8cdc1-7dd3-4536-a4aa-d484c8023878/data"
    }
}
```
- **« logs »** : Donne un résumé des grandes étapes du traitement en cas de succès ou un focus sur l’erreur rencontrée.
- **« summary »** : Donne accès à un résumé _<span lang="en">JSON</span>_ de l’extraction : horodatage de début et de fin, format demandé, liste des tables extraites notamment.
- **« extractData »** : Donne accès au lien de téléchargement des ressources extraites. La manipulation de cette _<span lang="en">URL</span>_ est identique à celle réalisée pour le service de téléchargement générique de la Géoplateforme. L’utilisateur est invité à se reporter à la documentation dédiée se rapportant à ce service pour plus d’informations.

<br>

## Opérations annexes

### Retrouver une extraction

Si l’utilisateur a raté l’étape « Exploiter la réponse de la demande d’exécution de traitement » ou pour toute nécessité de se référer à un traitement déjà lancé, il est possible de retrouver un traitement via la route :

_<span lang="en">GET</span>_ [https://data.geopf.fr/extraction/jobs](https://data.geopf.fr/extraction/jobs){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/extraction/jobs - ouvre une nouvelle fenêtre"}

Cette recherche est filtrable par :
- Une liste d’identifiants de processes.
- Une liste de statuts d’exécution du traitement.
- Une date et heure ou un intervalle de date au format _<span lang="en">ISO 8601</span>_ sur lequel le traitement s’est exécuté. En ce qui concerne la syntaxe attendue pour le filtrage de date, on a :
    - Pour une seule date, il faut fournir une valeur du type « AAAA-MM-JJTHH:mm:ss.00Z »
    - Pour un intervalle la syntaxe sera « AAAA-MM-JJTHH:mm:ss.00Z/AAAA-MM-JJTHH:mm:ss.00Z » en notant que l’intervalle peut être ouvert des deux côtés en remplaçant la date par « .. » ce qui donne « AAAA-MM-JJTHH:mm:ss.00Z/.. » pour trouver les exécutions lancées après telle date ou « ../AAAA-MM-JJTHH:mm:ss.00Z » pour les exécutions avant telle date
- Une durée minimale ou maximale de traitement (fournie en seconde).
- Comme toute route d’_<span lang="en">API</span>_ Géoplateforme, les résultats sont paginés : première page à 1, limite d’éléments par page à 10 par défaut, 50 maximum. On récupère en résultat, pour un traitement, le même retour que celui décrit dans « [Suivre le déroulé de l’extraction](#suivre-le-deroule-de-l-extraction) ».

<br>

### Stopper une extraction en cours

En cas de nécessité, un utilisateur peut stopper l’exécution d’un traitement via la route :

_<span lang="en">DELETE</span>_ <a href="https://data.geopf.fr/extraction/jobs/{jobID}" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/extraction/jobs/{jobID} - ouvre une nouvelle fenêtre">https://data.geopf.fr/extraction/jobs/{jobID}</a>

L’ensemble des résultats liés éventuellement à ce traitement sont supprimés.

Le quota d’extraction disponible à l’utilisateur est instantanément libéré.

Une trace de ce traitement annulé est conservée via la route _<span lang="en">GET</span>_ <a href="https://data.geopf.fr/extraction/jobs" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/extraction/jobs - ouvre une nouvelle fenêtre">https://data.geopf.fr/extraction/jobs</a>, les traitements annulés pouvant être retrouvés en filtrant sur le statut « DISMISSED ».

## Pour un producteur de données : Rendre une donnée extractible via l’_<span lang="en">API</span>_ d’extraction vecteur

Un producteur de données peut choisir de rendre sa donnée exportable via l’_<span lang="en">API</span>_ d’extraction soit à l’ensemble des utilisateurs de la Géoplateforme, soit aux membres de certaines communautés.

Dans tous les cas, à l’échelle de l’entrepôt Géoplateforme, le niveau qui est rendu extractible est le niveau « stored_data ». Vous êtes invités à vous référer à la documentation dédiée aux concepts de la Géoplateforme si vous souhaitez en savoir plus à ce sujet.

### Rendre une donnée extractible via l’_<span lang="en">API</span>_ d’extraction vecteur à tous les utilisateurs

Pour rendre une donnée extractible à l’ensemble des utilisateurs Géoplateforme, le producteur de données doit ouvrir la **« stored_data »** de type **« VECTOR-DB »** considérée.

Cette ouverture se fait à postériori de la génération de ladite **« stored_data »** au moyen de la route :

_<span lang="en">PATCH</span>_ <a href="https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data} - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}</a>

À ce stade, il faut noter que la **« stored_data »**, au moment où elle a été générée, a rarement été configurée pour présenter un nom et une description agréable à un utilisateur final. Il se trouve que la route nommée précédemment permet de remédier à cela. Il est donc conseillé de profiter de l’ouverture pour régler un nom et une description qui soient utiles aux utilisateurs de l’_<span lang="en">API</span>_ d’extraction pour identifier correctement la donnée à extraire.

Cette modification est normalement sans impact sur vos chaines de diffusion dans la mesure où seul **« _id »** est utilisé.

:::warning
Attention toutefois si vous utilisez le SDK, qui lui peut mobiliser le nom de la **« stored_data »**.
:::

Avec le corps de requête suivant (en _<span lang="en">JSON</span>_) le producteur de données peut ouvrir sa donnée et modifier son nom et sa description en un seul appel :
```json
{
    "name": "Un nom informatif avec espaces, majuscules ou accents si nécessaire",
    "description": "Une description synthétique en toutes lettres",
    "open": true
}
```

### Rendre une donnée extractible via l’_<span lang="en">API</span>_ d’extraction vecteur aux seuls utilisateurs d’une ou plusieurs communautés identifiées

Pour rendre visible à certaines communautés, une donnée stockée, le producteur va jouer sur sa visibilité.

Mais au préalable, ce qui a été dit au paragraphe précédent sur le nom et la description de la **« stored_data »**, donc première étape, améliorer ces informations via :

_<span lang="en">PATCH</span>_ <a href="https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data} - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}</a>

Avec le corps de requête suivant :
```json
{
    "name": "Un nom informatif avec espaces, majuscules ou accents si nécessaire",
    "description": "Une description synthétique en toutes lettres",
    "open": true 
}
```
On répète à ce stade la même alerte que plus haut :

Cette modification est normalement sans impact sur vos chaines de diffusion dans la mesure où seul **« _id »** est utilisé.

:::warning
Attention toutefois si vous utilisez le SDK, qui lui peut mobiliser le nom de la **« stored_data »**.
:::

Ce rappel fait, on peut désormais modifier la visibilité de la donnée via la route dédiée :

_<span lang="en">POST</span>_ <a href="https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}/visibility" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}/visibility - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}/visibility</a>

Avec le corps de requête suivant (en _<span lang="en">JSON</span>_) :
```json
[
  "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "4ea85f64-5857-4562-bb2c-2c963f66art3"
]
```
Où les valeurs entre quotes sont des identifiants de communautés dont l’ensemble des membres auront droit d’extraire la donnée en question.

Cette route de modification de visibilité est associée à une route listant à quelles communautés une donnée est visible :

_<span lang="en">GET</span>_ <a href="https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}/visibility" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}/visibility - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}/visibility</a>

Ainsi qu’une route pour révoquer cette ouverture :

_<span lang="en">DELETE</span>_ <a href="https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}/visibility" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}/visibility - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/datastores/{datastore}/stored_data/{stored_data}/visibility</a>

Qui fonctionnent exactement sur le même principe.