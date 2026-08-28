---
title: Livraison des données archives
eleventyNavigation:
    key: Livraison des données archives
    order: 1
summary:
    visible: true
    depth: 3
tertiaryTitle: Livraison
---

{% from "components/component.njk" import component with context %}

### Livrer les données

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
    "description": "Données mondiales : pays et éco-régions",
    "name": "Données mondiales",
    "type": "VECTOR",
    "srs": "EPSG:4326"
}
```
???
??? Corps de réponse JSON
```json
{
    "name": "Données mondiales",
    "description": "Données mondiales : pays et éco-régions",
    "type": "VECTOR",
    "status": "OPEN",
    "srs": "EPSG:4326",
    "contact": "contact@ign.fr",
    "size": 0,
    "last_event": {
        "title": "Création",
        "date": "2023-05-10T14:42:29.004734134",
        "initiator": {
            "last_name": "Lopper",
            "first_name": "Dave",
            "_id": "{user}"
        }
    },
    "_id": "{upload}"
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
    - `type` : Définit le type de la donnée qui va être livrée. Pour ce tutoriel la valeur sera exclusivement **`VECTOR`**. Cette information n’est pas modifiable après coup. En cas d’erreur vous devrez créer une nouvelle livraison.
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

Les formats de fichier vecteur gérés sont :
- GeoPackage
- GeoJSON
- Shapefile
- CSV :
    - si la géométrie est dans une colonne, cette dernière doit avoir comme nom `json`, `geom`, `the_geom`, `wkb` ou `wkt`
    - si la donnée est ponctuelle et que les coordonnées sont dans deux colonnes, elles doivent avoir comme nom :
        - `lon`, `x`, `longitude`
        - `lat`, `y`, `latitude`
- SQL : Les instructions autorisées sont les suivantes, sans préciser de nom de schéma :
    - `CREATE TABLE`
    - `CREATE VIEW`
    - `CREATE INDEX`
    - `CREATE SEQUENCE`
    - `ALTER TABLE`
    - `ALTER SEQUENCE`
- FlatGeoBuf (à venir)
- Géoparquet (à venir)

<br>

📄 `<monde.gpkg>`

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/monde.gpkg"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/monde.gpkg
```
{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;monde.gpkg&gt;"]
    ]
}) }}
??? Plus d’aide sur le remplissage d’une livraison

:::warning
Dans le paramètre de requête `path` de la requête de remplissage, la valeur à indiquer correspond à l’arborescence de stockage **sur la Géoplateforme**, elle **ne correspond pas** à l’arborescence de stockage du fichier sur votre environnement.

Le paramètre `file` est lui réservé à pointer vers le fichier là où il se trouve **sur votre environnement**.
:::

:::info
Une requête de livraison ne prend qu’un seul fichier en entrée par requête. Si vous livrez un fichier SHP, vous devrez donc répéter la requête de livraison en adaptant la valeur de `path` et de `file` **pour chaque fichier composant le SHP**. Donc a minima un appel pour le SHP, un second pour le SHX et un troisième pour le PRJ.
:::

:::info
Une livraison est traitée comme un tout. Cela signifie qu’une livraison débouche sur la création d’une donnée stockée pérenne sur votre entrepôt. Dans le cas d’une donnée vecteur, il faut comprendre cette notion comme un schéma de base de données PostgreSQL.

En conséquence si vous disposez d’un lot de données, multi-tables qui a un bénéfice à être traité, mis en forme et diffusé comme un tout, il est recommandé de l’importer sur la Géoplateforme comme une seule livraison.
- Soit au moyen d’un format de fichier gérant le multi-tables (comme le GeoPackage)
- Soit en répétant la requête de remplissage de la livraison autant de fois qu’il y a de fichiers tables unitaires composant votre lot de données.
:::
???
????
<br>

#### Contrôler le contenu

Afin de vérifier que tous les fichiers ont bien été déposés et leur éventuelle arborescence :

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
        "size": 11153408,
        "children": [
            {
                "type": "FILE",
                "name": "monde.gpkg",
                "size": 11153408
            }
        ]
    }
]
```
???
????
<br>

### Terminer la livraison

Terminer la livraison va consister à retirer les droits en écriture sur les données déposées afin qu’elles puissent être traitées sans conflit. Des vérifications vont s’exécuter, lire les données livrées et détecter d’éventuels problèmes qui auraient mis en échec les traitements à suivre.

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
                "name": "Vérification vecteur",
                "_id": "{{ ids.checks.vector }}"
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
                "name": "Vérification vecteur",
                "_id": "{{ ids.checks.vector }}"
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
    "2026-07-24 00:12:00,863INFO||gpf-vector-checker||7||Récupération des fichiers de la livraison",
    "2026-07-24 00:12:00,865INFO||cli||255||Vérification VectorChecker (2.14.0) pour la livraison     7b2498a8-5f6c-4169-9ffa-a5bb0ec3ac97",
    "2026-07-24 00:12:00,876INFO||core||134||1 fichiers à analyser dans la livraison",
    "2026-07-24 00:12:00,876INFO||cli||255||Multithreading désactivé (exécution dans le thread principal).",
    "2026-07-24 00:12:00,876INFO||core||179||Analyse du fichier : ma_data.gpkg",
    "2026-07-24 00:12:00,876INFO||checks_ogr||342||Ouverture du fichier ma_data.gpkg",
    "2026-07-24 00:12:00,950INFO||checks_ogr||342||Nombre de layers : 1",
    "2026-07-24 00:12:00,950INFO||checks_ogr||342||----------------------------------------",
    "2026-07-24 00:12:00,951INFO||checks_ogr||342||Nom du layer : luminaire",
    "2026-07-24 00:12:00,951INFO||checks_ogr||342||Analyse du SRS",
    "2026-07-24 00:12:00,981ERROR||checks_ogr||342||Le SRS du layer luminaire est différent de celui déclaré",
    "2026-07-24 00:12:00,981ERROR||checks_ogr||342||SRS de luminaire : EPSG:4326",
    "2026-07-24 00:12:00,981ERROR||checks_ogr||342||SRS déclaré : EPSG:2154",
    "2026-07-24 00:12:00,990WARNING||core||179||Fichier vecteur invalide. Les noms de tables et de colonnes n'ont pas pu être vérifiés.",
    "2026-07-24 00:12:00,990INFO||cli||255||Résultat de la vérification du fichier : ma_data.gpkg : FAILURE"
]
```
Ici par exemple, l’erreur vient du fait que le fichier livré a été lu comme étant en projection EPSG:4326 tandis que la requête de déclaration de livraison indiquait un fichier en EPSG:2154. Il convient donc :
- soit de re-livrer le fichier en EPSG:2154
- soit de re-créer une livraison dont la projection attendue sera EPSG:4326
???
????