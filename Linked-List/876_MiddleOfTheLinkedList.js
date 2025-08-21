/*
    Given the head of a singly linked list, return the middle node of the linked list.

    If there are two middle nodes, return the second middle node.

    Example 1:
                mid
                 ↓
    (1) → (2) → (3) → (4) → (5)

    Input: head = [1,2,3,4,5]
    Output: [3,4,5]
    Explanation: The middle node of the list is node 3.

    Example 2:
                      mid
                       ↓
    (1) → (2) → (3) → (4) → (5) → (6)

    Input: head = [1,2,3,4,5,6]
    Output: [4,5,6]
    Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

    Constraints:
        The number of nodes in the list is in the range [1, 100].
        1 <= Node.val <= 100
*/

import { createLinkedList, linkedListToArray } from "./helpers.js"

/* Using Two Pointer */
/* Time - O(n), Space - O(1) */

var middleNode = function (head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

let head1 = createLinkedList([1, 2, 3, 4, 5])
console.log(linkedListToArray(middleNode(head1))) // [ 3, 4, 5 ]

let head2 = createLinkedList([1, 2, 3, 4, 5, 6])
console.log(linkedListToArray(middleNode(head2))) // [ 4, 5, 6 ]
