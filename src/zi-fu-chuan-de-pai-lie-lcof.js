/**
 * @param {string} s
 * @return {string[]}
 * 回溯剪纸 无需去重
 */
var permutation = function (s) {
  const arr = [...s];
  const vis = [];
  const ans = [];
  const dfs = (n) => {
    const cur = [];
    if (n === arr.length) {
      ans.push(vis.map((item) => arr[item]).join(""));
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!vis.includes(i) && !cur.includes(arr[i])) {
        vis.push(i);
        dfs(n + 1);
        vis.pop();
        cur.push(arr[i]);
      }
    }
  };
  dfs(0);
  return ans;
};
