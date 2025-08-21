/*
    Given a string s, find the length of the longest substring without duplicate characters.

    Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

    Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

    Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.

    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

    Constraints:
        0 <= s.length <= 5 * 10^4
        s consists of English letters, digits, symbols and spaces.
*/

/* Time - O(n), Space - O(n) */

var lengthOfLongestSubstring = function (s) {
    let left = 0
    let maxLen = 0
    const set = new Set()

    for (let right = 0; right < s.length; ++right) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }

        set.add(s[right])
        maxLen = Math.max(set.size, maxLen)
    }

    return maxLen
}

console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('tmmzuxt')) // 5