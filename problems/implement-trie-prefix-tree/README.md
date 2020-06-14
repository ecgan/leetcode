# Implement Trie (Prefix Tree)

LeetCode #: [208](https://leetcode.com/problems/implement-trie-prefix-tree/)

Difficulty: Medium

Topics: Design, Trie.

## Problem

Implement a trie with `insert`, `search`, and `startsWith` methods.

Example:

```text
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true
```

Note:

- You may assume that all inputs are consist of lowercase letters `a-z`.
- All inputs are guaranteed to be non-empty strings.
