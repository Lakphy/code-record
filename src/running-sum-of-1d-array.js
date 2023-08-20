/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const ans = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    ans[i] = nums[i] + ans[i - 1];
  }
  return ans;
};
