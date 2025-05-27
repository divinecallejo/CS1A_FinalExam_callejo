//array of numbers and names
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// combined both
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers into decending orders
let sortedNumbers = numbers.slice().sort(function(a, b) {
  return b - a;
});
console.log("Sorted Numbers (Reverse):", sortedNumbers);

// Sort names alphabetically
let sortedNames = names.slice().sort();
console.log("Sorted Names (Alphabetical):", sortedNames);
