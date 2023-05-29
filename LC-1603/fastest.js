const C_BIG_CAR = 1;
const C_MEDIUM_CAR = 2;
const C_SMALL_CAR = 3;

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

// LOOKUP TABLE
var ParkingSystem = function(...args) {
  this.parking = args;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (this.parking[carType - 1] > 0) {
    this.parking[carType - 1] -= 1;
    return true;
  }

  return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */