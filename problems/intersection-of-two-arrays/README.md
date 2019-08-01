# Intersection of Two Arrays

[Link to LeetCode page](https://leetcode.com/problems/intersection-of-two-arrays/)

Difficulty: Easy

Topics: Hash table, two pointers, binary search, sort, set.

## Solution Explanation

We convert the arrays into two [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) objects - short set and long set. This would remove duplicate values in each array.

Then we iterate through the short set and check if the value exists in the long set. Since it is a set object, the check performs in constant O(1) time complexity.

## Complexity Analysis

Assume m is the length of nums1 and n is the length of nums2.

Time complexity: O(m + n) because we go through every elements in both arrays once during the set creation.

Space complexity: O(m + n) because in worst case scenario we create two sets of length m and n when both arrays contain totally unique values.

## Tests

In the problem description on LeetCode page, it is noted that:

- Each element in the result must be unique.
- The result can be in any order.

Because of this, the assertion in our tests has to be in the following format:

```javascript
  expect(result).toHaveLength(2)
  expect(result).toContain(9)
  expect(result).toContain(4)
```
