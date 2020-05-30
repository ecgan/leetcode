# Possible Bipartition

LeetCode #: [886](https://leetcode.com/problems/possible-bipartition/)

Difficulty: Medium

Topics: Depth-first Search.

## Problem

Given a set of `N` people (numbered `1, 2, ..., N`), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if `dislikes[i] = [a, b]`, it means it is not allowed to put the people numbered `a` and `b` into the same group.

Return `true` if and only if it is possible to split everyone into two groups in this way.

Example 1:

```text
Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
Output: true
Explanation: group1 [1,4], group2 [2,3]
```

Example 2:

```text
Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
Output: false
```

Example 3:

```text
Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
Output: false
``` 

Note:

- `1 <= N <= 2000`
- `0 <= dislikes.length <= 10000`
- `1 <= dislikes[i][j] <= N`
- `dislikes[i][0] < dislikes[i][1]`
- There does not exist `i != j` for which `dislikes[i] == dislikes[j]`.

## Complexity Analysis

Assume E is the length of `dislikes` array.

Time complexity: O(N+E).

Space complexity: O(N+E).
