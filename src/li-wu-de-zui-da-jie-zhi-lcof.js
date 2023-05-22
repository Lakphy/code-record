/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  let values = []; // 状态压缩dp，一维数组
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) values[j] = grid[i][j];
      else if (i === 0) values[j] = grid[i][j] + values[j - 1];
      else if (j === 0) values[j] = grid[i][j] + values[j];
      else
        values[j] = Math.max(
          grid[i][j] + values[j - 1],
          grid[i][j] + values[j]
        );
    }
  }
  return values[values.length - 1];
};
