# Sort Colors

LeetCode #: [75](https://leetcode.com/problems/sort-colors/)

Difficulty: Medium

Topics: Array, Two Pointers, Sort.

## Problem

Given an array with n objects colored red, white or blue, sort them [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

```text
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

Follow up:

- A rather straight forward solution is a two-pass algorithm using counting sort.

  First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

- Could you come up with a one-pass algorithm using only constant space?

## Solution Explanation

There are two solutions for this problem. Both has O(n) one-pass time complexity and O(1) space complexity.

1. [Array manipulation approach](array-manipulation-approach) which uses `splice`, `unshift` and `push` array methods. This approach performs faster on the LeetCode platform.

2. [Pointers approach](pointers-approach) which uses multiple index pointers to perform array element swapping.
