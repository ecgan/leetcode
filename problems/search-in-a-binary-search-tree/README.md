# Search in a Binary Search Tree

LeetCode #: [700](https://leetcode.com/problems/search-in-a-binary-search-tree/)

Difficulty: Easy

Topics: Tree.

## Problem

Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example, 

```text
Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
```

You should return this subtree:

```text
      2     
     / \   
    1   3
```

In the example above, if we want to search the value `5`, since there is no node with value `5`, we should return `NULL`.

Note that an empty tree is represented by `NULL`, therefore you would see the expected output (serialized tree format) as `[]`, not `null`.

## Complexity Analysis

Time complexity: O(n) where n is the number of tree nodes.

Space complexity: O(h) where h is the height of the tree due to the recursive call stack in depth-first search.
