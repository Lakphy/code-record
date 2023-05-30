/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) return 0;
  let sum = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (sum < 0) sum = nums[i];
    else sum = sum + nums[i];
    max = Math.max(max, sum);
  }
  return max;
};
