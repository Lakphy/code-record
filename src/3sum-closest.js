/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 1. 排序
 * 2. 遍历第一个数
 * 3. 双指针
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let ans = nums[0] + nums[1] + nums[2];
  let d = Math.abs(ans - target);

  for (let i = 0; i < nums.length - 2; i++) {
    let p1 = i + 1;
    let p2 = nums.length - 1;
    while (p1 !== p2) {
      const t = nums[p1] + nums[p2] + nums[i];
      if (Math.abs(t - target) < d) {
        ans = t;
        d = Math.abs(t - target);
      }
      if (t > target) p2--;
      else p1++;
    }
  }
  return ans;
};
