/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const res = new Array(cost.length + 2).fill(0);
  res[0] = cost[0];
  res[1] = cost[1];
  for (let i = 2; i < res.length; i++) {
    res[i] = Math.min(res[i - 1], res[i - 2]) + (cost[i] || 0);
  }
  // console.log(res)
  return res[cost.length];
};
