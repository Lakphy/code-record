/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const obj = {};
  s.split("").forEach((item) => {
    if (obj[item] === true) obj[item] = false;
    else if (obj[item] === undefined) obj[item] = true;
  });
  const arr = Object.keys(obj);
  for (let i = 0; i < arr.length; i++) if (obj[arr[i]]) return arr[i];
  return " ";
};
