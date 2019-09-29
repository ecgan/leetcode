# Can Make Palindrome from Substring

LeetCode #: [1177](https://leetcode.com/problems/can-make-palindrome-from-substring/)

Difficulty: Medium

Topics: Array, string.

## Explanation

First we generate a prefix sum array for `s`. Each value in the array is an object where the key is the character in `s`, and the value is the count of the character up to that particular index.

Next, we loop through the `queries`.

### When k >= 13

For each query, if `k` is more than or equal to 13, the answer for the query would be true.

Imagine the following scenario:

```text
Input: abcdefghijklmnopqrstuvwxyz (all 26 lowercase characters)
```

To make this into a palindrome, you only need to change 13 characters to become:

```text
Palindrome: abcdefghijklmmlkjihgfedcba
```

When you have an input string that is longer than the above 26 characters, you can cancel out any matching pairs of characters, meaning the maximum number of characters that you need to change will never exceed 13.

```text
Input:      ppqqrrabcdefghijklmnopqrstuvwxyz  (note the ppqqrr at the start of string)
Rearrange:  pqrabcdefghijklmnopqrstuvwxyzrqp  (rearrange ppqqrr into pqr and rqp at the start and end of string, like mirror image)
Palindrome: pqrabcdefghijklmmlkjihgfedcbarqp  (change the characters)
Number of characters changed: 13
```

Therefore, when you have a `k` value that is 13 and above, you would know for sure you can make a palindrome, and you can straight away return true.

### When k < 13

With the prefix sum array, we can easily get the character count difference (`charCount`) from `left` and `right`.

In the character count, if the value is an even number, we can safely ignore it as it can always form a pair of characters in the palindrome. If the value is an odd number, we need to count how many values are odd. This will tell us the number of characters to be replaced to make the substring a palindrome (`numOddsNeeded`).

If `numOddsNeeded` is less than or equal to `k`, the answer would be true. Otherwise, false.

## Future Enhancement

A more time and space efficient solution would be using bit mask manipulation to represent the character count instead of using prefix sum array. See the following examples:

[Python 100% runtime and memory](https://leetcode.com/problems/can-make-palindrome-from-substring/discuss/371999/Python-100-runtime-and-memory)

[[Java/Python 3] 3 codes each: prefix sum, boolean, and xor of characters' frequencies then compare
](https://leetcode.com/problems/can-make-palindrome-from-substring/discuss/371849/JavaPython-3-3-codes-each%3A-prefix-sum-boolean-and-xor-of-characters'-frequencies-then-compare)

[Short and fast C++ prefix xor solution, beats 100%](https://leetcode.com/problems/can-make-palindrome-from-substring/discuss/372044/Short-and-fast-C%2B%2B-prefix-xor-solution-beats-100)
