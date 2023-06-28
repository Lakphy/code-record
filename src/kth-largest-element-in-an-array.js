/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 分治方法
 */
var findKthLargest = function (nums, k) {
  const target = nums.length - k;
  const partition = (arr, beginIndex) => {
    // console.log(arr,beginIndex);
    let index = Date.now() % arr.length;
    // let index = 0;
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === index) continue;
      if (arr[i] < arr[index]) left.push(arr[i]);
      else if (arr[i] > arr[index]) right.push(arr[i]);
    }
    if (left.length + beginIndex > target) {
      return partition(left, beginIndex);
    } else if (arr.length - right.length + beginIndex - 1 < target) {
      return partition(right, arr.length - right.length + beginIndex);
    } else {
      return arr[index];
    }
  };
  return partition(nums, 0);
};
