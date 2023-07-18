/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [];
  const track = [];
  const back_track = (begin) => {
    ans.push([...track]);
    if (begin === nums.length) return;
    for (let i = begin; i < nums.length; i++) {
      track.push(nums[i]);
      back_track(i + 1);
      // ans.push([...track]);
      track.pop();
    }
  };
  back_track(0);
  return ans;
};
