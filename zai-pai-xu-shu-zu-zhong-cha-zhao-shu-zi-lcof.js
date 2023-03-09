/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let arr = nums;
  let ans = 0;
  // 特判一下，太短了没必要二分法
  if (nums.length > 30) {
    while (1) {
      let midIndex = arr.length % 2 ? arr.length / 2 : (arr.length - 1) / 2;
      if (arr[midIndex] > target) arr = arr.split(0, midIndex);
      else if (arr[midIndex] < target) arr = arr.split(midIndex + 1, midIndex);
      else break;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (nums[i] === target) ans = ans + 1;
    if (nums[i] > target) break;
  }
  return ans;
};

console.log(search([5, 7, 7, 8, 8, 10], 8));
