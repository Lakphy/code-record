/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  const arr = s.trim().split("");
  let have_dot = false;
  let have_num = false;
  let have_enum = false;
  let have_e = false;
  let have_sym = false;
  for (let i = 0; i < arr.length; i++) {
    const code = arr[i].charCodeAt();
    if (code >= 48 && code <= 57) {
      have_num = true;
      if (have_e) have_enum = true;
    } else if (code === 46) {
      if (have_dot || have_e) return false;
      have_dot = true;
    } else if (code === 101 || code === 69) {
      if (!have_num || have_e) return false;
      have_e = true;
      have_sym = false;
    } else if (code === 43 || code === 45) {
      if (
        have_sym ||
        (have_e && have_enum) ||
        (!have_e && (have_num || have_dot))
      )
        return false;
      have_sym = true;
    } else return false;
  }
  if ((have_e && !have_enum) || (have_dot && !have_num) || !have_num)
    return false;
  return true;
};
