const td = require('testdouble');
const { expect } = require('chai');

describe('Mock Dog', function () {
  it('should bark', function () {
    // given
    const animal = { type: 'dog', bark: td.func()}
    const bark = require('./index')
    // when
    bark(animal, 2)
    // then
    td.verify(animal.bark(2));
  })

  it('cat should not bark', function () {
    // given
    const animal = { type: 'cat', bark: td.func()}
    const bark = require('./index')
    // when
    bark(animal, 2)
    // then
    td.verify(animal.bark(2), { times: 0 });
  })
})
