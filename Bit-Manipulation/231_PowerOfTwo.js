/*
    Given an integer n, return true if it is a power of two.
    Otherwise, return false.

    An integer n is a power of two, if there
    exists an integer x such that n == 2^x.

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

    Constraints:
        -2^31 <= n <= 2^31 - 1

    Follow up: Could you solve it without loops/recursion?
*/

/* 1. With loop, not such optimal solution */
/* Time - O(log n), Space - O(1) */

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

/* 2. Without loop, optimal solution */
/* Time - O(1), Space - O(1) */

var isPowerOfTwo = function (n) {
    if (n <= 0) return false
    return (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(3)) // false
console.log(isPowerOfTwo(0)) // false
