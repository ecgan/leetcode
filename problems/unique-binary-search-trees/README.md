# Unique Binary Search Trees

LeetCode #: [96](https://leetcode.com/problems/unique-binary-search-trees/)

Difficulty: Medium.

Topics: Dynamic Programming, Tree.

## Problem

Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

```text
Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

## Solution Explanation

Reference: [DP Solution in 6 lines with explanation. F(i, n) = G(i-1) * G(n-i)](https://leetcode.com/problems/unique-binary-search-trees/discuss/31666/DP-Solution-in-6-lines-with-explanation.-F(i-n)-G(i-1)-*-G(n-i)) by [liaison](https://leetcode.com/liaison)
