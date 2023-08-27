/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals || intervals.length < 1) return [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const ans = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const prev = ans[ans.length - 1];
    const cur = intervals[i];
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(cur[1], prev[1]);
    } else ans.push(cur);
  }
  return ans;
};
