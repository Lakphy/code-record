/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const arr = [0];
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      arr[arr.length - 1] += 1;
    } else {
      arr.push(0);
    }
  }
  arr[0] *= 2;
  arr[arr.length - 1] *= 2;
  return Math.max(...arr) / 2;
};
