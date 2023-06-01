/**
 * @param {number[]} nums
 */
class ArrayWrapper {
  constructor(nums) {
    this.array = nums;
  }

  valueOf() {
    return this.array.reduce((sum, element) => sum + element, 0);
  }

  toString() {
    return `[${this.array.join(',')}]`;
  }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */