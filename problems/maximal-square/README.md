# Maximal Square

LeetCode #: [221](https://leetcode.com/problems/maximal-square/)

Difficulty: Medium

Topic: Dynamic Programming.

## Problem

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

```text
Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
```

## Complexity Analysis

Assume m is the number of rows and n is the number of columns.

Time complexity: O(mn). We iterate through each element once.

Space complexity: O(n). We used an array named `dp` which has a maximum length of n.
