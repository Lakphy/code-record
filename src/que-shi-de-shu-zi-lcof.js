/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let x = 0;
  let y = nums.length - 1;
  while (x <= y) {
    const z = (x + y) >> 1;
    if (nums[z] === z) x = z + 1;
    else y = z - 1;
  }
  return x;
};
