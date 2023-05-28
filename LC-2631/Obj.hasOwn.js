/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
  const group = {};
  for (const element of this) {
    const key = fn(element);
    if (!(Object.hasOwn(group, key))) group[key] = [];
    group[key].push(element);
  }
  return group; 
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */