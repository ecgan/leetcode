# Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

LeetCode #: [1343](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/)

Difficulty: Medium

Topic: Array.

## Problem

Given an array of integers `arr` and two integers `k` and `threshold`.

Return *the number of sub-arrays* of size `k` and average greater than or equal to `threshold`.

Example 1:

```text
Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).
```

Example 2:

```text
Input: arr = [1,1,1,1,1], k = 1, threshold = 0
Output: 5
```

Example 3:

```text
Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.
```

Example 4:

```text
Input: arr = [7,7,7,7,7,7,7], k = 7, threshold = 7
Output: 1
```

Example 5:

```text
Input: arr = [4,4,4,4], k = 4, threshold = 1
Output: 1
```

Constraints:

* `1 <= arr.length <= 10^5`
* `1 <= arr[i] <= 10^4`
* `1 <= k <= arr.length`
* `0 <= threshold <= 10^4`
