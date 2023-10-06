/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const n = prices.length;
  let dp = [0, -prices[0]];
  for (let i = 1; i < n; i++) {
    dp = [
      Math.max(dp[0], dp[1] + prices[i] - fee),
      Math.max(dp[1], dp[0] - prices[i]),
    ];
  }
  return dp[0];
};
