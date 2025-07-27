/*
    Given a string s, sort it in decreasing order based on the frequency of the characters.
    The frequency of a character is the number of times it appears in the string.

    Return the sorted string. If there are multiple answers, return any of them.
    
    Example 1:
    Input: s = "tree"
    Output: "eert"
    Explanation: 'e' appears twice while 'r' and 't' both appear once.
    So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

    Example 2:
    Input: s = "cccaaa"
    Output: "aaaccc"
    Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
    Note that "cacaca" is incorrect, as the same characters must be together.

    Example 3:
    Input: s = "Aabb"
    Output: "bbAa"
    Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
    Note that 'A' and 'a' are treated as two different characters.

    Constraints:
        1 <= s.length <= 5 * 10^5
        s consists of uppercase and lowercase English letters and digits.
*/

/* Time - O(n), Space - O(n) */

var frequencySort = function (s) {
	const map = {}
	let result = ''

	for (let char of s) {
		map[char] = (map[char] || 0) + 1
	}

	let maxFrequency = 0
	for (let current of Object.values(map)) {
		if (current > maxFrequency) maxFrequency = current
	}

	const counts = Array.from({ length: maxFrequency + 1 }, () => [])

	for (let [char, freq] of Object.entries(map)) {
		counts[freq].push(char)
	}

	for (let i = counts.length - 1; i > 0; --i) {
		for (let char of counts[i]) {
			result += char.repeat(i)
		}
	}

	return result
}

console.log(frequencySort('tree')) // eetr
console.log(frequencySort('cccaaa')) // cccaaa
console.log(frequencySort('Aabb')) // bbAa
