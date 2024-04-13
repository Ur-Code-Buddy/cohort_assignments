function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let charCount = {};

 
  for (let char of str1) {
    char = char.toLowerCase();
    charCount[char] = (charCount[char] || 0) + 1;
  }

 
  for (let char of str2) {
    char = char.toLowerCase();
    if (!charCount[char]) {
      return false; 
    }
    charCount[char]--;
  }


  for (let char in charCount) {
    if (charCount[char] !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
