# Unique Number of Occurrences

LeetCode #: [1207](https://leetcode.com/problems/unique-number-of-occurrences/)

Difficulty: Easy

Topics: Hash table.

## Explanation

Use a `valueMap` array to store the count of value. It is given that `-1000 <= arr[i] <= 1000`, so for each element, we add `1000` to it and make the number the index of the `valueMap`, i.e. index of `valueMap` will go from 0 to maximum 2000.

Once we have the `valueMap`, we filter out the undefined values and check for duplicates with the help of lodash `uniq` function.
