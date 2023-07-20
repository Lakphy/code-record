/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .map((item) => [...item].reverse().join(""))
    .join(" ");
};
