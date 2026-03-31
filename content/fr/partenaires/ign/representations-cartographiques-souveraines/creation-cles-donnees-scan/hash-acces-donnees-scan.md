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

Depuis **« Mes clés d’accès »**, cliquez sur l’icône bleue **« Créer une clé d’accès »**.

![Créer une clé d’accès](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/01_creer-cle-acces.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans cette première étape obligatoire, saisissez un nom explicite dans le champ **« Nom de la clé »**.
Cochez ensuite la case correspondant à la ressource que vous souhaitez rendre accessible avec cette clé. Pour le téléchargement, veillez à sélectionner la ressource avec **« DOWNLOAD »** en surbrillance.

![Services accessibles](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/02_services-accessibles.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans la seconde étape, sélectionnez **<span lang="en">_HASH_</span>**. Ce mécanisme génère une **chaîne de caractères** à intégrer dans l’en-tête de l’appel, pour un usage en **application <span lang="en">_web_</span>** ou dans un **SIG**.
Cliquez enfin sur **« Ajouter »**.

![Options de sécurisation](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/03_options-securisation.png){.fr-responsive-img .frx-border-img .frx-img-contained}

:::callout
Consultez la page dédiée à la [clé <span lang="en">_HASH_</span>](/fr/guides-utilisateur/creation-des-cles-et-integration-sig/creer-une-cle-d-acces/#hash){target="_blank" rel="noopener noreferrer" title="HASH - ouvre une nouvelle fenêtre"} pour en comprendre le fonctionnement. Pour en savoir plus sur les autres types de sécurisation proposés sur cartes.gouv.fr, vous pouvez également consulter ce [tutoriel](/fr/guides-utilisateur/creation-des-cles-et-integration-sig){target="_blank" rel="noopener noreferrer" title="Création et intégration des clés cartes.gouv.fr dans un SIG - ouvre une nouvelle fenêtre"}.
:::

#### Services accessibles avec la clé HASH

:::warning
Une fois votre clé <span lang="en">_HASH_</span> générée, vous accédez à quatre types d’options : trois services de consultation de flux OGC (<span lang="en">_WMS-Raster_</span>, <span lang="en">_WMTS_</span>, <span lang="en">_TMS_</span>) et un service de téléchargement. La même clé HASH est utilisée pour l’ensemble de ces services.
:::

##### Données en consultation (flux OGC)

- **<span lang="en">_WMS-Raster_</span>**

    ```plain
    https://data.geopf.fr/private/wms-r/?service=WMS&version=1.3.0&request=GetCapabilities&apikey=[VOTRE CLÉ]
    ```

- **<span lang="en">_WMTS_</span>**  

    ```plain
    https://data.geopf.fr/private/wmts/?service=WMTS&version=1.0.0&request=GetCapabilities&apikey=[VOTRE CLÉ]
    ```

- **<span lang="en">_TMS_</span>**

    ```plain
    https://data.geopf.fr/private/tms/1.0.0/?apikey=[VOTRE CLÉ]
    ```

:::info
Dans le cadre de l’accès aux **données en consultation** (flux <span lang="en">_OGC WMS-Raster_</span>, <span lang="en">_WMTS_</span> et <span lang="en">_TMS_</span>) depuis un SIG (QGIS), reportez-vous à la page dédiée à l’[intégration d’une clé <span lang="en">_HASH_</span>](/fr/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-une-cle-dans-un-sig/#connexion-avec-une-cle-hash){target="_blank" rel="noopener noreferrer" title="Connexion avec une clé HASH - ouvre une nouvelle fenêtre"}.
:::

##### Données en téléchargement

Une fois la clé HASH créée, l’<span lang="en">_URL_</span> fournie correspond à un **<span lang="en">_GetCapabilities_</span>**, qui sert uniquement à lister les ressources disponibles. Elle ne permet pas de télécharger des données. Pour en savoir plus sur les méthodes de l’<span lang="en">_API_</span> de téléchargement, consultez la [documentation dédiée](/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/telechargement){target="_blank" rel="noopener noreferrer" title="API de téléchargement - ouvre une nouvelle fenêtre"}.

Veuillez consulter ce [fichier <span lang="en">_CSV_</span>](https://data.geopf.fr/annexes/ressources/documentation/SCANs.csv){target="_blank" rel="noopener noreferrer" title="Méthode Download (CSV) - ouvre une nouvelle fenêtre"} qui liste les ressources SCAN disponibles. Chaque ressource peut ensuite être téléchargée en suivant la méthode décrite ci-dessous.


![apikey](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/04_apikey.png){.fr-responsive-img .frx-border-img .frx-img-contained}


:::warning
Pour télécharger une ressource SCAN dans un navigateur <span lang="en">_web_</span>, utilisez l’**<span lang="en">_URL_</span>** ci-dessus en remplaçant **« [VOTRE CLÉ] »** par le **<span lang="en">_HASH_</span>** généré automatiquement dans cartes.gouv.fr. Cette valeur doit être copiée puis collée à la suite de **« apikey= »** dans la barre d’adresse de votre navigateur web.
:::

![navigateur web](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/05_navigateur-apikey.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Exemple de requête :

```plain
https://data.geopf.fr/private/telechargement/download/SCAN100/SCAN100_2-0__TIFF_LAMB93_D001_2025-05-01/SCAN100_2-0__TIFF_LAMB93_D001_2025-05-01.7z?apikey=[VOTRE CLÉ]
```

Une fois le tutoriel terminé, votre connexion aux données SCAN sera établie. Pour visualiser la donnée SCAN dans un SIG, il vous suffira de zoomer sur la couche correspondante.

![SCAN 25 Touristique sur QGIS](/img/partenaires/ign/representations-cartographiques-souveraines/creation-cles-donnees-scan/hash-acces-donnees-scan/06_scan25-touristique.png){.fr-responsive-img .frx-border-img .frx-img-contained}