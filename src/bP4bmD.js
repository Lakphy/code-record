/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const target = graph.length - 1;
  const dfs = (n) => {
    if (n === target) return [[n]];
    const ans = [];
    const temp = graph[n];
    for (let i = 0; i < temp.length; i++) {
      ans.push(...dfs(temp[i]));
    }
    return ans.map((item) => [n, ...item]);
  };
  return dfs(0);
};
