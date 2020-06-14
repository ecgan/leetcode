# Counting Bits

LeetCode #: [338](https://leetcode.com/problems/counting-bits/)

Difficulty: Medium

Topics: Dynamic Programming, Bit Manipulation.

## Problem

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:

```text
Input: 2
Output: [0,1,1]
```

Example 2:

```text
Input: 5
Output: [0,1,1,2,1,2]
```

Follow up:

- It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
- Space complexity should be O(n).
- Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

## Solution Explanation

Reference: [Three-Line Java Solution](https://leetcode.com/problems/counting-bits/discuss/79539/Three-Line-Java-Solution) by [lixx2100
](https://leetcode.com/lixx2100)
