# Coin Change 2

LeetCode #: [518](https://leetcode.com/problems/coin-change-2/)

Difficulty: Medium

Topics: -

## Problem

You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

Example 1:

```text
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```

Example 2:

```text
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
```

Example 3:

```text
Input: amount = 10, coins = [10] 
Output: 1
```

Note:

You can assume that

- `0 <= amount <= 5000`
- `1 <= coin <= 5000`
- the number of coins is less than 500
- the answer is guaranteed to fit into signed 32-bit integer

## Solution Explanation

This is a [knapsack problem](https://en.wikipedia.org/wiki/Knapsack_problem) which can be solved by using dynamic programming.

Reference: [Knapsack problem - Java solution with thinking process O(nm) Time and O(m) Space](https://leetcode.com/problems/coin-change-2/discuss/99212/Knapsack-problem-Java-solution-with-thinking-process-O(nm)-Time-and-O(m)-Space) by [tankztc](https://leetcode.com/tankztc)

## Complexity Analysis

Assume m is the amount and n is the number of coins.

Time complexity: O(mn)

Space complexity: O(m)
