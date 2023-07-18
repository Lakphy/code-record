/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  const track = [];
  const vis = new Array(nums.length).fill(false);
  const back_track = () => {
    if (track.length === nums.length) {
      ans.push([...track]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i]) continue;
      track.push(nums[i]);
      vis[i] = true;
      back_track();
      track.pop();
      vis[i] = false;
    }
  };
  back_track();
  return ans;
};
