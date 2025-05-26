// Arrays containing names and ages
let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 = [24, 65, 21, 5, 9];

// Check if both arrays have the same length
if (subArray1.length !== subArray2.length) {
  console.error("Error: The lengths of the name and age arrays do not match.");
} else {
  // Array that will hold the restructured multi-dimensional array
  let combinedArray = [];

  // Combine names and ages into [name, age] pairs
  for (let i = 0; i < subArray1.length; i++) {
    combinedArray.push([subArray1[i], subArray2[i]]);
  }

  console.log("Restructured Multi-Dimensional Array:");

  // Log each [name, age] pair on its own line
  for (let i = 0; i < combinedArray.length; i++) {
    console.log(`Name: ${combinedArray[i][0]}, Age: ${combinedArray[i][1]}`);
  }
}

