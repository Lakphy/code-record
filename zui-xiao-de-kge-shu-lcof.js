/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 * 最大堆排序方法
 */
var getLeastNumbers = function (arr, k) {
  const heap = []; // 最大堆
  // 入堆
  const push = (value) => {
    // 放到最后一个
    heap.push(value);
    let cur = heap.length - 1;
    let curP = (cur - 1) >> 1;
    // 自下而上调整
    while (1) {
      if (cur === 0) break;
      if (heap[cur] > heap[curP]) {
        [heap[cur], heap[curP]] = [heap[curP], heap[cur]];
        cur = curP;
        curP = (cur - 1) >> 1;
      } else {
        break;
      }
    }
    if (heap.length > k) pop();
  };
  // 出堆
  const pop = () => {
    if (heap.length === 0) return;
    // 第0个和最后一个互换
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    const retu = heap.pop();
    if (heap.length === 0) return retu;
    let cur = 0;
    let curLeft = cur * 2 + 1;
    let curRight = cur * 2 + 2;
    // 自上而下调整
    while (1) {
      let maxp = cur;
      if (curLeft < heap.length && heap[maxp] < heap[curLeft]) maxp = curLeft;
      if (curRight < heap.length && heap[maxp] < heap[curRight])
        maxp = curRight;
      if (maxp === cur) break;
      [heap[maxp], heap[cur]] = [heap[cur], heap[maxp]];
      cur = maxp;
      curLeft = cur * 2 + 1;
      curRight = cur * 2 + 2;
    }
    return retu;
  };

  arr.forEach(push);

  // 总感觉应该一个一个出堆再输出，但是直接输出堆竟然AC了

  //   return new Array(heap.length)
  //     .fill(null)
  //     .map((item) => pop())
  //     .reverse();
  return heap.reverse();
};
