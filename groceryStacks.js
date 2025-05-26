let groceryStack = [];
const maxSize = 5;

let addedItems = [];    
let removedItems = []; 

// Peek function
function peek() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty.");
    return null;
  } else {
    console.log("Top of stack (peek):", groceryStack[groceryStack.length - 1]);
    return groceryStack[groceryStack.length - 1];
  }
}

// Push function: adds an item 
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
  peek();
  console.log("Current Stack:", groceryStack);
}

// Pop function: removes the added item
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
  peek();
  console.log("Current Stack:", groceryStack);
}

// User interaction
let choice;
do {
  choice = prompt(
    "Choose an action:\n1 - Add Item \n2 - Remove Item \n3 - Exit"
  );

  if (choice === "1") {
    let item = prompt("Enter the grocery item to add:").trim();
    if (item) {
      push(item);
    } else {
      alert("No item entered.");
    }
  } else if (choice === "2") {
    pop();
  } else if (choice !== "3") {
    alert("Invalid choice. Please enter 1, 2, or 3.");
  }
} while (choice !== "3");

// Summary of the added and removed items
alert(
  "Exited.\n\n" +
  "Final Grocery Stack:\n" + groceryStack.join(", ") + "\n\n" +
  "All Added Items:\n" + addedItems.join(", ") + "\n\n" +
  "All Removed Items:\n" + removedItems.join(", ")
);

console.log("Exited. Final Grocery Stack:", groceryStack);
console.log("All Added Items:", addedItems);
console.log("All Removed Items:", removedItems);
