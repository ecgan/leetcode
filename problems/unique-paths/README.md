# Unique Paths

LeetCode #: [62](https://leetcode.com/problems/unique-paths/)

Difficulty: Medium

Topics: Array, Dynamic Programming.

## Problem

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![Problem](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

Above is a 7 x 3 grid. How many possible unique paths are there?

Example 1:

```text
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
```

Example 2:

```text
Input: m = 7, n = 3
Output: 28
```

Constraints:

- `1 <= m, n <= 100`
- It's guaranteed that the answer will be less than or equal to `2 * 10 ^ 9`.

## Complexity Analysis

Time complexity: O(m * n). We loop through every cell in the m * n grid.

Space complexiy: O(n). We use a `dp` array to store n numbers.
