# Find the Duplicate Number

LeetCode #: [287](https://leetcode.com/problems/find-the-duplicate-number/)

Difficulty: Medium

Topics: Array, Two Pointers, Binary Search.

## Problem

Given an array `nums` containing `n` + 1 integers where each integer is between 1 and `n` (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

```text
Input: [1,3,4,2,2]
Output: 2
```

Example 2:

```text
Input: [3,1,3,4,2]
Output: 3
```

Note:

- You must not modify the array (assume the array is read only).
- You must use only constant, O(1) extra space.
- Your runtime complexity should be less than O(n^2).
- There is only one duplicate number in the array, but it could be repeated more than once.

## Solution Explanation

Reference: 

- [My easy understood solution with O(n) time and O(1) space without modifying the array. With clear explanation.](https://leetcode.com/problems/find-the-duplicate-number/discuss/72846/My-easy-understood-solution-with-O(n)-time-and-O(1)-space-without-modifying-the-array.-With-clear-explanation.) by [echoxiaolee](https://leetcode.com/echoxiaolee)

- [https://keithschwarz.com/interesting/code/?dir=find-duplicate](https://keithschwarz.com/interesting/code/?dir=find-duplicate)

- [Cycle Detection](https://en.wikipedia.org/wiki/Cycle_detection) on Wikipedia (algorithm by [Robert W. Floyd](https://en.wikipedia.org/wiki/Robert_W._Floyd) / [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth))
