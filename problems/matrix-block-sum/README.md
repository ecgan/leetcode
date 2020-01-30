# Matrix Block Sum

LeetCode #: [1314](https://leetcode.com/problems/matrix-block-sum/)

Difficulty: Medium

Topics: Dynamic Programming.

## Problem

Given a `m * n` matrix `mat` and an integer `K`, return a matrix `answer` where each `answer[i][j]` is the sum of all elements `mat[r][c]` for `i - K <= r <= i +  K, j - K <= c <= j + K`, and `(r, c)` is a valid position in the matrix.

**Example 1:**

```text
Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
Output: [[12,21,16],[27,45,33],[24,39,28]]
```

**Example 2:**

```text
Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
Output: [[45,45,45],[45,45,45],[45,45,45]]
```

**Constraints:**

* `m == mat.length`
* `n == mat[i].length`
* `1 <= m, n, K <= 100`
* `1 <= mat[i][j] <= 100`
