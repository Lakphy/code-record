/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  const truthList = new Array(nums.length).fill(false);
  for (let i = 0; i < nums.length; i++) {
    if (truthList[i]) continue;
    truthList[i] = true;
    if (nums[i] === 0) continue;
    // console.log(i);
    const isPositive = nums[i] > 0;
    let cur = i;
    const circle = [];
    circle.push(cur);
    while (1) {
      cur = (cur + nums[cur]) % nums.length;
      if (cur < 0) cur += nums.length;
      if (circle.findIndex((val) => val === cur) !== -1) {
        let next = (cur + nums[cur]) % nums.length;
        if (next < 0) next += nums.length;
        if (next === cur) break;
        else return true;
      }
      truthList[cur] = true;
      if (nums[cur] > 0 !== isPositive) break;
      circle.push(cur);
      // console.log(circle);
    }
    // console.log(circle);
  }
  return false;
};
