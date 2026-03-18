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

Le service de validation de la Géoplateforme est disponible au travers d’une _<span lang="en">API REST</span>_.

Il permet à un utilisateur authentifié de la Géoplateforme de réaliser une validation d’une donnée fournie en tant qu’archive selon un standard ou une norme : standard PCRS ou standard PLU par exemple.

En sortie de cette _<span lang="en">API</span>_, l’utilisateur récupère :
- Un rapport de validation au format _<span lang="en">CSV</span>_
- À son choix, une donnée dont la structure a été modifiée pour correspondre au standard

<br>

Ce système de validation est aussi mobilisable directement en tant que traitement au sein de la Géoplateforme - Entrepôt, afin, par exemple, de constituer une étape de prérequis avant intégration en base.

## Quand utiliser ce service ?

L’usage de ce service ou de ce traitement est à privilégier lorsque la donnée que vous produisez est soumise au respect d’un standard ou d’une norme. L’_<span lang="en">API</span>_ ou le traitement validation vous donne un moyen exhaustif de vous assurer de la bonne conformité de votre donnée à ce standard.

En tant que producteur d’une donnée agrégée répondant à un standard, il peut être utile d’inclure le traitement de validation comme étape préalable obligatoire à destination des producteurs de données locales afin qu’eux-mêmes ne fournissent au processus d’agrégation qu’une donnée normalisée.

## Accès au <span lang="en">swagger</span>

La documentation _<span lang="en">swagger</span>_ permettant d’accéder aux détails des routes et paramètres pour réaliser une validation est accessible ici :

