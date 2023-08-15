/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  const replaceObjs = new Array(indices.length)
    .fill(null)
    .map((_, index) => ({
      indice: indices[index],
      source: sources[index],
      target: targets[index],
    }))
    .sort((a, b) => a.indice - b.indice);
  let indexPlus = 0;
  for (let i = 0; i < replaceObjs.length; i++) {
    const { indice, source, target } = replaceObjs[i];
    const sourceLength = source.length;
    const targetLength = target.length;
    const sourceStr = s.substr(indice + indexPlus, sourceLength);
    if (sourceStr === source) {
      s =
        s.substr(0, indice + indexPlus) +
        target +
        s.substr(indice + indexPlus + sourceLength);
      indexPlus += targetLength - sourceLength;
    }
  }
  return s;
};
