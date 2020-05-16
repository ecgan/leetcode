# Contiguous Array

LeetCode #: [525](https://leetcode.com/problems/contiguous-array/)

Difficulty: Medium

Topics: Hash Table.

## Problem

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:

```text
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
```

Example 2:

```text
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
```

Note: The length of the given binary array will not exceed 50,000.

## Solution Explanation

We are looking for pairings of `0` and `1` in this problem.

Make use of a `sum` variable, and a `sumIndexMap` to record the first index when the `sum` occurs. Traverse through the array. If the element is a `0`, we minus one from the `sum`. If the element is a `1`, we add one to the `sum`. Then use the `sumIndexMap` to calculate the length of the pairings.

Note that we can use this technique when the question is changed to pairings of other types, such as `a` and `b` pairing.

## Complexity Analysis

Time complexity: O(n) since we loop through all the elements in the array only once.

Space complexity: O(n). The maximum possible size for the hash map will be `n` when all the elements are 0 or 1.
