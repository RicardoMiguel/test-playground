import * as td from 'testdouble';

import { makeDogBark } from './index';
import { Dog } from './dog';

describe('Mock Class Typescript', function () {

  afterEach(function () { td.reset() });

  beforeEach(function () {
    this.dog = td.object<Dog>();

  });

  it('should inject dependency', function () {
    makeDogBark(this.dog);

    td.verify(this.dog.bark())
  });
});
