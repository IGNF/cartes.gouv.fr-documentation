---
title: Livraison des données raster
eleventyNavigation:
    key: Livraison des données raster
    order: 1
summary:
    visible: true
    depth: 3
tertiaryTitle: Livraison
---

{% from "components/component.njk" import component with context %}

### Livraison des données

La livraison est une entité qui permet de déposer un ensemble de fichiers de données au sein de l’entrepôt. Une livraison et son contenu seront toujours utilisés comme un tout.

La livraison n’a qu’un rôle temporaire, le temps que les données soient transformées et stockées dans leur format pérenne sur la plateforme. Les fichiers déposés ne sont pas ceux utilisés par les services de diffusion.

#### Déclarer la livraison

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads
```
??? Corps de requête JSON
```json
{
    "description": "Données SCAN1000 sur la Corse",
    "name": "SCAN1000 - Corse",
    "type": "RASTER",
    "srs": "EPSG:2154"
}
```
???
??? Corps de réponse JSON
```json
{
    "name": "SCAN1000 - Corse",
    "description": "Données SCAN1000 sur la Corse",
    "type": "RASTER",
    "status": "OPEN",
    "srs": "EPSG:2154",
    "contact": "contact@ign.fr",
    "size": 0,
    "last_event": {
        "title": "Création",
        "date": "2023-05-22T08:07:13.812601878",
        "initiator": {
            "_id": "{user}"
        }
    },
    "_id": "{upload}",
    "type_infos": {}
}
```
???
??? Plus d’aide sur la déclaration de la livraison
- La livraison est une entité qui permet de déposer un ensemble de fichiers de données au sein de l’entrepôt. Une livraison et son contenu seront toujours utilisés comme un tout.
    :::warning
    La livraison n’a qu’un rôle temporaire, le temps que les données soient transformées et stockées dans leur format pérenne sur la plateforme. Les fichiers déposés ne sont pas ceux utilisés par les services de diffusion.

    La livraison doit impérativement être supprimée après la réalisation des étapes « traitement ».
    :::
- Dans la requête ci-dessus, `{datastore}` doit être remplacé par l’identifiant de votre datastore de travail.
- Description des paramètres en entrée :
    - `description` : Permet de décrire le contenu de la livraison en quelques mots. **Cette information n’est lisible que par un autre utilisateur membre de cet entrepôt, pas par l’utilisateur final. Vous êtes donc invité à renseigner ici des informations parlantes pour vous (producteur de donnée).** Cette information est modifiable après coup.
    - `name` : Permet de nommer cette livraison. **Cette information n’est lisible que par un autre utilisateur membre de cet entrepôt, pas par l’utilisateur final. Vous êtes donc invité à renseigner ici des informations parlantes pour vous - producteur de donnée.** Cette information est modifiable après coup.
    - `type` : Définit le type de la donnée qui va être livrée. Pour ce tutoriel la valeur sera exclusivement **`RASTER`**. Cette information n’est pas modifiable après coup. En cas d’erreur vous devrez créer une nouvelle livraison.
    - `srs` : Définit la projection des données **en entrée**. Cette projection ne préjuge pas de la projection de diffusion des données. Cette information n’est pas modifiable après coup. En cas d’erreur vous devrez créer une nouvelle livraison.
- On retrouve en sortie, les paramètres et leurs valeurs saisis en entrée ainsi que quelques informations supplémentaires :
    - `status` : Le statut de la livraison au sein de l’entrepôt. Elle est `OPEN` (ouverte) après création, ce qui correspond à un état compatible avec l’alimentation à venir de cette livraison.
    - `contact` : L’adresse électronique de contact qui correspond à l’adresse électronique de contact associé à la communauté qui porte cette livraison.
    - `size` : La taille **en octet** de cette livraison (pour le moment à `0` puisque la livraison n’a pas été alimentée).
    - `last_event` : Mentionne la dernière action effectuée sur cette livraison et **le compte utilisateur ayant mené cette action**.

:::warning
**La seule information réellement essentielle** pour poursuivre l’action de livraison est reprise en fin de réponse :

**`_id`** : C’est l’identifiant attribué par l’entrepôt Géoplateforme à la livraison. Cet identifiant doit être **obligatoirement récupéré en sortie de la création de la livraison pour être utilisé dans les prochains appels.**
:::

???
????
<br>

#### Téléverser un fichier

Les formats de fichier raster gérés sont :
- GeoTIFF
- TIFF + TFW
- JPEG2000

<br>

📄 `<scan1000_corse.tif>`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/scan1000_corse.tif"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/scan1000_corse.tif
```
{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;scan1000_corse.tif&gt;"]
    ]
}) }}
???
<br>

📄 `<scan1000_corse.tfw>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/scan1000_corse.tfw"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/scan1000_corse.tfw
```
{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;scan1000_corse.tfw&gt;"]
    ]
}) }}
???
<br>

??? Plus d’aide sur le remplissage d’une livraison
:::warning
Dans le paramètre de requête `path` de la requête de remplissage, la valeur à indiquer correspond à l’arborescence de stockage **sur la Géoplateforme**, elle **ne correspond pas** à l’arborescence de stockage du fichier sur votre environnement.

Le paramètre `file` est lui réservé à pointer vers le fichier là où il se trouve **sur votre environnement**.
:::

