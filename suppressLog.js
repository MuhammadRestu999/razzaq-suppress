/**
 * @typedef Option
 * @prop {boolean} caseSensitive
 */

/**
 * Suppresses console.log messages containing the specified text.
 * @param {string} text - The text to filter out from console.log messages.
 * @param {Option} [options] - Additional option to ignore logs (Optional)
 */
export const suppressLog = (text, options = {}) => {
  if(typeof text !== "string") throw new TypeError(`The "text" argument must be of type string. Received ${text === undefined ? text : "an instance of " + text.constructor?.name}`);
  if(!text.length) throw new Error("The \"text\" argument is required.");

  const originalConsoleLog = console.log;
  console.log = (...args) => {
    args = args.filter((v) => {
      if(typeof v !== "string") return true;
      const val = options.caseSensitive ? v.toLowerCase() : v;
      const ignored = options.caseSensitive ? text.toLowerCase() : text;
      return !val.includes(ignored);
    });
    if(args.length) originalConsoleLog(...args);
  };
};
