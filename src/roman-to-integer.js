/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const arr = s.split("");
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let prev = romanMap[arr[0]];
  let cur = prev;
  let ans = 0;
  for (let i = 1; i < arr.length; i++) {
    const temp = romanMap[arr[i]];
    // console.log(temp);
    if (temp < cur) {
      ans += prev;
      prev = temp;
      cur = temp;
    } else if (temp === cur) {
      prev += temp;
    } else {
      prev = temp - prev;
    }
  }
  ans += prev;
  return ans;
};
