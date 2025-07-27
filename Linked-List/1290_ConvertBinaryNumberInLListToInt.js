/*
    Given head which is a reference node to a singly-linked list.
    The value of each node in the linked list is either 0 or 1.
    The linked list holds the binary representation of a number.

    Return the decimal value of the number in the linked list.

    The most significant bit is at the head of the linked list.

    Example 1:
    (1) → (0) → (1)
    Input: head = [1,0,1]
    Output: 5
    Explanation: (101) in base 2 = (5) in base 10

    Example 2:
    Input: head = [0]
    Output: 0

    Constraints:
        The Linked List is not empty.
        Number of nodes will not exceed 30.
        Each node's value is either 0 or 1.
*/

import { createLinkedList } from "./helpers.js"

/* Time - O(n), Space - O(1) */

var getDecimalValue = function (head) {
	let current = head
	let decimal = 0

	while (current) {
		decimal = decimal * 2 + current.val
		current = current.next
	}

	return decimal
}

/* ******************************* */

let head1 = createLinkedList([1, 0, 1])
console.log(getDecimalValue(head1)) // 5

let head2 = createLinkedList([0])
console.log(getDecimalValue(head2)) // 0

let head3 = createLinkedList([1, 1, 0, 0])
console.log(getDecimalValue(head3)) // 12
