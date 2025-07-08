# Letter Case Permutation

LeetCode #: [784](https://leetcode.com/problems/letter-case-permutation/)

Difficulty: Medium

Topics: Backtracking, Bit Manipulation.

## Problem

Given a string `S`, we can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can return the output in any order.

Example 1:

```text
Input: S = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]
```

Example 2:

```text
Input: S = "3z4"
Output: ["3z4","3Z4"]
```

Example 3:

```text
Input: S = "12345"
Output: ["12345"]
```

Example 4:

```text
Input: S = "0"
Output: ["0"]
```

Constraints:

- `S` will be a string with length between `1` and `12`.
- `S` will consist only of letters or digits.
