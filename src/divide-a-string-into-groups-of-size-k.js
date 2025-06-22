/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const ans = [];
  for (let i = k; i <= s.length; i += k) {
    ans.push(s.substring(i - k, i));
  }
  if (s.length % k === 0) {
    return ans;
  } else {
    let newStr =
      s.substring(s.length - (s.length % k)) +
      new Array(k - (s.length % k)).fill(fill).join("");
    ans.push(newStr);
    return ans;
  }
};
