/*
    You are given the head of a linked list, and an integer k.

    Return the head of the linked list after swapping the values of the kth node
    from the beginning and the kth node from the end (the list is 1-indexed).

    Example 1:
           
    (1) → (2) → (3) → (4) → (5)
                 ↓
    (1) → (4) → (3) → (2)  → (5)

    Input: head = [1,2,3,4,5], k = 2
    Output: [1,4,3,2,5]

    Example 2:
    Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
    Output: [7,9,6,6,8,7,3,0,9,5]
    
    Constraints:
        The number of nodes in the list is n.
        1 <= k <= n <= 10^5
        0 <= Node.val <= 100
*/

import { createLinkedList, linkedListToArray } from './helpers.js'

/* Time - O(n), Space - O(1) */

var swapNodes = function (head, k) {
	let current = head
	let first = null
	let second = head

	for (let i = 1; i <= k; ++i) {
		if (i === k) first = current
		current = current.next
	}

	while (current) {
		current = current.next
		second = second.next
	}

	let firstVal = first.val
	first.val = second.val
	second.val = firstVal

	return head
}

let head1 = createLinkedList([1, 2, 3, 4, 5])
console.log(linkedListToArray(swapNodes(head1, 2))) // [ 1, 4, 3, 2, 5 ]

let head2 = createLinkedList([7, 9, 6, 6, 7, 8, 3, 0, 9, 5])
console.log(linkedListToArray(swapNodes(head2, 5)))
// [ 7, 9, 6, 6, 8, 7, 3, 0, 9, 5]
