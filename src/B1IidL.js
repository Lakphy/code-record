/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let center = arr.length >> 1;
  let left = 0;
  let right = arr.length - 1;
  while (1) {
    if (right - left === 1) return arr[left] > arr[right] ? left : right;
    if (arr[center] > arr[center + 1]) right = center;
    else left = center;
    center = (left + right) >> 1;
  }
};
