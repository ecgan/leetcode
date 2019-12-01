# Number of Burgers with No Waste of Ingredients

LeetCode #: [1276](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/)

Difficulty: Easy

Topic: Math, greedy.

## Problem

Given two integers `tomatoSlices` and `cheeseSlices`. The ingredients of different burgers are as follows:

- Jumbo Burger: 4 tomato slices and 1 cheese slice.
- Small Burger: 2 Tomato slices and 1 cheese slice.

Return `[total_jumbo, total_small]` so that the number of remaining `tomatoSlices` equal to 0 and the number of remaining `cheeseSlices` equal to 0. If it is not possible to make the remaining `tomatoSlices` and `cheeseSlices` equal to 0 return `[]`.

Example 1:

```text
Input: tomatoSlices = 16, cheeseSlices = 7
Output: [1,6]
Explanation: To make one jumbo burger and 6 small burgers we need 4*1 + 2*6 = 16 tomato and 1 + 6 = 7 cheese. There will be no remaining ingredients.
```

Example 2:

```text
Input: tomatoSlices = 17, cheeseSlices = 4
Output: []
Explanation: There will be no way to use all ingredients to make small and jumbo burgers.
```

Example 3:

```text
Input: tomatoSlices = 4, cheeseSlices = 17
Output: []
Explanation: Making 1 jumbo burger there will be 16 cheese remaining and making 2 small burgers there will be 15 cheese remaining.
```

Example 4:

```text
Input: tomatoSlices = 0, cheeseSlices = 0
Output: [0,0]
```

Example 5:

```text
Input: tomatoSlices = 2, cheeseSlices = 1
Output: [0,1]
```

Constraints:

- `0 <= tomatoSlices <= 10^7`
- `0 <= cheeseSlices <= 10^7`

## Solution Explanation

First, we take care of the easy scenarios:

- `tomatoSlices` must be at least two times of `cheeseSlices` (see the rules for a small burger).
- `tomatoSlices` must be an even number.
- if `tomatoSlices` is 0 and `cheeseSlices` is 0, we return `[0, 0]`.

After we go through the above checks, it means there must be a valid solution for the problem.

Assume `jumbo` and `small` are the count of jumbo burger and small burger respectively, we can describe the problem with the following equations:

```text
(4 * jumbo) + (2 * small) = tomatoSlices
(1 * jumbo) + (1 * small) = cheeseSlices
```

Solving the above will give us:

```text
jumbo = (tomatoSlices - (2 * cheeseSlices)) / 2
small = cheeseSlices - jumbo
```

Finally we just need to return `[jumbo, small]`.

## Complexity Analysis

- Time: O(1)
- Space: O(1)

## References

Search for "chickens and rabbits problem". Examples:

- [LeetCode discussion](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/discuss/441321/JavaC%2B%2BPython-Chickens-and-Rabbits)
- [鸡兔同笼](https://zh.wikipedia.org/wiki/%E9%B8%A1%E5%85%94%E5%90%8C%E7%AC%BC)
- [The Chickens-and-Rabbits Problem](https://www.singaporemathplus.net/the-chickens-and-rabbits-problem/)
