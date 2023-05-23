/**
 * @param {number[]} nums
 * @return {number[]}
 */

/** 快速排序
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

/** 冒泡排序
 *
 * 时间复杂度：O(n2)
 * 空间复杂度：O(1)
 */
const bubbleSort = (arr) => {
  for (let j = 0; j < arr.length - 1; j++) {
    let flag = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1])
        [arr[i], arr[i + 1], flag] = [arr[i + 1], arr[i], false];
    }
    if (flag) break;
  }
  return arr;
};

/** 插入排序
 *
 * 时间复杂度：O(n2)
 * 空间复杂度：O(1)
 */
const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    arr.splice(i, 1);
    let flag = true;
    for (let j = 0; j < i; j++) {
      if (cur < arr[j]) {
        arr.splice(j, 0, cur);
        flag = false;
        break;
      }
    }
    if (flag) arr.splice(i, 0, cur);
  }
  return arr;
};

/** 选择排序
 *
 * 时间复杂度：O(n2)
 * 空间复杂度：O(1)
 */
const selectionSort = (arr) => {
  const total = arr.length;
  const ans = [];
  for (let i = 0; i < total; i++) {
    const [index, val] = arr.reduce(
      (pre, cur, index, arr) => {
        if (cur < pre[1]) return [index, cur];
        else return pre;
      },
      [0, arr[0]]
    );
    ans.push(val);
    arr.splice(index, 1);
  }
  return ans;
};

const mergeSort = (arr) => {};

var sortArray = function (nums) {
  //   return quickSort(nums);
  //   return bubbleSort(nums);
  //   return insertSort(nums);
  //   return selectionSort(nums);
  return mergeSort(nums);
};
