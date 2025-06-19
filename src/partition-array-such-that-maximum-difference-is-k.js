/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - prev > k) {
      ans++;
      prev = nums[i];
    } else continue;
  }
  return ans + 1;
};
