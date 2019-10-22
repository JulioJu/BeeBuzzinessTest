/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Mon 21 Oct 2019 04:47:18 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 01:14:26 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import { buildStringOfLCDChars } from '../src/lcd-display';

describe('lcd-display tests', () => {

  test('Should return the LCD string for \'0123456789\'',
    () => {
      const expectedLCDDisplay: string =
          '  _       _   _       _   _   _   _   _ \n'
        + ' | |   |  _|  _| |_| |_  |_    | |_| |_|\n'
        + ' |_|   | |_   _|   |  _| |_|   | |_|  _|';
      const returnValue: string =
        buildStringOfLCDChars([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(returnValue)
        .toEqual(expectedLCDDisplay);
    });

});

// vim: sw=2 ts=2 et:
