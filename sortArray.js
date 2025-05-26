// Arrays of numbers and names
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Combine arrays into one
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers in descending order
let sortedNumbers = numbers.slice().sort((a, b) => b - a);
console.log("Descending Numbers:", sortedNumbers);

// Sort names alphabetically
let sortedNames = names.slice().sort();
console.log("Alphabetical Names:", sortedNames);
