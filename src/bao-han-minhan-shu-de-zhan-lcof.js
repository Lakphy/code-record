/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.cur = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.cur = {
    father: this.cur,
    min: this.cur ? Math.min(this.cur.min, x) : x,
    val: x,
  };
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const res = this.cur.val;
  this.cur = this.cur.father;
  return res;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.cur ? this.cur.val : null;
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.cur.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
