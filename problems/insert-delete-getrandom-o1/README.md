# Insert Delete GetRandom O(1)

LeetCode #: [380](https://leetcode.com/problems/insert-delete-getrandom-o1/)

Difficulty: Medium

Topic: Array, Hash Table, Design.

## Problem

Design a data structure that supports all following operations in average O(1) time.

1. `insert(val)`: Inserts an item val to the set if not already present.
2. `remove(val)`: Removes an item val from the set if present.
3. `getRandom`: Returns a random element from current set of elements. Each element must have the same probability of being returned.

Example:

```text
// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
```

## Complexity Analysis

Time complexity: O(1) for all `insert`, `remove` and `getRandom` operations.

Space complexity: O(n) where n is the number of elements in the set.
