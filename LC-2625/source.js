/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
// [1, [2, [2, 4, [[[[[3]]]]]]]]
// [1,2,2,4,3]
var flat = function (arr, n) {
  if (n === 0) return arr;
  const flatArray = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      flatArray.push(...flat(elem, n - 1));
    } else {
      flatArray.push(elem);
    }
  }
  return flatArray;
};