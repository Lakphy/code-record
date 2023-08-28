/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals || intervals.length < 1) return [newInterval];
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] >= newInterval[0]) {
      intervals.splice(i, 0, newInterval);
      break;
    } else if (i === intervals.length - 1) {
      intervals.push(newInterval);
    }
  }
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
