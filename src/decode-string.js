/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const checkType = (char) => {
    const code = char.charCodeAt();
    if (code >= 97 && code <= 122) return 0;
    if (code >= 48 && code <= 57) return 1;
    if (code === 91) return 2;
    if (code === 93) return 3;
  };
  const repeat = (target, n) => {
    if (n == 1) {
      return target;
    }
    var s = repeat(target, Math.floor(n / 2));
    s += s;
    if (n % 2) {
      s += target;
    }
    return s;
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    switch (checkType(cur)) {
      case 0:
        stack.push(cur);
        break;
      case 1:
        if (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
          const prev = stack.pop();
          stack.push(prev * 10 + parseInt(cur));
        } else stack.push(parseInt(cur));
        break;
      case 2:
        stack.push(cur);
        break;
      case 3:
        let temp = [];
        while (stack[stack.length - 1] !== "[") temp.push(stack.pop());
        stack.pop();
        const t = stack.pop();
        temp = temp.reverse().join("");
        stack.push(repeat(temp, t));
        break;
    }
  }
  return stack.join("");
};
