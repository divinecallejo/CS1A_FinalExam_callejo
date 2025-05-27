// Array for numbers
let numbers = [];

// Ask user for input
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Enter a number:"));
    numbers.push(num);
}

// Bubble Sort function
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do
swapped = false; // Reset swapped flag for each pass
        for (let i = 0; i < n - 1; i++) {
            console.log(`Comparing ${arr[i]} and ${arr[i + 1]}`); // Log comparison
if (arr[i] > arr[i + 1]) {
                // Swap elements if they are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
swapped = true; // Make swapped flag true
            }
        }
        n--; // Decrease the range of comparison
} while (swapped); // Keep going until there are no swaps

    return arr; // Return sorted array
}

// Sort the array and log the result
let sortedArray = bubbleSort(numbers);
console.log("Sorted Array:", sortedArray);

