/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Fri 18 Oct 2019 06:26:42 PM CEST
  *       MODIFIED: Mon 21 Oct 2019 08:12:29 PM CEST
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
    console.warn('Test environnement. No command line are passed.');
    ParseCommandLine();
  }
  return true;
};

Main();

// vim: sw=2 ts=2 et:
