/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Sat 19 Oct 2019 04:37:51 PM CEST
  *       MODIFIED: Mon 21 Oct 2019 08:13:00 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import { Main } from '../src/index';
import * as  assert from 'assert';

describe('Main', () => {

  test('Should return true', () => {
    const returnValue = Main();
    assert.strictEqual(returnValue, true);
  });

});

// vim: sw=2 ts=2 et:
