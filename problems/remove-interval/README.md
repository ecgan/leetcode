# Remove Interval

LeetCode #: [1272](https://leetcode.com/problems/remove-interval/)

Difficulty: Medium

Topic: Math, line sweep.

## Problem

Given a sorted list of disjoint `intervals`, each interval `intervals[i] = [a, b]` represents the set of real numbers `x` such that `a <= x < b`.

We remove the intersections between any interval in `intervals` and the interval `toBeRemoved`.

Return a sorted list of `intervals` after all such removals.

```text
Example 1:

Input: intervals = [[0,2],[3,4],[5,7]], toBeRemoved = [1,6]
Output: [[0,1],[6,7]]
```

```text
Example 2:

Input: intervals = [[0,5]], toBeRemoved = [2,3]
Output: [[0,2],[3,5]]
```

Constraints:

- `1 <= intervals.length <= 10^4`
- `-10^9 <= intervals[i][0] < intervals[i][1] <= 10^9`
