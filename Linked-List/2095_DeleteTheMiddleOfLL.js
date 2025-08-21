/*
    You are given the head of a linked list. Delete the middle node,
    and return the head of the modified linked list.

    The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing,
    where ⌊x⌋ denotes the largest integer less than or equal to x.

    For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
    
    Example 1:
                      mid
                       ↓
    (1) → (3) → (4) → (7) → (1) → (2) → (6)
     0     1     2     3     4     5     6

    Input: head = [1,3,4,7,1,2,6]
    Output: [1,3,4,1,2,6]
    Explanation:
        Since n = 7, node 3 with value 7 is the middle node.
        We return the new list after removing this node. 

    Example 2:
                mid
                 ↓
    (1) → (2) → (3) → (4)
     0     1     2     3

    Input: head = [1,2,3,4]
    Output: [1,2,4]
    Explanation: For n = 4, node 2 with value 3 is the middle node.

    Example 3:
          mid
           ↓
    (2) → (1)
     0     1
    Input: head = [2,1]
    Output: [2]
    Explanation:
        For n = 2, node 1 with value 1 is the middle node.
        Node 0 with value 2 is the only node remaining after removing node 1.
    
    Constraints:
        The number of nodes in the list is in the range [1, 105].
        1 <= Node.val <= 105
*/

import { createLinkedList, linkedListToArray } from './helpers.js'

/* Using Two Pointer */
/* Time - O(n), Space - O(1) */

var deleteMiddle = function (head) {
    if (!head || !head.next) return null

    let slow = head
    let fast = head
    let prev = null

    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    prev.next = slow.next

    return head
}

let head1 = createLinkedList([1, 3, 4, 7, 1, 2, 6])
console.log(linkedListToArray(deleteMiddle(head1))) // [ 1, 3, 4, 1, 2, 6 ]

let head2 = createLinkedList([1, 2, 3, 4])
console.log(linkedListToArray(deleteMiddle(head2))) // [ 1, 2, 4 ]

let head3 = createLinkedList([2, 1])
console.log(linkedListToArray(deleteMiddle(head3))) // [ 2 ]

let head4 = createLinkedList([1])
console.log(linkedListToArray(deleteMiddle(head4))) // []
