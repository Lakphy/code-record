/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function (_s, k) {
  let ans = 0;
  let n = 0,
    s = 0,
    e = 0,
    w = 0;
  for (let i = 0; i < _s.length; i++) {
    const c = _s[i];
    switch (c) {
      case "N":
        n++;
        break;
      case "S":
        s++;
        break;
      case "E":
        e++;
        break;
      case "W":
        w++;
        break;
    }
    const count = Math.abs(n - s) + Math.abs(w - e);
    const t1 = Math.min(n, s, k);
    const t2 = Math.min(w, e, k - t1);
    // console.log(t1,t2,n,s,w,e)
    ans = Math.max(ans, count + 2 * (t1 + t2));
  }
  return ans;
};
