/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const total = nums.reduce((prev, cur) => prev + cur, 0) / 2;
  let ans = -1;
  nums.reduce((prev, cur, index) => {
    if (prev + cur / 2 === total && ans === -1) ans = index;
    return cur + prev;
  }, 0);
  return ans;
};
