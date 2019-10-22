/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Fri 18 Oct 2019 06:26:42 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 11:42:19 AM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import {
  SetupProcess,
  ParseCommandLine
} from './setup-server-parse-commandline';
import * as Logger from '../logger';

export const Main = (): void => {
  let exitCode: number = SetupProcess();
  if (process.env.ldAppBeeBuzziness !== 'true' && exitCode === 0) {
    exitCode = ParseCommandLine();
  } else {
    Logger.warn('Test environnement. No command line are passed.');
  }
  process.exit(exitCode);
};

Main();

// vim: sw=2 ts=2 et:
