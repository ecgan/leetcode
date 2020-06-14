# Cousins in Binary Tree

LeetCode #: [993](https://leetcode.com/problems/cousins-in-binary-tree/)

Difficulty: Easy.

Topics: Tree, Breadth-first Search.

## Problems

In a binary tree, the root node is at depth `0`, and children of each depth `k` node are at depth `k+1`.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the `root` of a binary tree with unique values, and the values `x` and `y` of two different nodes in the tree.

Return `true` if and only if the nodes corresponding to the values `x` and `y` are cousins.

Example 1:

![Example 1](https://assets.leetcode.com/uploads/2019/02/12/q1248-01.png)

```text
Input: root = [1,2,3,4], x = 4, y = 3
Output: false
```

Example 2:

![Example 2](https://assets.leetcode.com/uploads/2019/02/12/q1248-02.png)

```text
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
```

Example 3:

![Example 3](https://assets.leetcode.com/uploads/2019/02/13/q1248-03.png)

```text
Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
```

Note:

- The number of nodes in the tree will be between `2` and `100`.
- Each node has a unique integer value from `1` to `100`.

## Solution Explanation

Because this question is about finding two nodes at the *same depth*, we should use breadth-first search (BFS) approach to traverse through the tree (instead of depth-first search) to give us better performance.

We use a `queue` array to store the nodes to be processed, a `depthNodeCount` variable to keep track of the number of nodes at the current depth, and a `parentNode` variable to store the reference to the `node` when `x` or `y` is found in the `node.left.val` or `node.right.val`.

Note that when we are looking into `node.right`, we have the following check:

```javascript
if (node.right) {
  if (node.right.val === x || node.right.val === y) {
    if (parentNode === node) {
      return false
    }
```

We return `false` here because this means `x` and `y` are siblings, not cousins.

When `depthNodeCount` reaches `0`, it means we are done with the current depth level. If there is a `parentNode`, it means we found one value but not the other. We can return `false` right away and do not need go deeper down the tree.

## Complexity Analysis

Time complexity: O(n). We iterate through each node at most once.

Space complexity: O(log n). We use an array to store the nodes at the same depth.
