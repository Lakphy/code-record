/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min_price = prices[0];
  let max_profit = 0;
  for (let i = 0; i < prices.length; i++) {
    min_price = Math.min(prices[i], min_price);
    max_profit = Math.max(max_profit, prices[i] - min_price);
  }
  return max_profit;
};
