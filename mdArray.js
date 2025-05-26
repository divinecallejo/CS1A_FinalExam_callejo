// Arrays with names and ages
let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let subArray2 = [24, 65, 21, 5, 9];

if (subArray1.length !== subArray2.length) {
  console.error("Error: Lengths mismatch");
} else {
  // Combine into [name, age] pairs
  let combinedArray = [];
  for (let i = 0; i < subArray1.length; i++) {
    combinedArray.push([subArray1[i], subArray2[i]]);
  }

  // Output each pair
  console.log("Restructured Array:");
  for (let i = 0; i < combinedArray.length; i++) {
    console.log(`Name: ${combinedArray[i][0]}, Age: ${combinedArray[i][1]}`);
  }
}
