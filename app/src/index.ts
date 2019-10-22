/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Fri 18 Oct 2019 06:26:42 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 03:16:27 PM CEST
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

import { Logger } from '../logger';

declare type exitFnType = (exitCode: number) => void;

const defaultExit: exitFnType = (exitCode: number): void => {
  process.exit(exitCode);
};

export const main = (
  exit: exitFnType,
  args: string[],
  logger: Logger
): void => {
  let exitCode: number = setupProcess(logger);
  if (exitCode === 0) {
    exitCode = parseCommandLine(args, logger);
  }
  exit(exitCode);
};

// tslint:disable-next-line  strict-comparisons
if (require.main === module) {
  main(defaultExit, process.argv, new Logger(true));
}

// vim: sw=2 ts=2 et:
