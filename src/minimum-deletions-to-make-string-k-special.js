/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function (word, k) {
  const hash = Object.create(null);
  for (let i = 0; i < word.length; i++) {
    const s = word[i];
    hash[s] = hash[s] ? hash[s] + 1 : 1;
  }
  const arr = Object.values(hash);
  let ans = word.length;
  for (const min of arr.values()) {
    const max = min + k;
    let n = 0;
    for (const num of arr.values()) {
      if (num < min) {
        n += num;
      } else if (num > max) {
        n += num - max;
      }
    }
    ans = Math.min(n, ans);
  }
  return ans;
};
