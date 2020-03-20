const dep = require('./util');

module.exports = (a, b) => {
  return [dep.sum(a, b), dep.subtract(a, b)];
}
