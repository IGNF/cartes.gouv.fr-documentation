# Soumettre des modifications

Vous avez modifié, ajouté ou supprimé des fichiers dans votre copie locale du dépôt et vous voulez les proposer au dépôt principal pour relecture et application.

Vérifiez les fichiers modifiés :

```sh
git status
```

Les fichiers modifiés, créés ou ajoutés seront listés en rouge.

Si un fichier n'apparait pas, c'est peut-être que vous êtes encore en train de l'éditer et que vous ne l'avez pas encore enregistré (dans VS Code ça se matérialise par un rond à côté du nom du fichier).

Ajoutez les fichiers que vous voulez proposer, soit un par un :

```sh
git add chemin/nom_du_fichier.ext
```

Soit tous les fichiers en une seule fois :

```sh
git add .
```

Proposez la modification avec une description succincte :

```sh
git commit -m "modification de truc"
```

Le `commit` est maintenant ajouté à votre historique local. Pour l'envoyer sur votre fork :

```sh
git push
```

Il est maintenant visible sur github : https://github.com/{nom_utilisateur_github}/cartes.gouv.fr-documentation

Vous pouvez maintenant proposer une **Pull request** sur github directement.

Un bandeau apparaitra au dessus des fichiers du dépôt pour vous informer que votre fork a X commit(s) d'avance sur le dépôt IGNF/cartes.gouv.fr-documentation et vous proposera cette option.
