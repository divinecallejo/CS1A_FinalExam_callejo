// Declaring two variables using prompt
let word1 = prompt("Enter the first word (e.g., RACECAR): ").trim();
let word2 = prompt("Enter the second word (e.g., RECORDER): ").trim();

// Function to reverse a word
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

// Check and display if each word is a palindrome (case insensitive)
let isPalindrome1 = word1.toLowerCase() === reversedWord1.toLowerCase();
let isPalindrome2 = word2.toLowerCase() === reversedWord2.toLowerCase();

console.log("Is Word1 a Palindrome?", isPalindrome1);
console.log("Is Word2 a Palindrome?", isPalindrome2);
