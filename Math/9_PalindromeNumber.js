/*
    Given an integer x, return true if x is a palindrome, and false otherwise.

    Example 1:
    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.
    
    Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
   
    Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

    Constraints:
        -2^31 <= x <= 2^31 - 1
    
    Follow up: Could you solve it without converting the integer to a string?
*/

/* 1. Without converting the integer to a string*/
/* Time - O(log n), Space - O(1) */

var isPalindrome = function (x) {
	if (x < 0 || (x % 10 === 0 && x !== 0)) return false

	let reversed = 0
	while (x > reversed) {
		reversed = reversed * 10 + (x % 10)
		x = Math.floor(x / 10)
	}

	return x === reversed || x === Math.floor(reversed / 10)
}
/* 2. With converting the integer to a string */
/* Time - O(N), Space - O(N) */

var isPalindrome = function (x) {
	x = String(x)
	let N = x.length
	let half = Math.floor(N / 2)
	for (let i = 0; i < half; ++i) {
		if (x[i] !== x[N - 1 - i]) return false
	}
	return true
}

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false

