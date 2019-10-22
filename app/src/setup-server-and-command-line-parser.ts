/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Mon 21 Oct 2019 04:34:18 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 01:24:12 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import * as semver from 'semver';
import { buildStringOfLCDChars } from './lcd-display';
import * as Logger from '../logger';

const _printUsage = (isError: boolean): void => {
  const usage: string =
    'You must use at least one argument composed only of digits: '
    + 'e.g. `./yarn start 798778`';
  isError
  ? Logger.error(usage)
  : Logger.info(usage);
};

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
export const parseCommandLine = (args: string[]): number => {
  if (args.length === 2) {
    _printUsage(false);
    return 2;
    // tslint:disable-next-line unnecessary-else
  } else if (args.length > 3) {
    _printUsage(true);
    return 3;
  }
  const digitArgs: string = args[2];
  Logger.info(`You have passed argument '${digitArgs}'.`);
  const numbers: number[] = new Array(digitArgs.length);
  for (let index = 0 ; index < digitArgs.length ; index ++) {
    const parsed: number = Number.parseInt(digitArgs.charAt(index), 10);
    if (Number.isNaN(parsed)) {
      Logger.error(`At index '${index}' of the string '${digitArgs}',`
        + ` the character '${parsed}' is not a number (\`NaN\`)`);
      _printUsage(true);
      return 4;
    }
    numbers.push(parsed);
  }
  Logger.displayLCD(buildStringOfLCDChars(numbers));
  return 0;
};

// vim: sw=2 ts=2 et:
