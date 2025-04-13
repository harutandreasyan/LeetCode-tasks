/*
    Given an integer n, return true if it is a power of two.
    Otherwise, return false.

    An integer n is a power of two, if there
    exists an integer x such that n == 2x.

    Example 1:
    Input: n = 1
    Output: true
    Explanation: 2 ^ 0 = 1

    Example 2:
    Input: n = 16
    Output: true
    Explanation: 2 ^ 4 = 16

    Example 3:
    Input: n = 3
    Output: false
*/

// 1. With cycle, not such optimal solution

var isPowerOfTwo = function (n) {
	if (n <= 0) return false
	let count = 0
	while (n !== 0) {
		if (n & 1) {
			++count
		}
		n >>= 1
	}
	return count === 1
}

// 2. Without cycle, optimal solution

var isPowerOfTwo = function (n) {
	if (n <= 0) return false
	return (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(3)) // false
console.log(isPowerOfTwo(0)) // false
