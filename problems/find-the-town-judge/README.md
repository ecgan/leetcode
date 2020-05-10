# Find the Town Judge

LeetCode #: [997](https://leetcode.com/problems/find-the-town-judge/)

Difficulty: Easy

Topic: Graph.

## Problem

In a town, there are `N` people labelled from `1` to `N`.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties 1 and 2.

You are given `trust`, an array of pairs `trust[i] = [a, b]` representing that the person labelled `a` trusts the person labelled `b`.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return `-1`.

Example 1:

```text
Input: N = 2, trust = [[1,2]]
Output: 2
```

Example 2:

```text
Input: N = 3, trust = [[1,3],[2,3]]
Output: 3
```

Example 3:

```text
Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
```

Example 4:

```text
Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
```

Example 5:

```text
Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
```

Note:

- `1 <= N <= 1000`
- `trust.length <= 10000`
- `trust[i] are all different`
- `trust[i][0] != trust[i][1]`
- `1 <= trust[i][0], trust[i][1] <= N`

## Solution Explanation

We use an array `count` to keep track of the number of "trust" a person has. When a person gives out his trust, we decrement the trust number. When a person receives a trust from someone else, we increment the trust number. In the end, a judge is the person whose trust number is equal to `N-1`, since the judge does not trust anyone, and he is trusted by everyone else.

Reference: [LeetCode Discuss page](https://leetcode.com/problems/find-the-town-judge/discuss/242938/JavaC%2B%2BPython-Directed-Graph) posted by [lee215](https://leetcode.com/lee215/).

## Complexity Analysis

Assume `t` is the number of elements in the `trust` array and `n` is the number of people.

Time complexity: O(t + n)

Space complexity: O(n)
