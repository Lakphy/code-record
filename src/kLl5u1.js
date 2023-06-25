/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (1) {
    const temp = numbers[left] + numbers[right];
    if (temp === target) return [left, right];
    else if (temp > target) right--;
    else left++;
  }
};
