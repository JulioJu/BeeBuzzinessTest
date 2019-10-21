/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Mon 21 Oct 2019 04:47:18 PM CEST
  *       MODIFIED: Mon 21 Oct 2019 10:43:43 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import { Build2DArray, BuildString } from '../src/display-lcd';

describe('display-lcd tests', () => {

  test('Should return a 2D array of LCD character for \'0123456789\'', () => {
    const expected2DArray: string[][] = [
      [
        ' _ ',
        '| |',
        '|_|'
      ],
      [
        '  |',
        '  |',
        '  |'
      ],
      [
        ' _ ',
        ' _|',
        '|_ '
      ],
      [
        ' _ ',
        ' _|',
        ' _|'
      ],
      [
        '   ',
        '|_|',
        '  |'
      ],
      [
        ' _ ',
        '|_ ',
        ' _|'
      ],
      [
        ' _ ',
        '|_ ',
        '|_|'
      ],
      [
        ' _ ',
        '  |',
        '  |'
      ],
      [
        ' _ ',
        '|_|',
        '|_|'
      ],
      [
        ' _ ',
        '|_|',
        ' _|'
      ]
    ];

    const returnValue: string[][] =
      Build2DArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(returnValue)
      .toEqual(expected2DArray);
  });

  test('Should return a the LCD string for \'0123456789\'', () => {
    const expectedLCDDisplay: string =
        '  _    |  _   _       _   _   _   _   _ \n'
      + ' | |   |  _|  _| |_| |_  |_    | |_| |_|\n'
      + ' |_|   | |_   _|   |  _| |_|   | |_|  _|\n';
    console.log(expectedLCDDisplay);
    const returnValue: string =
      BuildString(Build2DArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
    console.log(returnValue);
    expect(returnValue)
      .toEqual(expectedLCDDisplay);
  });

});

// vim: sw=2 ts=2 et:
