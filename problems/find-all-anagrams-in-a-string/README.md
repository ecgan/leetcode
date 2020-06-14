# Find All Anagrams in a String

LeetCode #: [438](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

Difficulty: Medium.

Topics: Hash Table.

## Problems

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

```text
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

Example 2:

```text
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```

## Solution Explanation

This solution uses sliding window technique.

Reference: [LeetCode Discuss - Shortest/Concise JAVA O(n) Sliding Window Solution](https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/92015/ShortestConcise-JAVA-O(n)-Sliding-Window-Solution)

## Complexity Analysis

Time complexity: O(p+s). We iterate through each character in p and s once.

Space complexity: O(1). We use an array with fixed length of 26 to keep track of character count.
