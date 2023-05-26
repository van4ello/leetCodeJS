/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
// [1, [2, [2, 4, [[[[[3]]]]]]]]
// [1,2,2,4,3]
var flat = function (arr, n) {
  var flatArray = [];
  var flatten = function (ar, k) {
    ar.forEach(val => {
      if (Array.isArray(val) && k !== 0) {
        flatten(val, k - 1);
      } else {
        flatArray.push(val);
      }
    });
    return flatArray;
  }
  return flatten(arr, n);
};