/*
    Given two binary strings a and b,
    return their sum as a binary string.

    Example 1:
    Input: a = "11", b = "1"
    Output: "100"

    Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"

    Constraints:
        1 <= a.length, b.length <= 10^4
        a and b consist only of '0' or '1' characters.
        Each string does not contain leading zeros except for the zero itself.
*/

/* Time -  O(max(m, n)), Space - O(max(m, n)) */

var addBinary = function (a, b) {
	let m = a.length
	let n = b.length

	let carry = 0
	let res = ''
	for (let i = m - 1, j = n - 1; i >= 0 || j >= 0; i--, j--) {
		let sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry
		res = (sum % 2) + res
		carry = sum > 1 ? 1 : 0
	}

	if (carry) res = '1' + res
	return res
}

let a = '11',
	b = '1'
console.log(addBinary(a, b)) // '100'

let a2 = '1010',
	b2 = '1011'
console.log(addBinary(a2, b2)) // '10101'
