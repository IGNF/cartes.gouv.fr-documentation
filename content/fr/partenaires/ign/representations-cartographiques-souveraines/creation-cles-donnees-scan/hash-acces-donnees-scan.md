---
title: Accès aux données SCAN par la création d’une clé HASH
description: Accès aux données SCAN par la création d’une clé HASH
eleventyNavigation:
    key: Accès aux données SCAN par la création d’une clé HASH
    order: 4
summary:
    visible: true
    depth: 6
pictogram: system/success.svg
---

#### Création d’une clé HASH

Depuis **Mes clés d’accès**, cliquez sur l’icône bleue **« Créer une clé d’accès »**.

![Créer une clé d’accès](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/01_creer-cle-acces.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans cette première étape obligatoire, saisissez un nom explicite dans le champ **« Nom de la clé »**.
Cochez ensuite la case correspondant à la ressource que vous souhaitez rendre accessible avec cette clé.

![Services accessibles](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/02_services-accessibles.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la seconde étape, sélectionnez **HASH**.
Ce mécanisme génère une **chaîne de caractères** à intégrer dans l’en-tête de l’appel, pour un usage en **application web** ou dans un **SIG**.
Cliquez enfin sur **« Ajouter »**.

![Options de sécurisation](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/03_options-securisation.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::info
Consultez la page dédiée à la clé <a href="https://ignf.github.io/cartes.gouv.fr-documentation/fr/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/#hash" target="_blank" rel="noopener noreferrer" title="Clé HASH">HASH</a> pour en comprendre le fonctionnement. Pour en savoir plus sur les autres types de sécurisation proposés sur cartes.gouv.fr, vous pouvez également consulter ce <a href="https://ignf.github.io/cartes.gouv.fr-documentation/fr/guides-utilisateur/creation-des-cles-et-integration-sig/" target="_blank" rel="noopener noreferrer" title="Tutoriel création des clés">tutoriel</a>.
:::

Une fois le tutoriel terminé, votre connexion aux données SCAN sera établie. Pour visualiser la donnée SCAN, il vous suffira de zoomer sur la couche correspondante.

![SCAN 25 Touristique sur QGIS](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/04_scan25-touristique.png){.fr-responsive-img .frx-border-img .frx-img-contained}


#### Services accessibles avec la clé HASH

:::warning
Une fois votre clé HASH générée, vous accédez à quatre types d’options : trois services de consultation de flux OGC (WMS-R, WMTS, TMS) et un service de téléchargement. La même clé HASH est utilisée pour l’ensemble de ces services.
:::

![apikey](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/04_apikey.png){.fr-responsive-img .frx-border-img .frx-img-contained}


##### Données en consultation (flux OGC)

- **WMS-R**
```plain
https://data.geopf.fr/private/wms-r/?service=WMS&version=1.3.0&request=GetCapabilities&apikey=[VOTRE CLÉ]
```

- **WMTS**  
```plain
https://data.geopf.fr/private/wmts/?service=WMTS&version=1.0.0&request=GetCapabilities&apikey=[VOTRE CLÉ]
```

- **TMS**
```plain
https://data.geopf.fr/private/tms/1.0.0/?apikey=[VOTRE CLÉ]
```

##### Données en téléchargement

Une fois la clé HASH créée, l’URL fournie correspond à un **_<span lang="en">GetCapabilities</span>_**, qui sert uniquement à lister les ressources disponibles. Elle ne permet pas de télécharger des données. Pour en savoir plus sur les méthodes de l’API de téléchargement, <a href="https://cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/telechargement/" target="_blank" rel="noopener noreferrer" title="API de téléchargement">consultez la documentation dédiée</a>.

Pour télécharger les données, veuillez consulter ce <a href="https://data.geopf.fr/annexes/ressources/documentation/SCANs.csv" target="_blank" rel="noopener noreferrer" title="Méthode Download (TXT)">fichier CSV</a>.

Exemple de requête :
```plain
https://data.geopf.fr/private/telechargement/download/SCAN100/SCAN100_2-0__TIFF_LAMB93_D094_2021-11-01/SCAN100_2-0__TIFF_LAMB93_D094_2021-11-01.7z?apikey=[VOTRE CLÉ]
```

![Clé HASH](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/05_cle-hash.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::callout
Pour vous connecter correctement à un SIG (QGIS), consultez la page dédiée à l’intégration d’une clé <a href="https://ignf.github.io/cartes.gouv.fr-documentation/fr/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-une-cle-dans-un-sig/#connexion-avec-une-cle-hash" target="_blank" rel="noopener noreferrer" title="Clé HASH">HASH</a>.
:::
