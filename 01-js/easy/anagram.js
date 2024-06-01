/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const str1Chars = str1.split('');
  const str2Chars = str2.split('');
  const str1CharMap = {};
  const str2CharMap = {};
  for (let i = 0; i < str1Chars.length; i++) {
    const char = str1Chars[i].toLowerCase();
    str1CharMap[char] = str1CharMap[char] + 1 || 1;
  }
  for (let i = 0; i < str2Chars.length; i++) {
    const char = str2Chars[i].toLowerCase();
    str2CharMap[char] = str2CharMap[char] + 1 || 1;
  }
  for (let key in str1CharMap) {
    if (str1CharMap[key] !== str2CharMap[key]) return false;
  }
  return true;
}

module.exports = isAnagram;
