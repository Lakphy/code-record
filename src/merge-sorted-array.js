/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = nums1.length - 1;
  while (p >= 0) {
    const a = p1 >= 0 ? nums1[p1] : -Infinity;
    const b = p2 >= 0 ? nums2[p2] : -Infinity;
    // console.log(p1,p2);
    if (a < b) {
      nums1[p] = b;
      p2--;
    } else {
      nums1[p] = a;
      p1--;
    }
    p--;
  }
};
