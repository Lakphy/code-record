/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const hash1 = Object.create(null);
    const hash2 = Object.create(null);
    for (let i = 0; i < nums1.length; i++) hash1[nums1[i]] = true;
    for (let i = 0; i < nums2.length; i++) hash2[nums2[i]] = true;
    return Object.keys(hash1).filter(item => hash2[item]).map(Number);
};