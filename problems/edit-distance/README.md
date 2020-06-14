# Edit Distance

LeetCode #: [72](https://leetcode.com/problems/edit-distance/)

Difficulty: Hard

Topic: String, Dynamic Programming.

## Problem

Given two words `word1` and `word2`, find the minimum number of operations required to convert `word1` to `word2`.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character

Example 1:

```text
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

Example 2:

```text
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

## Solution Explanation

The idea here is to use a `(m+1)*(n+1)` matrix where rows represent characters in `word1` and columns represent characters in `word2`. Each cell represent the number of operations required to change `word1[0..i]` to `word2[0..j]`.

In the end, the result would be `dp[i][j]`.

Reference: [C++ O(n)-space DP](https://leetcode.com/problems/edit-distance/discuss/25846/C%2B%2B-O(n)-space-DP) by [jianchao-li](https://leetcode.com/jianchao-li).

## Complexity Analysis

Assume m is the length of `word1` and n is the length of `word2`.

Time complexity: O(m*n)

Space complexity: O(m*n)
