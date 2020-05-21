# Kth Smallest Element in a BST

LeetCode #: [230](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

Difficulty: Medium

Topics: Binary Search, Tree.

## Problem

Given a binary search tree, write a function `kthSmallest` to find the `k`th smallest element in it.

Note:

You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

```text
Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
```

Example 2:

```text
Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
```

Follow up:

What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

## Solution Explanation

Refer to the official solution [here](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solution/).

## Complexity Analysis

Assume `H` to be the tree height.

Time complexity: O(H+k). This complexity is defined by the stack, which contains at least H+k elements, since before starting to pop out one has to go down to a leaf. This results in O(log N + k) for the balanced tree and O(N+k) for completely unbalanced tree with all the nodes in the left subtree.

Space complexity: O(H+k), the same as for time complexity, O(N+k) in the worst case, and O(logN+k) in the average case.
