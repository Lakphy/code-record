var RecentCounter = function () {
  this.queue = [];
  this.begin = -1;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  // console.log(this.begin);
  // console.log(this.queue);
  for (let i = this.begin; i < this.queue.length; i++) {
    if (this.queue[i] >= t - 3000) {
      this.begin = i - 1;
      return this.queue.length - i;
    }
  }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
