# Island Perimeter

LeetCode #: [463](https://leetcode.com/problems/island-perimeter/)

Difficulty: Easy

Topic: Hash Table.

## Problem

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

```text
Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:
```

![Example](https://assets.leetcode.com/uploads/2018/10/12/island.png)

## Complexity Analysis

Time complexity: O(m * n), where m and n are the rows and columns of the grid.

Space complexity: O(1)
