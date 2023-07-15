/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum = 0;
  let cur = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) sum += nums[i];
  for (let i = 0; i < len; i++) {
    sum -= nums[i];
    if (cur === sum) return i;
    cur += nums[i];
  }
  return -1;
};
