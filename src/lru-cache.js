/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.head = new LRUNode(null, null, null, null);
  this.tail = new LRUNode(null, null, null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.hash = Object.create(null);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const last = this.hash[key];
  if (last) {
    const prev = last.prev;
    const next = last.next;
    prev.next = next;
    next.prev = prev;
    const newest = this.tail.prev;
    newest.next = last;
    last.prev = newest;
    last.next = this.tail;
    this.tail.prev = last;
    return last.value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // console.log(this.hash);
  // console.log(this.head);
  const last = this.hash[key];
  if (last) {
    last.value = value;
    const prev = last.prev;
    const next = last.next;
    prev.next = next;
    next.prev = prev;
    const newest = this.tail.prev;
    newest.next = last;
    last.prev = newest;
    last.next = this.tail;
    this.tail.prev = last;
  } else {
    if (this.size === this.capacity) {
      const del = this.head.next;
      const next = del.next;
      this.head.next = next;
      next.prev = this.head;
      delete this.hash[del.key];
      this.size--;
    }
    const newest = this.tail.prev;
    const insert = new LRUNode(key, value, this.tail.prev, this.tail);
    this.hash[key] = insert;
    newest.next = insert;
    this.tail.prev = insert;
    this.size++;
  }
};

function LRUNode(key, value, prev, next) {
  this.key = key;
  this.value = value;
  this.prev = prev;
  this.next = next;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
