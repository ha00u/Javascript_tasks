let numbers = [2, 4, 5, 6, 7];
numbers.push(6);
numbers.shift();
numbers.reverse();
let strNumbers = numbers.join(', ');
let squaredNumbers = numbers.map(number => number * number);

console.log("Original Array: ", numbers);
console.log("String representation: ", strNumbers);
console.log("Squared Numbers: ", squaredNumbers);