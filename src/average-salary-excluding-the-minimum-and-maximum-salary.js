/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    const len = salary.length;
    let min = salary[0];
    let max = salary[0];
    let ans = salary[0];
    for (let i = 1; i < len; i++) {
        const val = salary[i];
        ans += val;
        if (val < min) min = val;
        if (val > max) max = val;
    }
    console.log(min, max);
    return (ans - max - min) / (len - 2);
};