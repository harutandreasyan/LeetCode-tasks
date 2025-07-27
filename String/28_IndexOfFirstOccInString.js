/*
    Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

    Example 1:
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.

    Example 2:
    Input: haystack = "leetcode", needle = "leeto"
    Output: -1
    Explanation: "leeto" did not occur in "leetcode", so we return -1.

	Constraints:
		1 <= haystack.length, needle.length <= 10^4
*/

/* Time - O(n * m), Space - O(1) */

var strStr = function (haystack, needle) {
	if (needle === '') return 0

	let n = haystack.length
	let m = needle.length

	if (m > n) return -1

	for (let i = 0; i <= n - m; i++) {
		let found = true
		for (let j = 0; j < m; j++) {
			if (haystack[i + j] !== needle[j]) {
				found = false
				break
			}
		}

		if (found) return i
	}
	return -1
}

console.log(strStr('sadbutsad', 'sad')) // 0
console.log(strStr('leetcode', 'leeto')) // -1
console.log(strStr('leetcode', 'code')) // 4
