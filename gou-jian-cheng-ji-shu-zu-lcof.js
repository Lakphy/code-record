/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  if (a.length < 1) return a;
  if (a.length < 2) return [0];
  let ans = [1];
  let temp = 1;
  for (let i = 1; i < a.length; i++) ans.push(ans[i - 1] * a[i - 1]);
  for (let i = a.length - 1; i > -1; i--) {
    ans[i] = temp * ans[i];
    temp *= a[i];
  }
  return ans;
};
