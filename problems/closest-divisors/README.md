# Closest Divisors

LeetCode #: [1362](https://leetcode.com/problems/closest-divisors/)

Difficulty: Medium

Topics: Math.

## Problem

Given an integer `num`, find the closest two integers in absolute difference whose product equals `num + 1` or `num + 2`.

Return the two integers in any order.

Example 1:

```text
Input: num = 8
Output: [3,3]
Explanation: For num + 1 = 9, the closest divisors are 3 & 3, for num + 2 = 10, the closest divisors are 2 & 5, hence 3 & 3 is chosen.
```

Example 2:

```text
Input: num = 123
Output: [5,25]
```

Example 3:

```text
Input: num = 999
Output: [40,25]
```

Constraints:

* `1 <= num <= 10^9`
