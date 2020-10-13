/**
 * Given 2 arrays, create a function that let's a user know (true/false)
 * whether these two arrays contains any common items.
 *
 * example:
 * const array1 = ['a','b','c','x'];
 * const array2 = ['z','y','i'];
 * should return false
 *
 * =====================
 *
 * const array1 = ['a','b','c','x'];
 * const array2 = ['z','y','x'];
 * should return true
 */

// Naive approch
const list1 = ["a", "b", "c", "x"];
const list2 = ["z", "y", "i"];

const commonItems = (firstList, secondList) => {
  for (let elem of firstList) {
    const found = secondList.some((item) => item === elem);
    if (found) return true;
  }
  return false;
};
commonItems(list1, list2); // O(n*m) bilinear time

// Better Approach
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

const commonArrayItems = (firstList, secondList) => {
  const map = {}; // using hash table
  for (let elem of firstList) {
    if (!map[elem]) map[elem] = true;
  }
  for (let item of secondList) {
    if (map[item]) return true;
  }
  return false;
};
commonArrayItems(array1, array2); // O(n+m)
