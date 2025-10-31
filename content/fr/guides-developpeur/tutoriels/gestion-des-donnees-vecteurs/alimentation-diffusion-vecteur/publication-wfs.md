---
title: Configuration de la diffusion de données vecteur en WFS
eleventyNavigation:
    key: Configuration de la diffusion de données vecteur en WFS
    parent: Alimentation et diffusion simple vecteur
    order: 3
    nav: guides-developpeur
---

## Configuration de la diffusion

La configuration centralise toutes les informations nécessaires à la diffusion de données sur les services. À ce moment, on va contrôler les paramètres et détecter les erreurs ou conflits potentiels :

- nom de couche déjà pris (il doit y avoir unicité sur toutes les configurations WFS de la plateforme)
- table absente de la donnée stockée

Dans le cas du WFS, une configuration va donner plusieurs couches finales, le layername défini va servir de préfixe au nom des tables. On aura dans notre exemple les couches WFS :

- `pays_ecoregions:regions_ecologiques`
- `pays_ecoregions:pays`

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/configurations
```

```json
{
    "type": "WFS",
    "name": "Pays et écorégions",
    "layer_name": "pays_ecoregions",
    "type_infos": {
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
                        "native_name": "ecoregions",
                        "public_name": "regions_ecologiques",
                        "title": "Régions écologiques",
                        "keywords": ["Tutoriel", "Données mondiales"],
                        "abstract": "Grandes régions naturelles mondiales"
                    },
                    {
                        "native_name": "pays",
                        "title": "Pays du monde",
                        "keywords": ["Tutoriel", "Données mondiales"],
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
<br>

Si on ne précise pas de public_name, c'est le nom natif de stockage qui est utilisé.

## Envoi sur les services de diffusion

À ce stade, aucune information n'a été envoyée aux serveurs Geoserver assurant la diffusion. Cette synchronisation de la configuration sur les serveurs de diffusion, représentés par le point d'accès, se fait via la création d'une offre: la publication. Elle matérialise la présence d'une configuration sur un point d'accès.

### Consultation des points de diffusion disponibles

??? GET "{{ urls.api_entrepot }}/datastores/{datastore}"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}
```

```json
{{ "public/data/tutoriels/alimentation-diffusion-simple/globales/production/endpoints.json" | readJSON | safe }}
```

???
<br>

### Publication

??? POST "{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wfs}/offerings"

```title="Contenu"
{{ urls.api_entrepot }}/datastores/{datastore}/configurations/{configuration wfs}/offerings
```

```json
{
    "endpoint": "{{ ids.endpoints.open.wfs }}",
    "open": true
}
```

???
<br>

On peut vérifier la présence de nos couches `pays_ecoregions:regions_ecologiques` et `pays_ecoregions:pays` dans le [getCapabilities du service]({{ urls.public.wfs }}?REQUEST=GetCapabilities&SERVICE=WFS&VERSION=2.0.0)

On peut également récupérer nos données dans QGis. Pour les régions écologiques, le service se limite à 1000 objets, ils ne seront donc pas tous téléchargés en une fois.

![Visualisation des données du tutoriel](/img/guides-developpeur/vecteur/alimentation-diffusion/donnees_wfs.png){.fr-responsive-img .frx-img-contained}
