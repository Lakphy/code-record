/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  const x = nums.reduce((prev, cur, index, arr) => {
    if (index === 0) return cur;
    return prev ^ cur;
  });
  const a = x.toString(2).split("");
  let s = new Array(a.length).fill(0);
  s[a.findIndex((v) => v === "1")] = 1;
  s = parseInt(s.join(""), 2);
  return nums.reduce(
    (prev, cur, index, arr) => {
      switch (cur & s) {
        case s:
          return [prev[0] ^ cur, prev[1]];
          break;
        case 0:
          return [prev[0], prev[1] ^ cur];
          break;
      }
    },
    [x, x]
  );
};
