/**
 * @param {string} s
 * @return {boolean}
 */
const isAlphabet = (value) => (value >= 97 && value <= 122) || (value >= 65 && value <= 90) || (value >= 48 && value <= 57);
var isPalindrome = function (s) {
    const len = s.length;
    if (len === 1) return true;
    let left = 0;
    let right = len - 1;
    let ans = false;
    while (right - left > 0) {
        let a = s[left].charCodeAt();
        if (!isAlphabet(a)) { left++; continue; }
        let b = s[right].charCodeAt();
        if (!isAlphabet(b)) { right--; continue; }
        if (a > 90) a -= 32;
        if (b > 90) b -= 32;
        if (a !== b) return false;
        ans = true;
        left++;
        right--;
    }
    if (left === right) ans = true;
    return ans;
};
