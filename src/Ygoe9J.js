/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  const track = [];
  let num = 0;
  const backtrack = (index) => {
    if (num > target) return;
    if (num === target) ans.push([...track]);
    for (let i = index; i < candidates.length; i++) {
      track.push(candidates[i]);
      num += candidates[i];
      backtrack(i);
      track.pop();
      num -= candidates[i];
    }
  };
  backtrack(0);
  // console.log(ans);
  return ans;
};
