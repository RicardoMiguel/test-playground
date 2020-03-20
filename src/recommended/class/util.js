module.exports = class {

  sum (a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  static sumTimesSubtraction (a, b) {
    return (a + b) * (a - b);
  }
};
