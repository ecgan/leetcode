# Permutation in String

LeetCode #: [567](https://leetcode.com/problems/permutation-in-string/)

Difficulty: Medium

Topics: Two Pointers, Sliding Window.

## Problem

Given two strings `s1` and `s2`, write a function to return true if `s2` contains the permutation of `s1`. In other words, one of the first string's permutations is the substring of the second string.

Example 1:

```text
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
```

Example 2:

```text
Input:s1= "ab" s2 = "eidboaoo"
Output: False
```

Note:

- The input strings only contain lower case letters.
- The length of both given strings is in range [1, 10,000].

## Solution Explanation

The solution uses the sliding window technique. This question is very similar to the [#438 Find All Anagrams in a String](../find-all-anagrams-in-a-string) problem.

## Complexity Analysis

Time complexity: O(s1 + s2). We iterate through each character in `s1` and `s2` once.

Space complexity: O(1). We use an array with fixed length of 26 to keep track of character count in `s1`.
