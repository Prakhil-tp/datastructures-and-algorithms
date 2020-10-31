/**
 * Given a nmber N return the index value of finbonacci sequence, where the sequence is:
 * 0,1,1,2,3,5,8,13,21,34,55,89,144 ...
 * the pattern of the sequence is that each value is the sum of the  2 previous values, that means that for N=5  -> 2+3
 */

function fibonacciIterative(N) {
  const sequence = [0, 1];

  for (let i = 2; i <= N; i++) {
    let first = sequence[i - 1];
    let second = sequence[i - 2];
    sequence[i] = first + second;
  }
  return sequence[N];
}

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const iterative = fibonacciIterative(6); // O(n) linear time
const recursive = fibonacciRecursive(8); // O(2^N) exponential time

console.log({ iterative, recursive });

// using dynamic programming to  optimize the recursive fn
const fibMemoized = () => {
  let cache = {};

  const fib = (n) => {
    if (n < 2) return n;
    if (n in cache) return cache[n];
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };

  return fib;
};

const memoized = fibMemoized();
const value = memoized(10); // O(n) linear time
console.log({ memoized: value });
