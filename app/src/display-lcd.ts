/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Mon 21 Oct 2019 04:39:27 PM CEST
  *       MODIFIED: Mon 21 Oct 2019 10:40:40 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

/**
 * Display one digit in the LCD screen
 * @param oneDigit one digit to display in LCD screen
 *
 */
const _displayOneDigit = (oneDigit: number): string[] => {
  switch (oneDigit) {
    case 0:
      return [
        ' _ ',
        '| |',
        '|_|'
      ];
    case 1:
      return [
        '  |',
        '  |',
        '  |'
      ];
    case 2:
      return [
        ' _ ',
        ' _|',
        '|_ '
      ];
    case 3:
      return [
        ' _ ',
        ' _|',
        ' _|'
      ];
    case 4:
      return [
        '   ',
        '|_|',
        '  |'
      ];
    case 5:
      return [
        ' _ ',
        '|_ ',
        ' _|'
      ];
    case 6:
      return [
        ' _ ',
        '|_ ',
        '|_|'
      ];
    case 7:
      return [
        ' _ ',
        '  |',
        '  |'
      ];
    case 8:
      return [
        ' _ ',
        '|_|',
        '|_|'
      ];
    default:
      return [
        ' _ ',
        '|_|',
        ' _|'
      ];
  }
};

/**
 * Build 2D array
 * @param digitArray array of numbers to display in LCD screen
 *
 */
export const Build2DArray = (digitArray: number[]): string[][] => {
  const return2DArray: string[][] = new Array(digitArray.length);
  for (let onceNumberLCDIndex = 0 ;
    onceNumberLCDIndex < digitArray.length ;
    onceNumberLCDIndex++
  ) {
    return2DArray[onceNumberLCDIndex] = new Array(3);
    return2DArray[onceNumberLCDIndex] =
      _displayOneDigit(digitArray[onceNumberLCDIndex]);
  }
  return return2DArray;
};

export const BuildString = (return2DArray: string[][]): string => {
  const stringLine: string[] = new Array(3);
  let stringWithAllNumbers: string = '';
  for (let line = 0 ; line < 3 ; line++) {
    stringLine[line] = '';
    // tslint:disable-next-line prefer-for-of
    for (let onceNumberLCDIndex = 0 ;
      onceNumberLCDIndex < return2DArray.length ;
      onceNumberLCDIndex++
    ) {
      stringLine[line] =
        `${stringLine[line]} ${return2DArray[onceNumberLCDIndex][line]}`;
    }
    line === 0
      ? stringWithAllNumbers = `${stringLine[line]}\n`
      : stringWithAllNumbers = `${stringWithAllNumbers}${stringLine[line]}\n`;
  }
  return stringWithAllNumbers;

};

// vim: sw=2 ts=2 et:
