# Backspace String Compare

LeetCode #: [844](https://leetcode.com/problems/backspace-string-compare/)

Difficulty: Easy

Topics: Two Pointers, Stack.

## Problem

Given two strings `S` and `T`, return if they are equal when both are typed into empty text editors. `#` means a backspace character.

Example 1:

```text
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
```

Example 2:

```text
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
```

Example 3:

```text
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
```

Example 4:

```text
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
```

Note:

* `1 <= S.length <= 200`
* `1 <= T.length <= 200`
* `S` and `T` only contain lowercase letters and `'#'` characters.

Follow up:

* Can you solve it in `O(N)` time and `O(1)` space?

## Solution Explanation

The solution uses a two-pointer approach and performs the character comparison from the back of the strings.

If there is a `#` character, it will loop and skip towards the start of the string accordingly.

As soon as the string comparison fail, it will return `false` and exit immediately.

## Complexity Analysis

Time complexity: O(length of S + length of T)

Space complexity: O(1)
