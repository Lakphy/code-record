/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let ans = nums[0];
  nums
    .sort((a, b) => a - b)
    .reduce((prev, cur) => {
      if (prev >= nums.length / 2) {
        return prev;
      } else if (cur !== ans) {
        ans = cur;
        return 1;
      } else return prev + 1;
    }, 0);
  return ans;
};
