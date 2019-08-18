# As Far from Land as Possible

LeetCode #: [1162](https://leetcode.com/problems/as-far-from-land-as-possible/)

Difficulty: Medium

Topic: Breadth-First Search, Graph.

## Complexity Analysis

Assume `n` is the total number of cells in the input array.

### Time complexity: O(n)

The solution will go through all the `n` cells twice. The first time is to get the initial list of lands. The second time is to perform breadth-first search based on the list of lands to get the maximum distance.
