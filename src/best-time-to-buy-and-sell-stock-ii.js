/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    const temp = prices[i] - prices[i - 1];
    if (temp > 0) ans += temp;
  }
  return ans;
};
