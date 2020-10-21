/**
 * Implement insertion sort.
 * [8,3,5,2,4,6,1,7,9] => [1,2,3,4,5,6,7,8,9]
 */

function insertionSort(list) {
  for (let index = 1; index < list.length; index++) {
    let prevIndex = index - 1;
    let temp = list[index];
    while (prevIndex >= 0 && list[prevIndex] > temp) {
      list[prevIndex + 1] = list[prevIndex];
      prevIndex--;
    }
    list[prevIndex + 1] = temp;
  }
  return list;
}

const res = insertionSort([8, 3, 5, 2, 4, 6, 1, 7, 9]);
console.log(res);
/**
 * best case: O(n)
 * worst case: O(n^2)
 */
