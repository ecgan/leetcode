# Uncrossed Lines

LeetCode #: [1035](https://leetcode.com/problems/uncrossed-lines/)

Difficulty: Medium.

Topics: Array.

## Problem

We write the integers of `A` and `B` (in the order they are given) on two separate horizontal lines.

Now, we may draw connecting lines: a straight line connecting two numbers `A[i]` and `B[j]` such that:

- `A[i] == B[j]`;
- The line we draw does not intersect any other connecting (non-horizontal) line.

Note that a connecting lines cannot intersect even at the endpoints: each number can only belong to one connecting line.

Return the maximum number of connecting lines we can draw in this way.

Example 1:

```text
Input: A = [1,4,2], B = [1,2,4]
Output: 2
Explanation: We can draw 2 uncrossed lines as in the diagram.
We cannot draw 3 uncrossed lines, because the line from A[1]=4 to B[2]=4 will intersect the line from A[2]=2 to B[1]=2.
```

Example 2:

```text
Input: A = [2,5,1,2,5], B = [10,5,2,1,5,2]
Output: 3
```

Example 3:

```text
Input: A = [1,3,7,1,7,5], B = [1,9,2,5,1]
Output: 2
``` 

Note:

- `1 <= A.length <= 500`
- `1 <= B.length <= 500`
- `1 <= A[i], B[i] <= 2000`

## Solution Explanation

This problem is similar to the [#1143 Longest Common Subsequence](../longest-common-subsequence/README.md) problem. The solution is to use dynamic programming by building a two-dimensional table where rows represent values in `A` and columns represents values in `B`. The cell values represent the number of connecting lines so far. In the end, the answer will be in the bottom right cell.

Reference: [[Java/C++/Python] DP, The Longest Common Subsequence](https://leetcode.com/problems/uncrossed-lines/discuss/282842/JavaC%2B%2BPython-DP-The-Longest-Common-Subsequence) by [lee215](https://leetcode.com/lee215).

## Complexity Analysis

Assume m is the length of array `A` and n is the length of array `B`.

Time complexity: O(m*n)

Space complexity: O(m*n)
