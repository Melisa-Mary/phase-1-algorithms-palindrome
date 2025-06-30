function isPalindrome(word) {
  // Reverse the word and compare it to the original
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}
// You can run this file to test the isPalindrome function
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome"));
}

module.exports = isPalindrome;
