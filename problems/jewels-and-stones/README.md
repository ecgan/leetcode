# Jewels and Stones

LeetCode #: [771](https://leetcode.com/problems/jewels-and-stones/)

Difficulty: Easy

Topics: Hash Table.

## Problem

You're given strings `J` representing the types of stones that are jewels, and `S` representing the stones you have.  Each character in `S` is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in `J` are guaranteed distinct, and all characters in `J` and `S` are letters. Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

Example 1:

```text
Input: J = "aA", S = "aAAbbbb"
Output: 3
```

Example 2:

```text
Input: J = "z", S = "ZZ"
Output: 0
```

Note:

- `S` and `J` will consist of letters and have length at most 50.
- The characters in `J` are distinct.

## Complexity Analysis

Time complexity: O(J+S). We processed every character in `J` and `S` once.

Space complexity: O(J) with the use of the Set object to store the characters in `J`.
