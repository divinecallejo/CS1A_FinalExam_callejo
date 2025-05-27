
// getting 2 words from the user input
let word1 = prompt("Enter the first word(RACECAR): ");
let word2 = prompt("Enter the second word(RECORDER): ");

// Function to reverse a string
function reverseWord(word) {
    return word.split('').reverse().join('');
}

// Reverse the words
let reversedWord1 = reverseWord(word1);
let reversedWord2 = reverseWord(word2);

// Display original and reversed words
console.log("Original Word1:", word1);
console.log("Reversed Word1:", reversedWord1);

console.log("Original Word2:", word2);
console.log("Reversed Word2:", reversedWord2);

// Check and display if each word is a palindrome
console.log("Is Word1 a Palindrome?", word1 === reversedWord1);
console.log("Is Word2 a Palindrome?", word2 === reversedWord2);
