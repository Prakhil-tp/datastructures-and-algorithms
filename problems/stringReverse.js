/**
 * Create a function that reverse a string.
 * 'Hi my name is prakhil' should be:
 * 'lihkarp si eman ym iH'
 */

function reverse(str) {
  // check input always
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that's not good";
  }

  let newArray = [];

  for (let i = str.length - 1; i >= 0; i--) {
    newArray.push(str[i]);
  }

  return newArray.join("");
}

const result = reverse("Hi my name is prakhil");
console.log(result);

/**
 * time complexity: O(n)
 * space complexity: O(n)
 */

function reverse2(str) {
  return str.split("").reverse().join("");
}

const result2 = reverse2("Hey there");
console.log(result2);

const reverse3 = (str) => [...str].reverse().join("");
const result3 = reverse3("hellow there");
console.log(result3);
