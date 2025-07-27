/*
    Given the head of a singly linked list, reverse the list, and return the reversed list.

    Example 1:
    (1) → (2) → (3) → (4) → (5)
                 ↓
    (5) → (4) → (3) → (2) → (1)

    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]

    Example 2:
    (1) → (2)
        ↓
    (2) → (1)
    Input: head = [1,2]
    Output: [2,1]

    Example 3:
    Input: head = []
    Output: []
    
    Constraints:
        The number of nodes in the list is the range [0, 5000].
        -5000 <= Node.val <= 5000
    
    Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

import { createLinkedList, linkedListToArray } from './helpers.js'

/* Iterative */
/* Time - O(n), Space - O(1) */

var reverseList = function (head) {
	let current = head
	let prev = null

	while (current) {
		let next = current.next
		current.next = prev
		prev = current
		current = next
	}

	return prev
}

/* Recursive */
/* Time - O(n), Space - O(n) */
var reverseList = function (head) {
	return reverse(head, null)
}

var reverse = function (head, prev = null) {
	if (!head) return prev
	let next = head.next
	head.next = prev
	return reverse(next, head)
}

let head1 = createLinkedList([1, 2, 3, 4, 5])
console.log(linkedListToArray(reverseList(head1))) // [ 5, 4, 3, 2, 1 ]

let head2 = createLinkedList([1, 2])
console.log(linkedListToArray(reverseList(head2))) // [ 2, 1 ]

let head3 = createLinkedList([])
console.log(linkedListToArray(reverseList(head3))) // []
