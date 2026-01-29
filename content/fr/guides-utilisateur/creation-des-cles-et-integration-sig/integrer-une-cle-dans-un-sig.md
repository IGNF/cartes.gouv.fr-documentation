---
title: Intégrer une clé dans son SIG
description: Exemples avec QGIS ou FME
tags:
    - SIG
    - QGIS
    - FME
    - Clé
    - BASIC
    - HASH
    - OAuth2
eleventyNavigation:
    key: Intégrer une clé dans son SIG
    parent: Création et intégration des clés cartes.gouv.fr dans un SIG
    order: 4
    nav: guides-utilisateur
summary:
    visible: true
    depth: 2
pictogram: "system/success.svg"
---

## Définitions utiles

- **« Système d’Information Géographique (SIG) » :** ensemble de matériels, logiciels et données permettant de saisir, stocker, analyser et visualiser des informations localisées, afin d’aider à la décision sur un territoire.
- **« QGIS » :** logiciel SIG de bureau libre (<a href="https://qgis.org/" target="_blank" rel="noopener noreferrer" title="Site officiel du SIG QGIS - ouvre une nouvelle fenêtre">site officiel</a>), utilisé pour intégrer et exploiter des données géographiques, avec des usages documentés par l’IGN (Géoservices, Géoplateforme).
- **« FME » :** logiciel de  _<span lang="en">Safe Software</span>_ dédié à l’intégration, la transformation et l’automatisation de traitements de données géographiques, avec des extensions IGN (<a href="https://vstore.veremes.net/vstore/dashboard/documents/51" target="_blank" rel="noopener noreferrer" title="IGNFConnector sur Veremes Store - ouvre une nouvelle fenêtre">IGNFConnector</a>).

---

## QGIS

Dans **QGIS** :

1. Ouvrez le menu **« Couche »**, puis cliquez sur **« Gestionnaire des sources de données »** (raccourci : **Ctrl + L**).
![Ouverture du menu Couche > Gestionnaire des sources de données](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/01_gestionnaire-sources-donnees.png){.fr-responsive-img .frx-border-img .frx-img-contained}

