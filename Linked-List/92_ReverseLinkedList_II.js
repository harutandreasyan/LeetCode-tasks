/*
    Given the head of a singly linked list and two integers left and right where left <= right, 
    reverse the nodes of the list from position left to position right, and return the reversed list.

    Example 1:
    (1) → (2) → (3) → (4) → (5)
                 ↓
    (1) → (4) → (3) → (2) → (5)

    Input: head = [1,2,3,4,5], left = 2, right = 4
    Output: [1,4,3,2,5]

    Example 2:
    Input: head = [5], left = 1, right = 1
    Output: [5]

    Constraints:
        The number of nodes in the list is n.
        1 <= n <= 500
        -500 <= Node.val <= 500
        1 <= left <= right <= n
    
    Follow up: Could you do it in one pass?
*/

import { createLinkedList, linkedListToArray } from "./helpers.js"

/* Time - O(n), Space - O(1) */

var reverseBetween = function (head, left, right) {
	if (!head || left === right) return head

	let dummy = { val: 0, next: head }
	let prev = dummy

	for (let i = 1; i < left; i++) {
		prev = prev.next
	}

	let reverseStart = prev.next
	let current = reverseStart.next

	for (let i = 0; i < right - left; i++) {
		reverseStart.next = current.next
		current.next = prev.next
		prev.next = current
		current = reverseStart.next
	}

	return dummy.next
}

let head1 = createLinkedList([1, 2, 3, 4, 5])
console.log(linkedListToArray(reverseBetween(head1, 2, 4))) // [ 1, 4, 3, 2, 5 ]

let head2 = createLinkedList([5])
console.log(linkedListToArray(reverseBetween(head2, 1, 1))) // [ 5 ]

let head3 = createLinkedList([1, 2, 3, 4, 5])
console.log(linkedListToArray(reverseBetween(head3, 1, 3))) // [ 3, 2, 1, 4, 5 ]
