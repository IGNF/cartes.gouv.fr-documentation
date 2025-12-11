---
title: API de téléchargement
tags:
    - Téléchargement
    - API
    - GetCapabilities
    - GetResource
    - Download
    - Atom
    - Géoplateforme
eleventyNavigation:
    key: API de téléchargement
    parent: Utiliser les services de la Géoplateforme
    order: 2
    nav: guides-utilisateur
pictogram: "document/document-download.svg"
description: Tous les détails sur le service de téléchargement de la Géoplateforme
summary:
    visible: true
    depth: 1
---

## Présentation

L’API de téléchargement de la Géoplateforme permet de découvrir et télécharger des fichiers.

Elle est conforme au format Atom RFC 4287.

Elle s’appuie sur 3 méthodes :

- **GetCapabilites** pour lister les ressources disponibles
- **GetResource** pour lister les fichiers téléchargeables de la ressource interrogée
- **Download** pour télécharger un fichier

Son usage est limité à 10 requêtes par seconde depuis une même adresse IP.

Attention, **les résultats des requêtes sont paginés**. Pour parcourir les résultats, les paramètres sont :

- **page** : débute à 1 (valeur par défaut)
- **limit** : 50 résultats au maximum (10 par défaut)

**N.B.** : le nombre total de résultats pour une requête est indiqué dans la valeur **gpf_dl:totalentries** présente dans l’en-tête de la réponse.

---

## Lister les ressources (GetCapabilities)

La méthode GetCapabilities permet de lister les ressources (au sens de produits pour l’IGN).

Elle est accessible via l’URL suivante :

```plain
https://data.geopf.fr/telechargement/capabilities
```

Afin de permettre une recherche plus précise, la méthode dispose des filtres optionnels suivants :

```plain
https://data.geopf.fr/telechargement/capabilities?page={page}&limit={limit}&polygon={polygon}&updatedFrom={updatedFrom}&updatedTo={updatedTo}&editionDateFrom={editionDateFrom}&editionDateTo={editionDateTo}&lang={lang}&crs={crs}&thematic={thematic}&zone={zone}&format={format}
```

Les champs du filtre doivent respecter le formalisme suivant :

- **polygon** : x1,y1;x2,y2;… (en projection EPSG:4326)
- **updatedFrom** : YYYY-MM-DD
- **updatedTo** : YYYY-MM-DD
- **editionDateFrom** : YYYY-MM-DD
- **editionDateTo** : YYYY-MM-DD
- **lang** : fre ou eng
- **crs** : au format epsg
- **thematic** : au format de la thématique INSPIRE recherchée
- **zone** : FRA (pour France entière) ou D075 (pour Paris)...
- **format** : SHP (pour Shapefile)...

Exemple de requête filtrée :

```plain
https://data.geopf.fr/telechargement/capabilities?lang=fre&zone=FRA&page=1&limit=50
```

---

## Lister les dossiers d’une ressource (GetResource)

La méthode GetResource permet de lister les dossiers de la ressource interrogée (au sens jeux de données d’un produit pour l’IGN).

Elle est accessible via l’URL suivante :

```plain
https://data.geopf.fr/telechargement/resource/{resourceName}
```

Exemple de requête :

```plain
https://data.geopf.fr/telechargement/resource/ADMIN-EXPRESS-COG
```

Afin de permettre une recherche plus précise, la méthode dispose des filtres optionnels suivants :

```plain
https://data.geopf.fr/telechargement/resource/{resourceName}?polygon={polygon}&editionDateFrom={editionDateFrom}&editionDateTo={editionDateTo}&lang={lang}&crs={crs}&zone={zone}&format={format}
```

Les champs du filtre, tous optionnels, doivent respecter le formalisme suivant :

- **polygon** : x1,y1;x2,y2;… (en projection EPSG:4326)
- **editionDateFrom** : YYYY-MM-DD
- **editionDateTo** : YYYY-MM-DD
- **lang** : fre ou eng
- **crs** : au format epsg
- **zone** : FRA (pour France entière) ou D075 (pour Paris)...
- **format** : SHP (pour Shapefile)...

Exemple de requête filtrée :

```plain
https://data.geopf.fr/telechargement/resource/ADMIN-EXPRESS-COG?lang=fre&zone=FRA&format=SHP&page=1&limit=50
```

---

## Lister les fichiers d’un sous-dossier d’une ressource (GetSubResource)

La méthode GetSubResource permet de lister les fichiers du dossier de la ressource interrogée.

Elle est accessible via l’URL suivante :

```plain
https://data.geopf.fr/telechargement/resource/{resourceName}/{subResourceName}
```

Exemple de requête :

```plain
https://data.geopf.fr/telechargement/resource/ADMIN-EXPRESS-COG/ADMIN-EXPRESS-COG_3-1__SHP_WGS84G_FRA_2023-05-03?page=1&limit=50
```

---

## Télécharger un fichier (Download)

La méthode Download permet de télécharger un fichier.

Elle est accessible via l’URL suivante :

```plain
https://data.geopf.fr/telechargement/download/{resourceName}/{subResourceName}/{fileName}
```

Exemple de requête :

```plain
https://data.geopf.fr/telechargement/download/ADMIN-EXPRESS-COG/ADMIN-EXPRESS-COG_3-1__SHP_WGS84G_FRA_2023-05-03/ADMIN-EXPRESS-COG_3-1__SHP_WGS84G_FRA_2023-05-03.7z
```
