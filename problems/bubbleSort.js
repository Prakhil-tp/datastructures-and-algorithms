/**
 * implement bubble sort.
 * [1,3,5,2,53,8,7,4] => [1,2,3,4,5,7,8,53]
 */

function bubbleSort(list) {
  let length = list.length;
  while (length > 1) {
    for (let j = 0; j < length; j++) {
      if (list[j] > list[j + 1]) {
        swap(j, j + 1);
      }
    }
    length--;
  }

  function swap(index, nextIndex) {
    const temp = list[index];
    list[index] = list[nextIndex];
    list[nextIndex] = temp;
  }
  return list;
}

const numbers = [1, 3, 5, 2, 53, 8, 7, 98, 100, 23, 15, 4];
const sortedList = bubbleSort(numbers); // O(n^2)
console.log(sortedList);
