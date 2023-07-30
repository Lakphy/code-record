/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (right - left === 1) {
      if (nums[left] === target) return left;
      else if (nums[right] === target) return right;
      else return -1;
    }
    const mid = (left + right) >> 1;
    if (target > nums[mid]) {
      left = mid;
    } else if (target < nums[mid]) {
      right = mid;
    } else {
      return mid;
    }
  }
  if (left === right && nums[left] === target) return left;
  return -1;
};
