/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [[]];
  nums.forEach((item) => {
    ans.push(...ans.map((_item) => [..._item, item]));
  });
  return ans;
};
