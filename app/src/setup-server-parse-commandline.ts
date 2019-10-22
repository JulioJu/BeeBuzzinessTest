/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Mon 21 Oct 2019 04:34:18 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 11:50:10 AM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import * as semver from 'semver';
import { buildStringOfLCDChars } from './display-lcd';
import * as Logger from '../logger';

/**
 * Instantiate node.js
 *
 */
export const setupProcess = (): number => {

  const nodeversion = process.versions.node;
  Logger.info(`You use version ${nodeversion} of Node.js`);

  process.on('exit', (code: number) => {
    if (code === 0) {
      Logger.info('\n\n\n\nFinishing with code 0…');
    } else {
      Logger.error(`\n\n\nFinishing with error code '${code}'…`);
    }
  });

  if (semver.lte(nodeversion, '9.5.0')) {
    Logger.error('Please use a node >= 9.5.0');
    return 20;
  }

  return 0;
};

/**
 * Parse command line
 *
 */
export const parseCommandLine = (): number => {
  const usage: string =
    'You must use at least one argument composed only of digits: '
    + 'e.g. `./yarn start 798778`';
  const numberOfArgs = process.argv.length;
  if (numberOfArgs === 2) {
    Logger.info(usage);
  } else if (numberOfArgs > 3) {
    Logger.error(usage);
    return 3;
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
        return 4;
      }

    }
    Logger.displayLCD(buildStringOfLCDChars(digitArgumentsArray));
  }
  return 0;
};

// vim: sw=2 ts=2 et:
