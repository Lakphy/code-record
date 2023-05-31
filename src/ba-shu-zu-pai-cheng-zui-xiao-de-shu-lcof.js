/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return nums
    .map((item) => item.toString())
    .sort((a, b) => a + b - (b + a))
    .join("");
};
