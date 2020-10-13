/**
 * create a function to merge two sorted arrays.
 * [0,3,4,31] [4,6,30] should be:
 * [0,3,4,4,6,30,31]
 */

const validateInputs = (list1, list2) => {
  if (!list1 || !list2) return "Hmm that's not good!";
  else if (!list1.length || !list2.length) {
    return list1.length ? list1 : list2;
  }
  return null;
};

const mergeSortedArray = (list1, list2) => {
  const res = validateInputs(list1, list2);
  if (res) return res;
  const result = list1.concat(list2);
  return result.sort((a, b) => a - b);
};

const res = mergeSortedArray([0, 3, 4, 31], [4, 6, 30]);
console.log(res);

/**
 * time complexity : O(m+n log n+m)
 * space complexity : O(n + m)
 */

const mergeSortedArray1 = (list1, list2) => {
  if (!list1.length || !list2.length) {
    return list1.length ? list1 : list2;
  }

  const listLength = list1.length + list2.length;
  const mergedList = [];

  let [i, j] = [0, 0];

  while (mergedList.length !== listLength) {
    let firstArrayItem = list1[i];
    let secondArrayItem = list2[j];

    if (
      typeof secondArrayItem === "undefined" ||
      firstArrayItem < secondArrayItem
    ) {
      mergedList.push(firstArrayItem);
      i++;
    } else {
      mergedList.push(secondArrayItem);
      j++;
    }
  }

  return mergedList;
};

const result = mergeSortedArray1([2, 3, 4, 31], [0, 4, 6, 30]);
console.log(result);

/**
 * time complexity : O(n+m)
 * space complexity: O(n+m)
 */
