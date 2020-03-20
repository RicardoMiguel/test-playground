const Dep = require('./util');
const dep = new Dep();
module.exports = (a, b) => {
  return [dep.sum(a, b), dep.subtract(a, b), Dep.sumTimesSubtraction(a, b)];
};
