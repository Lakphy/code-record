/**
 * @param {number} n
 * @return {number[]}
 */
var dicesProbability = function (n) {
    let result = [0, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6];
    let i = 1;
    while (1) {
        if (i >= n) break;
        else i = i + 1;
        let arr = [];
        for (let j = 1; j <= 6; j++) {
            for (k = i - 1; k < result.length; k++) {
                if (result[k]) {
                    if (arr[j + k]) arr[j + k] = arr[j + k] + result[k] / 6;
                    else arr[j + k] = result[k] / 6;
                }
            }
        }
        result = arr;
        console.log(arr);
    }
    return result.filter((item) => { return item });
};
dicesProbability(3)