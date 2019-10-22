/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Fri 18 Oct 2019 06:26:42 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 11:50:12 AM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import {
  setupProcess,
  parseCommandLine
} from './setup-server-parse-commandline';
import * as Logger from '../logger';

export const main = (): void => {
  let exitCode: number = setupProcess();
  if (process.env.ldAppBeeBuzziness !== 'true' && exitCode === 0) {
    exitCode = parseCommandLine();
  } else {
    Logger.warn('Test environnement. No command line are passed.');
  }
  process.exit(exitCode);
};

main();

// vim: sw=2 ts=2 et:
