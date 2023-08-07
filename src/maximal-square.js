/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const map = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  let ans = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        map[i + 1][j + 1] =
          Math.min(map[i][j], map[i][j + 1], map[i + 1][j]) + 1;
        ans = Math.max(ans, map[i + 1][j + 1]);
      }
    }

  //   console.log(map);
  return ans * ans;
};
