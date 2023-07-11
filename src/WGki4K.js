/**
 * @param {number[]} nums
 * @return {number}
 * 尝试拿位运算做的，但是用例有坑，负数、大整数，所以写的比较史
 */
var singleNumber = function (nums) {
  const arr = nums.map((item) => Math.abs(item));
  const ans = [];
  for (let j = 0; j < 32; j++) {
    // console.log(ans);
    // console.log(arr);
    let num = 0;
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) flag = false;
      num += arr[i] % 2;
      arr[i] = Math.abs(arr[i] >> 1);
    }
    ans.push(num % 3);
    if (flag) break;
  }
  const res = ans.reduce(
    (prev, cur, index) => prev + cur * Math.pow(2, index),
    0
  );
  const n = nums.reduce((prev, cur) => (cur < 0 ? prev + 1 : prev), 0) % 3;
  return n > 0 ? -res : res;
};
