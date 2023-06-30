/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 0) return [];
  const maxStack = [];
  const ans = [];
  const pushMax = (val) => {
    while (1) {
      if (maxStack.length === 0) {
        maxStack.push(val);
        return;
      } else if (maxStack[maxStack.length - 1] < val) maxStack.pop();
      else {
        maxStack.push(val);
        return;
      }
    }
  };
  for (let i = 0; i < k; i++) {
    pushMax(nums[i]);
  }
  for (let i = k; i < nums.length; i++) {
    ans.push(maxStack[0]);
    if (nums[i - k] === maxStack[0]) maxStack.shift();
    pushMax(nums[i]);
  }
  ans.push(maxStack[0]);
  return ans;
};
