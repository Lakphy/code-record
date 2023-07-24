/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0;
  let left = 0;
  let right = height.length - 1;
  while (1) {
    if (left === right) break;
    ans = Math.max(ans, Math.min(height[left], height[right]) * (right - left));
    if (height[left] > height[right]) right--;
    else left++;
  }
  return ans;
};
