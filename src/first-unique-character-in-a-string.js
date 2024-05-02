/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const len = s.length;
    const hash = Object.create(null);
    for (let i = len - 1; i >= 0; i--) {
        const val = s[i];
        if (hash[val] === undefined) {
            hash[val] = i;
        }
        else {
            hash[val] = -1;
        }
    }
    const ans = Object.keys(hash).filter(item => hash[item] !== -1).sort((a, b) => hash[a] - hash[b])[0];
    return ans === undefined ? -1 : hash[ans]
};