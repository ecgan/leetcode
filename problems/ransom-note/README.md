# Ransom Note

LeetCode #: [383](https://leetcode.com/problems/ransom-note/)

Difficulty: Easy

Topic: String.

## Problem

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note: You may assume that both strings contain only lowercase letters.

```text
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

## Complexity Analysis

Assume m is the length of `magazine` string and n is the `ransomNote` string.

Time complexity: O(m+n). In worst case scenario, we will loop through every character in `magazine` and `ransomNote` once.

Space complexity: O(1). We use an array of maximum 26 elements to store the count of characters in `magazine`.
