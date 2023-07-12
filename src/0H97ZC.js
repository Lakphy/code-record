/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const hash = {};
  for (let i = 0; i < arr2.length; i++) {
    hash[arr2[i]] = i + 1;
  }
  const arr3 = arr1.filter((item) => hash[item] === undefined);
  const arr4 = arr1.filter((item) => hash[item]);
  arr3.sort((a, b) => a - b);
  arr4.sort((a, b) => hash[a] - hash[b]);
  return [...arr4, ...arr3];
};
