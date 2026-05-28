---
title: Publication d’une métadonnée
eleventyNavigation:
    key: Publication d’une métadonnée
    order: 1
summary:
    visible: true
pictogram: digital/data-visualization.svg
tertiaryTitle: Publication
---

La publication des métadonnées va envoyer les fichiers au niveau des services de catalogage des métadonnées et permettre leur consultation publique et leur moissonnage.

### Consultation des points de diffusion disponibles

C’est le point de diffusion de type `CSW` qui nous intéresse.

???? GET "{{ urls.api_entrepot }}/datastores/{datastore}"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}
```
??? Corps de réponse JSON (champ endpoints)
```json
{{ "public/data/tutoriels/alimentation-diffusion-simple/globales/production/endpoints.json" | readFILE | safe }}
```
???
????
<br>

### Publier les métadonnées

Un appel à la route de publication permet de publier plusieurs métadonnées en une fois, en s’appuyant sur leur file identifier.

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/metadata/publication"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/metadata/publication
```
??? Corps de requête JSON
```json
{
    "file_identifiers": [
        "IGNF_RGEALTIr_2-0_ASC_5M_LAMB93_IGN69_D074.xml"
    ],
    "endpoint": "{{ ids.endpoints.open.csw }}"
}
```
???
????
<br>

Si on récupère les informations sur la métadonnée publiée, on voit apparaître le point de diffusion :

???? GET "{{ urls.api_entrepot }}/datastores/{datastore}/metadata/{metadata}"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/metadata/{metadata}
```
??? Corps de réponse JSON
```json
{
    "type": "ISOAP",
    "level": "DATASET",
    "file_identifier": "IGNF_RGEALTIr_2-0_ASC_5M_LAMB93_IGN69_D074.xml",
    "endpoints": [
        {
            "name": "gpf-geonetwork",
            "_id": "{{ ids.endpoints.open.csw }}"
        }
    ],
    "_id": "{metadata}"
}
```
???
????
<br>

Il est maintenant possible de consulter la métadonnée sur le service CSW avec la requête [GetRecordById]({{ urls.public.csw }}?REQUEST=GetRecordById&SERVICE=CSW&VERSION=2.0.2&ID=IGNF_RGEALTIr_2-0_ASC_5M_LAMB93_IGN69_D074.xml).

### Dépublier des métadonnées

De la même manière, il est possible de dépublier des métadonnées d’un catalogue

???? POST "{{ urls.api_entrepot }}/datastores/{datastore}/metadata/unpublication"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/metadata/unpublication
```
??? Corps de requête JSON
```json
{
    "file_identifiers": [
        "IGNF_RGEALTIr_2-0_ASC_5M_LAMB93_IGN69_D074.xml"
    ],
    "endpoint": "{{ ids.endpoints.open.csw }}"
}
```
???
????
<br>

À ce stade, la métadonnée a été dépubliée du catalogue, mais elle est toujours présente dans l’entrepôt.

### Supprimer une métadonnée

Un appel à la route de suppression permet de supprimer la métadonnée de l’entrepôt. Le pré-requis est qu’elle ne soit pas publiée.

??? DELETE "{{ urls.api_entrepot }}/datastores/{datastore}/metadata/{metadata}"
```plain
{{ urls.api_entrepot }}/datastores/{datastore}/metadata/{metadata}
```
???