/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  const hash = new Array(n).fill(false);
  let cur = 0;
  let circle = 1;
  while (1) {
    if (hash[cur]) break;
    hash[cur] = true;
    cur = (cur + circle * k) % n;
    circle++;
  }
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (!hash[i]) ans.push(i + 1);
  }
  return ans;
};
