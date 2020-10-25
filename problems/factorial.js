/**
 * Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop.
 */

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIteratve(number) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

const iterative = findFactorialIteratve(5); // O(n)
const recursive = findFactorialRecursive(5); // O(n)
console.log({ iterative, recursive });
