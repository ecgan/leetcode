# Valid Parenthesis String

LeetCode #: [678](https://leetcode.com/problems/valid-parenthesis-string/)

Difficulty: Medium.

Topics: String.

## Problem

Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

- Any left parenthesis `'('` must have a corresponding right parenthesis `')'`.
- Any right parenthesis `')'` must have a corresponding left parenthesis `'('`.
- Left parenthesis `'('` must go before the corresponding right parenthesis `')'`.
- `'*'` could be treated as a single right parenthesis `')'` or a single left parenthesis `'('` or an empty string.
- An empty string is also valid.

Example 1:

```text
Input: "()"
Output: True
```

Example 2:

```text
Input: "(*)"
Output: True
```

Example 3:

```text
Input: "(*))"
Output: True
```

Note:

- The string size will be in the range [1, 100].

## Solution Explanation

We need to check for pairs of matching left and right parenthesis. For this kind of question, we usually just need to keep track of number of left parentheses.

However, with the possible occurrence of the character `'*'`, there could be different number of left parentheses. We track it by using `minLeft` (minimum number of left paretheses) and `maxLeft` (possible maximum number of left paretheses). For example:

```text
Input: ((
minLeft: 2
maxLeft: 2

Input: ((**
minLeft: 2
maxLeft: 4
```

When we encounter a `')'`, we just need to minus 1 accordingly from `minLeft` and `maxLeft`.

The result is false when:

- `maxLeft` is less than 0 (i.e. the number of `')'` is more than `'('` and `'*'`); or,
- `minLeft` is not equal to 0 in the end (i.e. there is no exact matching pairs of left and right parentheses).

## Complexity Analysis

Space complexity: O(1) constant space with `minLeft` and `maxLeft` only.

Time complexity: O(n) by looping through each character once.
