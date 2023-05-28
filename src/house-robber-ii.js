/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length < 2) return nums[0];
  const robber = (arr) => {
    // console.log(arr);
    if (arr.length < 3) return Math.max(...arr);
    const maxIncome = [arr[0], Math.max(arr[0], arr[1])];
    for (let i = 2; i < arr.length; i++) {
      maxIncome[i] = Math.max(maxIncome[i - 2] + arr[i], maxIncome[i - 1]);
    }
    // console.log(maxIncome);
    return maxIncome[maxIncome.length - 1];
  };
  return Math.max(
    robber(nums.slice(0, nums.length - 1)),
    robber(nums.slice(1))
  );
};
