/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  if (postorder.length <= 2) return true;
  const root = postorder[postorder.length - 1];
  const index = postorder.findIndex((item) => item >= root);
  const nodeLeft = postorder.slice(0, index);
  const nodeRight = postorder.slice(index, postorder.length - 1);
  return (
    nodeRight.reduce((prev, cur) => prev && cur > root, true) &&
    nodeLeft.reduce((prev, cur) => prev && cur < root, true) &&
    verifyPostorder(nodeLeft) &&
    verifyPostorder(nodeRight)
  );
};
