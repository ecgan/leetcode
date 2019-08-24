# Single-Row Keyboard

LeetCode #: 1165

Difficulty: Easy

Topics: String.

## Explanation

The idea:

1. Generate a map of `{ character: index }` so that you can get the position of a character on the keyboard in O(1) time.
2. Loop through each character of `word` and calculate the finger travelling time with the help of the map object.

## Complexity Analysis

`keyboard`'s length is always constant at 26, so we can ignore that. Assume `n` is the number of characters in `word`.

Time complexity: O(n) since we need to loop through all characters in `word`.

Space complexity: O(1). Extra space used is always the same regardless of `word`.
