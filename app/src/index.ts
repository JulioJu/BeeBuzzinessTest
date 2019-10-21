/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Fri 18 Oct 2019 06:26:42 PM CEST
  *       MODIFIED: Mon 21 Oct 2019 04:26:39 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import * as semver from 'semver';

// Can't use `import` like es6
// tslint:disable:no-var-requires no-require-imports
require('console-info');
require('console-warn');
require('console-error');
require('../../console-debug');

/**
 * Instantiate node.js
 *
 */
const instantiateServer = (): void => {

  console.debug(`This process is pid ${process.pid}`);

  const nodeversion = process.versions.node;
  console.info(`You use version ${nodeversion} of Node.js`);

  // https://nodejs.org/api/process.html#process_event_exit
  process.on('exit', (code: number) => {
    if (code === 0) {
      console.info('\n\n\n\nFinishing with code 0…');
    } else {
      console.error(`\n\n\nFinishing with error code '${code}'…`);
    }
  });

  // https://github.com/parshap/check-node-version/issues/6
  // As in generator-jhipster
  // https://github.com/jhipster/generator-jhipster/blob/00c59eca38ca43565d80fe00e1666875976b6cf9/generators/generator-base.js#L1837
  if (semver.lte(nodeversion, '9.5.0')) {
    console.error('Please use a node >= 9.5.0');
    process.exit(20);
  }

};

const parseCommandLine = (): void => {
  const usage: string =
    'You must use at least one argument composed only of digits: '
    + 'e.g. `./yarn start 798778`';
  const numberOfArgs = process.argv.length;
  console.debug(numberOfArgs);
  if (numberOfArgs === 2) {
    console.info(usage);
  } else if (numberOfArgs > 3) {
    console.error(usage);
    process.exit(3);
  } else {
    const digitsArgumentString: string = process.argv[2];
    console.info(`You have passed argument ${digitsArgumentString}.`);
    const digitArgumentsArray: number[] =
      new Array(digitsArgumentString.length);
    for (let index = 0 ; index < digitArgumentsArray.length ; index ++) {
      const oneDigit: string = digitsArgumentString.charAt(index);
      digitArgumentsArray[index] =
        Number.parseInt(oneDigit, 10);
      if (Number.isNaN(digitArgumentsArray[index])) {
        console.error(`At index '${index}' of the string `
          + `'${digitsArgumentString}', the character '${oneDigit}' `
          + `is not a number (\`NaN\`)`);
        console.error(usage);
        process.exit(4);
      }
    }
  }
};

export const Main = (): boolean => {
  instantiateServer();
  parseCommandLine();
  return true;
};

Main();

// vim: sw=2 ts=2 et:
