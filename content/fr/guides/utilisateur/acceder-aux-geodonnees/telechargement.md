---
title: API de téléchargement
tags:
    - Accéder aux géodonnées
segments:
    - url: /guides/utilisateur/
      title: Guides Utilisateur
    - url: /guides/utilisateur/acceder-aux-geodonnees/
      title: Accéder aux géodonnées
eleventyNavigation:
    key: API de téléchargement
    parent: Accéder aux géodonnées
    order: 2
    nav: utilisateur
---

## Présentation

L’API de téléchargement de la Géoplateforme permet de découvrir et télécharger des fichiers.

Elle est conforme au format Atom RFC 4287.

Elle s’appuie sur 3 méthodes&nbsp;:

- **GetCapabilites** pour lister les ressources disponibles
- **GetResource** pour lister les fichiers téléchargeables de la ressource interrogée
- **Download** pour télécharger un fichier

Son usage est limité à 10 requêtes par seconde depuis une même adresse IP.

Attention, **les résultats des requêtes sont paginés**. Pour parcourir les résultats, les paramètres sont&nbsp;:

- **page**&nbsp;: débute à 1 (valeur par défaut)
- **limit**&nbsp;: 50 résultats au maximum (10 par défaut)

**N.B.**&nbsp;: le nombre total de résultats pour une requête est indiqué dans la valeur **gpf_dl:totalentries** présente dans l’en-tête de la réponse.

## Lister les ressources (GetCapabilities)

La méthode GetCapabilities permet de lister les ressources (au sens de produits pour l’IGN).

Elle est accessible via l’URL suivante&nbsp;:

```plain
https://data.geopf.fr/telechargement/capabilities
```

Afin de permettre une recherche plus précise, la méthode dispose des filtres optionnels suivants&nbsp;:

```plain
https://data.geopf.fr/telechargement/capabilities?page={page}&limit={limit}&polygon={polygon}&updatedFrom={updatedFrom}&updatedTo={updatedTo}&editionDateFrom={editionDateFrom}&editionDateTo={editionDateTo}&lang={lang}&crs={crs}&thematic={thematic}&zone={zone}&format={format}
```

Les champs du filtre doivent respecter le formalisme suivant&nbsp;:

- **polygon**&nbsp;: x1,y1;x2,y2;… (en projection EPSG:4326)
- **updatedFrom**&nbsp;: YYYY-MM-DD
- **updatedTo**&nbsp;: YYYY-MM-DD
- **editionDateFrom**&nbsp;: YYYY-MM-DD
- **editionDateTo**&nbsp;: YYYY-MM-DD
- **lang**&nbsp;: fre ou eng
- **crs**&nbsp;: au format epsg
- **thematic**&nbsp;: au format de la thématique INSPIRE recherchée
- **zone**&nbsp;: FRA (pour France entière) ou D075 (pour Paris)...
- **format**&nbsp;: SHP (pour Shapefile)...

Exemple de requête filtrée&nbsp;:

```plain
https://data.geopf.fr/telechargement/capabilities?lang=fre&zone=FRA&page=1&limit=50
```

## Lister les dossiers d’une ressource (GetResource)

La méthode GetResource permet de lister les dossiers de la ressource interrogée (au sens jeux de données d’un produit pour l’IGN).

Elle est accessible via l’URL suivante&nbsp;:

```plain
https://data.geopf.fr/telechargement/resource/{resourceName}
```

Exemple de requête&nbsp;:

```plain
https://data.geopf.fr/telechargement/resource/ADMIN-EXPRESS-COG
```

Afin de permettre une recherche plus précise, la méthode dispose des filtres optionnels suivants&nbsp;:

```plain
https://data.geopf.fr/telechargement/resource/{resourceName}?polygon={polygon}&editionDateFrom={editionDateFrom}&editionDateTo={editionDateTo}&lang={lang}&crs={crs}&zone={zone}&format={format}
```

Les champs du filtre, tous optionnels, doivent respecter le formalisme suivant&nbsp;:

- **polygon**&nbsp;: x1,y1;x2,y2;… (en projection EPSG:4326)
- **editionDateFrom**&nbsp;: YYYY-MM-DD
- **editionDateTo**&nbsp;: YYYY-MM-DD
- **lang**&nbsp;: fre ou eng
- **crs**&nbsp;: au format epsg
- **zone**&nbsp;: FRA (pour France entière) ou D075 (pour Paris)...
- **format**&nbsp;: SHP (pour Shapefile)...

Exemple de requête filtrée&nbsp;:

```plain
https://data.geopf.fr/telechargement/resource/ADMIN-EXPRESS-COG?lang=fre&zone=FRA&format=SHP&page=1&limit=50
```

## Lister les fichiers d’un sous-dossier d’une ressource (GetSubResource)

La méthode GetSubResource permet de lister les fichiers du dossier de la ressource interrogée.

Elle est accessible via l’URL suivante&nbsp;:

```plain
https://data.geopf.fr/telechargement/resource/{resourceName}/{subResourceName}
```

Exemple de requête&nbsp;:

```plain
https://data.geopf.fr/telechargement/resource/ADMIN-EXPRESS-COG/ADMIN-EXPRESS-COG_3-1__SHP_WGS84G_FRA_2023-05-03?page=1&limit=50
```

## Télécharger un fichier (Download)

La méthode Download permet de télécharger un fichier.

Elle est accessible via l’URL suivante&nbsp;:

```plain
https://data.geopf.fr/telechargement/download/{resourceName}/{subResourceName}/{fileName}
```

Exemple de requête&nbsp;:

```plain
https://data.geopf.fr/telechargement/download/ADMIN-EXPRESS-COG/ADMIN-EXPRESS-COG_3-1__SHP_WGS84G_FRA_2023-05-03/ADMIN-EXPRESS-COG_3-1__SHP_WGS84G_FRA_2023-05-03.7z
```
