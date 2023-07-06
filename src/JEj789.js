/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  // 0:pink 1:blue 2:green
  const total = new Array(costs.length + 1)
    .fill(null)
    .map(() => new Array(3).fill(0));
  const dp = (index, preColor) => {
    if (index >= costs.length) return 0;
    let min = Infinity;
    for (let i = 0; i < 3; i++) {
      if (i === preColor) continue;
      min = Math.min(min, costs[index][i] + total[index + 1][i]);
    }
    total[index][preColor] = min;
  };
  for (let i = costs.length - 1; i >= 0; i--) {
    for (let j = 0; j < 3; j++) {
      dp(i, j);
    }
  }
  return Math.min(...total[0]);
};
