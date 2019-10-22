/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Tue 22 Oct 2019 01:10:49 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 01:28:01 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import { parseCommandLine } from '../src/setup-server-and-command-line-parser';

describe('lcd-display tests', () => {

  test('Should return 2',
    () => {
      const returnCode =
        parseCommandLine(['node', './build/src/index.js']);
      expect(returnCode)
        .toEqual(2);
    });

  test('Should return 3',
    () => {
      const returnCode =
        parseCommandLine(['node', './build/src/index.js', '0123456789', '134']);
      expect(returnCode)
        .toEqual(3);
    });

  test('Should return 4',
    () => {
      const returnCode =
        parseCommandLine(['node', './build/src/index.js', '123a']);
      expect(returnCode)
        .toEqual(4);
    });

  test('Should return 0',
    () => {
      const returnCode =
        parseCommandLine(['node', './build/src/index.js', '0123456789']);
      expect(returnCode)
        .toEqual(0);
    });

});

// vim: sw=2 ts=2 et:
