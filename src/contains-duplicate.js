/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = Object.create(null);
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    map[cur] = map[cur] === undefined ? 1 : map[cur] + 1;
    if (map[cur] > 1) return true;
  }
  return false;
};
