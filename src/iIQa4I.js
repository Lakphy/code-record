/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const monotonic = [];
  const ans = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    if (monotonic.length < 1) monotonic.push(i);
    else
      while (1) {
        if (monotonic.length < 1) {
          monotonic.push(i);
          break;
        }
        if (temperatures[i] > temperatures[monotonic[monotonic.length - 1]]) {
          ans[monotonic[monotonic.length - 1]] =
            i - monotonic[monotonic.length - 1];
          monotonic.pop();
        } else {
          monotonic.push(i);
          break;
        }
      }
  }
  return ans;
};
