/**
 * Implement merge sort.
 * [8,3,5,2,4,6,1,7,9] => [1,2,3,4,5,6,7,8,9]
 */

function mergeSort(list) {
  if (list.length === 1) {
    return list;
  }
  const halfIndex = Math.floor(list.length / 2);
  const left = list.slice(0, halfIndex);
  const right = list.slice(halfIndex, list.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  if (left.length === 1 && right.length === 1) {
    return right[0] > left[0] ? left.concat(right) : right.concat(left);
  }

  let sortedList = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (right.length > rightIndex && left.length > leftIndex) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedList.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedList.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return sortedList
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

const res = mergeSort([8, 3, 5, 2, 4, 6, 1, 7, 9]);
console.log(res);
