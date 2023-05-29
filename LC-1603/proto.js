const C_BIG_CAR = 1;
const C_MEDIUM_CAR = 2;
const C_SMALL_CAR = 3;

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  switch(carType) {
    case C_BIG_CAR:
      if (this.big > 0) {
        this.big -= 1;
        return true;
      }
      break;
    case C_MEDIUM_CAR:
      if (this.medium > 0) {
        this.medium -= 1;
        return true;
      }
      break;
    case C_SMALL_CAR:
      if (this.small > 0) {
        this.small -= 1;
        return true;
      }
    default:
      break;
  }

  return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */