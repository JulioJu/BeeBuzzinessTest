/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Tue 22 Oct 2019 01:10:49 PM CEST
  *       MODIFIED: Tue 22 Oct 2019 04:54:56 PM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

import { parseCommandLine } from '../src/setup-server-and-command-line-parser';
import { Logger } from '../logger';
import * as sinon from 'sinon';

describe('lcd-display tests', () => {

  test('Should return 2',
    () => {
      const logger = new Logger(false);
      const spyLoggerInfoArg = sinon.spy(logger, 'info');
      const returnCode =
        parseCommandLine(
          ['node', './build/src/index.js'],
          logger
        );
      expect(spyLoggerInfoArg.called)
        .toEqual(true);
      expect(spyLoggerInfoArg.getCall(0).args[0])
      .toEqual(
        'You must use at least one argument composed only of digits: e.g. `./yarn start 798778`'
      );
      expect(returnCode)
        .toEqual(2);
    });

  test('Should return 3',
    () => {
      const logger = new Logger(false);
      const spyLoggerErrorArg = sinon.spy(logger, 'error');
      const returnCode =
        parseCommandLine(
          ['node', './build/src/index.js', '0123456789', '134'],
          logger
        );
      expect(spyLoggerErrorArg.called)
        .toEqual(true);
      expect(spyLoggerErrorArg.getCall(0).args[0])
        .toEqual(
          'You must use at least one argument composed only of digits: e.g. `./yarn start 798778`'
        );
      expect(returnCode)
        .toEqual(3);
    });

  test('Should return 4',
    () => {
      const logger = new Logger(false);
      const spyLoggerErrorArg = sinon.spy(logger, 'error');
      const returnCode =
        parseCommandLine(
          ['node', './build/src/index.js', '123a'],
          logger
        );
      expect(spyLoggerErrorArg.called)
        .toEqual(true);
      expect(spyLoggerErrorArg.getCall(0).args[0])
        .toEqual(
          `At index '3' of the string '123a', the character 'NaN' is not a number (\`NaN\`)`
        );
      expect(spyLoggerErrorArg.getCall(1).args[0])
        .toEqual(
          'You must use at least one argument composed only of digits: e.g. `./yarn start 798778`'
        );
      expect(returnCode)
        .toEqual(4);
    });

  test('Should return 0',
    () => {
      const logger = new Logger(true);
      const spyLoggerDisplayLCDArg = sinon.spy(logger, 'displayLCD');
      const returnCode =
        parseCommandLine(
          ['node', './build/src/index.js', '0123456789'],
          logger
        );
      expect(spyLoggerDisplayLCDArg.called)
        .toEqual(true);
      expect(spyLoggerDisplayLCDArg.getCall(0).args[0])
        .toEqual(
            '  _       _   _       _   _   _   _   _ \n'
          + ' | |   |  _|  _| |_| |_  |_    | |_| |_|\n'
          + ' |_|   | |_   _|   |  _| |_|   | |_|  _|'
        );
      expect(returnCode)
        .toEqual(0);
    });

});

// vim: sw=2 ts=2 et:
