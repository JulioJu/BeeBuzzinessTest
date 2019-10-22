/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Fri 18 Oct 2019 06:26:42 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 03:02:36 PM CEST
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

export const main = (): void => {
  let exitCode: number = setupProcess();
  if (exitCode === 0) {
    exitCode = parseCommandLine(process.argv);
  }
  // tslint:disable-next-line  strict-comparisons
  if (require.main === module) {
    process.exit(exitCode);
  }
};

// vim: sw=2 ts=2 et:
