# Divide Two Integers

LeetCode #: [29](https://leetcode.com/problems/divide-two-integers/)

Difficulty: Medium.

Topics: Math, Binary Search.

## Problem

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division, and mod operator.

Return the quotient after dividing `dividend` by `divisor`.

The integer division should truncate toward zero, which means losing its fractional part. For example, `truncate(8.345) = 8` and `truncate(-2.7335) = -2`.

Note:

- Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For this problem, assume that your function returns 2^31 − 1 when the division result overflows.

Example 1:

```text
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
```

Example 2:

```text
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.
```

Example 3:

```text
Input: dividend = 0, divisor = 1
Output: 0
```

Example 4:

```text
Input: dividend = 1, divisor = 1
Output: 1
```

Constraints:

- `-2^31 <= dividend, divisor <= 2^31 - 1`
- `divisor != 0`
