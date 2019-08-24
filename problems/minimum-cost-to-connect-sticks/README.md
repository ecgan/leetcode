# Minimum Cost to Connect Sticks

LeetCode #: 1167

Difficulty: Medium

Topics: Greedy.

## Explanation

The idea:

1. Sort the sticks by length.
2. Combine the shortest first and second sticks.
3. Sum up the combined stick value.
4. Put the combined stick into the sorted array of sticks (make sure to insert at the right position).
5. Repeat until all sticks are combined into one.

The sum value is the answer.
