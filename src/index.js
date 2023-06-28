class heap {
  constructor(arr, type) {
    this.arr = arr;
    this.type = type;
  }
  getFatherIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftIndex(index) {
    return index * 2 + 1;
  }
  getRightIndex(index) {
    return index * 2 + 2;
  }
  swap(i1, i2) {
    [this.arr[i1], this.arr[i2]] = [this.arr[i2], this.arr[i1]];
  }
  adjustMaxHeap() {
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    let max = index;
    if (left < this.arr.length && this.arr[left] > this.arr[max]) max = left;
    if (right < this.arr.length && this.arr[right] > this.arr[max]) max = right;
    if (max !== index) {
      this.swap(max, index);
      this.adjustMaxHeap(max);
    }
  }
}