2. Sélectionnez **« WMS/WMTS »** dans la liste des services OGC.
![Sélection du type WMS/WMTS](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/02_wms-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

3. Cliquez sur **« Nouveau »** pour créer une nouvelle connexion.
![Haut de l’onglet Couches du type WMS-WMTS et localisation du bouton pour créer une nouvelle connexion à un service.](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/03_nouvelle-connexion.png){.fr-responsive-img .frx-border-img .frx-img-contained}

4. Saisissez un **nom de connexion** et collez l’**URL du service** disponible dans **« Mes clés d’accès »** sur **cartes.gouv.fr**.
![Formulaire de création d’une nouvelle connexion avec un champ nom et un champ URL suivi de paramètres d’authentification.](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/04_nouv-config-auth-basic.png){.fr-responsive-img .frx-border-img .frx-img-contained}
![Localisation de l’URL à copier dans l’interface Mes clés d’accès de cartes.gouv.fr.](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/05_cle-basic-gpf.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Connexion avec une clé BASIC

1. Dans **QGIS**, choisissez **Basic authentication**, donnez un nom à la configuration, puis collez dans **Ressource** l’URL de la **Clé BASIC** précédemment copiée, saisissez ensuite le **nom d’utilisateur** et le **mot de passe** définis auparavant, puis cliquez sur **« Enregistrer »** pour finaliser.
![Formulaire de définition des paramètres d’authentification BASIC : nom d’utilisateur et mot de passe.](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/06_basic-authentification.png){.fr-responsive-img .frx-border-img .frx-img-contained}

2. Cliquez sur **« Connexion »** pour accéder au service.
![Connexion au service : affichage de la liste des couches disponibles](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/07_connexion-au-service.png){.fr-responsive-img .frx-border-img .frx-img-contained}

3. Sélectionnez les couches souhaitées et cliquez sur **« Ajouter »** pour les intégrer à la carte.
![Localisation du bouton Ajouter en bas du formulaire](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/08_ajouter-les-couches.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Connexion avec une clé HASH

1. Copiez l’URL de la clé **HASH** depuis **« Mes clés d’accès »**.
![Localisation de l’URL à copier dans l’interface de cartes.gouv.fr](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/09_cle-hash-gpf.png){.fr-responsive-img .frx-border-img .frx-img-contained}

2. Dans **QGIS**, ouvrez l’onglet **« Authentification »** et cliquez sur **« + »** pour créer une nouvelle configuration.

3. Récupérez la valeur située après **_<span lang="en">`apikey=</span>_** dans l’URL copiée.

4. Complétez les champs :
    - **Clé d’en-tête :** **_<span lang="en">`apikey={votre hash}`</span>_**
    - **Valeur d’en-tête :** collez la valeur du HASH

5. Cliquez sur **« Enregistrer »**.
![Formulaire de configuration d’une authentification de type API Header dans QGIS, rempli avec une clé nommée apikey.](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/10_api-header.png){.fr-responsive-img .frx-border-img .frx-img-contained}

6. Puis, cliquez sur **« Connexion »** et sélectionnez les couches filtrées par votre clé **HASH** et cliquez sur **« Ajouter »**.
![Liste des couches disponibles à l’ajout](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/11_ajout-couche-api-header.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## FME (connexion avec OAuth2)

:::info
L’authentification **OAuth2** nécessite une **URL de redirection** (**_<span lang="en">`redirect_url`</span>_**) pour recevoir le code d’autorisation après la connexion.
Comme **QGIS** ou **ArcGIS** ne permettent pas de la configurer, l’utilisation de **FME** est recommandée.
:::

Dans **FME Workbench** :

1. Dans **_<span lang="en">« Tools »</span>_**, cliquez sur **_<span lang="en">« FME Options... »</span>_**.
![Ouverture du menu Tools > FME Options](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/12_fme-options.png){.fr-responsive-img .frx-border-img .frx-img-contained}

2. Puis dans   **_<span lang="en">« Web Connections »</span>_**, cliquez sur  **_<span lang="en">« Manage Services... »</span>_**.
![Localisation du bouton Manage services...](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/13_manage-services.png){.fr-responsive-img .frx-border-img .frx-img-contained}

3. Dans la fenêtre qui s’affiche, cliquez sur le **« + »** en bas à gauche, puis sélectionnez **« OAuth 2.0 Service »**.
![Localisation de la configuration d’un OAuth2 Services](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/14_oauth2-service.png){.fr-responsive-img .frx-border-img .frx-img-contained}

4. Renseignez les champs suivants :
   - **Client ID :** `gpf-warehouse`
   - **Client Secret :** `BK2G7Vvkn7UDc8cV7edbCnHdYminWVw2` (exemple issu de la configuration Insomnia)
   - **Redirect URL :** `https://data.geopf.fr/swagger-ui/oauth2-redirect.html`
   - **URL d’autorisation :**
     `https://sso.geopf.fr/realms/geoplateforme/protocol/openid-connect/auth?response_type=code`
   - **URL de récupération et de rafraîchissement du token :**
     `https://sso.geopf.fr/realms/geoplateforme/protocol/openid-connect/token`
   - **Format de la requête :**
     `redirect_uri=https://data.geopf.fr/swagger-ui/oauth2-redirect.html&client_id=[CLIENT_ID]&client_secret=[CLIENT_SECRET]&grant_type=authorization_code&code=[responseCode]&refresh_token=[REFRESH_TOKEN]&response_type=refresh_token`
![Formulaire Manage Web Services](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/15_manage-web-services.png){.fr-responsive-img .frx-border-img .frx-img-contained}

5. Cliquez sur **« + »**, sélectionnez le service créé, attribuez un nom, puis validez.
![Localisation du bouton Add connection](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/16_add-connection.png){.fr-responsive-img .frx-border-img .frx-img-contained}

6. Attribuez un nom de votre choix, puis cliquez sur **« OK »**.
![Formulaire de modification de la Web connection](/img/guides-utilisateur/creation-des-cles-et-integration-sig/integrer-dans-sig/17_edit-web-connection.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Votre connexion **OAuth2** dans **FME** est désormais opérationnelle.

:::callout
Vous disposez désormais d’une **clé d’accès fonctionnelle et sécurisée**, adaptée à votre contexte d’usage.  
Grâce à cartes.gouv.fr, vous pouvez **gérer les droits de diffusion**, **contrôler les accès** et **intégrer vos services** dans vos outils SIG ou vos applications web en toute sécurité.
:::
