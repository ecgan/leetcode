# Product of Array Except Self

LeetCode #: [283](https://leetcode.com/problems/product-of-array-except-self/)

Difficulty: Medium

Topics: Array.

## Problem

Given an array `nums` of n integers where n > 1,  return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

Example:

```text
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

**Constraint**: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

**Note**: Please solve it without division and in O(n).

**Follow up:** Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

## Solution Explanation

The solution addresses the **Note** and **Follow up** sections, and makes use of the following theory:

```text
result[i] = (products of elements on the left hand side of i) * (products of elements on the right hand side of i)
```

First, we loop through the elements from left to right to get the products of elements on the left hand side of i, and stored them in `result` array.

Then we do another loop from right to left, calculating the products of elements on the right hand side of i and storing it in a variable, and update the `result` array using the above formula as we go.

## Complexity Analysis

Time complexity: O(n). We travel through the `nums` array once from left to right, and another time from right to left.

Space complexity: O(1) constant space (excluding the `result` output array as mentioned in the **Follow up** section).
