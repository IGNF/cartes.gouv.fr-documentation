---
title: Détail d’une métadonnée catalogue
description: Le détail d’une métadonnée catalogue de cartes.gouv.fr
tags:
    - Catalogue
    - Métadonnées
    - Données
eleventyNavigation:
    key: Détail d’une métadonnée catalogue
    order: 3
pictogram: document/document.svg
summary:
    visible: true
    depth: 2
showDescription: false
---

<figure role="group" class="fr-content-media">
    <video src="https://data.geopf.fr/annexes/ressources/aide/01_demo2_bdtopo-metadonnee.mp4" class="fr-responsive-vid" controls>
        <p>Voir la transcription ci-dessous</p>
    </video>
    <figcaption class="fr-content-media__caption">
        Détail d’une métadonnée catalogue
    </figcaption>
</figure>

Pour illustrer une métadonnée catalogue, nous allons nous appuyer sur la donnée **BD TOPO®**.

Une métadonnée de catalogue comprend généralement une partie **« À propos »**, une partie **« Aperçu »** et une partie **« Ressources et liens »** regroupant les sous-parties **« Liens »** et **« Téléchargement et flux »**.

![Entête d’une métadonnée catalogue](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/01_menu-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## À propos

![Partie à propos](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/02_a-propos-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Dans cette première partie, vous retrouverez en haut de page le titre, la vignette et quelques informations supplémentaires sur le type de la métadonnée, sa date de mise à jour et le type de mise à jour de la donnée.

![Haut de la partie à propos](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/03_titre-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

En dessous, la partie gauche peut être décomposée en cinq éléments :

- **Le résumé :**
Partie descriptive qui présente la donnée ou le service, avec possibilité de la déployer ou de la réduire.
- **Mots clés :**
Les mots-clés, sous forme d’hyperliens cliquables, permettent d’accéder aux fiches de métadonnées correspondantes.

:::info
Les parties suivantes se déroulent en cliquant sur le bouton **« + »**.
:::

- **Licences et conditions d’utilisation :**
Les règles qui encadrent l’utilisation des données référencées.
- **À propos de la donnée :**
Informations essentielles comme la provenance de la donnée, son producteur, sa fréquence de mise à jour et sa date de publication.
- **Autres informations :**
Section complémentaire indiquant la dernière date de modification de la métadonnée et offrant un accès direct à sa fiche de métadonnée.

![Partie gauche de la partie à propos](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/04_description-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

La partie droite se compose de :
- Un point de contact avec notamment une adresse postale et un courriel.
- Un encadré indique le niveau de qualité des métadonnées, avec la possibilité d’afficher les détails en survolant l’icône d’information <span aria-hidden="true" class="fr-icon-information-line fr-icon--sm"></span>.
- Un encadré présente le catalogue, outil dédié au stockage, à la description et à la recherche des métadonnées.

![Partie droite de la partie à propos](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/05_contact-qualite-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Aperçu
Accédez à une visualisation de la donnée et à un bloc de code à insérer pour afficher un contenu interactif sur votre site.

![Partie aperçu](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/06_apercu-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

---

## Ressources et liens
La partie **Liens** centralise la documentation associée à la donnée. Elle se compose de vignettes où l’on retrouve un nom et le type de format du lien.

![Partie ressources et liens](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/07_ressources-liens-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

La partie **Téléchargements et flux** se compose également de deux **vignettes** :
- Les vignettes de téléchargement qui sont décrites ci-dessous.
- Les vignettes de flux :
    - Des services WMTS, WMS (en raster ou vecteur), WFS et TMS (tuiles vectorielles).
    - Des styles **_<span lang="en">MAPLIBRE-STYLE</span>_**, dont l’_<span lang="en">URL</span>_ d’accès peut être copiée.

![Partie téléchargements et flux](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/08_telechargements-flux-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

### Données en téléchargement

<figure role="group" class="fr-content-media">
    <video src="https://data.geopf.fr/annexes/ressources/aide/02_demo3_bdtopo-telechargement.mp4" class="fr-responsive-vid" controls>
        <p>Voir la transcription ci-dessous</p>
    </video>
    <figcaption class="fr-content-media__caption">
        Panneau de personnalisation
    </figcaption>
</figure>

Dans les vignettes de **téléchargement**, un bouton « Ouvrir le panneau de personnalisation » vous permet d’accéder au téléchargement.

![Détail de la carte d’un téléchargement montrant les boutons pour aller plus loin](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/09_vignette-telechargement-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Une fois le panneau ouvert, vous pouvez télécharger votre donnée. L’outil présente 10 résultats par page et vous pouvez filtrer selon plusieurs critères :
- La zone
- Le format
- La projection (<span lang="en">[_CRS_](https://geodesie.ign.fr/les-systemes-geodesiques#anchor_2:~:text=Code%20EPSG,Registre%20IGN%2DF){target="_blank" rel="noopener noreferrer" title="Système de référence verticale et altitude - ouvre une nouvelle fenêtre"}</span>) : Métadonnées permettant de préciser, pour un Système de Référence de Coordonnées, selon le type de coordonnées 1D, 2D ou 3D, les éléments de définition associés au jeu de coordonnées
- La temporalité (dates d’édition)


![Partie téléchargement dépliée](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/10_telechargement-avance-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Une fois le jeu de données de téléchargement choisi, en cliquant sur celui-ci, vous accédez à la possibilité de télécharger la donnée souhaitée.

![Finalisation du téléchargement](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/11_finalisation-telechargement-fiche-catalogue.png){.fr-responsive-img .frx-border-img .frx-img-contained}

Le bas de page liste d’autres métadonnées du catalogue.

### Données en flux
Dans les vignettes de **flux**, vous avez également la possibilité de consulter l’URL fournie qui correspond à un **_<span lang="en">GetCapabilities</span>_**, qui sert uniquement à lister les ressources disponibles. Elle ne permet pas de télécharger des données. Pour en savoir plus sur les méthodes de l’API de diffusion, [consultez la documentation dédiée](https://cartes.gouv.fr/aide/fr/guides-utilisateur/utiliser-les-services-de-la-geoplateforme/diffusion){target="_blank" rel="noopener noreferrer" title="API de diffusion - ouvre une nouvelle fenêtre"}.

![GetCapabilities - TMS - BD TOPO®](/img/guides-utilisateur/rechercher-une-donnee/detail-jeu-de-donnees/12_getcapabilities-tms.png){.fr-responsive-img .frx-border-img .frx-img-contained}