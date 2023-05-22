/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  return [...s]
    .map((item) => {
      if (item === " ") return "%20";
      else return item;
    })
    .join("");
};
