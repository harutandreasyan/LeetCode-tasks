/*
    Given a balanced parentheses string s, return the score of the string.

    The score of a balanced parentheses string is based on the following rule:
        "()" has score 1.
        AB has score A + B, where A and B are balanced parentheses strings.
        (A) has score 2 * A, where A is a balanced parentheses string.
    

    Example 1:
    Input: s = "()"
    Output: 1
    
    Example 2:
    Input: s = "(())"
    Output: 2

    Example 3:
    Input: s = "()()"
    Output: 2

    Constraints:
        2 <= s.length <= 50
        s consists of only '(' and ')'.
        s is a balanced parentheses string.
*/

/* Time - O(n), Space - O(n) */

var scoreOfParentheses = function (s) {
    const stack = []

    for (let char of s) {
        if (char === '(') {
            stack.push('(')
        } else {
            let score = 0

            while (stack.length && stack[stack.length - 1] !== '(') {
                score += stack.pop()
            }

            stack.pop()

            if (score === 0) {
                stack.push(1)
            } else {
                stack.push(2 * score)
            }
        }
    }
    return stack.reduce((a, b) => a + b, 0)
}

console.log(scoreOfParentheses('()')) // 1
console.log(scoreOfParentheses('()()')) // 2
console.log(scoreOfParentheses('(())')) // 2
console.log(scoreOfParentheses('(()(()))')) // 2 * A => 2 * (1 + 2) => 6
