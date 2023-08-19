/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left < right) {
    if (right - left <= 1) {
      return nums[left] > nums[right] ? left : right;
    }
    mid = (left + right) >> 1;
    if (nums[mid - 1] >= nums[mid]) {
      right = mid;
    } else if (nums[mid + 1] >= nums[mid]) {
      left = mid;
    } else {
      return mid;
    }
  }
  return mid;
};
