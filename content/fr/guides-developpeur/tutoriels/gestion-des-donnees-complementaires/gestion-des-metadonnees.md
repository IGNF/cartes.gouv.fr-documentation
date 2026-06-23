---
title: Gestion des métadonnées
description: Téléversement de fichiers en tant que métadonnée et publication
layout: layouts/parent_nav_tertiaire.njk
eleventyNavigation:
    key: Gestion des métadonnées
    order: 2
pictogram: digital/data-visualization.svg
summary:
    visible: true
tertiaryTitle: Téléversement
subTitle: Téléversement d’une métadonnée
---

{% from "components/component.njk" import component with context %}

Les métadonnées permettent de décrire les données diffusées sur la plateforme : la source, la date et la méthode d’acquisition… Ces fichiers au format XML peuvent se référencer les uns les autres à l’aide d’un identifiant unique au sein de la plateforme : le file identifier. Deux "niveaux" de métadonnées sont gérées par l’utilisateur de l’entrepôt : la métadonnée de lot (`dataset`) et la métadonnée de produit (`serie`). Les métadonnées de services sont assumées par le gestionnaire de la plateforme.

### Téléversement d’une nouvelle métadonnée

Le fichier de métadonnée :
- doit être un fichier XML valide.
- doit avoir son file identifier défini au xpath : `gmd:MD_Metadata/gmd:fileIdentifier/gco:CharacterString` : si celui ci est déjà pris sur la plateforme, une erreur sera remontée.
- peut avoir son niveau défini au xpath : `gmd:MD_Metadata/gmd:hierarchyLevel/gmd:MD_ScopeCode` (valeur `dataset` ou `series`). S’il n’est pas défini, la métadonnée sera considérée comme étant de lot.

<br>

Exemple :

{{ component("download", {
    title: "metadonnee_lot.xml",
    href: "/data/tutoriels/complementaire/metadonnee_lot.xml",
    detail: "XML - 28.4 Ko"
}) }}

{{ component("download", {
    title: "metadonnee_produit.xml",
    href: "/data/tutoriels/complementaire/metadonnee_produit.xml",
    detail: "XML - 29.7 Ko"
}) }}

📄 `<metadonnee_lot.xml>`

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/metadata"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/metadata
```
{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;metadonnee_lot.xml&gt;"],
        ["type = ISOAP non obligatoire, ISOAP par défaut, valeurs possibles : ISOAP, INSPIRE"],
        ["open_data = false non obligatoire, false par défaut, valeurs possibles : true, false"]
    ]
}) }}
??? Corps de réponse JSON
```json
{
    "type": "ISOAP",
    "open_data": false,
    "level": "DATASET",
    "file_identifier": "IGNF_RGEALTIr_2-0_ASC_5M_LAMB93_IGN69_D074.xml",
    "tags": {},
    "endpoints": [],
    "_id": "{metadata}"
}
```
???
????
<br>

Notez que :
- Pour que la métadonnée soit intégrée dans le [catalogue INSPIRE]({{ urls.public.csw }}/INSPIRE), il suffit de l’indiquer dans l’attribut `type` (`"type": "INSPIRE"`). Elle sera alors moissonnée par le [Géocatalogue](https://www.geocatalogue.fr/fr).
- Pour que la métadonnée soit moissonnée par le site [data.gouv.fr](https://www.data.gouv.fr), il suffit de l’indiquer dans l’attribut `open_data` (`"open_data": true`).

<br>

À ce stade, elle n’est accessible que par l’API Entrepôt, aux membres de la communauté, via son identifiant. L’étape suivante est la [publication d’une métadonnée](./publication/){target="_blank" rel="noopener noreferrer" title="Publication d’une métadonnée - ouvre une nouvelle fenêtre"}.

### Modification d’une métadonnée

Il est possible de modifier le fichier XML correspondant à une métadonnée. Le file identifier ne doit pas changer, et si la métadonnée est déjà publiée, la modification est propagée au niveau des catalogues.

📄 `<metadonnee_lot.xml>`

???? PUT "{{ urls.api_entrepot }}/datastores/{datastore}/metadata/{metadata}"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/metadata/{metadata}
```
{{ component("table", {
    headers: ["Corps de requête Multipart"],
    data: [
        ["file = &lt;metadonnee_lot.xml&gt;"]
    ]
}) }}
??? Corps de réponse JSON
```json
{
    "type": "ISOAP",
    "level": "DATASET",
    "file_identifier": "IGNF_RGEALTIr_2-0_ASC_5M_LAMB93_IGN69_D074.xml",
    "endpoints": [],
    "_id": "{metadata}"
}
```
???
????
<br>

### Modification des attributs d’une métadonnée

Il est possible de modifier les attributs (type et open_data) d’une métadonnée déjà existante.

???? PATCH "{{ urls.api_entrepot }}/datastores/{datastore}/metadata/{metadata}"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/metadata/{metadata}
```
??? Corps de requête JSON
```json
{
    "type": "INSPIRE",
    "open_data": true
}
```
???
??? Corps de réponse JSON
```json
{
    "type": "INSPIRE",
    "open_data": true,
    "level": "DATASET",
    "file_identifier": "IGNF_RGEALTIr_2-0_ASC_5M_LAMB93_IGN69_D074.xml",
    "tags": {},
    "endpoints": [],
    "_id": "{metadata}"
}
```
???
????
<br>

La métadonnée doit être republiée par la suite afin de répercuter les modifications au niveau des services de catalogage.