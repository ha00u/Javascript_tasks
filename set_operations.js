
let set1 = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);
let unionSet = new Set([...set1, ...set2]);
console.log("Union of set1 and set2:", unionSet);
let isSubset = [...set1].every(element => set2.has(element));
console.log("Is set1 a subset of set2:", isSubset);
let elementToRemove = 4;
set2.delete(elementToRemove);
console.log("set2 after removing element:", set2);
let arrayFromSet1 = Array.from(set1);
console.log("Array from set1:", arrayFromSet1);
