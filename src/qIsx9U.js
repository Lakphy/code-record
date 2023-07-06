/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.arr = [];
  this.total = 0;
  this.size = size;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  this.arr.push(val);
  this.total += val;
  if (this.arr.length > this.size) {
    this.total = this.total - this.arr[this.arr.length - this.size - 1];
    // console.log(this.total);
    return this.total / this.size;
  } else {
    // console.log(this.total);
    return this.total / this.arr.length;
  }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
