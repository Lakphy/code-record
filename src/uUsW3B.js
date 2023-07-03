/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = [];
  const track = [];
  const select = new Array(n + 1).fill(true); // except index 0
  const backtrack = (m, n, before = 0) => {
    // console.log()
    if (m === 0) ans.push([...track]);
    for (let i = before + 1; i <= n; i++) {
      if (select[i]) {
        track.push(i);
        select[i] = false;
        backtrack(m - 1, n, i);
        track.pop();
        select[i] = true;
      }
    }
  };
  backtrack(k, n);
  return ans;
};
