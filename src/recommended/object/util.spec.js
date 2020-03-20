const td = require('testdouble');
const { expect } = require('chai');

describe('Mock Object', function () {

  afterEach(function () { td.reset() })
  beforeEach(function () {
    this.util = td.replace('./util')
  })

  it('should mock require', function () {
    // given
    td.when(this.util.sum(1, 2)).thenReturn(8)

    const dep = require('./index')
    // when
    const [sum, sub] = dep(1, 2)
    // then
    expect(sum).to.equal(8);
  })
})
