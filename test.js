const numbers = [12, 54, 1, 35, 68, 96, 2, 4, 15];
const findEven = numbers.filter((x) => x % 2 === 0);
const findDividedBy5 = numbers.filter((x) => x % 5 === 0); // === 1 for finding odd
const greaterThan20 = numbers.filter((x) => x > 20);
const removeSpecificOne = numbers.filter((x) => x !== 35);

console.log(findEven); // [ 12, 54, 68, 96, 2, 4 ]
console.log(findDividedBy5);
console.log(greaterThan20);
console.log(removeSpecificOne); // all but not 35
