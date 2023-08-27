/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let left = 0;
  let right = 0;
  const ans = [];
  while (right < nums.length) {
    // console.log(left,right);
    if (nums[right + 1] && nums[right + 1] - 1 === nums[right]) right++;
    else {
      if (left === right) {
        ans.push(`${nums[left]}`);
      } else {
        ans.push(`${nums[left]}->${nums[right]}`);
      }
      left = right + 1;
      right = left;
    }
  }
  return ans;
};