[https://data.geopf.fr/validation/swagger-ui/index.html](https://data.geopf.fr/validation/swagger-ui/index.html){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/swagger-ui/index.html - ouvre une nouvelle fenêtre"}

La documentation _<span lang="en">swagger</span>_ permettant d’accéder aux détails des routes et paramètres pour réaliser une validation via un traitement d’entrepôt est accessible ici :

[https://data.geopf.fr/api/swagger-ui/index.html](https://data.geopf.fr/api/swagger-ui/index.html){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/swagger-ui/index.html - ouvre une nouvelle fenêtre"}

## Limites d’usage

L’usage de l’_<span lang="en">API</span>_ Validation nécessite de disposer d’un compte Géoplateforme mais n’est pas assorti à la détention d’un espace de travail sur la Géoplateforme - Entrepôt.

Un utilisateur ne peut, dans ce contexte, lancer que 60 validations parallèles sur son compte.

Dans le cadre de la validation en tant que traitement de datastore, l’utilisateur doit bien entendu disposer d’un espace de travail associé au bon niveau de droit pour lui permettre d’y déposer une donnée et exécuter un traitement.

Si vous ne disposez pas du traitement validation associé à votre datastore, vous êtes invités à contacter <geoplateforme@ign.fr> qui apportera la modification nécessaire et ce quelle que soit votre formule tarifaire.

## Quels schémas de standard appeler et où les localiser ?

Le service de validation attend pour fonctionner des standards rédigés au format _<span lang="en">JSON</span>_ et qui associent les critères à vérifier et le niveau de sévérité de chacun des critères.

Pour ses propres besoins, l’IGN entretient ses propres fichiers _<span lang="en">JSON</span>_ sur certains de ces standards avec un niveau de sévérité des différents critères qui correspond à ses propres besoins ou ceux de ses commanditaires.

Pour les documents d’urbanisme, les standards sont accessibles à :

[https://github.com/IGNF/validator-config-gpu/tree/master/config](https://github.com/IGNF/validator-config-gpu/tree/master/config){target="_blank" rel="noopener noreferrer" title="https://github.com/IGNF/validator-config-gpu/tree/master/config - ouvre une nouvelle fenêtre"}

Choisir ensuite le modèle de standard visé et pointer sur la racine de ce standard, sur le fichier « files.json ».

Par exemple : [https://github.com/IGNF/validator-config-gpu/blob/master/config/cnig_PLU_2025/files.json](https://github.com/IGNF/validator-config-gpu/blob/master/config/cnig_PLU_2025/files.json){target="_blank" rel="noopener noreferrer" title="https://github.com/IGNF/validator-config-gpu/blob/master/config/cnig_PLU_2025/files.json - ouvre une nouvelle fenêtre"}

Pour les autres standards implémentés, se rendre sur : [https://github.com/IGNF/validator/tree/master](https://github.com/IGNF/validator/tree/master){target="_blank" rel="noopener noreferrer" title="https://github.com/IGNF/validator/tree/master - ouvre une nouvelle fenêtre"} et pointer vers les différents <span lang="en">_plugins_</span> disponibles.

## L’<span lang="en">API</span> Validation

### Opérations courantes

#### Créer une validation

L’usage de l’_<span lang="en">API</span>_ Validation démarre par l’envoi du lot de données à valider et le paramétrage de la durée de rétention du rapport de validation (et du lot de données mis au standard le cas échéant).

Cette création se fait au moyen de la route :

_<span lang="en">POST</span>_ [https://data.geopf.fr/validation/api/validations](https://data.geopf.fr/validation/api/validations){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/api/validations - ouvre une nouvelle fenêtre"}

**« retention »** prend comme valeur un entier en jours et vient en paramètre de l’_<span lang="en">URL</span>_. Il définit la durée pendant laquelle le résultat (log, rapport, donnée source, donnée normalisée) sera disponible.

Le **_<span lang="en">body</span>_** du _<span lang="en">POST</span>_ est constitué par le lot de données à valider, envoyé au format archive (« .zip », « .7z », « .tat », et « .tar.gz »). Ce _<span lang="en">body</span>_ est soumis en **_<span lang="en">multipart/form-data</span>_**.

L’utilisateur reçoit en retour un corps de **réponse en _<span lang="en">JSON</span>_** du type :
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

Il convient d’extraire de cette réponse le **« validationID »** qui va servir pour la suite.

#### Lancer une validation

À cette étape intervient le paramétrage des critères de validation (quel standard ? production d’un lot de données normalisé ?) à proprement parler et le déclenchement effectif de cette validation.

Ce paramétrage s’effectue au moyen de la route :

_<span lang="en">PATCH</span>_ <a href="https://data.geopf.fr/validation/api/validations/{validationID}" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/api/validations/{validationID} - ouvre une nouvelle fenêtre">https://data.geopf.fr/validation/api/validations/{validationID}</a>

Où :
- **« validationID »** est l’identifiant de la validation, récupéré à l’étape « [Créer une validation](#creer-une-validation) »
- le corps de cette requête suit le modèle suivant (**en _<span lang="en">JSON</span>_**) :
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
    - **« model »** est le lien _<span lang="en">URL</span>_ vers un fichier _<span lang="en">JSON</span>_ modèle de validation (cf. « [Quels schémas de standard appeler et où les localiser ?](#quels-schemas-de-standard-appeler-et-ou-les-localiser) »)
    - **« srs »** est le code _<span lang="en">EPSG</span>_ de la projection dans laquelle se trouve les données dans l’archive livrée
    - **« max-errors »** est un entier paramétrant le nombre maximal d’erreurs qu’on souhaite avoir dans le rapport d’erreur, attention au fait qu’en plaçant trop bas cette valeur, le rapport risque de ne pas être exhaustif
    - **« normalize »** est un booléen prenant :
        - soit vrai : dans ce cas, la normalisation produira en plus du rapport, un jeu de données normalisé (ajoutant à la structure fournie les champs manquants vides)
        - soit faux : dans ce cas, seul le rapport _<span lang="en">CSV</span>_ de validation est produit et la donnée source n’est pas dupliquée par un jeu normalisé
    - **« plugins »** : tous les standards urbanisme doivent s’accompagner de l’appel au _<span lang="en">plugin</span>_ CNIG, pour les autres standards, se référer au _<span lang="en">plugin</span>_ dans lequel ils sont stockés
    - **« encoding »** est une chaîne de caractères définissant l’encodage des données qui ont été livrées (généralement « UTF-8 »)

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

On y retrouve, en plus du **« validationID »** :
- **« created »** et **« started »** qui sont des mentions d’horodatage de création et de lancement effectif de la validation
- **« status »** qui donne au moyen de valeurs fixes (ici **« created »**) l’état de la validation
- **« arguments »** qui reprend les paramètres de la validation déclarés lors de la requête _<span lang="en">PATCH</span>_
- **« message »** donne, en français uniquement, une phrase synthétique de l’état dans lequel se trouve le traitement

<br>

#### Suivre une validation

Suivant le volume de donnée livré et la complexité du standard mobilisé sur la validation, cette dernière peut mettre un certain temps à s’exécuter.

Il peut donc être pertinent de venir interroger à pas de temps régulier la requête :

_<span lang="en">GET</span>_ <a href="https://data.geopf.fr/validation/api/validations/{validationID}" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/api/validations/{validationID} - ouvre une nouvelle fenêtre">https://data.geopf.fr/validation/api/validations/{validationID}</a>

Pour prendre connaissance de l’état de la validation. Le corps de réponse (en _<span lang="en">JSON</span>_) de cette requête est du type :
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

La **validation est terminée** lorsqu’un **horodatage « finished » est mentionné**. Le **statut** correspondant peut être **« success »** ou **« failure »**.

:::warning
Une validation en statut **« success »** ne signifie pas que le lot de données validé ne contient aucune erreur relative au standard mais simplement que le processus de validation est allé jusqu’à son terme sans encombre.
De la même façon, un statut **« failure »** ne préjuge pas du fait que la donnée à valider contient ou non des erreurs. Cela signifie que le processus de validation a rencontré une erreur due généralement à une incohérence des paramètres soumis avec ce qui est trouvé dans la donnée : PLU validé avec un standard PCRS, erreur de projection, d’encodage…
:::

Si la vérification termine en **succès**, on retrouve directement à ce niveau les critères de validation et les points qui sont **ressortis en erreur** dans un argument **« results »**.

### Récupérer les résultats

:::warning
Toutes les informations sur les résultats suivantes sont uniquement accessibles pendant la durée de rétention fixée à l’étape « [Créer une validation](#creer-une-validation) ».
:::

#### Récupération du log

Que la validation se soit terminée en **« failure »** ou en **« success »**, le log est toujours consultable via la route :

_<span lang="en">GET</span>_ <a href="https://data.geopf.fr/validation/api/validations/{validationID}/logs" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/api/validations/{validationID}/logs - ouvre une nouvelle fenêtre">https://data.geopf.fr/validation/api/validations/{validationID}/logs</a>

Le retour en _<span lang="en">JSON</span>_ donne les grandes étapes de la validation et le niveau de l’erreur le cas échéant.

#### Récupération du rapport de validation

Le rapport de validation est accessible uniquement en cas de validation dont le statut de sortie est **« success »**.

Il est récupérable via :

_<span lang="en">GET</span>_ <a href="https://data.geopf.fr/validation/api/validations/{validationID}/results.csv" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/api/validations/{validationID}/results.csv - ouvre une nouvelle fenêtre">https://data.geopf.fr/validation/api/validations/{validationID}/results.csv</a>

Cette requête produit un fichier results.csv délivré via une réponse en _<span lang="en">multipart/form-data</span>_.

#### Récupération de la donnée normalisée

La donnée normalisée n’est disponible que si la validation a terminé en **« success »** et si lors de l’exécution de l’étape « [Lancer une validation](#lancer-une-validation) », l’argument **« normalize »** a été placé à true.

À ces deux conditions seulement, l’appel à la route :

_<span lang="en">GET</span>_ <a href="https://data.geopf.fr/validation/api/validations/{validationID}/files/normalized" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/api/validations/{validationID}/files/normalized - ouvre une nouvelle fenêtre">https://data.geopf.fr/validation/api/validations/{validationID}/files/normalized</a>

Déclenche en retour d’appel un corps en _<span lang="en">multipart/form-data</span>_ qui permet de récupérer un _<span lang="en">ZIP</span>_ de la donnée transmise en incluant en plus les champs manquants au bon type dans les différentes tables du lot de données pour lesquelles la validation est applicable.

### Opérations annexes

#### Rechercher une validation déjà lancée ou exécutée

À des fins d’historique ou pour reproduire les critères d’une validation déjà lancée par le passé, il peut être utile de rechercher une validation.

C’est possible au moyen de la route :

_<span lang="en">GET</span>_ [https://data.geopf.fr/validation/api/validations](https://data.geopf.fr/validation/api/validations){target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/api/validations - ouvre une nouvelle fenêtre"}

Il est possible de filtrer ces recherches par :
- **« status »** : un statut de validation parmi les valeurs : **« created »**, **« progress »**, **« success »**, **« failure »** et **« deleted »**
- **« dataset_name »** : permet de préciser, éventuellement avec le caractère joker « * » un jeu de données ayant fait l’objet d’une validation

:::info
Une validation ayant dépassé sa période de rétention sera toujours accessible en filtrant par ce statut **« deleted »**.
:::

Cet appel, comme la plupart des routes « catalogue » des _<span lang="en">API</span>_ Géoplateforme, donne des résultats paginés. La pagination est pilotable par :
- **« page »** qui vaut 1 au minimum
- **« limit »** qui vaut 10 par défaut et 50 au maximum

<br>

#### Récupérer la donnée livrée

Compte tenu du fait qu’en théorie la donnée source est déjà disponible côté client, la fonction dont il est question ici n’est pas forcément d’un usage très courant, mais peut rendre service en cas de fausse manipulation.

En l’occurrence, l’_<span lang="en">API</span>_ de validation met à disposition une route qui permet de re-télécharger les données qu’un utilisateur a lui-même soumis à validation.

Cet accès se fait par la route :

_<span lang="en">GET</span>_ <a href="https://data.geopf.fr/validation/api/validations/{validationID}/files/source" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/api/validations/{validationID}/files/source - ouvre une nouvelle fenêtre">https://data.geopf.fr/validation/api/validations/{validationID}/files/source</a>

Il déclenche en retour d’appel un corps en _<span lang="en">multipart/form-data</span>_ qui permet de récupérer un _<span lang="en">ZIP</span>_ de la donnée transmise.

:::warning
Ces informations sont uniquement accessibles pendant la durée de rétention fixée à l’étape « [Créer une validation](#creer-une-validation) ».
:::

#### Stopper une validation en cours

En cas de nécessité, une route permettant d’interrompre une validation déjà lancée est disponible via :

_<span lang="en">POST</span>_ <a href="https://data.geopf.fr/validation/api/validations/{validationID}/abort" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/api/validations/{validationID}/abort - ouvre une nouvelle fenêtre">https://data.geopf.fr/validation/api/validations/{validationID}/abort</a>

Actionner cette route fait passer la validation en statut **« deleted »** et toutes les ressources associées à cette validation (donnée à valider, log…) sont supprimées de la plateforme.

#### Supprimer une validation

La suppression d’une validation revient à anticiper les effets de l’écoulement du temps de rétention.

Elle a pour effet de faire passer la validation au statut **« deleted »** et de supprimer toutes les ressources (donnée à valider, log…) qui y sont associées.

Cette suppression est déclenchée par la route :

_<span lang="en">DELETE</span>_ <a href="https://data.geopf.fr/validation/api/validations/{validationID}" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/validation/api/validations/{validationID} - ouvre une nouvelle fenêtre">https://data.geopf.fr/validation/api/validations/{validationID}</a>

### Le traitement validation

Pour utiliser la validation en tant que traitement, l’utilisateur doit disposer d’un espace de travail Géoplateforme sur lequel le traitement suivant est disponible :
```json
{
    "name": "Validateur Archive",
    "description": "Script de validation pour les livraisons archives",
    "_id": "75dad665-45e6-493a-88da-c604d59aac45"
}
```

Un storage de type **« upload »** adapté pour stocker les données issues du validateur doit aussi être disponible sur le datastore utilisé.

Ce dernier point est normalement déjà effectif dans la mesure où dans le cas de la validation utilisée comme traitement, les données d’entrée sont lues à partir du stockage **« upload »** du datastore considéré et les données de sortie sont écrites sur ce même espace. 

:::warning
Il convient donc de porter une attention particulière au quota disponible sur ce stockage.
:::

Enfin, dans le cas d’une validation exécutée en tant que traitement, la livraison de type archive doit avoir été effectuée classiquement selon les étapes habituelles :
- Création d’une livraison avec affectation des paramètres standard **dont la projection**
- Alimentation de la livraison par un fichier archive respectant les prérequis de la validation (donnée au format compressé : « .zip », « .7z », « .tat », et « .tar.gz »)
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

L’appel en lui-même se fait, comme pour tout traitement, via l’appel _<span lang="en">API</span>_ Entrepôt.

Par rapport à l’exécution via l’_<span lang="en">API</span>_ Validation on notera les différences suivantes :
- Les entrées **« inputs »** et **« output »** prennent dans les deux cas un type **« upload »** renseigné par l’identifiant de la livraison qui va être validée
- Dans les paramètres, on prendra soin de bien préciser le paramètre « "is_compressed": true » dans le cas où on fournit une archive compressée, sans quoi l’instruction de dézippage ne sera pas effectuée et le traitement sortira en erreur
- À noter que comme pour tout traitement, une instruction de notification par courriel peut être ajoutée, par exemple après l’instruction **« parameters »** en fournissant la syntaxe suivante :
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
Pour ne pas préjuger de l’usage futur de la livraison ainsi validée, en sortie de traitement de validation, la livraison est laissée en statut **« OPEN »** et devra donc être fermée à nouveau pour être réinjectée dans un traitement d’intégration à la Géoplateforme.
:::

Cette précision faite, la récupération du rapport de validation s’effectue en deux appels :
- L’appel _<span lang="en">GET</span>_ <a href="https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/tree" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/tree - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/tree</a> permet de détailler l’arborescence modifiée de la livraison initiale. L’utilisateur reçoit en retour, une réponse du type : 
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
    Ce qui permet de déduire que le **chemin d’accès au rapport** de validation consécutif à cette validation est « source/__results.jsonl ». **Cette information est utile pour le second appel.**
- L’appel _<span lang="en">GET</span>_ <a href="https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/data?path=mon_path/__results.jsonl" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/data?path=mon_path/__results.jsonl - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/data?path=mon_path/__results.jsonl</a> permet grâce aux informations précédentes, d’obtenir un corps de réponse _<span lang="en">multipart/form-data</span>_ donnant accès au rapport de validation. Cette requête prend en paramètre, en plus des classiques identifiants de datastore et de livraison, le chemin d’accès identifié ci-dessus, via un paramètre **« path »**.

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

L’appel en lui-même se fait, comme pour tout traitement, via l’appel _<span lang="en">API</span>_ Entrepôt.

Par rapport à l’exécution via l’_<span lang="en">API</span>_ Validation on notera les différences suivantes :

- Les entrées **« inputs »** et **« output »** prennent un type **« upload »** renseigné par l’identifiant de la livraison qui va être validée.
- L’entrée **« output »** prend un type **« upload »** renseigné par un nom au choix pour créer un second jeu de données en sortie, jeu de données qui sera le jeu de données d’entrée modifié par l’ajout des éléments de normalisation. Après l’exécution de cette requête, le corps de réponse permet d’obtenir l’identifiant de la **donnée d’_<span lang="en">upload</span>_ normalisée** qui sera produite. **Cette information est à mettre de côté pour la phase « Récupération de la donnée normalisée ».**
- Dans les paramètres, on prendra soin de bien préciser : 
    - Le paramètre **« is_compressed »** à **« true »** dans le cas où on fournit une archive compressée, sans quoi l’instruction de dézippage ne sera pas effectuée et le traitement sortira en erreur
    - Le paramètre **« normalize »** à **« true »** pour produire la donnée normalisée en sortie
- À noter que comme pour tout traitement, une instruction de notification par courriel peut être ajoutée, par exemple après l’instruction **« parameters »** en fournissant la syntaxe suivante :
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
Pour ne pas préjuger de l’usage futur de la livraison ainsi validée, en sortie de traitement de validation, la livraison est laissée en statut **« OPEN »** et devra donc être fermée à nouveau pour être réinjectée dans un traitement d’intégration à la Géoplateforme.
:::

Cette précision faite, la récupération du rapport de validation s’effectue en deux appels :

- L’appel _<span lang="en">GET</span>_ <a href="https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/tree" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/tree - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/tree</a> permet de détailler l’arborescence modifiée de la livraison initiale. L’utilisateur reçoit en retour, une réponse du type :
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
    Ce qui permet de déduire que le **chemin d’accès au rapport** de validation consécutif à cette validation est « validation/__results.jsonl ». **Cette information est utile pour le second appel.**
- L’appel _<span lang="en">GET</span>_ <a href="https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/data?path=mon_path/__results.jsonl" target="_blank" rel="noopener noreferrer" title="https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/data?path=mon_path/__results.jsonl - ouvre une nouvelle fenêtre">https://data.geopf.fr/api/datastores/{datastore_id}/uploads/{upload_id}/data?path=mon_path/__results.jsonl</a> permet grâce aux informations précédentes, d’obtenir un corps de réponse _<span lang="en">multipart/form-data</span>_ donnant accès au rapport de validation. Cette requête prend en paramètre, en plus des classiques identifiants de datastore et de livraison, le chemin d’accès identifié ci-dessus, via un paramètre **« path »**.

<br>

#### Récupération de la donnée normalisée

La récupération du jeu de données normalisé suit exactement le même processus que celui de récupération du rapport de validation.

Il convient simplement d’adapter la partie du chemin qui sera récupéré.
