/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newstr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  for(let i =0; i<newstr.length/2; i++){
    if(newstr[i] !== newstr[newstr.length-1-i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
