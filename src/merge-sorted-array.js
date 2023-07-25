/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  while (1) {
    if (p1 >= m && p2 >= n) break;
    if (p1 >= m) {
      nums1.splice(p1 + p2, 0, nums2[p2]);
      p2++;
    } else if (p2 >= n) {
      p1++;
    } else if (nums1[p1 + p2] < nums2[p2]) {
      p1++;
    } else if (nums1[p1 + p2] >= nums2[p2]) {
      nums1.splice(p1 + p2, 0, nums2[p2]);
      p2++;
    }
  }
  nums1.splice(m + n);
};
