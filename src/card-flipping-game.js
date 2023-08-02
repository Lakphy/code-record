/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
  const map = Object.create(null);
  for (let i = 0; i < fronts.length; i++) {
    if (fronts[i] === backs[i]) map[fronts[i]] = true;
  }
  let ans = Infinity;
  for (let i = 0; i < fronts.length; i++) {
    if (!map[fronts[i]]) ans = Math.min(ans, fronts[i]);
    if (!map[backs[i]]) ans = Math.min(ans, backs[i]);
  }
  if (ans === Infinity) return 0;
  return ans;
};
