const rp = require('request-promise-native');
const dependency = require('./dependency');

const request = require('request');

module.exports = (callback) => {
  return request.get('https://my.harver.com/health', callback);
}
