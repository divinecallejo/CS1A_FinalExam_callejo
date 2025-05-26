// Get two words from user input
let word1 = prompt("Enter the first word (e.g., RACECAR): ").trim();
let word2 = prompt("Enter the second word (e.g., RECORDER): ").trim();

// Function to reverse a string
function reverseWord(word) {
    return word.split('').reverse().join('');
}

// Reverse both words
let reversedWord1 = reverseWord(word1);
let reversedWord2 = reverseWord(word2);

// Show original and reversed words
console.log("Original Word1:", word1);
console.log("Reversed Word1:", reversedWord1);

console.log("Original Word2:", word2);
console.log("Reversed Word2:", reversedWord2);

// Check if words are palindromes (case-insensitive)
let isPalindrome1 = word1.toLowerCase() === reversedWord1.toLowerCase();
let isPalindrome2 = word2.toLowerCase() === reversedWord2.toLowerCase();

console.log("Word1 is Palindrome?", isPalindrome1);
console.log("Word2 is Palindrome?", isPalindrome2);
