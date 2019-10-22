/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Mon 21 Oct 2019 04:39:27 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 11:49:13 AM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

const _appendCharsToFirstLine = (oneDigit: number): string => {
  switch (oneDigit) {
    case 0:
      return ' _ ';
    case 1:
      return '   ';
    case 2:
      return ' _ ';
    case 3:
      return ' _ ';
    case 4:
      return '   ';
    case 5:
      return ' _ ';
    case 6:
      return ' _ ';
    case 7:
      return ' _ ';
    case 8:
      return ' _ ';
    default:
      return ' _ ';
  }
};

const _appendCharsToSecondLine = (oneDigit: number): string => {
  switch (oneDigit) {
    case 0:
      return '| |';
    case 1:
      return '  |';
    case 2:
      return ' _|';
    case 3:
      return ' _|';
    case 4:
      return '|_|';
    case 5:
      return '|_ ';
    case 6:
      return '|_ ';
    case 7:
      return '  |';
    case 8:
      return '|_|';
    default:
      return '|_|';
  }
};

const _appendCharsToThirdLine = (oneDigit: number): string => {
  switch (oneDigit) {
    case 0:
      return '|_|';
    case 1:
      return '  |';
    case 2:
      return '|_ ';
    case 3:
      return ' _|';
    case 4:
      return '  |';
    case 5:
      return ' _|';
    case 6:
      return '|_|';
    case 7:
      return '  |';
    case 8:
      return '|_|';
    default:
      return ' _|';
  }
};

export const buildStringOfLCDChars = (digits: number[]): string => {
  let firstLineToPrint = '';
  let secondLineToPrint = '';
  let thirdLineToPrint = '';
  for (const digit of digits) {
    firstLineToPrint = `${firstLineToPrint} ${_appendCharsToFirstLine(digit)}`;
    secondLineToPrint =
      `${secondLineToPrint} ${_appendCharsToSecondLine(digit)}`;
    thirdLineToPrint = `${thirdLineToPrint} ${_appendCharsToThirdLine(digit)}`;
  }
  return `${firstLineToPrint}\n${secondLineToPrint}\n${thirdLineToPrint}`;
};

// vim: sw=2 ts=2 et:
