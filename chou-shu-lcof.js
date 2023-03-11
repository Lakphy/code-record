/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n < 4) return n;
  let arr = [1, 2, 3, 5];
  let p = 0;
  let sum = 0;
  const insertNum = (num) => {
    let i = arr.length - 1;
    while (num <= arr[i]) i--;
    if (arr[i + 1] === num) return;
    arr = [...arr.slice(0, i + 1), num, ...arr.slice(i + 1)];
  };
  while (1) {
    insertNum(arr[p] * 2);
    insertNum(arr[p] * 3);
    insertNum(arr[p] * 5);
    p++;
    if (p === n - 1) return arr[p];
  }
};

console.log(nthUglyNumber(1));
