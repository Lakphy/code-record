var StockSpanner = function () {
  this.stack = [0];
  this.all = [Infinity];
  this.idx = 0;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  // console.log(this.stack,this.all);
  this.all.push(price);
  this.idx++;
  while (this.stack.length > 0) {
    const cur = this.stack.pop();
    if (this.all[cur] > price) {
      this.stack.push(cur, this.idx);
      return this.idx - cur;
    }
  }
  this.stack.push(this.idx);
  return 1;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
