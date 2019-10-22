/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Fri 18 Oct 2019 06:26:42 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 09:45:55 AM CEST
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
// Can't use `import` like es6
// tslint:disable:no-var-requires no-require-imports
require('console-info');
require('console-warn');
require('console-error');
require('../../console-debug');

export const Main = (): boolean => {
  InstantiateServer();
  if (process.env.ldAppBeeBuzziness !== 'true') {
    ParseCommandLine();
  } else {
    console.warn('Test environnement. No command line are passed.');
  }
  return true;
};

Main();

// vim: sw=2 ts=2 et:
