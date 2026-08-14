---
title: Validation
description: Tous les détails sur le service de validation de la Géoplateforme
tags:
    - Validation
    - API
    - Géoplateforme
eleventyNavigation:
    key: Validation
    order: 10
pictogram: system/success.svg
summary:
    visible: true
    depth: 1
---

## Présentation

Le service de validation de la Géoplateforme est disponible au travers d’une API REST.

Il permet à un utilisateur authentifié de la Géoplateforme de réaliser une validation d’une donnée fournie en tant qu’archive selon un standard ou une norme : standard PCRS ou standard PLU par exemple.
En sortie de cette API, l’utilisateur récupère :
- Un rapport de validation au format CSV
- À son choix, une donnée dont la structure a été modifiée pour correspondre au standard

<br>

Ce système de validation est aussi mobilisable directement en tant que traitement au sein de la Géoplateforme - Entrepôt, afin, par exemple, de constituer une étape de prérequis avant intégration en base.

## Quand utiliser ce service ?

L’usage de ce service ou de ce traitement est à privilégier lorsque la donnée que vous produisez est soumise au respect d’un standard ou d’une norme. L’API ou le traitement validation vous donne un moyen exhaustif de vous assurer de la bonne conformité de votre donnée à ce standard.

En tant que producteur d’une donnée agrégée répondant à un standard, il peut être utile d’inclure le traitement de validation comme étape préalable obligatoire à destination des producteurs de données locales afin qu’eux-mêmes ne fournissent au processus d’agrégation qu’une donnée normalisée.

## Accès au swagger

La documentation <span lang="en">_swagger_</span> permettant d’accéder aux détails des routes et paramètres pour réaliser une validation est accessible ici :

