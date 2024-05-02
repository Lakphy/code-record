
var RecentCounter = function () {
    this.list = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    const arr = this.list;
    arr.push(t);
    const t2 = t - 3000;
    while (arr[0] < t2) arr.shift();
    return arr.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */