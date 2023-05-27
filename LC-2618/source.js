/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  if (classFunction == null) return false;

  while (obj != null) {
    obj = Object.getPrototypeOf(obj);
    if (obj === classFunction.prototype)
      return true;
  }
  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */