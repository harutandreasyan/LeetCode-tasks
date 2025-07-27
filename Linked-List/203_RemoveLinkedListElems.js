/*
    Given the head of a linked list and an integer val, remove all the nodes
    of the linked list that has Node.val == val, and return the new head.

    Example 1:
    Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]

    Example 2:
    Input: head = [], val = 1
    Output: []

    Example 3:
    Input: head = [7,7,7,7], val = 7
    Output: []
    
    Constraints:
        The number of nodes in the list is in the range [0, 10^4].
        1 <= Node.val <= 50
        0 <= val <= 50
*/

import { createLinkedList, linkedListToArray } from "./helpers.js"

/* Time - O(n), Space - O(1) */

var removeElements = function (head, val) {
	let dummy = { next: head }
	let current = dummy

	while (current.next) {
		if (current.next.val === val) {
			current.next = current.next.next
		} else current = current.next
	}

	return dummy.next
}

let head1 = createLinkedList([1, 2, 6, 3, 4, 5, 6])
console.log(linkedListToArray(removeElements(head1, 6))) // [ 1, 2, 3, 4, 5 ]

let head2 = createLinkedList([])
console.log(linkedListToArray(removeElements(head2, 1))) // []

let head3 = createLinkedList([7, 7, 7, 7])
console.log(linkedListToArray(removeElements(head3, 7))) // []
