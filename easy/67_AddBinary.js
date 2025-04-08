/*
    Given two binary strings a and b,
    return their sum as a binary string.

    Example 1:
    Input: a = "11", b = "1"
    Output: "100"

    Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"
*/

function addBinary(a, b) {
    let m = a.length
    let n = b.length

    let carry = 0
    let res = ''
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry
        res = (sum % 2) + res
        carry = sum > 1 ? 1 : 0
    }

    if (carry) res = '1' + res
    return res
}

let a = "11", b = "1"
console.log(addBinary(a, b));   // '100'

let a2 = "1010", b2 = "1011"
console.log(addBinary(a2, b2)); // '10101'
