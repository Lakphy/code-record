/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const dict = dictionary.sort((a, b) => a.length - b.length);
  const arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < dict.length; j++) {
      if (arr[i].startsWith(dict[j])) {
        arr[i] = dict[j];
        break;
      }
    }
  }
  return arr.join(" ");
};
