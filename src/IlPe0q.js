/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const minimum = [triangle[0][0]];
  for (let i = 1; i < triangle.length; i++) {
    for (let j = triangle[i].length - 1; j >= 0; j--) {
      switch (j) {
        case 0:
          minimum[j] = minimum[j] + triangle[i][j];
          break;
        case triangle[i].length - 1:
          minimum[j] = minimum[j - 1] + triangle[i][j];
          break;
        default:
          minimum[j] = Math.min(minimum[j], minimum[j - 1]) + triangle[i][j];
      }
    }
    // console.log(minimum)
  }
  return Math.min(...minimum);
};
