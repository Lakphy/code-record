/**
 * @param {string} s
 * @return {number}
 * 滑动窗口+哈希表
 */
var lengthOfLongestSubstring = function (s) {
  const map = Object.create(null);
  let p1 = 0;
  let p2 = 1;
  map[s[0]] = 0;
  let ans = 0;
  while (1) {
    // console.log(p1,p2);
    if (p2 > s.length) return ans;
    ans = Math.max(ans, p2 - p1);
    const next = s[p2];
    const prev = map[next];
    if (prev === undefined || prev < p1) {
      map[next] = p2;
      p2++;
    } else {
      p1 = prev + 1;
      map[s[p1]] = p1;
      p2 = Math.max(p1 + 1, p2);
    }
  }
};
