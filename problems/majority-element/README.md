# Majority Element

LeetCode #: [169](https://leetcode.com/problems/majority-element/)

Difficulty: Easy

Topics: Array, Divide and Conquer, Bit Manipulation.

## Problem

Given an array of size n, find the majority element. The majority element is the element that appears more than `⌊ n/2 ⌋` times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

```text
Input: [3,2,3]
Output: 3
```

Example 2:

```text
Input: [2,2,1,1,1,2,2]
Output: 2
```

## Solution Explanation

The solution uses the [Boyer–Moore majority vote algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm). We iterate through each element once, and we use two variables to keep track of count and element. Since it is guaranteed that the majority element alway exist in the array, at the end of the for loop, the element will always be the majority element.

## Complexity Analysis

Time complexity: O(n)

Space complexity: O(1)
