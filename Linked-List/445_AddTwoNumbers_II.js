/*
    You are given two non-empty linked lists representing two non-negative integers.
    The most significant digit comes first and each of their nodes contains a single digit.
    Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Example 1:
    (7) → (2) → (4) → (3)
            +
          (5) → (6) → (4)
            =
    (7) → (8) → (0) → (7)

    Input: l1 = [7,2,4,3], l2 = [5,6,4]
    Output: [7,8,0,7]

    Example 2:
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [8,0,7]

    Example 3:
    Input: l1 = [0], l2 = [0]
    Output: [0]

    Constraints:
        The number of nodes in each linked list is in the range [1, 100].
        0 <= Node.val <= 9
        It is guaranteed that the list represents a number that does not have leading zeros.
    
    Follow up: Could you solve it without reversing the input lists?
*/

import { createLinkedList, linkedListToArray } from "./helpers.js"

/* Time - O(n + m), Space - O(n + m) */

var addTwoNumbers = function (l1, l2) {
    let carry = 0
    const stack1 = []
    const stack2 = []
    let current = null

    while (l1) {
        stack1.push(l1.val)
        l1 = l1.next
    }

    while (l2) {
        stack2.push(l2.val)
        l2 = l2.next
    }

    while (stack1.length || stack2.length || carry) {
        const val1 = stack1.length ? stack1.pop() : 0
        const val2 = stack2.length ? stack2.pop() : 0
        const sum = val1 + val2 + carry
        carry = Math.floor(sum / 10)

        current = { val: sum % 10, next: current }
    }

    return current
}

let l1 = createLinkedList([7, 2, 4, 3])
let l2 = createLinkedList([5, 6, 4])
console.log(linkedListToArray(addTwoNumbers(l1, l2))) // [ 7, 8, 0, 7 ]

let l3 = createLinkedList([2, 4, 3])
let l4 = createLinkedList([5, 6, 4])
console.log(linkedListToArray(addTwoNumbers(l3, l4))) // [ 8, 0, 7 ]

let l5 = createLinkedList([0])
let l6 = createLinkedList([0])
console.log(linkedListToArray(addTwoNumbers(l5, l6))) // [ 0 ]
