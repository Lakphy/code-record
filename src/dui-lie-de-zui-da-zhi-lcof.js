var MaxQueue = function () {
  this.queue = [];
  this.index = -1;
  this.maxStack = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  return this.maxStack[0] || -1;
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.queue.push(value);
  while (1) {
    if (this.maxStack[this.maxStack.length - 1] < value) this.maxStack.pop();
    else {
      this.maxStack.push(value);
      break;
    }
  }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.index === this.queue.length - 1) return -1;
  else {
    this.index++;
    const val = this.queue[this.index];
    if (this.maxStack[0] === val) this.maxStack.shift();
    return val;
  }
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