:::info
Une requête de livraison ne prend qu’un seul fichier en entrée par requête. Si vous livrez un ensemble de dalle TIFF, vous devrez donc répéter la requête de livraison en adaptant la valeur de `path` et de `file` **pour chaque fichier composant le jeu de dalles TIFF**. Si votre TIFF est un TIFF+TFW vous devrez donc prévoir un appel pour chaque TIFF et un appel pour chaque TFW.

L'usage d'un TIFF+TFW est uen fonctionnalité, pas une obligation. Vous pouvez directement alimenter la Géoplateforme avec un TIFF seul du moment que ce fichier embarque les informations de géoréférencement.
:::

:::info
Une livraison est traitée comme un tout. Cela signifie qu’une livraison débouche sur la création d’une donnée stockée pérenne sur votre entrepôt. Dans le cas d’une donnée raster, il faut comprendre cette notion comme une dalle raster ou un ensemble de dalles raster.

En conséquence si vous disposez d’un lot de données, multi-dalles qui a un bénéfice à être traité, mis en forme et diffusé comme un tout, il est recommandé de l’importer sur la Géoplateforme comme une seule livraison.
- Soit au moyen d’un format de fichier unique gérant l'ensemble de la zone (cette option n'est pas recommandée, sauf pour des raster de très faible résolution - peu définis)
- Soit en répétant la requête de remplissage de la livraison autant de fois qu’il y a de fichiers dalles unitaires composant votre lot de données.
:::
???
<br>

#### Contrôler le contenu

Afin de vérifier que tous les fichiers ont bien été déposés, et l’éventuelle arborescence :

???? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/tree"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/tree
```
??? Corps de réponse JSON
```json
[
    {
        "type": "DIRECTORY",
        "name": "data",
        "size": 6308587,
        "children": [
            {
                "type": "FILE",
                "name": "scan1000_corse.tfw",
                "size": 47
            },
            {
                "type": "FILE",
                "name": "scan1000_corse.tif",
                "size": 6308540
            }
        ]
    }
]
```
???
????
<br>

### Terminer la livraison

Terminer la livraison consiste à retirer les droits en écriture sur les données déposées afin que l’on puisse les traiter sans conflit. Des vérifications s’exécuteront, liront les données livrées et détecteront d’éventuels problèmes qui auraient pu mettre en échec les traitements suivants.

#### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close
```
???
<br>

#### Consultation des vérifications sur ma livraison

Plusieurs vérifications peuvent tourner sur une même livraison, celles-ci ne faisant que lire les données déposées.

???? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks
```
??? Corps de réponse JSON
```json
{
    "asked": [
        {
            "check": {
                "name": "Vérification raster",
                "_id": "{{ ids.checks.raster }}"
            },
            "_id": "{execution}"
        },
        {
            "check": {
                "name": "Vérification standard",
                "_id": "{{ ids.checks.standard }}"
            },
            "_id": "{execution}"
        }
    ],
    "in_progress": [],
    "passed": [],
    "failed": []
}
```
???
????
<br>

Lorsque toutes les vérifications seront passées, la livraison passera en statut `CLOSED` et la réponse à l’appel précédent sera :

???? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks
```
??? Corps de réponse JSON
```json
{
    "asked": [],
    "in_progress": [],
    "passed": [
        {
            "check": {
                "name": "Vérification raster",
                "_id": "{{ ids.checks.raster }}"
            },
            "_id": "{execution}"
        },
        {
            "check": {
                "name": "Vérification standard",
                "_id": "{{ ids.checks.standard }}"
            },
            "_id": "{execution}"
        }
    ],
    "failed": []
}
```
???
????
<br>

En cas d’échec d’une des vérifications, vous disposez d’une route de log pour investiguer sur les raisons de cet échec :

???? GET "{{ urls.api_entrepot }}/datastores/{datastore}/checks/executions/{execution}/logs"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/checks/executions/{execution}/logs
```
??? Corps de réponse JSON
```json
[
  "2026-07-02 06:05:20,353INFO||gpf-check-raster||7||Vérification de la structure de la livraison",
  "2026-07-02 06:05:20,354INFO||gpf-check-raster||7||Ouverture du fichier de configuration",
  "2026-07-02 06:05:20,356INFO||gpf-check-raster||7||Récupèration des fichiers de la livraison",
  "2026-07-02 06:05:20,357INFO||cli||237||Vérification GPFCheckRaster (2.14.0) pour la livraison f10e5938-d1bf-4922-84dd-3e6bd5bb2a4a",
  "2026-07-02 06:05:20,394ERROR||cli||237||Incohérence avec le SRS du fichier /mnt/warehouse-data-001/uploads/f10e5938-d1bf-4922-84dd-3e6bd5bb2a4a/mon_raster.tif",
  "2026-07-02 06:05:20,394INFO||core||295||Vérification de l'écart de résolution entre les images"
]
```
Ici par exemple, l’erreur vient du fait que le fichier livré a été lu comme étant dans une projection différente de celle déclarée dans la création de la livraison. Il convient donc :
- soit de re-livrer le fichier dans uen projection cohérente avec celle déclarée dans la livraison
- soit de re-créer une livraison dont la projection attendue sera celle des fichiers qui sont présents sur votre environnement.
???
????