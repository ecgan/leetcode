# Get Equal Substrings Within Budget

LeetCode #: [1208](https://leetcode.com/contest/weekly-contest-156/problems/get-equal-substrings-within-budget/)

Difficulty: Medium

Topics: Array, sliding window.

## Explanation

First, we need to understand that this problem deals with the *differences between the characters in `s` and `t`*, rather than the actual characters.

To get the maximum length of substring with a cost less than or equal to `maxCost`, we use the [sliding window technique](https://www.geeksforgeeks.org/window-sliding-technique/) on the differences to get the maximum length.

## Complexity Analysis

Assume `n` is the number of characters in `s`.

Time complexity: O(n)

Space complexity: O(1)
