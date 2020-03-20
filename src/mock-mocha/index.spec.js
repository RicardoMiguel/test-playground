const td = require('testdouble');
const { expect } = require('chai');

describe('Mock', () => {

  afterEach(()=> {
    td.reset()
  });

  it('should just work', () => {
    const mock = require('./index');

    const [sum, sub] = mock(1, 2);

    expect(sum).to.equal(3);
    expect(sub).to.equal(-1);
  });

  it('should mock', () => {
    td.replace('./util', {
      sum: (a, b) => a - b,
      subtract: (a, b) => a + b
    });
    const mock = require('./index');

    const [sum, sub] = mock(1, 2);

    expect(sum).to.equal(-1);
    expect(sub).to.equal(3);
  });

  it('should mock - second edition', () => {
    const multiply = (a, b) => a * b
    const divide = (a, b) => a / b
    td.replace('./util', { sum: multiply, subtract: divide });
    const mock = require('./index');

    const [sum, sub] = mock(1, 2);
    
    expect(sum).to.equal(2);
    expect(sub).to.equal(0.5);
  });
});
