/**
 * @param {number[]} nums
 * @return {number[][]}
 * 回溯
 */
var permute = function (nums) {
  const available = new Array(nums.length).fill(true);
  const ans = [];
  const temp = [];
  const backtrack = (n) => {
    for (let i = 0; i < nums.length; i++)
      if (available[i]) {
        if (n === 1) {
          ans.push([...temp, nums[i]]);
          return;
        }

        available[i] = false;
        temp.push(nums[i]);

        backtrack(n - 1);

        available[i] = true;
        temp.pop();
      }
  };
  backtrack(nums.length);
  return ans;
};
