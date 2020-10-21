/**
 * Implement selection sort.
 * [8,3,5,2,4,6,1,7,9] => [1,2,3,4,5,6,7,8,9]
 */

function selectionSort(list) {
  let length = list.length;
  for (let i = 0; i < length; i++) {
    let smallest = i;
    for (let j = i; j < length; j++) {
      if (list[j] < list[smallest]) {
        smallest = j;
      }
    }
    // swap
    let temp = list[i];
    list[i] = list[smallest];
    list[smallest] = temp;
  }
  return list;
}
const numbers = [8, 3, 5, 2, 4, 6, 1, 7, 9];
const sortedList = selectionSort(numbers); // O(n^2)
console.log(sortedList);
