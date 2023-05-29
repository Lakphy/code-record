/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let p1 = 0;
  let p2 = nums.length - 1;
  while (p1 < p2) {
    if (nums[p1] % 2 === 0) [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
    if (nums[p1] % 2 === 1) p1++;
    if (nums[p2] % 2 === 0) p2--;
  }
  return nums;
};
