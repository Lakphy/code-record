/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  for (let i = 0; i < dist.length; i++) {
    dist[i] = Math.ceil(dist[i] / speed[i]);
  }
  dist = dist.sort((a, b) => a - b);
  for (let i = 0; i < dist.length; i++) {
    if (dist[i] < i + 1) return i;
  }
  return dist.length;
};
