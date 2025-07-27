/*
    You are given two non-empty linked lists representing two non-negative integers.
    The digits are stored in reverse order, and each of their nodes contains a single digit.
    Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    Example 1:
    (2) → (4) → (3)
           + 
    (5) → (6) → (4)
           =
    (7) → (0) → (8)

    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

    Example 2:
    Input: l1 = [0], l2 = [0]
    Output: [0]

    Example 3:
    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]

    Constraints:
        The number of nodes in each linked list is in the range [1, 100].
        0 <= Node.val <= 9
        It is guaranteed that the list represents a number that does not have leading zeros.
*/

import { createLinkedList, linkedListToArray } from "./helpers.js"

/* Time - O(max(n, m)), Space - O(max(n, m)) */

var addTwoNumbers = function (l1, l2) {
    const dummy = { next: null}
    let current = dummy
    let carry = 0

    while(l1 || l2 || carry) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const sum = val1 + val2 + carry
        current.next = { val: sum % 10, next: null }
        carry = Math.floor(sum / 10)

        current = current.next
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }

    return dummy.next
}

let l1 = createLinkedList([2, 4, 3])
let l2 = createLinkedList([5, 6, 4])
console.log(linkedListToArray(addTwoNumbers(l1, l2))) // [ 7, 0, 8 ]

let l3 = createLinkedList([0])
let l4 = createLinkedList([0])
console.log(linkedListToArray(addTwoNumbers(l3, l4))) // [ 0 ]

let l5 = createLinkedList([9, 9, 9, 9, 9, 9, 9])
let l6 = createLinkedList([9, 9, 9, 9])
console.log(linkedListToArray(addTwoNumbers(l5, l6))) // [ 8, 9, 9, 9, 0, 0, 0, 1 ]