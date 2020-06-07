const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const result = source.replace('kksk', 'alex');
  // return result;
  this.callback(null, result);
}