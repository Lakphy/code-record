/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let x = a;
  let y = b;
  const d = a.length - b.length;
  if (d > 0) y = new Array(d).fill("0").join("") + y;
  else if (d < 0) x = new Array(-d).fill("0").join("") + x;
  let ans = [];
  let c = 0;
  for (let i = x.length - 1; i >= 0; i--) {
    const cur = parseInt(x[i]) + parseInt(y[i]) + c;
    switch (cur) {
      case 0:
        ans.push("0");
        c = 0;
        break;
      case 1:
        ans.push("1");
        c = 0;
        break;
      case 2:
        ans.push("0");
        c = 1;
        break;
      case 3:
        ans.push("1");
        c = 1;
        break;
      default:
        break;
    }
  }
  if (c === 1) ans.push("1");
  // console.log(ans);
  return ans.reverse().join("");
};
