/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 3) return Math.max(...nums);
  const maxIncome = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
    maxIncome[i] = Math.max(maxIncome[i - 2] + nums[i], maxIncome[i - 1]);
  }
  return maxIncome[maxIncome.length - 1];
};
