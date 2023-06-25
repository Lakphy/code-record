/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // 输入判断
  if (nums.length < 4) return [];

  const ans = [];
  const arr = nums.sort((a, b) => a - b);
  const n = arr.length;

  // 遍历排序数组
  for (let j = 0; j < n - 3; j++) {
    if (j !== 0 && arr[j] === arr[j - 1]) continue;
    for (let i = j + 1; i < n - 2; i++) {
      // 跳过重复
      if (i !== j + 1 && arr[i] === arr[i - 1]) continue;
      if (i === j) continue;

      const a = arr[i]; // a
      const d = arr[j]; // d
      let b_index = i + 1; // b
      let c_index = n - 1; // c

      while (true) {
        // 和
        const temp = a + arr[b_index] + arr[c_index] + d;
        // console.log([j, i, b_index, c_index])

        if (temp === target) {
          ans.push([a, arr[b_index], arr[c_index], d]);
          // c跳过重复
          let c_temp = c_index;
          while (true) {
            c_temp--;
            if (arr[c_index] !== arr[c_temp]) {
              c_index = c_temp;
              break;
            }
          }
        } else if (temp < target) {
          b_index++;
        } else {
          c_index--;
        }
        if (c_index <= b_index) break;
      }
    }
  }
  return ans;
};
