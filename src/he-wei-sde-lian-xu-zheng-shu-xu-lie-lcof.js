/**
 * @param {number} target
 * @return {number[][]}
 * @description 滑动窗口法
 */
var findContinuousSequence = function (target) {
  if (target < 3) return [];
  const max = (target >> 1) + 1;
  let ans = [];
  let left = 1,
    right = 2;
  while (1) {
    if (right > max) return ans;
    const sum = ((left + right) / 2) * (right - left + 1);
    if (sum < target) right++;
    else if (sum > target) left++;
    else {
      ans.push(
        new Array(right - left + 1).fill().map((item, index) => index + left)
      );
      left++;
    }
  }
};
