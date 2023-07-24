/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let continuous = 0;
  let ans = nums[0];
  for (let i = 0; i < nums.length; i++) {
    continuous = Math.max(continuous + nums[i], nums[i]);
    ans = Math.max(continuous, ans);
  }
  return ans;
};
