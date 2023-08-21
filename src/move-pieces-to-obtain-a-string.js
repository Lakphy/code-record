/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  const n = start.length;
  let i = -1;
  let j = -1;
  function next() {
    i++;
    j++;
    while (start[i] === "_") {
      i++;
    }
    while (target[j] === "_") {
      j++;
    }
  }
  next();
  while (i <= n && j <= n) {
    // console.log(i,j);
    if (start[i] !== target[j]) return false;
    switch (start[i]) {
      case "L":
        if (i < j) return false;
        break;
      case "R":
        if (i > j) return false;
        break;
    }
    next();
  }
  return true;
};
