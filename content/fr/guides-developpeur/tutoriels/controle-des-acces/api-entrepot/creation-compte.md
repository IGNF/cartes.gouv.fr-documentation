---
title: Création d'un compte Géoplateforme
mermaid: true
eleventyNavigation:
    key: Création d'un compte Géoplateforme
    parent: Contrôle des accès à l'API Entrepôt 
    order: 1
    nav: guides-developpeur
---

# Création d'un compte Géoplateforme

Toutes les applications de la Géoplateforme s'appuient, pour l'authentification, sur un gestionnaire d'identité unique (solution Keycloak). La première étape consiste donc à [s'enregistrer]({{ urls.iam }}/account/) si ce n'est pas déjà le cas.

Par convention, le nom d'utilisateur doit être de la forme {prenom}.{nom}, en minuscule.

![Création d'un compte](/img/guides-developpeur/controle-acces/authentification_enregistrement.png){.fr-responsive-img .frx-img-contained} ![Connexion](/img/guides-developpeur/controle-acces/authentification_connexion.png){.fr-responsive-img .frx-img-contained} 



Lors de l'enregistrement, vous aurez à utiliser une application de génération de code à usage unique (FreeOTP sur votre téléphone par exemple). Vous en aurez besoin à chaque authentification.
