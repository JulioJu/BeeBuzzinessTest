/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Mon 21 Oct 2019 04:34:18 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 11:08:47 AM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import * as semver from 'semver';
import { BuildStringOfLCDChars } from './display-lcd';
import * as Logger from '../logger';

/**
 * Instantiate node.js
 *
 */
export const InstantiateServer = (): void => {

  Logger.debug(`This process is pid ${process.pid}`);

  const nodeversion = process.versions.node;
  Logger.info(`You use version ${nodeversion} of Node.js`);

  // https://nodejs.org/api/process.html#process_event_exit
  process.on('exit', (code: number) => {
    if (code === 0) {
      Logger.info('\n\n\n\nFinishing with code 0…');
    } else {
      Logger.error(`\n\n\nFinishing with error code '${code}'…`);
    }
  });

  // https://github.com/parshap/check-node-version/issues/6
  // As in generator-jhipster
  // https://github.com/jhipster/generator-jhipster/blob/00c59eca38ca43565d80fe00e1666875976b6cf9/generators/generator-base.js#L1837
  if (semver.lte(nodeversion, '9.5.0')) {
    Logger.error('Please use a node >= 9.5.0');
    process.exit(20);
  }

};

/**
 * Parse command line
 *
 */
export const ParseCommandLine = (): void => {
  const usage: string =
    'You must use at least one argument composed only of digits: '
    + 'e.g. `./yarn start 798778`';
  const numberOfArgs = process.argv.length;
  if (numberOfArgs === 2) {
    Logger.info(usage);
  } else if (numberOfArgs > 3) {
    Logger.error(usage);
    process.exit(3);
  } else {
    const digitsArgumentString: string = process.argv[2];
    Logger.info(`You have passed argument ${digitsArgumentString}.`);
    const digitArgumentsArray: number[] =
      new Array(digitsArgumentString.length);
    for (let index = 0 ; index < digitArgumentsArray.length ; index ++) {
      const oneDigit: string = digitsArgumentString.charAt(index);
      digitArgumentsArray[index] =
        Number.parseInt(oneDigit, 10);
      if (Number.isNaN(digitArgumentsArray[index])) {
        Logger.error(`At index '${index}' of the string `
          + `'${digitsArgumentString}', the character '${oneDigit}' `
          + `is not a number (\`NaN\`)`);
        Logger.error(usage);
        process.exit(4);
      }

    }
    Logger.displayLCD(BuildStringOfLCDChars(digitArgumentsArray));
  }
};

// vim: sw=2 ts=2 et:
