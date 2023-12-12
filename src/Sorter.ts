export abstract class Sorter {
  // abstract keyword to stub out methods 
  abstract compare(leftIndex: number, rightIndex: number): boolean; 
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j+1)) {
          this.swap(j, j+1)
        }
      }
    }
  }
}

/** Inefficient Way to User Sorter Class W/ Unions
class Sorter {

  // Or operator (union) makes it so value needs to have properties that are common to BOTH types
  // This affects the default properties/functions that come with string and number type 
    // can only do what is available for a string AND number AND any other type we would assign
  constructor(public collection: number[] | string) {} // this shorthand is equal to above class initalization

  sort(): void {
    // const length = this.collection.length
    // The below is the same and uses destructuring
    const { length } = this.collection;

    // two nested for loops
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // comparison & swapping logic

        // Clarify type 

        // if collection is an array of numbers do this
        if (this.collection instanceof Array) { // Type guard is a check on the type
          if (this.collection[j] > this.collection[j+1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = leftHand
          }
        }

        // if collection is a string do this
        if (typeof this.collection === 'string') {
          if (this.collection[j] > this.collection[j+1]) {
            const leftHand = this.collection[j];
          }
        }
      }
    }
  }
}
*/