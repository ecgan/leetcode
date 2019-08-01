# Single Number

[Link to LeetCode page](https://leetcode.com/problems/single-number/)

Difficulty: Easy

Topics: Hash table, bit manipulation.

## Solution Explanation

This solution uses the [bitwise XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#(Bitwise_XOR)) operator to return the unique value in the array.

To illustrate the bitwise XOR operation using the given Example 2 from LeetCode page:

```text
Input: [4,1,2,1,2]

Bitwise XOR operation with 0 on the elements:
0 ^ 4 ^ 1 ^ 2 ^ 1 ^ 2
> 4
```

We want to go through every element in the array, perform the bitwise XOR operation, and return a single value output. Instead of the conventional `for` loop, we use array's [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) function to achieve this, which is more succinct.

## Complexity Analysis

Time complexity: O(n) because we go through every elements in the array once.

Space complexity: O(1) because the memory used is always the same regardless of the number of elements.
