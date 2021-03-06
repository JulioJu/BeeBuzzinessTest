/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Tue 22 Oct 2019 02:00:39 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 04:50:39 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import * as  sinon from 'sinon';
import { main } from '../src';
import { Logger } from '../logger';

const silentLogger = new Logger(false);

describe('Main tests', () => {

  test('Should exit with error code 2',
    () => {
      const spyArgOfTheCallback = sinon.fake();
      main(
        spyArgOfTheCallback,
        ['node', './build/src/index.js'],
        silentLogger
      );
      expect(spyArgOfTheCallback.called)
        .toEqual(true);
      expect(spyArgOfTheCallback.getCall(0).args[0])
        .toEqual(2);
    });

  test('Should exit with error code 3',
    () => {
      const spyArgOfTheCallback = sinon.fake();
      main(
        spyArgOfTheCallback,
        ['node', './build/src/index.js', '0123456789', '134'],
        silentLogger
      );
      expect(spyArgOfTheCallback.called)
        .toEqual(true);
      expect(spyArgOfTheCallback.getCall(0).args[0])
        .toEqual(3);
    });

  test('Should exit with error code 4',
    () => {
      const spyArgOfTheCallback = sinon.fake();
      main(
        spyArgOfTheCallback,
        ['node', './build/src/index.js', '123a'],
        silentLogger
      );
      expect(spyArgOfTheCallback.called)
        .toEqual(true);
      expect(spyArgOfTheCallback.getCall(0).args[0])
        .toEqual(4);
    });

  test('Should exit with code 0',
    () => {
      const spyArgOfTheCallback = sinon.fake();
      main(
        spyArgOfTheCallback,
        ['node', './build/src/index.js', '0123456789'],
        silentLogger
      );
      expect(spyArgOfTheCallback.called)
        .toEqual(true);
      expect(spyArgOfTheCallback.getCall(0).args[0])
        .toEqual(0);
    });

});

// vim: sw=2 ts=2 et:
