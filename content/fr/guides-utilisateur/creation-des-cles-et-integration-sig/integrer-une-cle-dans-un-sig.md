---
title: Intégrer une clé dans un SIG avec QGIS et FME.
nav: guides-utilisateur
tags:
    - SIG
    - QGIS
    - FME
    - Géoplateforme
    - BASIC
    - HASH
    - OAuth2
eleventyNavigation:
    key: Intégrer une clé dans un SIG avec QGIS et FME.
    parent: Création et intégration des clés Cartes.gouv.fr dans un SIG
    order: 4
description: Intégrer une clé d’accès dans un SIG avec QGIS ou FME.
summary:
    visible: true
    depth: 4
---


## Intégrer une clé dans un SIG (QGIS / FME)


### Définition utile

- **Système d'Information Géographique (SIG) :** ensemble de matériels, logiciels et données permettant de saisir, stocker, analyser et visualiser des informations localisées, afin d’aider à la décision sur un territoire.
- **QGIS :** logiciel SIG de bureau libre, utilisé pour intégrer et exploiter des données géographiques, avec des usages documentés par l’IGN (Géoservices, Géoplateforme).
- **FME :** logiciel de Safe Software dédié à l’intégration, la transformation et l’automatisation de traitements de données géographiques, avec des extensions IGN (IGNFConnector).


---


### QGIS

Dans **QGIS** :  

1. Ouvrez le menu **« Couche »**, puis cliquez sur **« Gestionnaire des sources de données »** (raccourci : **Ctrl + L**).  

![Gestionnaire des sources de données](/img/guides-utilisateur/creation-des-cles-et-integration-sig/11.gestionnaire-sources-donnees.png){.fr-responsive-img .frx-border-img .frx-img-contained}

2. Sélectionnez **« WMS / WMTS »** dans la liste des services OGC.  

![WMS-WMTS](/img/guides-utilisateur/creation-des-cles-et-integration-sig/12.wms-wmts.png){.fr-responsive-img .frx-border-img .frx-img-contained}

3. Cliquez sur **« Nouveau »** pour créer une nouvelle connexion. 

![Nouvelle connexion](/img/guides-utilisateur/creation-des-cles-et-integration-sig/13.nouvelle-connexion.png){.fr-responsive-img .frx-border-img .frx-img-contained}

4. Saisissez un **nom de connexion** et collez l’**URL du service** disponible dans **« Mes clés d’accès »** sur **cartes.gouv.fr**.


![Créer une nouvelle configuration](/img/guides-utilisateur/creation-des-cles-et-integration-sig/14.nouv-config-auth-basic.png){.fr-responsive-img .frx-border-img .frx-img-contained}

![Clé BASIC](/img/guides-utilisateur/creation-des-cles-et-integration-sig/15.cle-basic-gpf.png){.fr-responsive-img .frx-border-img .frx-img-contained}


#### Connexion avec une clé BASIC

1. Dans **QGIS**, choisissez **Basic Authentication**, donnez un nom à la configuration, puis collez dans **Ressource** l’URL de la **Clé BASIC** précédemment copiée, saisissez ensuite le **nom d’utilisateur** et le **mot de passe** définis auparavant, puis cliquez sur **Enregistrer** pour finaliser.

![Basic authentification](/img/guides-utilisateur/creation-des-cles-et-integration-sig/16.basic-authentification.png){.fr-responsive-img .frx-border-img .frx-img-contained}


2. Cliquez sur **« Connexion »** pour accéder au service.

![Connexion au service](/img/guides-utilisateur/creation-des-cles-et-integration-sig/17.connexion-au-service.png){.fr-responsive-img .frx-border-img .frx-img-contained}

3. Sélectionnez les couches souhaitées et cliquez sur **« Ajouter »** pour les intégrer à la carte.

![Ajouter les couches](/img/guides-utilisateur/creation-des-cles-et-integration-sig/18.ajouter-les-couches.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

#### Connexion avec une clé HASH

1. Copiez l’URL de la clé **HASH** depuis **« Mes clés d’accès »**.

![Clé HASH](/img/guides-utilisateur/creation-des-cles-et-integration-sig/19.cle-hash-gpf.png){.fr-responsive-img .frx-border-img .frx-img-contained}


2. Dans **QGIS**, ouvrez l’onglet **« Authentification »** et cliquez sur le **« + vert »** pour créer une nouvelle configuration.  
3. Récupérez la valeur située après `apikey=` dans l’URL copiée.  
4. Complétez les champs :  
   - **Clé d’en-tête :** `apikey`  
   - **Valeur d’en-tête :** collez la valeur du hash  
5. Cliquez sur **« Enregistrer »**.  

![API Header](/img/guides-utilisateur/creation-des-cles-et-integration-sig/20.api-header.png){.fr-responsive-img .frx-border-img .frx-img-contained}

6. Puis, cliquez sur **« Connexion »** et sélectionnez les couches filtrées par votre clé **HASH** et cliquez sur **« Ajouter »**.  

![Ajout couche API Header](/img/guides-utilisateur/creation-des-cles-et-integration-sig/21.ajout-couche-api-header.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

### FME

#### Connexion avec OAuth2 (via FME)

:::info
L’authentification **OAuth2** nécessite une **URL de redirection** (`redirect_url`) pour recevoir le code d’autorisation après la connexion.  
Comme **QGIS** ou **ArcGIS** ne permettent pas de la configurer, l’utilisation de **FME** est recommandée.
:::  

Dans **FME Workbench** :  

1. Ouvrez **« Tools > FME Options »**. 

![FME Options](/img/guides-utilisateur/creation-des-cles-et-integration-sig/22.fme-options.png){.fr-responsive-img .frx-border-img .frx-img-contained}

2. Puis dans **« Web Connections »**, cliquez sur **« Manage Services… »**.

![Manage services](/img/guides-utilisateur/creation-des-cles-et-integration-sig/23.manage-services.png){.fr-responsive-img .frx-border-img .frx-img-contained}

3. Dans la fenêtre qui s’affiche, cliquez sur le **« + »** en bas à gauche, puis sélectionnez **« OAuth 2.0 Service »**.

![OAuth2 Services](/img/guides-utilisateur/creation-des-cles-et-integration-sig/24.oauth2-service.png){.fr-responsive-img .frx-border-img .frx-img-contained}

4. Renseignez les champs suivants :

   - **Client ID :** `gpf-warehouse`  
   - **Client Secret :** `BK2G7Vvkn7UDc8cV7edbCnHdYminWVw2` (exemple issu de la configuration Insomnia)  
   - **Redirect URL :** `https://data.geopf.fr/swagger-ui/oauth2-redirect.html`  
   - **URL d’autorisation :**  
     `https://sso.geopf.fr/realms/geoplateforme/protocol/openid-connect/auth?response_type=code`  
   - **URL de récupération et de rafraîchissement du token :**  
     `https://sso.geopf.fr/realms/geoplateforme/protocol/openid-connect/token`  


![Manage Web Services 1](/img/guides-utilisateur/creation-des-cles-et-integration-sig/25.manage-web-services-1.png){.fr-responsive-img .frx-border-img .frx-img-contained}


![Manage Web Services 2](/img/guides-utilisateur/creation-des-cles-et-integration-sig/26.manage-web-services-2.png){.fr-responsive-img .frx-border-img .frx-img-contained}


5. Cliquez sur **« Add Connection »**, sélectionnez le service créé, attribuez un nom, puis validez.  

![Add connection](/img/guides-utilisateur/creation-des-cles-et-integration-sig/27.add-connection.png){.fr-responsive-img .frx-border-img .frx-img-contained}

6. Attribuez un nom de votre choix, puis cliquez sur **OK**.  

![Edit Web connection](/img/guides-utilisateur/creation-des-cles-et-integration-sig/28.edit-web-connection.png){.fr-responsive-img .frx-border-img .frx-img-contained}


Votre connexion **OAuth 2.0** dans **FME** est désormais opérationnelle.  


:::callout
Vous disposez désormais d’une **clé d’accès fonctionnelle et sécurisée**, adaptée à votre contexte d’usage.  
Grâce à cartes.gouv.fr, vous pouvez **gérer les droits de diffusion**, **contrôler les accès** et **intégrer vos services** dans vos outils SIG ou vos applications web en toute sécurité.
:::

---
