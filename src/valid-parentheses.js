/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === map[s[i]]) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length === 0;
};
