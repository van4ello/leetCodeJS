/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = n => {
  const counter = function* () {
    let count = n;
    while (true) {
      yield count;
      count += 1;
    }
  }
  const iterator = counter();
  return () => iterator.next().value;
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */