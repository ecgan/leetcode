# Subarray Sum Equals K

LeetCode #: [560](https://leetcode.com/problems/subarray-sum-equals-k/)

Difficulty: Medium

Topic: Array, Hash Table.

## Problem

Given an array of integers and an integer `k`, you need to find the total number of continuous subarrays whose sum equals to `k`.

Example 1:

```text
Input:nums = [1,1,1], k = 2
Output: 2
```

Note:

- The length of the array is in range [1, 20,000].
- The range of numbers in the array is [-1000, 1000] and the range of the integer `k` is [-1e7, 1e7].

## Complexity Analysis

Time complexity: O(n). We loop through the array only once.

Space complexity: O(n). Hash map can contain up to n entries.
