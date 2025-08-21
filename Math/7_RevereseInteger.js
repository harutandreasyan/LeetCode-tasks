/*
    Given a signed 32-bit integer x, return x with its digits reversed.
    If reversing x causes the value to go outside the signed 32-bit integer
    range [-2^31, 2^31 - 1], then return 0.

    Assume the environment does not allow you to store
    64-bit integers (signed or unsigned).

    Example 1:
    Input: x = 123
    Output: 321

    Example 2:
    Input: x = -123
    Output: -321
    
    Example 3:
    Input: x = 120
    Output: 21

    Constraints:
        -2^31 <= x <= 2^31 - 1
*/

/* Time - O(log x), Space - O(1) */

var reverse = function (x) {
    let reversed = 0
    const isNegative = x < 0
    x = Math.abs(x)

    while (x > 0) {
        const digit = x % 10
        x = Math.floor(x / 10)

        if (reversed > (Math.pow(2, 31) - 1) / 10) {
            return 0
        }

        reversed = reversed * 10 + digit
    }

    return isNegative ? -reversed : reversed
}

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
console.log(reverse(120)) // 21
console.log(reverse(2 ** 30)) // 0
