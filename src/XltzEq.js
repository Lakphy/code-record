/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  const reg = /[a-zA-Z0-9]/;
  while (left < right) {
    while (!reg.test(s[left]) && left < right) left++;
    while (!reg.test(s[right]) && left < right) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
};
