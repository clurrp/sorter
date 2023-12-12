// Bubble Sort Algorithm - not the most efficient algo
// double nested for loop
// at every pair of elements, it'll compare if a > b, then swap
// doesn't consider last element and will continue to loop through length until there's only 1 element left

import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort()
linkedList.print();