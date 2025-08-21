/*
    Given the root of a binary tree, flatten the tree into a "linked list":

    The "linked list" should use the same TreeNode class where the right child pointer
    points to the next node in the list and the left child pointer is always null.

    The "linked list" should be in the same order as a pre-order traversal of the binary tree.
    
    Example 1:
    Input: root = [1,2,5,3,4,null,6]
    Output: [1,null,2,null,3,null,4,null,5,null,6]

    Example 2:
    Input: root = []
    Output: []

    Example 3:
    Input: root = [0]
    Output: [0]
    
    Constraints:
        The number of nodes in the tree is in the range [0, 2000].
        -100 <= Node.val <= 100
    
    Follow up: Can you flatten the tree in-place (with O(1) extra space)?
*/

import { buildTreeFromArray } from '../Binary-Tree/helpers.js'

/* Time - O(n), Space - O(1) */

var flatten = function (root) {
    let curr = root

    while (curr) {
        if (curr.left) {
            let rightmost = curr.left
            while (rightmost.right) {
                rightmost = rightmost.right
            }

            rightmost.right = curr.right

            curr.right = curr.left
            curr.left = null
        }

        curr = curr.right
    }
}

// helper
function linkedListToArray(head) {
    const result = []
    let current = head
    while (current) {
        result.push(current.val)
        if (current.right) {
            result.push(null)
        }
        current = current.right
    }
    return result
}

let root1 = buildTreeFromArray([1, 2, 5, 3, 4, null, 6])
flatten(root1)
console.log(linkedListToArray(root1)) // [ 1, null, 2, null, 3, null, 4, null, 5, null, 6 ]

let root2 = buildTreeFromArray([])
flatten(root2)
console.log(linkedListToArray(root2)) // []

let root3 = buildTreeFromArray([0])
flatten(root3)
console.log(linkedListToArray(root3)) // [ 0 ]
