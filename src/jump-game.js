/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const length = nums.length;
  let max = 0;
  for (let i = 0; i < length; i++) {
    if (i <= max) {
      max = Math.max(max, i + nums[i]);
      if (max >= length - 1) return true;
    } else return false;
  }
  return false;
};
