/* =============================================================================
  *         AUTHOR: JulioJu
  *         GITHUB: https://github.com/JulioJu
  *        LICENSE: MIT (https://opensource.org/licenses/MIT)
  *        CREATED: Tue 22 Oct 2019 10:42:41 AM CEST
  *       MODIFIED: Tue 22 Oct 2019 11:41:02 AM CEST
  *
  *          USAGE:
  *
  *    DESCRIPTION:
  * ============================================================================
  */

// tslint:disable no-console no-any no-unsafe-any

/**
 * Strongly inspired from https://www.npmjs.com/package/console-info
 *
 */
export const info = (...args: any): void => {
  const data = {
    icon: '\u2139',

    blueBg: '\x1b[44m',
    blueFg: '\x1b[36m',
    whiteFg: '\x1b[37m',

    reset: '\x1b[0m',
    reverse: '\x1b[7m'
  };
  console.info(
    data.blueBg + data.whiteFg,
    data.icon,
    data.reset,
    data.blueFg,
    ...args,
    data.reset
  );
};

/**
 * Strongly inspired from https://www.npmjs.com/package/console-info
 *
 */
export const debug = (...args: any): void => {
  const data = {
    icon: 'd',

    blueBg: '\x1b[44m',
    blueFg: '\x1b[36m',
    whiteFg: '\x1b[37m',

    reset: '\x1b[0m',
    reverse: '\x1b[7m'
  };
  console.debug(
    data.blueBg + data.whiteFg,
    data.icon,
    data.reset,
    data.blueFg,
    ...args,
    data.reset
  );
};

// tslint:disable-next-line:no-any
export const log = (...args: any): void => {
  console.log(args);
};

/**
 * Strongly inspired from https://www.npmjs.com/package/console-warn
 *
 */
export const warn = (...args: any): void => {
  const data = {
    icon: '\u26A0',

    yellowBg: '\x1b[43m',
    yellowFg: '\x1b[33m',
    whiteFg: '\x1b[37m',

    reset: '\x1b[0m',
    reverse: '\x1b[7m'
  };
  console.warn(
    data.yellowBg + data.whiteFg,
    data.icon,
    data.reset,
    data.yellowFg,
    ...args,
    data.reset
  );
};

export const error = (...args: any): void => {
  const data = {
    icon: '✘',

    redBg: '\x1b[41m',
    redFg: '\x1b[31m',
    whiteFg: '\x1b[37m',

    reset: '\x1b[0m',
    reverse: '\x1b[7m'
  };
  console.error(
    data.redBg + data.whiteFg,
    data.icon,
    data.reset,
    data.redFg,
    ...args,
    data.reset
  );
};

export const displayLCD = (...args: any): void => {
  console.log(...args);
};

// vim: sw=2 ts=2 et:
