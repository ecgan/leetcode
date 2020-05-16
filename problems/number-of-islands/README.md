# Number of Islands

LeetCode #: [200](https://leetcode.com/problems/number-of-islands/)

Difficulty: Medium

Topic: Depth-first Search, Breadth-first Search, Union Find.

## Problem

Given a 2d grid map of `'1'`s (land) and `'0'`s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

```text
Input:
11110
11010
11000
00000

Output: 1
```

Example 2:

```text
Input:
11000
11000
00100
00011

Output: 3
```

## Solution Explanation

Use a variable `num` to keep track of island count, starting at 0. Loop through the cells. When we see a `'1'`, increment `num`, and then "sink" the whole island by using depth-first search and convert all `'1'` into `'0'`. In the end, we will have the island count.

## Complexity Analysis

Time complexity: O(rows * cols). Best case scenario is when the whole grid is `'0'` and we loop through each cell only once. Worst case scenario is when the whole grid is `'1'` and each cell is visited 5 times (1 time for the main grid loop, and 4 times for its adjacent cells' up, down, left and right visit directions).

Space complexity: O(rows * cols). The depth-first search may need to go `rows * cols` deep, space cost would be the recursive stack size.
