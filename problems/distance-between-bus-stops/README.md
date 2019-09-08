# Distance Between Bus Stops

LeetCode #: [1184](https://leetcode.com/problems/distance-between-bus-stops/)

Difficulty: Easy.

Topics: Array.

## Explanation

The idea:

1. Create prefix sum of `distance`.
2. With the prefix sum, you can easily get the distance between `start` and `destination` in one direction (either clockwise or counterclockwise).
3. To get the distance for the other direction, you can subtract the distance above from the total sum distance.

## Complexity Analysis

Time complexity: O(n) since we loop through all elements in `distance` exactly once.

Space complexity: O(1). Extra space used is always the same.
