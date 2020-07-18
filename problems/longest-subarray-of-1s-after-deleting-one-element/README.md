# Longest Subarray of 1's After Deleting One Element

LeetCode #: [1493](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)

Difficulty: Medium

Topics: Array.

## Problem

Given a binary array `nums`, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array.

Return 0 if there is no such subarray.

Example 1:

```text
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
```

Example 2:

```text
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
```

Example 3:

```text
Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
```

Example 4:

```text
Input: nums = [1,1,0,0,1,1,1,0,1]
Output: 4
```

Example 5:

```text
Input: nums = [0,0,0]
Output: 0
```

Constraints:

- `1 <= nums.length <= 10^5`
- `nums[i]` is either `0` or `1`.

## Solution Explanation

Loop through all the numbers and keep track of the count in the groups of 1 and 0. You only need to keep track of the last two groups of 1 (`prevCount1` and `currCount1`) and last one group of 0 (`count0`). You can combine `prevCount1` and `currCount1` when `count0` is equal to 1.

## Complexity Analysis

Time complexity: O(n)

Space complexity: O(1)
