let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge both arrays
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers numerically in reverse order
let sortedNumbers = numbers.slice().sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse):", sortedNumbers);

// Sort names alphabetically
let sortedNames = names.slice().sort();
console.log("Sorted Names (Alphabetical):", sortedNames);
