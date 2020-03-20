const td = require('testdouble');
const { expect } = require('chai');

describe('Mock Class (td.replace)', function () {

  afterEach(function () { td.reset() });
  beforeEach(function () {
    this.util = td.replace('./util');
  });

  it('should mock require', function () {
    // given
    td.when(this.util.prototype.sum(1, 2)).thenReturn(8);

    const dep = require('./index');
    // when
    const [sum, sub] = dep(1,2);
    // then
    expect(sum).to.equal(8);
  });

  it('should mock static function', function () {
    // given
    td.when(this.util.sumTimesSubtraction(1, 2)).thenReturn(12);

    const dep = require('./index');
    // when
    const [, , sumTimesSub] = dep(1,2);
    // then
    expect(sumTimesSub).to.equal(12);
  });
});


describe('Mock Class (td.constructor)', function () {

  afterEach(function () { td.reset() });
  beforeEach(function () {
    const utilClass = require('./util');
    const utilMock = td.constructor(utilClass);
    this.util = td.replace('./util', utilMock);
  });

  it('should mock require', function () {
    // given
    td.when(this.util.prototype.sum(1, 2)).thenReturn(8);

    const dep = require('./index');
    // when
    const [sum, sub] = dep(1,2);
    // then
    expect(sum).to.equal(8);
  });

  it('should mock static function', function () {
    // given
    td.when(this.util.sumTimesSubtraction(1, 2)).thenReturn(12);

    const dep = require('./index');
    // when
    const [, , sumTimesSub] = dep(1,2);
    // then
    expect(sumTimesSub).to.equal(12);
  });
});
