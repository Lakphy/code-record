/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const ans = [];
  const arr = nums.sort((a, b) => a - b);
  const len = nums.length;
  const track = [];
  const vis = new Array(len).fill(false);
  const track_back = () => {
    // console.log(track);
    if (track.length === len) {
      ans.push([...track]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (i !== 0 && arr[i] === arr[i - 1] && vis[i - 1]) continue;
      if (vis[i]) continue;
      vis[i] = true;
      track.push(arr[i]);
      track_back(i + 1);
      track.pop();
      vis[i] = false;
    }
  };
  track_back();
  // console.log(ans);
  return ans;
};
