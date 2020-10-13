/**
 * Google question: find first recurring number in given array.
 * Given array = [2,5,1,2,3,5,1,2,4]
 * It should return 2
 * =========
 * Given array = [2,1,1,2,3,5,1,2,4]:
 * It should return 1
 * =========
 * Given array = [2,3,4,5]:
 * It should return undefined
 */

const firstRecurringNumber = (list) => {
  const stack = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] === list[i + 1]) return list[i];
    else if (stack.length && stack.includes(list[i])) {
      return list[i];
    }
    stack.push(list[i]);
  }
};

firstRecurringNumber([2, 5, 1, 2, 3, 5, 1, 2, 4]);
/**
 * time complexity O(n^2)
 * space complexity O(n)
 */

const firstRecurringNumberHash = (list) => {
  const numSet = new Set();

  for (let i = 0; i < list.length; i++) {
    if (list[i] === list[i + 1]) return list[i];
    else if (numSet.has(list[i])) {
      return list[i];
    }
    numSet.add(list[i]);
  }
};
const result = firstRecurringNumberHash([1, 0, 3, 0, 5]);
console.log(result);
/**
 * time complexity O(n)
 * space complexity O(n)
 */
