/**
 * Implement quick sort
 * [8,3,5,2,4,6,1,7,9] => [1,2,3,4,5,6,7,8,9]
 */

/**
 * A helper function to swap items in an array.
 * @function swap
 * @param {Array} list
 * @param {number} a - fist index to swap
 * @param {number} b - second index to swap
 */
function swap(list, a, b) {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

/**
 * A helper function to arrange array items according to the relation of pivot.
 * if the item <= pivot : goes to left of the pivot
 * else goes to right of the pivot.
 *
 * @function partition
 * @param {Array} list - Array of numbers.
 * @param {number} start - start partion from this index
 * @param {number} end - end partion at this index
 * @returns {number} - returns the index of pivot;
 */
function partition(list, start, end) {
  const pivotValue = list[end]; // set the last value of array as pivot;
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (list[i] < pivotValue) {
      swap(list, pivotIndex, i);
      pivotIndex++;
    }
  }
  swap(list, pivotIndex, end);
  return pivotIndex;
}

/**
 * A function which implements quicksort
 * @function quickSort
 * @param {Array} list - Array of numbers.
 * @param {number} start - start the sorting from this index
 * @param {number} end - end the sorting at this index
 * @returns {Array} - sorted array.
 */
function quickSort(list, start, end) {
  if (start >= end) return;

  const pivotIndex = partition(list, start, end);
  quickSort(list, start, pivotIndex - 1);
  quickSort(list, pivotIndex + 1, end);
  return list;
}

const sortedArray = quickSort([8, 3, 5, 2, 4, 6, 1, 7, 9], 0, 8);
console.log(sortedArray);
