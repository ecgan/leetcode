const getLinkIndex = (char) => {
  return char.charCodeAt(0) - 97
}

const TrieNode = function () {
  this.links = []
  this.end = false
}

TrieNode.prototype.containsKey = function (char) {
  const index = getLinkIndex(char)
  return (this.links[index] !== undefined)
}

TrieNode.prototype.get = function (char) {
  const index = getLinkIndex(char)
  return this.links[index]
}

TrieNode.prototype.put = function (char, node) {
  const index = getLinkIndex(char)
  this.links[index] = node
}

TrieNode.prototype.setEnd = function () {
  this.end = true
}

TrieNode.prototype.isEnd = function () {
  return this.end
}

/**
 * Initialize your data structure here.
 */
const Trie = function () {
  this.root = new TrieNode()
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root

  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (!node.containsKey(char)) {
      node.put(char, new TrieNode())
    }

    node = node.get(char)
  }

  node.setEnd()
}

Trie.prototype.searchPrefix = function (word) {
  let node = this.root

  for (let i = 0; i < word.length; i++) {
    const char = word[i]

    if (!node.containsKey(char)) {
      return undefined
    }

    node = node.get(char)
  }

  return node
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.searchPrefix(word)
  return (node !== undefined && node.isEnd())
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const node = this.searchPrefix(prefix)
  return (node !== undefined)
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

module.exports = Trie
