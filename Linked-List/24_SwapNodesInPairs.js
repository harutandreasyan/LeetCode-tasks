/*
    Given a linked list, swap every two adjacent nodes and return its head.
    You must solve the problem without modifying the values in the list's nodes
    (i.e., only nodes themselves may be changed.)

    Example 1:
    Input: head = [1,2,3,4]
    Output: [2,1,4,3]
    Explanation:
    (1) → (2) → (3) → (4)
              ↓
    (2) → (1) → (4) → (3)

    Example 2:
    Input: head = []
    Output: []

    Example 3:
    Input: head = [1]
    Output: [1]

    Example 4:
    Input: head = [1,2,3]
    Output: [2,1,3]
    
    Constraints:
        The number of nodes in the list is in the range [0, 100].
        0 <= Node.val <= 100
*/

import { createLinkedList, linkedListToArray } from "./helpers.js"

/* Time - O(n), Space - O(1) */

var swapPairs = function (head) {
    let dummy = { next: head }
    let current = dummy

    while (current.next && current.next.next) {
        let first = current.next
        let second = current.next.next

        first.next = second.next
        second.next = first
        current.next = second
        current = first
    }

    return dummy.next
}

let head1 = createLinkedList([1, 2, 3, 4])
console.log(linkedListToArray(swapPairs(head1))) // [ 1, 2, 3, 4, 5 ]

let head2 = createLinkedList([])
console.log(linkedListToArray(swapPairs(head2))) // []

let head3 = createLinkedList([1])
console.log(linkedListToArray(swapPairs(head3))) // [ 1 ]

let head4 = createLinkedList([1, 2, 3])
console.log(linkedListToArray(swapPairs(head4))) // [ 2, 1, 3 ]
