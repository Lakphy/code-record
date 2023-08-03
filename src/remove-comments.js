/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  let code = source.join("\n") + "\n";
  function delInline(index) {
    const end = code.indexOf("\n", index);
    const temp = code.slice(index, end);
    code = code.replace(temp, "");
  }
  function delBlock(index) {
    const end = code.indexOf("*/", index + 2);
    const temp = code.slice(index, end + 2);
    code = code.replace(temp, "");
  }
  while (true) {
    const block = code.indexOf("/*");
    const inline = code.indexOf("//");
    if (block !== -1 && inline !== -1) {
      if (block < inline) delBlock(block);
      else delInline(inline);
    } else if (inline !== -1) delInline(inline);
    else if (block !== -1) delBlock(block);
    else break;
  }
  return code.split("\n").filter((item) => item.length > 0);
};
