"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        // anytime we have a class that inherits from another, 
        // the child has to call the super() inside constructor 
        // which is a reference to that parent class' constructor
        super();
        this.data = data;
    }
    // set up accessor (getter)
    // this makes length accessible like a property, w/ .length
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
const collection = new NumbersCollection([1, 2, 3]);
collection.length;
