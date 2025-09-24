---
title: Configuration de la diffusion de données vecteur en WMS
mermaid: true
eleventyNavigation:
    key: Configuration de la diffusion de données vecteur en WMS
    parent: Alimentation et diffusion simple
    order: 5
    nav: guides-developpeur
---

## Configuration de la diffusion WMS

Contrairement au WFS, une configuration WMS va définir une couche seule couche finale. Il est possible d'utiliser plusieurs tables, mais seul l'agrégat sera consultable, avec les styles définis.

La création de la configuration WMS va permettre de vérifier de nombreuses informations :

* nom de couche déjà pris (il doit y avoir unicité sur toutes les configurations WMS Vecteur de la plateforme)
* table absente de la donnée stockée
* style ou FTL exploitant des attributs absent de la table utilisée

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```

```json
{
    "type": "WMS-VECTOR",
    "name": "Écorégions et frontières des pays",
    "layer_name": "ecoregions_tutoriel",
    "type_infos": {
        "title": "Mes écorégions",
        "abstract": "Grandes régions naturelles mondiales",
        "keywords": [
            "Tutoriel", "Données mondiales"
        ],
        "bbox": {
            "west": -175,
            "south": -75,
            "east": 175,
            "north": 85
        },
        "used_data": [
            {
                "relations": [
                    {
                        "name": "pays",
                        "style": "{sld pays}",
                        "ftl": "{ftl pays}"
                    },
                    {
                        "name": "ecoregions",
                        "style": "{sld ecoregions}",
                        "ftl": "{ftl ecoregions}"
                    }
                ],
                "stored_data": "{stored data}"
            }
        ]
    }
}
```
???
:::warning "Attention"

    Une configuration WMS-VECTOR donnera une unique couche. Même si elle utilise plusieurs tables, ces dernières ne seront pas consultables individuellement en WMS. Si c'est votre besoin, faites une configuration (et donc une couche) par table.
:::
## Envoi sur les services de diffusion

Comme pour le WFS, seule la création d'une offre sur un point d'accès (publication) permet d'envoyer les informations de configuration au serveurs de diffusion.

### Consultation des points de diffusion disponibles

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}
```

```json
/data/tutoriels/alimentation-diffusion-simple/globales/{{ environnement }}/endpoints.json
```
??? 
### Publication

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wms}/offerings"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wms}/offerings
```

```json
{
    "endpoint": "{{ ids.endpoints.open.wmsv }}",
    "open": true
}
```
???
On peut vérifier la présence de notre couche `ecoregions_tutoriel` dans le [getCapabilities du service]({{ urls.public.wmsv }}?REQUEST=GetCapabilities&SERVICE=WMS&VERSION=1.3.0)