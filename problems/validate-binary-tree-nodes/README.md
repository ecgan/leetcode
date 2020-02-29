# Validate Binary Tree Nodes

LeetCode #: [1361](https://leetcode.com/problems/validate-binary-tree-nodes/)

Difficulty: Medium

Topics: Graph.

## Problem

You have n binary tree nodes numbered from `0` to `n - 1` where node `i` has two children `leftChild[i]` and `rightChild[i]`, return `true` if and only if all the given nodes form exactly one valid binary tree.

If node `i` has no left child then `leftChild[i]` will equal `-1`, similarly for the right child.

Note that the nodes have no values and that we only use the node numbers in this problem.

*Note: Illustrations for the examples below are available in the [LeetCode Problem #1361](https://leetcode.com/problems/validate-binary-tree-nodes/) page.*

Example 1:

```text
Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
Output: true
```

Example 2:

```text
Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
Output: false
```

Example 3:

```text
Input: n = 2, leftChild = [1,0], rightChild = [-1,-1]
Output: false
```

Example 4:

```text
Input: n = 6, leftChild = [1,-1,-1,4,-1,-1], rightChild = [2,-1,-1,5,-1,-1]
Output: false
```

Constraints:

* `1 <= n <= 10^4`
* `leftChild.length == rightChild.length == n`
* `-1 <= leftChild[i], rightChild[i] <= n - 1`
