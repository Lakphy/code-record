/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const dividerWidthPoint = (left, right) => {
    // console.log(left, right);
    if (left === right) return nums[left] === target ? left : -1;
    if (right - left === 1)
      return nums[left] === target ? left : nums[right] === target ? right : -1;
    const center = (left + right) >> 1;
    if (nums[left] <= target && target <= nums[center - 1])
      return divider(left, center - 1);
    if (nums[center] <= target && target <= nums[right])
      return divider(center, right);
    if (nums[left] > nums[center]) return dividerWidthPoint(left, center);
    if (nums[center] > nums[right]) return dividerWidthPoint(center, right);
    return -1;
  };
  const divider = (left, right) => {
    // console.log(1, left, right);
    if (left === right) return nums[left] === target ? left : -1;
    if (right - left === 1)
      return nums[left] === target ? left : nums[right] === target ? right : -1;
    const center = (left + right) >> 1;
    if (nums[left] <= target && target <= nums[center - 1])
      return divider(left, center - 1);
    else return divider(center, right);
  };
  return dividerWidthPoint(0, nums.length - 1);
};
