/*
    Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
    Return the linked list sorted as well.

    Example 1:
    (1) → (1) → (2)
           ↓
       (1) → (2)

    Input: head = [1,1,2]
    Output: [1,2]

    Example 2:
    (1) → (1) → (2) → (3) → (3)
                 ↓
          (1) → (2) → (3)

    Input: head = [1,1,2,3,3]
    Output: [1,2,3]

    Constraints:
        The number of nodes in the list is in the range [0, 300].
        -100 <= Node.val <= 100
        The list is guaranteed to be sorted in ascending order.
*/

import { createLinkedList, linkedListToArray } from "./helpers.js"

/* Time - O(n), Space - O(1) */

var deleteDuplicates = function (head) {
    let current = head

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return head
}

let head1 = createLinkedList([1, 1, 2])
console.log(linkedListToArray(deleteDuplicates(head1))) // [ 1, 2 ]

let head2 = createLinkedList([1, 1, 2, 3, 3])
console.log(linkedListToArray(deleteDuplicates(head2))) // [ 1, 2, 3 ]

let head3 = createLinkedList([1, 1, 1])
console.log(linkedListToArray(deleteDuplicates(head3))) // [ 1 ]
