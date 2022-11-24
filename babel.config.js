/**
 * Babel configuration.
 *
 * @param api
 * @returns {{presets: string[]}}
 */
module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
