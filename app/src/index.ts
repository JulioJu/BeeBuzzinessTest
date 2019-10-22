/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Fri 18 Oct 2019 06:26:42 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 11:07:48 AM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import {
  InstantiateServer,
  ParseCommandLine
} from './start-node-parse-command-line';
import * as Logger from '../logger';

export const Main = (): boolean => {
  InstantiateServer();
  if (process.env.ldAppBeeBuzziness !== 'true') {
    ParseCommandLine();
  } else {
    Logger.warn('Test environnement. No command line are passed.');
  }
  return true;
};

Main();

// vim: sw=2 ts=2 et:
