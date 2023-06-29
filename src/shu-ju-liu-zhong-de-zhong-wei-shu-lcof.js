/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.leftHeap = []; // max heap
  this.rightHeap = []; // min heap
  this.median = null;
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.median === null) {
    this.median = num;
  }
  if (num < this.median) {
    // left heap
    this.leftHeap.push(num);
    // console.log(this.leftHeap, this.rightHeap);
    this.heapifyUp(this.leftHeap, this.leftHeap.length - 1, "max");
    // console.log(this.leftHeap, this.rightHeap);
  } else {
    // right heap
    this.rightHeap.push(num);
    // console.log(this.leftHeap, this.rightHeap);
    this.heapifyUp(this.rightHeap, this.rightHeap.length - 1, "min");
    // console.log(this.leftHeap, this.rightHeap);
  }
  const adjust = () => {
    // console.log(this.leftHeap, this.rightHeap);
    if (this.leftHeap.length - this.rightHeap.length === 0) {
      this.median = (this.leftHeap[0] + this.rightHeap[0]) / 2;
    } else if (this.leftHeap.length - this.rightHeap.length === 1) {
      this.median = this.leftHeap[0];
    } else if (this.leftHeap.length - this.rightHeap.length === -1) {
      this.median = this.rightHeap[0];
    } else if (this.leftHeap.length - this.rightHeap.length > 1) {
      this.rightHeap.push(this.leftHeap[0]);
      this.leftHeap[0] = this.leftHeap.pop();
      this.heapifyUp(this.rightHeap, this.rightHeap.length - 1, "min");
      this.heapifyDown(this.leftHeap, 0, "max");
      adjust();
    } else if (this.leftHeap.length - this.rightHeap.length < -1) {
      this.leftHeap.push(this.rightHeap[0]);
      this.rightHeap[0] = this.rightHeap.pop();
      this.heapifyUp(this.leftHeap, this.leftHeap.length - 1, "max");
      this.heapifyDown(this.rightHeap, 0, "min");
      adjust();
    }
  };
  adjust();
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  return this.median;
};

MedianFinder.prototype.getParentIndex = function (index) {
  return index >> 1;
};

MedianFinder.prototype.getLeftChildIndex = function (index) {
  return index << 1;
};

MedianFinder.prototype.getRightChildIndex = function (index) {
  return (index << 1) + 1;
};

MedianFinder.prototype.swap = function (arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

MedianFinder.prototype.heapifyUp = function (heap, index, type) {
  //   console.log(this.leftHeap, this.rightHeap);
  const parentIndex = this.getParentIndex(index);
  if (parentIndex < 0) return;
  //   console.log(heap[parentIndex], heap[index]);
  switch (type) {
    case "max":
      if (heap[parentIndex] < heap[index]) {
        this.swap(heap, parentIndex, index);
        this.heapifyUp(heap, parentIndex, type);
      }
      break;
    case "min":
      if (heap[parentIndex] > heap[index]) {
        this.swap(heap, parentIndex, index);
        this.heapifyUp(heap, parentIndex, type);
      }
      break;
  }
  //   console.log(this.leftHeap, this.rightHeap);
};

MedianFinder.prototype.heapifyDown = function (heap, index, type) {
  //   console.log(this.leftHeap, this.rightHeap);
  const leftChildIndex = this.getLeftChildIndex(index);
  const rightChildIndex = this.getRightChildIndex(index);
  let target = index;
  switch (type) {
    case "max":
      if (leftChildIndex < heap.length && heap[leftChildIndex] > heap[target]) {
        target = leftChildIndex;
      }
      if (
        rightChildIndex < heap.length &&
        heap[rightChildIndex] > heap[target]
      ) {
        target = rightChildIndex;
      }
      break;
    case "min":
      if (leftChildIndex < heap.length && heap[leftChildIndex] < heap[target]) {
        target = leftChildIndex;
      }
      if (
        rightChildIndex < heap.length &&
        heap[rightChildIndex] < heap[target]
      ) {
        target = rightChildIndex;
      }
      break;
  }
  if (target !== index) {
    this.swap(heap, target, index);
    this.heapifyDown(heap, target, type);
  }
  //   console.log(this.leftHeap, this.rightHeap);
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
