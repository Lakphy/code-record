/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s === t) return false;
  const a = [...s].sort((a, b) => a.charCodeAt() - b.charCodeAt());
  const b = [...t].sort((a, b) => a.charCodeAt() - b.charCodeAt());
  // console.log(a,b);
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
};
