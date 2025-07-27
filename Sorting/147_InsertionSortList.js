/*
    Given the head of a singly linked list, sort the list using insertion sort,
    and return the sorted list's head.

    The steps of the insertion sort algorithm:
     1. Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
     2. At each iteration, insertion sort removes one element from the input data,
        finds the location it belongs within the sorted list and inserts it there.
     3. It repeats until no input elements remain.

    Example 1:
    Input: head = [4,2,1,3]
    Output: [1,2,3,4]

    Example 2:
    Input: head = [-1,5,3,4,0]
    Output: [-1,0,3,4,5]

    Constraints:
        The number of nodes in the list is in the range [1, 5000].
        -5000 <= Node.val <= 5000
*/

import { createLinkedList, linkedListToArray } from "../Linked-List/helpers.js"

/* Time - O(n^2), Space - O(1) */

var insertionSortList = function (head) {
	let dummy = { next: null }
	let current = head
	while (current) {
		let prev = dummy
		let next = current.next

		while (prev.next && prev.next.val <= current.val) {
			prev = prev.next
		}

		current.next = prev.next
		prev.next = current

		current = next
	}

	return dummy.next
}

let head1 = createLinkedList([4, 2, 1, 3])
console.log(linkedListToArray(insertionSortList(head1))) // [ 1, 2, 3, 4 ]

let head2 = createLinkedList([-1, 5, 3, 4, 0])
console.log(linkedListToArray(insertionSortList(head2))) // [ -1, 0, 3, 4, 5 ]
