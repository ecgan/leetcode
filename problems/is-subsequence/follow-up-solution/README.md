# Is Subsequence - Follow Up Solution

This alternative solution can be used for the follow up question:

> If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

The solution loops through all the characters in T once to generate a map object indicating the positions of each character. The positions are stored in an array, naturally sorted. Then for each S, we can use binary search on the positions array to quickly determine whether it is a subsequence or not.
