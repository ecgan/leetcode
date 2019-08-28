# Last Substring in Lexicographical Order

LeetCode #: [1163](https://leetcode.com/problems/last-substring-in-lexicographical-order/)

Difficulty: Hard

Topics: String, suffix array.

## Explanation

There are two solutions here for this problem.

### Solution 1: Substring Comparison (Slow)

The first one, `solution-reduce-slow.js`, is a simple straightforward approach. It loops through all the characters, creates the corresponding substring, and performs substring comparison. However, this approach isn't a good approach and can be very slow when it comes to long strings (which can go up to `4 * 10^5` characters as per the note in the problem).

### Solution 2: Pointers and Offset (Fast)

The second solution, `solution.js`, is a more elegant and performant one.

Consider the following cases:

```text
Input: zyxbzyxa
Expected output: zyxbzyxa

Input: zyxbzyxc
Expected output: zyxc
```

Assume the input is string `s`.

We have two index pointers, `i` and `j`. `i` will always be set to the index of the final substring result. `j` is a moving lookahead index pointer that is used to loop through and compare the character at `j` with the character at `i`.

When `s[i]` and `s[j]` are the same (the first z and the second z in the above example), we need to compare the characters next to them (the first y and the second y). Since they are the same, we need to compare the characters next to them (the first x and the second x), and so on. To achieve this, we use an offset `k` to compare the `k` character next to `i` and `j`. Note that `k` starts at 0, and this is essentially comparing characters `s[i+k]` and `s[j+k]`.

When `s[i+k]` is bigger than `s[j+k]`, we just need to let `i` remain as is, continue move `j` forward to the next character at `j+k+1`, and reset `k` back to 0.

When `s[i+k]` is smaller than `s[j+k]`, this means that the substring starting at `j` is a better result than the substring at `i`, so we just need to update `i` to be at `j`, and change `j` and `k` accordingly.

In the end, the result would be the substring starting at `i`.

Credit for this solution goes to the [Python code](https://leetcode.com/problems/last-substring-in-lexicographical-order/discuss/363662/Short-python-code-O(n)-time-and-O(1)-space-with-proof-and-visualization) written by [nate17](https://leetcode.com/nate17).

## Complexity Analysis

Assume `n` is the number of characters in string `s`.

Time complexity: O(n) since we visit each character exactly once.

Space complexity: O(1). Extra space used is always constant regardless of `n`.
