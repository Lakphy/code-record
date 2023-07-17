/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  if (timePoints.length >= 1440 || timePoints.length < 2) return 0;
  for (let i = 0; i < timePoints.length; i++) {
    const [a, b] = timePoints[i].split(":");
    timePoints[i] = parseInt(a, 10) * 60 + parseInt(b, 10);
  }
  timePoints = timePoints.sort((a, b) => a - b);
  timePoints.push(timePoints[0] + 1440);
  let ans = Infinity;
  for (let i = 1; i < timePoints.length; i++) {
    ans = Math.min(ans, timePoints[i] - timePoints[i - 1]);
  }
  return ans;
};