[https://data.geopf.fr/validation/swagger-ui/index.html](https://data.geopf.fr/validation/swagger-ui/index.html){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/swagger-ui/index.html - ouvre une nouvelle fenêtre"}

La documentation <span lang="en">_swagger_</span> permettant d’accéder aux détails des routes et paramètres pour réaliser une validation via un traitement d’entrepôt est accessible ici :

[{{ urls.api_entrepot }}/swagger-ui/index.html]({{ urls.api_entrepot }}/swagger-ui/index.html){target="_blank" rel="noopener noreferrer" title="{{ urls.api_entrepot }}/swagger-ui/index.html - ouvre une nouvelle fenêtre"}

## Limites d’usage

L’usage de l’API Validation nécessite de disposer d’un compte Géoplateforme mais n’est pas assorti à la détention d’un espace de travail sur la Géoplateforme - Entrepôt.

Un utilisateur ne peut, dans ce contexte, lancer que 60 validations parallèles sur son compte.

Dans le cadre de la validation en tant que traitement de datastore, l’utilisateur doit bien entendu disposer d’un espace de travail associé au bon niveau de droit pour lui permettre d’y déposer une donnée et exécuter un traitement.

Si vous ne disposez pas du traitement validation associé à votre datastore, vous êtes invités à contacter <geoplateforme@ign.fr> qui apportera la modification nécessaire et ce quelle que soit votre formule tarifaire.

## Quels schémas de standard appeler et où les localiser ?

Le service de validation attend pour fonctionner des standards rédigés au format JSON et qui associent les critères à vérifier et le niveau de sévérité de chacun des critères.

Pour ses propres besoins, l’IGN entretient ses propres fichiers JSON sur certains de ces standards avec un niveau de sévérité des différents critères qui correspond à ses propres besoins ou ceux de ses commanditaires.

Pour les documents d’urbanisme, les standards sont accessibles à :

[https://github.com/IGNF/validator-config-gpu/tree/master/config](https://github.com/IGNF/validator-config-gpu/tree/master/config){target="_blank" rel="noopener noreferrer" title="https://github.com/IGNF/validator-config-gpu/tree/master/config - ouvre une nouvelle fenêtre"}

Choisir ensuite le modèle de standard visé et pointer sur la racine de ce standard, sur le fichier `files.json`.

Par exemple : [https://github.com/IGNF/validator-config-gpu/blob/master/config/cnig_PLU_2025/files.json](https://github.com/IGNF/validator-config-gpu/blob/master/config/cnig_PLU_2025/files.json){target="_blank" rel="noopener noreferrer" title="https://github.com/IGNF/validator-config-gpu/blob/master/config/cnig_PLU_2025/files.json - ouvre une nouvelle fenêtre"}

Pour les autres standards implémentés, se rendre sur : [https://github.com/IGNF/validator/tree/master](https://github.com/IGNF/validator/tree/master){target="_blank" rel="noopener noreferrer" title="https://github.com/IGNF/validator/tree/master - ouvre une nouvelle fenêtre"} et pointer vers les différents plug-ins disponibles.

## L’API Validation

### Opérations courantes

#### Créer une validation

L’usage de l’API Validation démarre par l’envoi du lot de données à valider et le paramétrage de la durée de rétention du rapport de validation (et du lot de données mis au standard le cas échéant).

Cette création se fait au moyen de la route :

`POST https://data.geopf.fr/validation/api/validations`

**`retention`** prend comme valeur un entier en jours et vient en paramètre de l’URL. Il définit la durée pendant laquelle le résultat (log, rapport, donnée source, donnée normalisée) sera disponible.

Le **<span lang="en">_body_</span>** du `POST` est constitué par le lot de données à valider, envoyé au format archive (`.zip`, `.7z`, `.tar`, et `.tar.gz`). Ce <span lang="en">_body_</span> est soumis en **<span lang="en">_multipart/form-data_</span>**.

L’utilisateur reçoit en retour un corps de **réponse en JSON** du type :

```json
{
    "validationID": "9a68f97a-4f20-47a3-a88e-d5d94ca6a329",
    "status": "created",
    "dataset_name": "22232_PLU_20200124.zip",
    "arguments": {},
    "created": "2026-01-12T15:19:10.037805858Z",
    "message": "Validation créée"
}
```

Il convient d’extraire de cette réponse le **`validationID`** qui va servir pour la suite.

#### Lancer une validation

À cette étape intervient le paramétrage des critères de validation (quel standard ? production d’un lot de données normalisé ?) à proprement parler et le déclenchement effectif de cette validation.

Ce paramétrage s’effectue au moyen de la route :

`PATCH https://data.geopf.fr/validation/api/validations/{validationID}`

Où :
- **`validationID`** est l’identifiant de la validation, récupéré à l’étape « [Créer une validation](#creer-une-validation) »
- le corps de cette requête suit le modèle suivant (**en JSON**) :
    ```json
    {
        "model": "https://github.com/IGNF/validator-config-gpu/blob/master/config/cnig_PLU_2025/files.json",
        "srs": "EPSG:2154",
        "max-errors": 20,
        "normalize": true,
        "plugins": "CNIG",
        "encoding": "UTF-8"
    }
    ```
    - **`model`** est le lien URL vers un fichier JSON modèle de validation (cf. « [Quels schémas de standard appeler et où les localiser ?](#quels-schemas-de-standard-appeler-et-ou-les-localiser) »)
    - **`srs`** est le code EPSG de la projection dans laquelle se trouvent les données dans l’archive livrée
    - **`max-errors`** est un entier paramétrant le nombre maximal d’erreurs qu’on souhaite avoir dans le rapport d’erreur, attention au fait qu’en plaçant trop bas cette valeur, le rapport risque de ne pas être exhaustif
    - **`normalize`** est un booléen prenant :
        - soit vrai : dans ce cas, la normalisation produira en plus du rapport, un jeu de données normalisé (ajoutant à la structure fournie les champs manquants vides)
        - soit faux : dans ce cas, seul le rapport CSV de validation est produit et la donnée source n’est pas dupliquée par un jeu normalisé
    - **`plugins`** : tous les standards urbanisme doivent s’accompagner de l’appel au plug-in CNIG, pour les autres standards, se référer au plug-in dans lequel ils sont stockés
    - **`encoding`** est une chaîne de caractères définissant l’encodage des données qui ont été livrées (généralement `UTF-8`)

Au lancement de la requête, l’utilisateur récupère un corps de réponse du type :

```json
{
    "validationID": "9a68f97a-4f20-47a3-a88e-d5d94ca6a329",
    "status": "progress",
    "dataset_name": "22232_PLU_20200124.zip",
    "arguments": {
        "model": "https://github.com/IGNF/validator-config-gpu/blob/master/config/cnig_PLU_2025/files.json",
        "srs": "EPSG:2154",
        "max-errors": 20,
        "normalize": true,
        "plugins": "CNIG",
        "encoding": "UTF-8"
    },
    "created": "2026-01-12T15:19:10.037806Z",
    "message": "Validation lancée",
    "started": "2026-01-12T15:28:23.531767571Z"
}
```

On y retrouve, en plus du **`validationID`** :
- **`created`** et **`started`** qui sont des mentions d’horodatage de création et de lancement effectif de la validation
- **`status`** qui donne au moyen de valeurs fixes (ici **`progress`**) l’état de la validation
- **`arguments`** qui reprend les paramètres de la validation déclarés lors de la requête PATCH
- **`message`** donne, en français uniquement, une phrase synthétique de l’état dans lequel se trouve le traitement

<br>

#### Suivre une validation

Suivant le volume de donnée livré et la complexité du standard mobilisé sur la validation, cette dernière peut mettre un certain temps à s’exécuter.

Il peut donc être pertinent de venir interroger à pas de temps régulier la requête :

`GET https://data.geopf.fr/validation/api/validations/{validationID}`

Pour prendre connaissance de l’état de la validation. Le corps de réponse (en JSON) de cette requête est du type :

```json
{
    "validationID": "9a68f97a-4f20-47a3-a88e-d5d94ca6a329",
    "status": "failure",
    "dataset_name": "22232_PLU_20200124.zip",
    "arguments": {
        "model": "https://github.com/IGNF/validator-config-gpu/blob/master/config/cnig_PLU_2025/files.json",
        "srs": "EPSG:2154",
        "max-errors": 20,
        "normalize": true,
        "plugins": "CNIG",
        "encoding": "UTF-8"
    },
    "created": "2026-01-12T15:19:10.037806Z",
    "message": "Validation terminée",
    "started": "2026-01-12T15:28:23.531768Z",
    "finished": "2026-01-12T15:30:29.245168Z"
}
```

La **validation est terminée** lorsqu’un **horodatage `finished` est mentionné**. Le **statut** correspondant peut être **`success`** ou **`failure`**.

:::warning
Une validation en statut **`success`** ne signifie pas que le lot de données validé ne contient aucune erreur relative au standard mais simplement que le processus de validation est allé jusqu’à son terme sans encombre. De la même façon, un statut **`failure`** ne préjuge pas du fait que la donnée à valider contient ou non des erreurs. Cela signifie que le processus de validation a rencontré une erreur due généralement à une incohérence des paramètres soumis avec ce qui est trouvé dans la donnée : PLU validé avec un standard PCRS, erreur de projection, d’encodage…
:::

Si la vérification termine en **succès**, on retrouve directement à ce niveau les critères de validation et les points qui sont **ressortis en erreur** dans un argument **`results`**.

### Récupérer les résultats

:::warning
Toutes les informations sur les résultats suivantes sont uniquement accessibles pendant la durée de rétention fixée à l’étape « [Créer une validation](#creer-une-validation) ».
:::

#### Récupération du log

Que la validation se soit terminée en **`failure`** ou en **`success`**, le log est toujours consultable via la route :

`GET https://data.geopf.fr/validation/api/validations/{validationID}/logs`

Le retour en JSON donne les grandes étapes de la validation et le niveau de l’erreur le cas échéant.

#### Récupération du rapport de validation

Le rapport de validation est accessible uniquement en cas de validation dont le statut de sortie est **`success`**.

Il est récupérable via :

`GET https://data.geopf.fr/validation/api/validations/{validationID}/results.csv`

Cette requête produit un fichier results.csv délivré via une réponse en <span lang="en">_multipart/form-data_</span>.

#### Récupération de la donnée normalisée

La donnée normalisée n’est disponible que si la validation a terminé en **`success`** et si lors de l’exécution de l’étape « [Lancer une validation](#lancer-une-validation) », l’argument **`normalize`** a été placé à true.

À ces deux conditions seulement, l’appel à la route :

`GET https://data.geopf.fr/validation/api/validations/{validationID}/files/normalized`

Déclenche en retour d’appel un corps en <span lang="en">_multipart/form-data_</span> qui permet de récupérer un ZIP de la donnée transmise en incluant en plus les champs manquants au bon type dans les différentes tables du lot de données pour lesquelles la validation est applicable.

### Opérations annexes

#### Rechercher une validation déjà lancée ou exécutée

À des fins d’historique ou pour reproduire les critères d’une validation déjà lancée par le passé, il peut être utile de rechercher une validation.

C’est possible au moyen de la route :

`GET https://data.geopf.fr/validation/api/validations`

Il est possible de filtrer ces recherches par :
- **`status`** : un statut de validation parmi les valeurs : **`created`**, **`progress`**, **`success`**, **`failure`** et **`deleted`**
- **`dataset_name`** : permet de préciser, éventuellement avec le caractère joker « `*` » un jeu de données ayant fait l’objet d’une validation

:::info
Une validation ayant dépassé sa période de rétention sera toujours accessible en filtrant par ce statut **`deleted`**.
:::

Cet appel, comme la plupart des routes « catalogue » des API Géoplateforme, donne des résultats paginés. La pagination est pilotable par :
- **`page`** qui vaut 1 au minimum
- **`limit`** qui vaut 10 par défaut et 50 au maximum

<br>

#### Récupérer la donnée livrée

Compte tenu du fait qu’en théorie la donnée source est déjà disponible côté client, la fonction dont il est question ici n’est pas forcément d’un usage très courant, mais peut rendre service en cas de fausse manipulation.

En l’occurrence, l’API de validation met à disposition une route qui permet de re-télécharger les données qu’un utilisateur a lui-même soumis à validation.

Cet accès se fait par la route :

`GET https://data.geopf.fr/validation/api/validations/{validationID}/files/source`

Il déclenche en retour d’appel un corps en <span lang="en">_multipart/form-data_</span> qui permet de récupérer un ZIP de la donnée transmise.

:::warning
Ces informations sont uniquement accessibles pendant la durée de rétention fixée à l’étape « [Créer une validation](#creer-une-validation) ».
:::

#### Stopper une validation en cours

En cas de nécessité, une route permettant d’interrompre une validation déjà lancée est disponible via :

`POST https://data.geopf.fr/validation/api/validations/{validationID}/abort`

Actionner cette route fait passer la validation en statut **`deleted`** et toutes les ressources associées à cette validation (donnée à valider, log…) sont supprimées de la plateforme.

#### Supprimer une validation

La suppression d’une validation revient à anticiper les effets de l’écoulement du temps de rétention.

Elle a pour effet de faire passer la validation au statut **`deleted`** et de supprimer toutes les ressources (donnée à valider, log…) qui y sont associées.

Cette suppression est déclenchée par la route :

`DELETE https://data.geopf.fr/validation/api/validations/{validationID}`

### Le traitement validation

Pour utiliser la validation en tant que traitement, l’utilisateur doit disposer d’un espace de travail Géoplateforme sur lequel le traitement suivant est disponible :

```json
{
    "name": "Validateur Archive",
    "description": "Script de validation pour les livraisons archives",
    "_id": "75dad665-45e6-493a-88da-c604d59aac45"
}
```

Un storage de type **`upload`** adapté pour stocker les données issues du validateur doit aussi être disponible sur le datastore utilisé.

Ce dernier point est normalement déjà effectif dans la mesure où dans le cas de la validation utilisée comme traitement, les données d’entrée sont lues à partir du stockage **`upload`** du datastore considéré et les données de sortie sont écrites sur ce même espace. 

:::warning
Il convient donc de porter une attention particulière au quota disponible sur ce stockage.
:::

Enfin, dans le cas d’une validation exécutée en tant que traitement, la livraison de type archive doit avoir été effectuée classiquement selon les étapes habituelles :
- Création d’une livraison avec affectation des paramètres standard **dont la projection**
- Alimentation de la livraison par un fichier archive respectant les prérequis de la validation (donnée au format compressé : `.zip`, `.7z`, `.tar`, et `.tar.gz`)
- Fermeture de la livraison
- Vérification de la bonne exécution des vérifications

<br>

### Utiliser le traitement dans le cadre d’un usage sans normalisation

#### Corps de requête d’exécution du traitement

Pour utiliser le traitement de validation sans normalisation de donnée, on fournira à l’exécution de traitement un corps de requête du type :

```json
{
    "processing": "cc923709-e34c-4fab-8ebd-7414a0ddbabf",
    "inputs": {
        "upload": ["66a31282-d9cb-42c6-916f-a2b58c120a0c"]
    },
    "output": {
        "upload": { "id": "66a31282-d9cb-42c6-916f-a2b58c120a0c"}
    },
    "parameters": {
        "model": "https://raw.githubusercontent.com/IGNF/validator-config-gpu/refs/heads/master/config/cnig_PLU_2017/files.json",
        "is_compressed": true,
        "max-errors": 20,
        "normalize": false,
        "plugins": "CNIG",
        "encoding": "UTF-8"
    }
}
```

L’appel en lui-même se fait, comme pour tout traitement, via l’appel API Entrepôt.

Par rapport à l’exécution via l’API Validation on notera les différences suivantes :
- Les entrées **`inputs`** et **`output`** prennent dans les deux cas un type **`upload`** renseigné par l’identifiant de la livraison qui va être validée
- Dans les paramètres, on prendra soin de bien préciser le paramètre `"is_compressed": true` dans le cas où on fournit une archive compressée, sans quoi l’instruction de dézippage ne sera pas effectuée et le traitement sortira en erreur
- À noter que comme pour tout traitement, une instruction de notification par courriel peut être ajoutée, par exemple après l’instruction **`parameters`** en fournissant la syntaxe suivante :
    ```json
    "callback": {
        "type": "email",
        "to_address": [
            "une_adresse_electronique",
            "une_autre_adresse_electronique"
        ]
    }
    ```

Cette instruction permet aux détenteurs des adresses électroniques mentionnées de recevoir un courriel de notification de fin de traitement que l’issue soit positive ou non.

#### Récupération du rapport de validation

Le rapport de validation est stocké directement dans le **dossier de la livraison fournie en entrée**.

:::info
Pour ne pas préjuger de l’usage futur de la livraison ainsi validée, en sortie de traitement de validation, la livraison est laissée en statut **`OPEN`** et devra donc être fermée à nouveau pour être réinjectée dans un traitement d’intégration à la Géoplateforme.
:::

Cette précision faite, la récupération du rapport de validation s’effectue en deux appels :
- L’appel `GET {{ urls.api_entrepot }}/datastores/{datastore_id}/uploads/{upload_id}/tree` permet de détailler l’arborescence modifiée de la livraison initiale. L’utilisateur reçoit en retour, une réponse du type : 
    ```json
    [
        {
            "type": "DIRECTORY",
            "name": "source",
            "size": 28162296,
            "children": [
                {
                    "type": "FILE",
                    "name": "22232_PLU_20200124.zip",
                    "size": 28154363
                },
                {
                    "type": "FILE",
                    "name": "__results.jsonl",
                    "size": 7933
                }
            ]
        }
    ]
    ```
    Ce qui permet de déduire que le **chemin d’accès au rapport** de validation consécutif à cette validation est `source/__results.jsonl`. **Cette information est utile pour le second appel.**
- L’appel `GET {{ urls.api_entrepot }}/datastores/{datastore_id}/uploads/{upload_id}/data?path=mon_path/__results.jsonl` permet grâce aux informations précédentes, d’obtenir un corps de réponse <span lang="en">_multipart/form-data_</span> donnant accès au rapport de validation. Cette requête prend en paramètre, en plus des classiques identifiants de datastore et de livraison, le chemin d’accès identifié ci-dessus, via un paramètre **`path`**.

<br>

### Utiliser le traitement dans le cadre d’un usage avec normalisation

#### Corps de requête d’exécution du traitement

Pour utiliser le traitement de validation avec normalisation de donnée, on fournira à l’exécution de traitement un corps de requête du type :

```json
{
    "processing": "cc923709-e34c-4fab-8ebd-7414a0ddbabf",
    "inputs": {
        "upload": ["66a31282-d9cb-42c6-916f-a2b58c120a0c"]     
    },
    "output": {
        "upload": { "name": "Ma donnée normalisée"}
    },
    "parameters": {
        "model": "https://raw.githubusercontent.com/IGNF/validator-config-gpu/refs/heads/master/config/cnig_PLU_2017/files.json",
        "is_compressed": true,
        "max-errors": 20,
        "normalize": true,
        "plugins": "CNIG",
        "encoding": "UTF-8"
    }
}
```

L’appel en lui-même se fait, comme pour tout traitement, via l’appel API Entrepôt.

Par rapport à l’exécution via l’API Validation on notera les différences suivantes :

- Les entrées **`inputs`** et **`output`** prennent un type **`upload`** renseigné par l’identifiant de la livraison qui va être validée.
- L’entrée **`output`** prend un type **`upload`** renseigné par un nom au choix pour créer un second jeu de données en sortie, jeu de données qui sera le jeu de données d’entrée modifié par l’ajout des éléments de normalisation. Après l’exécution de cette requête, le corps de réponse permet d’obtenir l’identifiant de la **donnée d’<span lang="en">_upload_</span> normalisée** qui sera produite. **Cette information est à mettre de côté pour la phase « Récupération de la donnée normalisée ».**
- Dans les paramètres, on prendra soin de bien préciser : 
    - Le paramètre **`is_compressed`** à **`true`** dans le cas où on fournit une archive compressée, sans quoi l’instruction de dézippage ne sera pas effectuée et le traitement sortira en erreur
    - Le paramètre **`normalize`** à **`true`** pour produire la donnée normalisée en sortie
- À noter que comme pour tout traitement, une instruction de notification par courriel peut être ajoutée, par exemple après l’instruction **`parameters`** en fournissant la syntaxe suivante :
    ```json
    "callback": {
        "type": "email",
        "to_address": [
            "une_adresse_electronique",
            "une_autre_adresse_electronique"
        ]
    }
    ```
    Cette instruction permet aux détenteurs des adresses électroniques mentionnées de recevoir un courriel de notification de fin de traitement que l’issue soit positive ou non.

<br>

#### Récupération du rapport de validation

Le rapport de validation est stocké directement dans le dossier de la **livraison créée en sortie**.

:::info
Pour ne pas préjuger de l’usage futur de la livraison ainsi validée, en sortie de traitement de validation, la livraison est laissée en statut **`OPEN`** et devra donc être fermée à nouveau pour être réinjectée dans un traitement d’intégration à la Géoplateforme.
:::

Cette précision faite, la récupération du rapport de validation s’effectue en deux appels :

- L’appel `GET {{ urls.api_entrepot }}/datastores/{datastore_id}/uploads/{upload_id}/tree` permet de détailler l’arborescence modifiée de la livraison initiale. L’utilisateur reçoit en retour, une réponse du type :
    ```json
    [
        {
            "type": "DIRECTORY",
            "name": "validation",
            "size": 28162296,
            "children": [
                {
                    "type": "FILE",
                    "name": "22232_PLU_20200124.zip",
                    "size": 28154363
                },
                {
                    "type": "FILE",
                    "name": "__results.jsonl",
                    "size": 7933
                }
            ]
        }
    ]
    ```
    Ce qui permet de déduire que le **chemin d’accès au rapport** de validation consécutif à cette validation est `validation/__results.jsonl`. **Cette information est utile pour le second appel.**
- L’appel `GET {{ urls.api_entrepot }}/datastores/{datastore_id}/uploads/{upload_id}/data?path=mon_path/__results.jsonl` permet grâce aux informations précédentes, d’obtenir un corps de réponse <span lang="en">_multipart/form-data_</span> donnant accès au rapport de validation. Cette requête prend en paramètre, en plus des classiques identifiants de datastore et de livraison, le chemin d’accès identifié ci-dessus, via un paramètre **`path`**.

<br>

#### Récupération de la donnée normalisée

La récupération du jeu de données normalisé suit exactement le même processus que celui de récupération du rapport de validation.

Il convient simplement d’adapter la partie du chemin qui sera récupéré.

## Construire un standard de validation

### Fiche référence des modèles de standard

#### Structure

Un modèle de standard se présente sous forme de dossier, le nom du dossier est préférablement sans espace (les remplacer par des `_`).

Ce dossier est composé de trois parties :
- Un fichier `files.json`, qui décrit les informations intrinsèques du modèle telles que son nom. C’est dans ce fichier que la structure des documents du standard est spécifiée.
- Un dossier `types`, qui contient les informations et contraintes sur les fichiers des documents décrits par le standard.
- Un dossier `codes`, qui contient les listes de données autorisées dans certains attributs (colonnes) des tables.

Exemple :
```
cnig_PLU_2025
├── types
│   ├── DOC_URBA.json
│   ...
├── codes
│   ├── ListeEtatPLU.csv
│   ...
└── files.json
```

<br>

#### Fichier `files.json`

Le fichier `files.json` est la colonne vertébrale du document. Il permet de décrire la structure des documents du standard.

Puisque c’est un document JSON, il comporte évidemment `{` et `}` en début et en fin de fichier, ce qui définit l’objet principal du fichier.

##### Description du standard

Chaque entrée dans l’objet principal est présentée ci-dessous. Les propriétés doivent toutes être renseignées, sauf si elles sont indiquées comme optionnelles.
- `id` (obligatoire) : Comme la plupart des objets présents dans un modèle de standards, l’objet principal de `files.json` comporte un `id`. Les `id` sont des suites de 32 caractères alphanumériques. Chaque `id` doit être unique pour l’ensemble du modèle.
- `name` (obligatoire) : Le nom technique du modèle. Évitez les espaces.
- `title` (optionnel) : Le nom général du modèle. Il est souvent identique au `name`.
- `description` (optionnel) : Description du modèle.
- `abstract` (optionnel) : Dans la plupart des cas, la valeur `false` est appropriée. Cette propriété est assignée à `true` dans des modèles de modèles utilisés par le Géoportail de l’Urbanisme.
- `constraints` (optionnel) : La propriété `constraints` est un objet composé de deux propriétés :
    - `folderName` permet de valider le nom des dossiers des documents testés. On valide le nom du dossier s’il vérifie le regex indiqué.
    - `metadataSpecification` est la valeur attendue dans la fiche de métadonnée des documents testés.
- `files` et `codes` (obligatoires) : Ces deux entrées sont des listes (donc introduites par `[` et `]`), qui définissent les fichiers du modèles et les listes de valeurs respectivement. Ces objets sont décrits dans les parties subséquentes.

<br>

##### Exemple de `files.json`

```json
{
    "abstract": false,
    "id": "3935ffc17d3dabe0d77ea7d3c416695d",
    "name": "cnig_PLU_2025",
    "title": "cnig_PLU_2025",
    "description": "cnig_PLU_2025",
    "files": [
        ...
    ],
    "codes": [
        ...
    ],
    "constraints": {
        "folderName": "[a-zA-Z0-9]+_PLU_[0-9]{8}(_[a-zA-Z])?",
        "metadataSpecification": "CNIG PLU v2025"
    }
}
```

##### Description de la structure des documents

L’objet `files` de `files.json` est une liste qui permet d’indiquer quelles sont les fichiers du modèle. Ce n’est pas ici que l’on va décrire le contenu des fichiers, on explicite ici où ils se trouvent, quels sont leurs nom, etc.

Chaque entrée dans l’objet `files` correspond à un fichier du standard et comprend les propriétés suivantes :
- `id` (obligatoire) : Suit les mêmes règles que l’`id` présenté précédemment.
- `name` (obligatoire) : Le nom technique du fichier.
- `title` (optionnel) : Le nom général du fichier. `name` et `title` sont souvent identiques.
- `description` (optionnel) : La description du fichier.
- `path` (obligatoire) : Chemin relatif par rapport à la racine du document. Ce champ fait correspondre le nom du fichier à un regex.
    :::warning
    Ne pas inclure l’extension du fichier dans le regex !
    :::
- `mandatory` (obligatoire) : Indique si la présence du fichier en question est rédhibitoire à sa validation. Les valeurs possibles sont :
    - `ERROR` : L’absence du fichier dans le document va renvoyer une erreur, ce qui rend le document invalide.
    - `WARN` : L’absence du fichier dans le document va remonter un avertissement dans le rapport, mais cela n’invalide pas le document.
    - `OPTIONAL` : l’absence du fichier dans le document ne pose aucun problème.
- `type` (obligatoire) : Le type du fichier. Les valeurs autorisées sont les suivantes :
    - `directory` : Dossier.
    - `metadata` : Fiche de métadonnées XML au format ISO 19115 (`.xml`).
    - `pdf` : Fichier PDF (`.pdf`).
    - `table` : Table de données géographique ou non (`.csv`, `.dbf`, `.shp`, `.geojson`, `.gml`).
    - `multi_table` : Un ensemble de tables stockées dans un seul fichier (`.gml`, `.gpkg`).
- `tableModel` (obligatoire si et seulement si `type` est une `table`) : Chemin vers le modèle correspondant à la table. On fait appel ici au dossier `types` du modèle.
- `tables` (obligatoires si et seulement si `type` est une `mutli_table`) : Si le type du fichier est une multitable, nous allons décrire chacune des tables que le fichier contient dans une seule liste. Ainsi, `tables` est une liste de tables, et chacun des éléments de la liste est un objet avec les propriétés suivantes :
    - `name` : Le nom technique du modèle de la couche.
    - `mandatory` : Quel est l’impact de l’absence de la couche sur la validaté du document testé (voir plus haut).
    - `path` : Regex permettant de faire correspondre le nom de la couche du document testé avec le modèle.
    - `tableModel` : Chemin vers le modèle correspondant à la table.

<br>

##### Énumération des codes

Dans l’objet `codes` de `files.json`, on va énumérer tous les codes des modèles.

Nous completerons cette partie dans la partie sur les codes.

##### Exemple complet de files.json

```json
{
    "abstract": false,
    "id": "3935ffc17d3dabe0d77ea7d3c416695d",
    "name": "cnig_PLU_2025",
    "title": "cnig_PLU_2025",
    "description": "cnig_PLU_2025",
    "files": [
        {
            "type": "table",
            "path": "Donnees_geographiques/[AB0-9]{5}_HABILLAGE_LIN_[0-9]{8}",
            "mandatory": "OPTIONAL",
            "tableModel": "./types/HABILLAGE_LIN.json",
            "id": "ee0d570522f83a665134675aa5241d57",
            "name": "HABILLAGE_LIN",
            "title": "HABILLAGE_LIN"
        },
        {
            "name": "GEOPACKAGE",
            "id": "86d02bead41f4186be66260cf4727a21",
            "description": "ceci est un exemple de multi_table non présent dans cnig_PLU_2025",
            "type": "multi_table",
            "path": "[^\\/]*",
            "mandatory": "ERROR",
            "tables": [
                {
                "name": "prefix_procedure",
                "mandatory": "ERROR",
                "path": "((?:[0-9]{2,3}|2a|2b)[0-9]{4}[0-9]{4}_[0-9]{4}_[0-9]{4})_procedure",
                "tableModel": "./types/prefixeppr_procedure.json"
                },
                ...
            ]
        },
        ...
    ],
    "codes": [
        {
            "data": "./codes/PrescriptionLUrbaType.csv",
            "id": "023592188a2b11f0e88362966107deef",
            "name": "PrescriptionLUrbaType",
            "title": "PrescriptionLUrbaType"
        },
        ...
    ],
    "constraints": {
        "folderName": "[a-zA-Z0-9]+_PLU_[0-9]{8}(_[a-zA-Z])?",
        "metadataSpecification": "CNIG PLU v2025"
    }
}
```

#### Dossier `types`

Dans le dossier `types`, on va renseigner quelles sont les caractéristiques des différentes `tables` que nous avons annoncées dans la partie `files` de `files.json`. Le `path` renvoie directement vers un fichier du dossier `types`.

Chaque fichier du dossier est un JSON mais le contenu varie si c’est une `table` ou une `multi_table`.

Nous allons décrire ici comment définir un modèle d’une table simple. Si le type est une `multi_table`, le fichier est un 

##### Propriétés classiques

- `id` (obligatoire) : Encore une fois, chaque modèle de table a un `id`. Attention, ce n’est **pas** le même que celui renseigné dans `files` de `files.json`.
- `name` (obligatoire) : Le nom technique du modèle de table.
- `title` (optionnel) : Le nom général du modèle de table. Il est courant qu’il soit identique au `name`.
- `description` (optionnel) : La description de la table en question.
- `columns` (obligatoire) : C’est dans cette propriété que nous allons définir les colonnes de notre modèle de tables. C’est une liste d’attributs, où chacun des éléments de la liste correspond à une colonne de la table. Chacun des éléments a les propriétés suivantes :
    - `id` (obligatoire) : `id` similaire aux différents `id` rencontrés : une chaine de 32 caractères alphanumériques.
    - `name` (obligatoire) : Le nom technique de l’attribut.
    - `title` (optionnel) : Le nom général de l’attribut. Il est souvent identique au `name`.
    - `description` (optionnel) : La description de l’attribut.
    - `type` (obligatoire) : Le type de l’attribut peut prendre les valeurs suivantes :
        - `Boolean` : Vrai ou faux
        - `String` : Chaîne de caractères
        - `Integer` : Valeur numérique entière
        - `Double` : Valeur numérique en virgule flottante
        - `Date` : Jour, mois et année
        - `Geometry` : Géométrie de type non spécifié
        - `Point` : Géométrie de type point
        - `LineString` : Géométrie de type polyligne
        - `Polygon` : Géométrie de type polygone
        - `MultiPoint` : Géométrie de type multi-point
        - `MultiLineString` : Géométrie de type multi-polyligne
        - `MultiPolygon` : Géométrie de type multi-polygone
        - `GeometryCollection` : Géométrie de type hétérogène
        - `Path` : Chemin vers un fichier dans le document.
        - `Url` : URL
    - `constraints` (optionnel) : Liste de contraintes associées à la colonne.
        :::warning
        Les contraintes de clé étrangère, ou de liste de valeurs, ne sont pas à renseigner ici.
        :::
        Chaque contrainte peut prendre les valeurs suivantes :
        - `presenceRequired` : `true` si la colonne doit être présente dans la table.
        - `required` : `true` si toutes les valeurs de la colonne doivent être remplies. Ainsi, `false` permet l’intégration de valeurs nulles dans la colonne.
        - `unique` : `true` si toutes les valeurs non-nulles de la colonne doivent être uniques.
        - `maxLength` : Entier indiquant la longueur maximale du champ.
        - `pattern` : Contrainte sous forme d’une expression régulière.

##### Exemple de `columns`

```json
"columns": [
    {
        "type": "Url",
        "id": "17bad748b0bb4361455ac976ac41c13b",
        "name": "URLREG",
        "title": "URLREG",
        "description": "URL ou URI qui pointe sur le fichier du règlement papier complet scanné",
        "constraints": {
            "required": false,
            "presenceRequired": true,
            "unique": false,
            "maxLength": 254
        }
    },
    ...
]
```

##### `constraints` (optionnel)

Cette propriété des tables permet d’ajouter des controles qui valide des données à partir d’autres tables, listes de valeurs, ou même d’autre colonnes de la table.

Deux types de contraintes de tables existent : les `conditions` et les `foreignKeys`, qui sont toutes deux des listes.

###### `conditions`

La propriété condition est une liste de valeurs textuelles, chacune ayant le format d’une condition SQL. Le nom des colonnes à utiliser dans ces expressions sont les noms des colonnes précédemment décrites.

Exemple (qui n’existe pas dans `cnig_PLU_2025`) :

```sql
URLREG LIKE '%.ru'
```

`foreignKeys` : Comme son nom l’indique, cette liste de valeur permet de réaliser des clés étrangères vers d’autres tables ou listes de valeurs. On utilise la aussi une syntaxe SQL, en particulier en utilisant le terme `REFERENCES`.

:::warning
Attention, pour les listes de valeurs, on va faire référence à un fichier dans le dossier `codes`. Il faut alors :
    - créer un csv dans le dossier `codes`, avec le nom souhaité, et au moins une colonne de valeurs, avec un en-tête.
    - ajouter ce fichier dans la propriété `codes` de `files.json`.
:::

Exemple :
- dans un fichier JSON du dossier `types` :
    ```json
    "columns": [
        {
            "type": "String",
            "id": "c8d5869d42965b27d3316711a2db57fc",
            "name": "ETAT"
        },
        ...
    ],
    "constraints": {
        "foreignKeys": [
            "(ETAT) REFERENCES ListeEtatPLUi(ETAT)"
        ]
    }
    ```
- dans le fichier `codes/ListeEtatPLUi.csv` :
    ```csv
    ETAT
    01
    02
    03
    ```
- dans le fichier `files.json`:
    ```json
    "codes": [
        {
            "data": "./codes/ListeEtatPLUi.csv",
            "id": "4b26536f095974b6dd19845fa013fdc0",
            "name": "ListeEtatPLUi",
            "title": "ListeEtatPLUi"
        }
    ]
    ```

<br>

##### Exemple complet d’un fichier du dossier `types`

```json
{
    "id": "48ac04777ad427d939e25ed2350f8787",
    "name": "DOC_URBA",
    "title": "DOC_URBA",
    "description": "Table contenant la liste des documents d’Urbanisme PLU ou POS dont la numérisation ou l’élaboration sous fourme numérique est engagée",
    "columns": [
        {
            "type": "String",
            "id": "6518d7cc46cf4007341e061d835f7fc3",
            "name": "DATAPPRO",
            "title": "DATAPPRO",
            "description": "Date de la dernière approbation administrative du document d’urbanisme",
            "constraints": {
                "required": false,
                "presenceRequired": true,
                "unique": false,
                "pattern": "[0-9]{8}"
            }
        },
        {
            "type": "String",
            "id": "c8d5869d42965b27d3316711a2db57fc",
            "name": "ETAT",
            "title": "ETAT",
            "description": "Etat juridique du document d’urbanisme",
            "constraints": {
                "required": true,
                "presenceRequired": true,
                "unique": false,
                "maxLength": 2
            }
        },
        ...
    ],
    "constraints": {
        "conditions": [
            "DATAPPRO IS NOT NULL OR ETAT NOT LIKE '03'",
            ...
        ],
        "foreignKeys": [
            "(ETAT) REFERENCES ListeEtatPLUi(ETAT)",
            ...
        ]
    }
}
```