// Arrays contains names and ages
let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 = [24, 65, 21, 5, 9];

let combinedArray = [];

// Combine names and ages into [name, age] pairs
for (let i = 0; i < subArray1.length; i++) {
  combinedArray.push([subArray1[i], subArray2[i]]);
}

console.log("Restructured Multi-Dimensional Array:");

// Log each [name, age] pair on its own line
for (let i = 0; i < combinedArray.length; i++) {
  console.log(combinedArray[i]);
}
