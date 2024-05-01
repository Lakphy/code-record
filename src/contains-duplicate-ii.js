/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let begin = 0;
    const len = nums.length;
    const hash = Object.create(null);
    const t = Math.min(len, begin + k + 1);
    for (let i = 0; i < t; i++) {
        const val = nums[i];
        if (hash[val]) return true;
        else hash[val] = true;
    }
    if (t === len) return false;
    let prev = nums[0];
    let next;
    for (let i = 1; i < len - k; i++) {
        hash[prev] = false;
        next = nums[k + i];
        if (hash[next]) return true;
        else hash[next] = true;
        prev = nums[i];
    }
    return false;
};