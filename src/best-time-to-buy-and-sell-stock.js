/** 动归做法（会超时）
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxIncome = 0;
  for (let i = 1; i < prices.length; i++) {
    maxIncome = Math.max(
      maxIncome,
      prices[i] - Math.min(...prices.slice(0, i))
    );
  }
  return maxIncome;
};

/** 贪心算法（最好性能）
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxIncome = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    maxIncome = Math.max(maxIncome, prices[i] - minPrice);
    minPrice = minPrice > prices[i] ? prices[i] : minPrice;
  }
  return maxIncome;
};
