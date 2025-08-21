/*
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
    determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
    
    Example 1:                       Example 2:
    Input: s = "()"                  Input: s = "()[]{}"
    Output: true                     Output: true


    Example 3:                       Example 4:
    Input: s = "(]"                  Input: s = "([])"
    Output: false                    Output: true

    Constraints:
        1 <= s.length <= 10^4
        s consists of parentheses only '()[]{}'.
*/

/* Time - O(n), Space - O(n) */

var isValid = function (s) {
    const stack = []
    const map = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            if (
                (char === ')' || char === '}' || char === ']') &&
                stack.pop() !== map[char]
            ) {
                return false
            }
        }
    }

    return stack.length === 0
}

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([])')) // true
console.log(isValid('([)]')) // false
console.log(isValid('{}([])')) // true
console.log(isValid('[()]{}')) // true

console.log(isValid('(abc)[defhf]{kzx}')) // true
