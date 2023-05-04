/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // 邻接矩阵
  const map = new Array(n + 1)
    .fill(null)
    .map((item) => new Array(n + 1).fill(-1));
  for (let i = 0; i <= n; i++) {
    map[i][i] = 0;
  }
  times.forEach((item) => {
    map[item[0]][item[1]] = item[2];
  });

  // 起始点到各点最短路径值
  const dist = new Array(n + 1).fill(-1);
  for (let i = 1; i <= n; i++) {
    dist[i] = map[k][i];
  }

  // 遍历记录
  const isVisited = new Array(n + 1).fill(false);
  isVisited[k] = true;

  // 遍历
  for (let i = 1; i <= n; i++) {
    let j = 0;
    dist.forEach((item, index) => {
      if (item !== -1 && !isVisited[index]) {
        if (j === 0 || dist[index] < dist[j]) j = index;
      }
    });
    if (j === 0) break;
    isVisited[j] = true;
    for (let x = 0; x <= n; x++) {
      if (map[j][x] !== -1) {
        if (dist[x] === -1) dist[x] = dist[j] + map[j][x];
        else dist[x] = Math.min(dist[x], dist[j] + map[j][x]);
      }
    }
  }

  // not visited
  isVisited[0] = true;
  if (!isVisited.reduce((prev, cur) => prev && cur, true)) return -1;

  // ans
  const ans = Math.max(...dist);
  if (ans === 0) return -1;
  else return ans;
};
