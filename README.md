
# Instructions

Affichage sur écran LCD

On te propose de faire un petit exercice de code from scratch.

Ta mission est de créer la logique pour afficher des numéros sur un écran LCD.
Cet écran dispose d’un grid de 3x3, chaque case peut contenir une espace, un
tiret bas, ou un pipe.

Par exemple (ici en utilisant un point à la place d’espace)

```
._. ... ._. ._. ... ._. ._. ._. ._. ._.
|.| ..| ._| ._| |_| |_. |_. ..| |_| |_|
|_| ..| |_. ._| ..| ._| |_| ..| |_| ..|
```

Exemple: 910
```
._. ... ._.
|_| ..| |.|
..| ..| |_|
```

Un programme en ligne de commandes permettra d’exécuter le résultat de ton travail.

# How To

* Not compatible with Node 8
    (see https://github.com/nodejs/node/issues/12675 , `console.debug` not displayed).

* Tested with v10.16.3 .

* How to start the project
    ```sh
    yarn install
    yarn compile
    yarn start 7987
    ```

* How to check if there are TSLint errors
    ```sh
    yarn lint
    ```

## Tests

1.
    ```sh
    yarn start 7987 778978
    # exit with error code 3 and display instructions of usage
    ```

2.
    ```sh
    yarn start
    # exit with code 0 and display instructions of usage
    ```

3. If you use Node.js < 9.5.0, exit with error code 20

4.
    ```sh
    yarn start 143a
    # exit with error code 4 and display instructions of usage and the
      following message
    # “At index '3' of the string '143a', the character 'a' is not a number (`NaN`)”
    ```

# TODO

* TSLint is deprecated for a few months. Use ESLint.
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


# Notes for me about mocha and jest

* With Mocha and Jest can't pass command line argument in the app tested.
    `./yarn test 1234` doesn't work.

* With Mocha, the error is
    ```
    At index '0' of the string './build/test', the character '.' is not a number (`NaN`)
    You must use at least one argument composed only of digits: e.g. `./yarn start 798778`
    Finishing with error code '4'…
    ```

There are some solutions https://stackoverflow.com/questions/16144455/mocha-tests-with-extra-options-or-parameters/16150402
https://medium.com/@nickcis/jest-passing-custom-arguments-d44ef3f2defb

* *The solution is*

    ```javascript
    if (require.main === module) {
      process.exit(exitCode)
    }
    ```

# Credits

* ./app/logger.ts is strongly inspired from
    1. https://www.npmjs.com/package/console-info
    2. https://www.npmjs.com/package/console-warn
    2. https://www.npmjs.com/package/console-error
    (license MIT)

<!-- vim: sw=2 ts=2 et:
-->
