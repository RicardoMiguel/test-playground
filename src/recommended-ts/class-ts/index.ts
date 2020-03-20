import { Animal, Dog } from './dog';

export function makeDogBark (animal: Animal) {

  if (animal instanceof Dog) {
    animal.bark();
  }
}
