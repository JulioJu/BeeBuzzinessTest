/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Fri 18 Oct 2019 06:26:42 PM CEST
  *       MODIFIED: Mon 21 Oct 2019 04:36:51 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import {
  instantiateServer,
  parseCommandLine
} from './start-node-parse-command-line';

export const Main = (): boolean => {
  instantiateServer();
  parseCommandLine();
  return true;
};

Main();

// vim: sw=2 ts=2 et:
