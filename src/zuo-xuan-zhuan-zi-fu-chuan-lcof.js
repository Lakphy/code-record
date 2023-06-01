/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  // return [...[...s].slice(n),...[...s].slice(0,n)].join("");
  // return s.substring(n).concat(s.substring(0, n));
  // return s.slice(n)+s.slice(0, n);
  return s.slice(n).concat(s.slice(0, n));
};
