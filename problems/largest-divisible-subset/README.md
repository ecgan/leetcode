# Largest Divisible Subset

LeetCode #: [368](https://leetcode.com/problems/largest-divisible-subset/)

Difficulty: Medium

Topics: Math, Dynamic Programming.

## Problem

Given a set of distinct positive integers, find the largest subset such that every pair `(S[i], S[j])` of elements in this subset satisfies:

`S[i] % S[j] = 0` or `S[j] % S[i] = 0.`

If there are multiple solutions, return any subset is fine.

Example 1:

```text
Input: [1,2,3]
Output: [1,2] (of course, [1,3] will also be ok)
```

Example 2:

```text
Input: [1,2,4,8]
Output: [1,2,4,8]
```

## Solution Explanation

Reference: [4 lines in Python](https://leetcode.com/problems/largest-divisible-subset/discuss/84002/4-lines-in-Python) by [
StefanPochmann](https://leetcode.com/stefanpochmann)
