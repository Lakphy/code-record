/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    const len = num.length;
    if (len === k) return "0";
    const stack = [Number(num[0])];
    let n = k;
    for (let i = 1; i < len; i++) {
        if (n === 0) stack.push(Number(num[i]));
        else {
            let last = stack[stack.length - 1];
            const cur = Number(num[i]);
            while (cur < last && n > 0) {
                stack.pop();
                last = stack[stack.length - 1];
                n--;
            }
            stack.push(cur);
        }
    }
    let ans;
    if (n !== 0) ans = stack.filter((_, i) => i < stack.length - n).map(item => String(item));
    else ans = stack.map(item => String(item));
    while (ans[0] === "0") ans.shift();
    if (ans.length === 0) return "0";
    else return ans.join("");
};