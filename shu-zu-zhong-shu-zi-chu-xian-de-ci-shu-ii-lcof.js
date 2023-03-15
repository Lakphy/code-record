/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = {};
  let ans = 0;
  nums.map((item, index) => {
    map[item] = map[item] + 1 || 1;
  });
  Object.keys(map).map((item, index) => {
    if (map[item] === 1) ans = item;
  });
  return ans;
};
