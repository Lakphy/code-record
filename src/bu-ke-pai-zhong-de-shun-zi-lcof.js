/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  const adjacency = {
    1: 2,
    2: 3,
    3: 4,
    4: 5,
    5: 6,
    6: 7,
    7: 8,
    8: 9,
    9: 10,
    10: 11,
    11: 12,
    12: 13,
    13: 1,
  };
  let kings = nums.filter((num) => num === 0).length;
  const arr = nums.filter((num) => num !== 0).sort((a, b) => a - b);
  if (arr.length < 2) return true;
  for (let i = 1; i < arr.length; i++) {
    // console.log(kings);
    if (arr[i] === adjacency[arr[i - 1].toString()]) continue;
    else if (arr[i] === arr[i - 1]) return false;
    else {
      kings--;
      arr[i - 1]++;
      i--;
      // console.log(kings,i);
      if (kings < 0) return false;
    }
  }
  return true;
};
