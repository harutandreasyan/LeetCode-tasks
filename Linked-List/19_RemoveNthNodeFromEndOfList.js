/*
    Given the head of a linked list, remove the nth node from the end of the list and return its head.

    Example 1:
                       ↓
    (1) → (2) → (3) → (4) → (5)
                 ↓
    (1) → (2) → (3) →  →  → (5)

    Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]

    Example 2:
    Input: head = [1], n = 1
    Output: []

    Example 3:
    Input: head = [1,2], n = 1
    Output: [1]

    Constraints:
        The number of nodes in the list is sz.
        1 <= sz <= 30
        0 <= Node.val <= 100
        1 <= n <= sz
    
    Follow up: Could you do this in one pass?
*/

import { createLinkedList, linkedListToArray } from "./helpers.js"

/* Time - O(n), Space - O(1) */

var removeNthFromEnd = function (head, n) {
	let dummy = { next: head }
	let slow = dummy
	let fast = dummy

	for (let i = 0; i <= n; ++i) {
		fast = fast.next
	}

	while (fast) {
		fast = fast.next
		slow = slow.next
	}

	slow.next = slow.next.next
	return dummy.next
}

let head1 = createLinkedList([1, 2, 3, 4, 5])
console.log(linkedListToArray(removeNthFromEnd(head1, 2))) // [ 1, 2, 3, 5 ]

let head2 = createLinkedList([1])
console.log(linkedListToArray(removeNthFromEnd(head2, 1))) // []

let head3 = createLinkedList([1, 2])
console.log(linkedListToArray(removeNthFromEnd(head3, 1))) // [ 1 ]
