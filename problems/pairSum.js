/**
 * Given two arrays, create a function let a user know (true/false)
 * whether these two array contains pairs which sum is equals to the input value.
 *
 * example:
 * input: [1,2,3,9], sum = 8  // output: false
 * input: [1,2,4,4], sum = 8  // output: true
 */

const containsPairSum = (list, sum) => {
  const mySet = new Set();

  for (let elem of list) {
    if (mySet.has(elem)) return true;
    mySet.add(sum - elem);
  }
  return false;
};

containsPairSum([1, 2, 4, 4], 8);
// Time complexity O(n)
// Space complexity O(n)
