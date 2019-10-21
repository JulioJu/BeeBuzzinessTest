
# Instructions

Affichage sur écran LCD

On te propose de faire un petit exercice de code from scratch.

Ta mission est de créer la logique pour afficher des numéros sur un écran LCD.
Cet écran dispose d’un grid de 3x3, chaque case peut contenir une espace, un
tiret bas, ou un pipe.

Par exemple (ici en utilisant un point à la place d’espace)

._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.

|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|

|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|

._. ... ._.

|_| ..| |.|

..| ..| |_|

Un programme en ligne de commandes permettra d’exécuter le résultat de ton travail.

# How To

* DO NOT USE NODE 8 https://github.com/nodejs/node/issues/12675:
    (console.debug not displayed).

* How to start the project
    ```sh
    yarn compile
    yarn start 7987
    ```

* How to check if there are TSLint errors
    ```sh
    yarn lint
    ```

## Tests

* 1)
```sh
yarn start 7987 778978
# exit with error code 3 and display instructions of usage
```

* 2)
```sh
yarn start
# exit with code 0 and display instructions of usage
```

* 3) If you use Node.js < 9.5.0, exit with error code 20

* 4)
```sh
yarn start 143a
# exit with error code 4 and display instructions of usage and
# “At index '3' of the string '143a', the character 'a' is not a number (`NaN`)”
```


# Notes

* Node.js behaviour inspired from
    https://github.com/JulioJu/medicalCentre/tree/master/back

# TODO

* TSLint is deprecated since some months. Use ESLint.
    * I've tested quickly https://github.com/typescript-eslint/tslint-to-eslint-config
        but I'm not convinced.
        1. Generate too much rules,
        2. Don't use
        ```json
        "extends": [
        "eslint:all",
        ]
        ```
        3. The tool crashes with sonar.js
        4. Warnings about not rules not still implemented on ESLint

<!-- vim: sw=2 ts=2 et:
-->
