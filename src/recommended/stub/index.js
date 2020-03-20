function makeDogBark(animal, times = 1) {
  if (animal.type === 'dog') {
    animal.bark(times);
  }
}

module.exports = makeDogBark;
