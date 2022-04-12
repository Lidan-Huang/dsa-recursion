/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) { 
  if (words.length === 0) return 0;

  let max = longest(words.slice(1));
   
  if (words[0].length > max) {
    max = words[0].length;          
  }
  return max;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  
  return isPalindrome(str.slice(1,-1));  
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1;
  if (arr[0] === val) return 0;

  let got = findIndex(arr.slice(1), val);

  return got === -1 ? -1 : 1 + got;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";

  return str.slice(-1) + revString(str.slice(0,-1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if (obj == {}) return [];

  for (let key in obj) {
    if ()
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
