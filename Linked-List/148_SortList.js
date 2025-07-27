/*
    Given the head of a linked list, return the list after sorting it in ascending order.

    Example 1:
    Input: head = [4,2,1,3]
    Output: [1,2,3,4]

    Example 2:
    Input: head = [-1,5,3,4,0]
    Output: [-1,0,3,4,5]

    Example 3:
    Input: head = []
    Output: []

    Constraints:
        The number of nodes in the list is in the range [0, 5 * 10^4].
        -10^5 <= Node.val <= 10^5
    
    Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
*/

import { createLinkedList, linkedListToArray } from "./helpers.js"

/* Using Merge sort */
/* Time - O(n log n) Space - O(1) */

var sortList = function (head) {
	if (!head || !head.next) return head
	let slow = head
	let fast = head
	let prev = null

	while (fast && fast.next) {
		prev = slow
		slow = slow.next
		fast = fast.next.next
	}

	prev.next = null
	let l1 = sortList(head)
	let l2 = sortList(slow)

	return merge(l1, l2)

	function merge(list1, list2) {
		let dummy = { next: null }
		let current = dummy

		while (list1 && list2) {
			if (list1.val < list2.val) {
				current.next = list1
				list1 = list1.next
			} else {
				current.next = list2
				list2 = list2.next
			}

			current = current.next
		}

		current.next = list1 || list2
		return dummy.next
	}
}

let head1 = createLinkedList([4, 2, 1, 3])
console.log(linkedListToArray(sortList(head1))) // [ 1, 2, 3, 4 ]

let head2 = createLinkedList([-1, 5, 3, 4, 0])
console.log(linkedListToArray(sortList(head2))) // [ -1, 0, 3, 4, 5 ]

let head3 = createLinkedList([])
console.log(linkedListToArray(sortList(head3))) // []
