//let array = ["Nemo"];

let array = new Array(100000).fill("Nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Nemo") {
      console.log("Found nemo!");
    }
  }
}

//findNemo(array);

// log all pairs of array.

const boxes = [1, 2, 3, 4, 5];

function logPairs(boxes) {
  boxes.forEach((box) => {
    boxes.forEach((elm) => {
      console.log(box, elm);
    });
  });
}
logPairs(boxes); // O(n^2)

//const list1 = Array(10).fill("a");
//const list2 = Array(10).fill("b");

//const commonItems = (firstList, secondList) => {
//const map = {};
//for (let elem of firstList) {
//map[elem] = true;
//}
//for (let item of secondList) {
//if (map[item]) return true;
//}
//return false;
//};
//const t0 = process.hrtime();
//const result = commonItems(list1, list2);
//const t1 = process.hrtime(t0);
//console.log(result);
//console.log(`time took ${(t1[1] - t1[0]) / 1000000} milliseconds`);
