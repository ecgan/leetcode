# Reconstruct Itinerary

LeetCode #: [332](https://leetcode.com/problems/reconstruct-itinerary/)

Difficulty: Medium

Topic: Depth-first Search, Graph.

## Problem

Given a list of airline tickets represented by pairs of departure and arrival airports `[from, to]`, reconstruct the itinerary in order. All of the tickets belong to a man who departs from `JFK`. Thus, the itinerary must begin with `JFK`.

Note:

- If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary `["JFK", "LGA"]` has a smaller lexical order than `["JFK", "LGB"]`.
- All airports are represented by three capital letters (IATA code).
- You may assume all tickets form at least one valid itinerary.
- One must use all the tickets once and only once.

Example 1:

```text
Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
```

Example 2:

```text
Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation:
Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
But it is larger in lexical order.
```

## Solution Explanation

Reference: [Short Ruby / Python / Java / C++](https://leetcode.com/problems/reconstruct-itinerary/discuss/78768/Short-Ruby-Python-Java-C%2B%2B) by [stefanpochmann](https://leetcode.com/stefanpochmann)
