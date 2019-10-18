/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Sat 19 Oct 2019 04:37:51 PM CEST
  *       MODIFIED: Mon 21 Oct 2019 02:03:26 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import { Main } from '../src/index';

describe('Main', () => {

    test('Should return true', () => {
        const returnValue = Main();
      expect(returnValue)
        .toEqual(true);
    });

});
