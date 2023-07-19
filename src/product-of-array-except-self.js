/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = new Array(nums.length).fill(1);
  ans[1] = nums[0];
  for (let i = 1; i < nums.length; i++) ans[i] = nums[i - 1] * ans[i - 1];
  let cur = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    cur *= nums[i + 1];
    ans[i] *= cur;
  }
  return ans;
};
