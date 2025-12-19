---
title: Accès aux données par la création d’une clé HASH
description: Accès aux données par la création d’une clé HASH
tags:
    - HASH
    - Espace de travail
    - SCAN
    - Flux OGC
    - WMS-R
    - WMTS
    - Téléchargement
eleventyNavigation:
    key: Accès aux données par la création d’une clé HASH
    parent: Création de clé adaptée aux données non libres (SCAN 25®, SCAN 100® et SCAN OACI)
    order: 4
summary:
    visible: true
    depth: 2
nav: partenaires/ign
---


Depuis **Mes clés d’accès**, cliquez sur l’icône bleue **« Créer une clé d’accès »**.

![Créer une clé d'accès](/img/partenaires/acces-aux-donnes-non-libres/01_creer-cle-acces.png){.fr-responsive-img .frx-img-contained}


Dans cette première étape obligatoire, saisissez un nom explicite dans le champ **« Nom de la clé »**.  
Cochez ensuite la case correspondant à la ressource que vous souhaitez rendre accessible avec cette clé.

![Services accessibles](/img/partenaires/acces-aux-donnes-non-libres/02_services-accessibles.png){.fr-responsive-img .frx-img-contained}

Dans la seconde étape, sélectionnez **HASH**.  
Ce mécanisme génère une **chaîne de caractères** à intégrer dans l’en-tête (*Header*) de l’appel, pour un usage en **application web** ou dans un **SIG**.
Cliquez enfin sur **« Ajouter »**.

![Options de sécurisation](/img/partenaires/acces-aux-donnes-non-libres/03_options-securisation.png){.fr-responsive-img .frx-img-contained}


:::info
Consultez la page dédiée à la clé <a href="https://ignf.github.io/cartes.gouv.fr-documentation/fr/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/#hash" target="_blank" rel="noopener noreferrer" title="Clé HASH">HASH</a> pour en comprendre le fonctionnement. Pour en savoir plus sur les autres types de sécurisation proposés sur cartes.gouv.fr, vous pouvez également consulter ce <a href="https://ignf.github.io/cartes.gouv.fr-documentation/fr/guides-utilisateur/creation-des-cles-et-integration-sig/" target="_blank" rel="noopener noreferrer" title="Tutoriel création des clés">tutoriel</a>.
:::


## Services accessibles avec la clé HASH

:::warning
Une fois votre clé HASH générée, vous accédez à quatre types d’options : trois services de consultation de flux OGC (WMS-R, WMTS, TMS) et un service de téléchargement. La même clé HASH est utilisée pour l’ensemble de ces services. Pour utiliser les URLs ci-dessous, remplacez [VOTRE CLÉ] par le HASH généré automatiquement dans cartes.gouv.fr. Cette valeur doit simplement être copiée puis collée à la suite de **« apikey= »**.
:::

![apikey](/img/partenaires/acces-aux-donnes-non-libres/04_apikey.png){.fr-responsive-img .frx-img-contained}


### Données en consultation (flux OGC)


- **WMS-R**
```njk
{% raw %}
    https://data.geopf.fr/private/wms-r/?service=WMS&version=1.3.0&request=GetCapabilities&apikey=[VOTRE CLÉ]
{% endraw %}
```


- **WMTS**  
```njk
{% raw %}
    https://data.geopf.fr/private/wmts/?service=WMTS&version=1.0.0&request=GetCapabilities&apikey=[VOTRE CLÉ]
{% endraw %}
```


- **TMS**
```njk
{% raw %}
    https://data.geopf.fr/private/tms/1.0.0/?apikey=[VOTRE CLÉ]
{% endraw %}
```


### Données en téléchargement


Une fois la clé HASH créée, l’URL fournie correspond à un **_<span lang="en">GetCapabilities</span>_ **, qui sert uniquement à lister les ressources disponibles. Elle ne permet pas de télécharger des données. Pour en savoir plus sur les méthodes de l’API de téléchargement, <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/acceder-aux-geodonnees/telechargement/" target="_blank" rel="noopener noreferrer" title="API de téléchargement">cliquez ici</a>.


```njk
{% raw %}
    https://data.geopf.fr/private/telechargement/resource/SCANOACI?service=null&version=null&request=GetCapabilities&apikey=[VOTRE CLÉ]
{% endraw %}
```


Pour télécharger les données, veuillez consulter le <a href="https://data.geopf.fr/annexes/ressources/documentation/SCANs_Telechargement.txt" target="_blank" rel="noopener noreferrer" title="Méthode Download (TXT)"> fichier TXT</a> suivant.


Exemple de requête :
```njk
{% raw %}
    https://data.geopf.fr/private/telechargement/download/SCAN100/SCAN100_2-0__TIFF_LAMB93_D094_2021-11-01/SCAN100_2-0__TIFF_LAMB93_D094_2021-11-01.7z?apikey=[VOTRE CLÉ]
{% endraw %}
```


![Clé HASH](/img/partenaires/acces-aux-donnes-non-libres/05_cle-hash.png){.fr-responsive-img .frx-img-contained}


:::callout
Pour vous connecter correctement à un SIG (QGIS), consultez la page dédiée à l’intégration d’une clé <a href="https://ignf.github.io/cartes.gouv.fr-documentation/fr/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-une-cle-dans-un-sig/#connexion-avec-une-cle-hash" target="_blank" rel="noopener noreferrer" title="Clé HASH">HASH</a>.
:::