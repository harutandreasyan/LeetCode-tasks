/*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

    Example 2:
    Input: s = "rat", t = "car"
    Output: false

    Constraints:
        s and t consist of lowercase English letters.
        1 <= s.length, t.length <= 5 * 10^4

    Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/* Time - O(n), Space - O(n) */

var isAnagram = function (s, t) {
	if (s.length !== t.length) return false
	const hash = {}

	for (let i = 0; i < s.length; ++i) {
		hash[s[i]] = (hash[s[i]] || 0) + 1
		hash[t[i]] = (hash[t[i]] || 0) - 1
	}

	for (let key in hash) {
		if (hash[key] !== 0) return false
	}

	return true
}

console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'car')) // false
