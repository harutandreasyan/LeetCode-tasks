/*
    Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

    Example 1:
    Input: head = [1,2,2,1]
    Output: true

    Example 2:
    Input: head = [1,2]
    Output: false
    
    Constraints:
        The number of nodes in the list is in the range [1, 10^5].
        0 <= Node.val <= 9
    
    Follow up: Could you do it in O(n) time and O(1) space?
*/

import { createLinkedList } from './helpers.js'

/* Time - O(n), Space - O(1) */

var isPalindrome = function (head) {
	if (!head || !head.next) return true
	let fast = head
	let slow = head

	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next
	}

	let reversed = reverse(slow)

	while (reversed) {
		if (reversed.val !== head.val) return false
		reversed = reversed.next
		head = head.next
	}

	return true

	function reverse(head) {
		let prev = null
		let current = head

		while (current) {
			let temp = current.next
			current.next = prev
			prev = current
			current = temp
		}

		return prev
	}
}

let head1 = createLinkedList([1, 2, 2, 1])
console.log(isPalindrome(head1)) // true

let head2 = createLinkedList([1, 2])
console.log(isPalindrome(head2)) // false

let head3 = createLinkedList([1, 2, 3, 2, 1])
console.log(isPalindrome(head3)) // true

let head4 = createLinkedList([1, 2, 3, 4, 5])
console.log(isPalindrome(head3)) // false
