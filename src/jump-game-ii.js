/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let steps = 0;
  let max = 0;
  let end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i);
    if (i === end) {
      end = max;
      steps++;
    }
  }
  return steps;
};
