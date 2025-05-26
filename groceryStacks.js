// Initialize an empty array for the grocery stack and set the maximum size
let groceryStack = [];
const maxSize = 5;

// Arrays to track added and removed items
let addedItems = [];    
let removedItems = []; 

// Peek function: displays the top item of the stack without removing it
function peek() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty.");
    return null;
  } else {
    console.log("Top of stack (peek):", groceryStack[groceryStack.length - 1]);
    return groceryStack[groceryStack.length - 1];
  }
}

// Push function: adds an item to the stack if not full
function push(item) {
  if (groceryStack.length < maxSize) {
    groceryStack.push(item);
    addedItems.push(item); 
    alert(`Item "${item}" added to stack. Current stack size: ${groceryStack.length}`);
    console.log(`Item "${item}" added to stack. Current stack size: ${groceryStack.length}`);
  } else {
    alert("Stack is full. Cannot add more items.");
    console.log("Stack is full. Cannot add more items.");
  }
  peek(); // Display the top item after adding
  console.log("Current Stack:", groceryStack);
}

// Pop function: removes the most recently added item from the stack
function pop() {
  if (groceryStack.length === 0) {
    alert("Stack is empty. Nothing to remove.");
    console.log("Stack is empty. Nothing to remove.");
  } else {
    let removedItem = groceryStack.pop();
    removedItems.push(removedItem); 
    alert(`Item "${removedItem}" removed from stack. Current stack size: ${groceryStack.length}`);
    console.log(`Item "${removedItem}" removed from stack. Current stack size: ${groceryStack.length}`);
  }
  peek(); // Display the top item after removing
  console.log("Current Stack:", groceryStack);
}

// User interaction loop for adding or removing items
let choice;
do {
  choice = prompt(
    "Choose an action:\n1 - Add Item \n2 - Remove Item \n3 - Exit"
  );

  if (choice === "1") {
    let item = prompt("Enter the grocery item to add:").trim();
    if (item) {
      push(item); // Call push function to add item
    } else {
      alert("No item entered."); // Alert if no item is provided
    }
  } else if (choice === "2") {
    pop(); // Call pop function to remove item
  } else if (choice !== "3") {
    alert("Invalid choice. Please enter 1, 2, or 3."); // Alert for invalid input
  }
} while (choice !== "3"); // Continue until the user chooses to exit

// Summary of the added and removed items upon exit
alert(
  "Exited.\n\n" +
  "Final Grocery Stack:\n" + groceryStack.join(", ") + "\n\n" +
  "All Added Items:\n" + addedItems.join(", ") + "\n\n" +
  "All Removed Items:\n" + removedItems.join(", ")
);

// Log final results to the console
console.log("Exited. Final Grocery Stack:", groceryStack);
console.log("All Added Items:", addedItems);
console.log("All Removed Items:", removedItems);
