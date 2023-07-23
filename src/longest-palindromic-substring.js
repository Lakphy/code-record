/**
 * @param {string} s
 * @return {string}
 * 动归 状压 js数组对象复用 减少字符串对象建立
 */
var longestPalindrome = function (s) {
  if (s === "") return "";
  const len = s.length;
  let curMap = new Array(len).fill(false);
  let nextMap = new Array(len).fill(false);
  let ansLeft = 0;
  let ansRight = 0;
  let ansLen = 1;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (s[i] === s[j] && (j - i <= 2 || curMap[j - 1])) {
        nextMap[j] = true;
        if (j - i + 1 > ansLen) {
          ansLeft = i;
          ansRight = j;
          ansLen = j - i + 1;
        }
      } else nextMap[j] = false;
    }
    // console.log(i,nextMap);
    [curMap, nextMap] = [nextMap, curMap];
  }
  // console.log(ansLeft);
  // console.log(ansRight);
  return s.substring(ansLeft, ansRight + 1);
};
