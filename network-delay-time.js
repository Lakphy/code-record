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
    .map((item) => new Array(n + 1).fill(-1)); // 声明n*n矩阵
  for (let i = 0; i <= n; i++) {
    map[i][i] = 0;
  } // 自己到自己距离为0
  times.forEach((item) => {
    map[item[0]][item[1]] = item[2];
  }); // 录入邻接矩阵数据

  // 起始点到各点最短路径值
  const dist = new Array(n + 1).fill(-1); // 声明k点至各点最短路径表
  for (let i = 1; i <= n; i++) {
    dist[i] = map[k][i];
  } // 录入k点相邻点路径

  // 遍历记录
  const isVisited = new Array(n + 1).fill(false); // 声明遍历记录表
  isVisited[k] = true; // k点无需遍历

  // 遍历
  for (let i = 1; i <= n; i++) {
    let j = 0; // 声明当前正在遍历的点
    dist.forEach((item, index) => {
      if (item !== -1 && !isVisited[index]) {
        if (j === 0 || dist[index] < dist[j]) j = index;
      }
    }); // 查找k点可以直接到达的未遍历的点中最短的点为j
    if (j === 0) break; // 如果没找到说明没了，结束
    isVisited[j] = true; // 设置j点为已访问
    for (let x = 0; x <= n; x++) {
      if (map[j][x] !== -1) {
        if (dist[x] === -1) dist[x] = dist[j] + map[j][x];
        else dist[x] = Math.min(dist[x], dist[j] + map[j][x]);
      }
    } // 对于所有与j点相邻的x点，计算从k点到j点再到x点距离，并与k点到x点已知最短路对比并更新最短路
  }

  // 查找是否所有点都被遍历过，如果没有就说明存在孤立路径
  isVisited[0] = true;
  if (!isVisited.reduce((prev, cur) => prev && cur, true)) return -1;

  // ans
  const ans = Math.max(...dist);
  if (ans === 0) return -1;
  else return ans;
};
