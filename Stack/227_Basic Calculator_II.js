/*
    Given a string s which represents an expression,
    evaluate this expression and return its value. 

    The integer division should truncate toward zero.
    You may assume that the given expression is always valid.
    All intermediate results will be in the range of [-2^31, 2^31 - 1].

    Note: You are not allowed to use any built-in function which evaluates
    strings as mathematical expressions, such as eval().

    Example 1:
    Input: s = "3+2*2"
    Output: 7

    Example 2:
    Input: s = " 3/2 "
    Output: 1

    Example 3:
    Input: s = " 3+5 / 2 "
    Output: 5

    Constraints:
        1 <= s.length <= 3 * 10^5
        s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
        s represents a valid expression.
        All the integers in the expression are non-negative integers in the range [0, 2^31 - 1].
        The answer is guaranteed to fit in a 32-bit integer.
*/

/* Time - O(n), Space - O(n) */

var calculate = function (s) {
    const stack = []
    let currentNum = 0
    let action = '+'

    for (let i = 0; i < s.length; ++i) {
        if (!isNaN(s[i]) && s[i] !== ' ') {
            currentNum = currentNum * 10 + Number(s[i])
        }

        if ((isNaN(s[i]) && s[i] !== ' ') || i === s.length - 1) {
            if (action === '+') {
                stack.push(currentNum)
            } else if (action === '-') {
                stack.push(-currentNum)
            } else if (action === '*') {
                stack.push(stack.pop() * currentNum)
            } else if (action === '/') {
                stack.push(Math.trunc(stack.pop() / currentNum))
            }

            action = s[i]
            currentNum = 0
        }
    }

    return stack.reduce((a, b) => a + b)
}

console.log(calculate('3+2*2')) // 7
console.log(calculate(' 3/2 ')) // 1
console.log(calculate(' 3+5 / 2 ')) // 5
console.log(calculate('14-3/2')) // 13
