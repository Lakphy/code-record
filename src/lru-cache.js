/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (!this.head) {
    this.head = new LRUNode(key, value, null);
    this.tail = this.head;
    this.size++;
    return;
  } else {
    let cur = this.head;
    while (cur) {
      if (cur.key === key) {
        cur.value = value;

        return;
      }
      cur = cur.next;
    }
  }
};

function LRUNode(key, value, prev) {
  this.key = key;
  this.value = value;
  this.prev = prev;
  this.next = null;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
