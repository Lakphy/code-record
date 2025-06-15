/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let p = 0;
  let min = nums[0];
  let result = -1;
  for (p = 1; p < nums.length; p++) {
    const cur = nums[p];
    if (cur < min) {
      min = cur;
    } else if (cur > min) {
      result = Math.max(result, cur - min);
    }
  }
  return result;
};
