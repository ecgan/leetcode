# Find Words That Can Be Formed by Characters

LeetCode #: [1160](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/)

Difficulty: Easy

Topics: Array, hash table.

## Explanation

This solution makes use of JavaScript [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) objects as hashtable to store the counts of characters.

## Complexity Analysis

Assume `m` is the total number of characters in all the word in `words`, and `n` is the total number of characters in `chars`.

### Time complexity: O(m+n)

In the worst case, the solution will go through all the `m` and `n` characters once.

### Space complexity: O(m+n)

In the worst case, the size of the hash tables would be `m` and `n`.
