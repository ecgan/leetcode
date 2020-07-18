# Invert Binary Tree

LeetCode #: [226](https://leetcode.com/problems/invert-binary-tree/)

Difficulty: Easy

Topics: Tree.

## Problem

Invert a binary tree.

Example:

```text
Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

Trivia:

This problem was inspired by [this original tweet](https://twitter.com/mxcl/status/608682016205344768) by [Max Howell](https://twitter.com/mxcl):

> Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

## Complexity Analysis

Time complexity: O(n).

Space complexity: O(h) where h is the height of the tree. O(n) in the worst case when h is equal to n.
