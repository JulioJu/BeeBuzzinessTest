/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Fri 18 Oct 2019 06:26:42 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 01:01:32 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import {
  setupProcess,
  parseCommandLine
} from './setup-server-and-command-line-parser';
import * as Logger from '../logger';

export const main = (): void => {
  let exitCode: number = setupProcess();
  if (process.env.ldAppBeeBuzziness !== 'true' && exitCode === 0) {
    exitCode = parseCommandLine(process.argv);
  } else {
    Logger.warn('Test environnement. No command line are passed.');
  }
  process.exit(exitCode);
};

main();

// vim: sw=2 ts=2 et:
