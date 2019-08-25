# Compare Strings by Frequency of the Smallest Character

LeetCode #: [1170](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/)

Difficulty: Easy

Topics: Array, string.

## Explanation

The idea:

1. Get the words frequencies and sort them in ascending order.
2. Get the queries' frequencies.
3. For each query frequency, find the index of the position where it should be inserted into the word frequencies. The number of words is the difference between the word frequencies length and the insert index.
