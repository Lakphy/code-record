/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const res = [];
  const r = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      for (let j = 0; j <= k; j++) {
        const n1 = i + j;
        const n2 = i - j;
        if (nums[n1] !== undefined) hash[n1] = n1;
        if (nums[n2] !== undefined) hash[n2] = n2;
      }
    }
  }
  return Object.values(hash);
};
