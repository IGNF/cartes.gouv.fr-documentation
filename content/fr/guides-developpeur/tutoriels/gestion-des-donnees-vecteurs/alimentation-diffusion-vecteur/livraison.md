---
title: Livraison des données archives
eleventyNavigation:
    key: Livraison des données archives
    order: 1
summary:
    visible: true
    depth: 2
---

{% from "components/component.njk" import component with context %}

## Livrer les données

La livraison est une entité qui permet de déposer un ensemble de fichiers de données au sein de l'entrepôt. Une livraison et son contenu seront toujours utilisés comme un tout.

La livraison n'a qu'un rôle temporaire, le temps que les données soient transformées et stockées dans leur format pérenne sur la plateforme. Les fichiers déposés ne sont pas ceux utilisés par les services de diffusion.

### Déclarer la livraison

??? Configurer la requête de création d'une livraison

**Requête type**
```http
{{ urls.api_entrepot }}/datastores/{datastore}/uploads
```
Dans la requête ci-dessus, {datastore} doit être remplacé par l'identifiant de votre datastore de travail.

| Méthode      | Requête                     |
|:------------|:----------------------------|
| POST       | {{ urls.api_entrepot }}/datastores/{datastore}/uploads                |


**Corps de requête type**
```json
{
    "description": "Données mondiales : pays et éco-régions",
    "name": "Données mondiales",
    "type": "VECTOR",
    "srs": "EPSG:4326"
}
```
Descriptif des paramètres :

* **_description_** : Permet de décrire le contenu de la livraison en quelques mots. **Cette information n'est lisible que par un autre utilisateur membre de cet entrepôt, pas par l'utilisateur final. Vous êtes donc invité à renseigner ici des informations parlantes pour  vous - producteur de donnée.** Cette information est modifiable après coup.

* **_name_** : Permet de nommer cette livraison. **Cette information n'est lisible que par un autre utilisateur membre de cet entrepôt, pas par l'utilisateur final. Vous êtes donc invité à renseigner ici des informations parlantes pour  vous - producteur de donnée.** Cette information est modifiable après coup.

* **_type_** : Définit le type de la donnée qui va être livrée. Pour ce tutoriel la valuer sera exclusivement **VECTOR**. Cette information n'est pas modifiable après coup. En cas d'erreur vous devrez créer une nouvelle livraison.

* **_srs_** : Définit la projection des données **en entrée**. Cette projection ne préjuge pas de la projection de diffusion des données. Cette information n'est pas modifiable après coup. En cas d'erreur vous devrez créer une nouvelle livraison.


**Corps de réponse type**
```json
{
    "name": "Données mondiales",
    "description": "Données mondiales : pays et éco-régions",
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
On retrouve en sortie, les paramètres et leur valeurs saisis en entrée ainsi que quelques informations supplémentaires :
 * **_status_** : Le statut de la livraison au sein de l'entrepôt. elle est OPEN (ouverte) après création, ce qui correspond à un état compatible avec l'alimentation à venir de cette livraison.

 * **_contact_** : L'email de contact qui correspond à l'email de contact associé à la communauté qui porte cette livraison.

 * **_size_** : La taille **en octet** de cette livraison (pour le moment à 0 puisque la livraison n'a pas été alimentée). 

 * **_last_event_** : Mentionne la dernière action effectuée sur cette livraison et **le compte utilisateur ayant mené cette action**.

 **La seule information réellement essentielle** pour poursuivre l'action de livraison est reprise en fin de réponse : 
 * **_id** : C'est l'identifiant attribué par l'entrepôt Géoplateforme à la livraison. Cet identifiant doit être **obligatoirement récupéré en sortie de la création de la livraison pour être utilisé dans les prochains appels.**
 

???
<br>

### Téléverser un fichier

Les formats de fichier vecteur gérés sont :

- Geopackage
- GeoJSON
- Shapefile
- CSV :
    - si la géométrie est dans un colonne, cette dernière doit avoir comme nom `json`, `geom`, `the_geom`, `wkb` ou `wkt`
    - si la donnée est ponctuelle et que les coordonnées sont dans deux colonnes, elles doivent avoir comme nom :
        - `lon`, `x`, `longitude`
        - `lat`, `y`, `latitude`
- SQL. Les instructions autorisées sont les suivantes, sans préciser de nom de schéma :
    - CREATE TABLE
    - CREATE VIEW
    - CREATE INDEX
    - CREATE SEQUENCE
    - ALTER TABLE
    - ALTER SEQUENCE

📄 `<monde.gpkg>`
??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/monde.gpkg"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/data?path=data/monde.gpkg
```

{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = `<monde.gpkg>`"]
    ]
}) }}
???
<br>

### Contrôler le contenu

Afin de vérifier que tous les fichiers ont bien été déposés et leur éventuelle arborescence :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/tree"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/tree
```

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
<br>

## Terminer la livraison

Terminer la livraison va consister à retirer les droits en écriture sur les données déposées afin qu'elles puissent être traitées sans conflit. Des vérifications vont s'exécuter, lire les données livrées et détecter d'éventuels problèmes qui auraient mis en échec les traitements à suivre.

### Fermeture

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/close
```

???
<br>

### Consultation des vérifications sur ma livraison

Plusieurs vérifications peuvent tourner sur une même livraison, celles ci ne faisant que lire les données déposées.

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks
```

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
<br>

Lorsque toutes les vérifications seront passées, la livraison passera en statut `CLOSED` et la réponse à l'appel précédent sera :

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/uploads/{upload}/checks
```

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
<br>
