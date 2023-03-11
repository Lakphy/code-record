/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  let cnt = 0; // 结果
  if (nums.length < 2) return 0; // 判空
  const merge = (left, right) => {
    const tmp = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        tmp.push(left[i]);
        i = i + 1;
      } else {
        tmp.push(right[j]);
        j = j + 1;
        cnt += left.length - i;
      }
    }
    /*
     * 当left全部入栈后，right入栈所产生的逆序数为0
     * 当right全部入栈后，left入栈不需要加逆序数
     * 所以只要任意一边全部入栈即可离开循环
     */
    return [...tmp, ...left.slice(i), ...right.slice(j)];
  };
  const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    const mid = arr.length >> 1;
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  };
  mergeSort(nums);
  return cnt;
};
