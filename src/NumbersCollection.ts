import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
   // anytime we have a class that inherits from another, 
   // the child has to call the super() inside constructor 
   // which is a reference to that parent class' constructor
  super();
  }

  // set up accessor (getter)
  // this makes length accessible like a property, w/ .length
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

const collection = new NumbersCollection([1,2,3]);
collection.length