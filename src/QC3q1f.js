/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.children = Object.create(null);
  this.END_SYMBOL = Symbol();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.children;
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (!node[ch]) node[ch] = Object.create(null);
    node = node[ch];
  }
  node[this.END_SYMBOL] = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.children;
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (!node[ch]) return false;
    node = node[ch];
  }
  if (node[this.END_SYMBOL]) return true;
  else return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.children;
  for (let i = 0; i < prefix.length; i++) {
    const ch = prefix[i];
    if (!node[ch]) return false;
    node = node[ch];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
