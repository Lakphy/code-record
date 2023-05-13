/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const ans = new Array(temperatures.length).fill(0);
  let cur = null;
  temperatures.map((item, index) => {
    if (stack.length === 0) stack.push([index, item]);
    else if (item <= stack[stack.length - 1][1]) {
      stack.push([index, item]);
    } else {
      while (1) {
        cur = stack.pop();
        ans[cur[0]] = index - cur[0];
        if (stack.length === 0) break;
        if (item <= stack[stack.length - 1][1]) break;
      }
      stack.push([index, item]);
    }
  });
  return ans;
};
