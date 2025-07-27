/*
    Given a string s, find the first non-repeating character in it and return its index.
    If it does not exist, return -1.

    Example 1:
    Input: s = "leetcode"
    Output: 0
    Explanation:
    The character 'l' at index 0 is the first character that does not occur at any other index.

    Example 2:
    Input: s = "loveleetcode"
    Output: 2

    Example 3:
    Input: s = "aabb"
    Output: -1

    Constraints:
        1 <= s.length <= 10^5
        s consists of only lowercase English letters.
*/

/* Time - O(n), Space - O(n) */

var firstUniqChar = function (s) {
	const hash = {}

	for (let i = 0; i < s.length; ++i) {
		hash[s[i]] = (hash[s[i]] || 0) + 1
	}

	for (let i = 0; i < s.length; ++i) {
		if (hash[s[i]] === 1) return i
	}

	return -1
}

console.log(firstUniqChar('leetcode')) // 0
console.log(firstUniqChar('loveleetcode')) // 2
console.log(firstUniqChar('aabb')) // -1
