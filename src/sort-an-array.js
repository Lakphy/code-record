/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  /**
   * 快速排序
   *
   * 时间复杂度：平均O(nlogn)，最坏O(n2)，实际上大多数情况下小于O(nlogn)
   * 空间复杂度：O(logn)（递归调用消耗）
   */
  const quickSort = (arr) => {
    // console.log(arr);
    if (arr.length < 2) return arr;
    if (arr.length < 3) return arr[0] < arr[1] ? arr : [arr[1], arr[0]];
    const index = Date.now() % arr.length;
    const val = arr[index];
    let valCount = 0;
    const left = [],
      right = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) valCount++;
      else if (arr[i] > val) right.push(arr[i]);
      else left.push(arr[i]);
    }
    return [
      ...quickSort(left),
      ...new Array(valCount).fill(val),
      ...quickSort(right),
    ];
  };
  return quickSort(nums);
};
