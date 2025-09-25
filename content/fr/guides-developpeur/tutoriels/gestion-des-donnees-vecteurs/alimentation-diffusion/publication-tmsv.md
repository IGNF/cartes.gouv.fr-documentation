---
title: Configuration de la diffusion de données vecteur en TMS
mermaid: true
eleventyNavigation:
    key: Configuration de la diffusion de données vecteur en TMS
    parent: Alimentation et diffusion simple
    order: 6
    nav: guides-developpeur
---


## Configuration de la diffusion

La configuration centralise toutes les informations nécessaires à la diffusion de données sur les services. À ce moment, on va contrôler les paramètres et détecter les erreurs ou conflits potentiels :

* nom de couche déjà pris (il doit y avoir unicité sur toutes les configurations TMS vecteur de la plateforme)
* table absente de la donnée stockée

Dans le cas du TMS vecteur, une configuration va donner plusieurs couches finales, le layername défini va servir de préfixe au nom des tables. On aura dans notre exemple les couches WFS :

* `pays_ecoregions.regions_ecologiques`
* `pays_ecoregions.pays`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```

```json
{
    "type": "VECTOR-TMS",
    "name": "Pays et écorégions",
    "layer_name": "pays_ecoregions",
    "type_infos": {
        "used_data": [
            {
                "relations": [
                    {
                        "native_name": "ecoregions",
                        "public_name": "regions_ecologiques",
                        "abstract": "Grandes régions naturelles mondiales"
                    },
                    {
                        "native_name": "pays",
                        "abstract": "Pays du monde"
                    }
                ],
                "stored_data": "{stored data}"
            }
        ]
    }
}
```
???
Si on ne précise pas de public_name, c'est le nom natif de stockage qui est utilisé.

## Envoi sur les services de diffusion

À ce stade, aucune information n'a été envoyée aux serveurs pg_tileserv assurant la diffusion. Cette synchronisation de la configuration sur les serveurs de diffusion, représentés par le point d'accès, se fait via la création d'une offre: la publication. Elle matérialise la présence d'une configuration sur un point d'accès.

### Consultation des points de diffusion disponibles

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}
```

```json
/data/tutoriels/alimentation-maj/globales/{{ environnement }}/endpoints.json
```
???



### Publication

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration tms vecteur}/offerings"

``` title="Contenu" 
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration tms vecteur}/offerings
```

```json
{
    "endpoint": "{{ ids.endpoints.open.tmsv }}",
    "open": true
}
```
???
On peut vérifier la présence de nos couches `pays_ecoregions.regions_ecologiques` et `pays_ecoregions.pays` dans le [getCapabilities du service TMS Vecteur]({{ urls.public.tmsv }}/1.0.0/index.json). On peut également avoir des [détails sur la couche pays_ecoregions.regions_ecologiques]({{ urls.public.tmsv }}/1.0.0/pays_ecoregions.regions_ecologiques.json) et des [détails sur la couche pays_ecoregions.pays]({{ urls.public.tmsv }}/1.0.0/pays_ecoregions.pays.json).

L'avantage de ce service est de pouvoir faire du filtrage côté serveur, en précisant un paramètre `filter`, ainsi que limiter les champs retournés avec le paramètre `properties`. Voici un exemple en définissant une source `Tuiles vectorielles` dans QGIs avec l'URL suivante : `{{ urls.public.tmsv }}/1.0.0/pays_ecoregions.regions_ecologiques/{z}/{x}/{y}.pbf?filter=realm='Palearctic'&properties=id,eco_name`

![Visualisation des données du tutoriel](/img/guides-developpeur/vecteur/alimentation-diffusion/qgis_tmsv_visualisation.png){.fr-responsive-img .frx-img-contained}