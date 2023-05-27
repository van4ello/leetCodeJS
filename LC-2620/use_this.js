/**
 * @param {number} n
 * @return {Function}
 */
var createCounter = function(n) {
    this.count = n;
    return function() {
        return this.count++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */