# Shortest Distance to a Character

LeetCode #: [821](https://leetcode.com/problems/shortest-distance-to-a-character/)

Difficulty: Easy

Topics: -

## Problem

Given a string `s` and a character `c` that occurs in `s`, return an array of integers `answer` where `answer.length == s.length` and `answer[i]` is the shortest distance from `s[i]` to the character `c` in `s`.

Example 1:

```text
Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
```

Example 2:

```text
Input: s = "aaab", c = "b"
Output: [3,2,1,0]
```

Constraints:

- `1 <= s.length <= 10^4`
- `s[i]` and `c` are lowercase English letters.
- `c` occurs at least once in `s`.
