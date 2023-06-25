/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 输入判断
  if (nums.length < 3) return [];

  const ans = [];
  const arr = nums.sort((a, b) => a - b);
  const n = arr.length;

  // 遍历排序数组
  for (let i = 0; i < n - 2; i++) {
    // 跳过重复
    if (i !== 0 && arr[i] === arr[i - 1]) continue;

    const a = arr[i]; // a
    let b_index = i + 1; // b
    let c_index = n - 1; // c

    while (true) {
      // 三数之和
      const temp = a + arr[b_index] + arr[c_index];

      if (temp === 0) {
        ans.push([a, arr[b_index], arr[c_index]]);
        // c跳过重复
        let c_temp = c_index;
        while (true) {
          c_temp--;
          if (arr[c_index] !== arr[c_temp]) {
            c_index = c_temp;
            break;
          }
        }
      } else if (temp < 0) {
        b_index++;
      } else {
        c_index--;
      }
      if (c_index <= b_index) break;
    }
  }
  return ans;
};
