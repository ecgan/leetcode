# Score of Parentheses

LeetCode #: [856](https://leetcode.com/problems/score-of-parentheses/)

Difficulty: Medium

Topics: String, Stack.

## Problem

Given a balanced parentheses string `S`, compute the score of the string based on the following rule:

- `()` has score 1
- `AB` has score `A + B`, where A and B are balanced parentheses strings.
- `(A)` has score `2 * A`, where A is a balanced parentheses string.

Example 1:

```text
Input: "()"
Output: 1
```

Example 2:

```text
Input: "(())"
Output: 2
```

Example 3:

```text
Input: "()()"
Output: 2
```

Example 4:

```text
Input: "(()(()))"
Output: 6
```

Note:

- `S` is a balanced parentheses string, containing only `(` and `)`.
- `2 <= S.length <= 50`
