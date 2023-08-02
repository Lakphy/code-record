/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const ans = [[1]];
  for (let i = 1; i < numRows; i++) {
    const len = i + 1;
    const pre = i - 1;
    const arr = [ans[pre][0]];
    for (let j = 1; j < len; j++) {
      if (i === j) arr.push(ans[pre][j - 1]);
      else arr.push(ans[pre][j - 1] + ans[pre][j]);
    }
    ans.push(arr);
  }
  return ans;
};
