# Valid Perfect Square

LeetCode #: [367](https://leetcode.com/problems/valid-perfect-square/)

Difficulty: Easy

Topics: Math, Binary Search.

## Explanation

Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: **Do not** use any built-in library function such as `sqrt`.

Example 1:

```text
Input: 16
Output: true
```

Example 2:

```text
Input: 14
Output: false
```

## Solution Explanation

This solution uses the [Newton's Method](https://en.wikipedia.org/wiki/Integer_square_root#Algorithm_using_Newton's_method) to quickly find the square root of the number.

Reference: [LeetCode Discuss Forum](https://leetcode.com/problems/valid-perfect-square/discuss/83907/3-4-short-lines-Integer-Newton-Most-Languages)

## Complexity Analysis

Time complexity: O(log n)

Space complexity: O(1)
