# Surrounded Regions

LeetCode #: [130](https://leetcode.com/problems/surrounded-regions/)

Difficulty: Medium

Topic: Depth-first Search, Breadth-first Search, Union Find.

## Problem

Given a 2D board containing `'X'` and `'O'` (the letter O), capture all regions surrounded by `'X'`.

A region is captured by flipping all `'O'`s into `'X'`s in that surrounded region.

Example:

```text
X X X X
X O O X
X X O X
X O X X
```

After running your function, the board should be:

```text
X X X X
X X X X
X X X X
X O X X
```

Explanation:

Surrounded regions shouldn’t be on the border, which means that any `'O'` on the border of the board are not flipped to `'X'`. Any `'O'` that is not on the border and it is not connected to an `'O'` on the border will be flipped to `'X'`. Two cells are connected if they are adjacent cells connected horizontally or vertically.
