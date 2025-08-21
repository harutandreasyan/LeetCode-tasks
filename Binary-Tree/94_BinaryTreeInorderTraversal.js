/*
    Given the root of a binary tree, return the inorder traversal of its nodes' values.

    Example 1:
    Input: root = [1,null,2,3]
    Output: [1,3,2]

    Example 2:
    Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
    Output: [4,2,6,5,7,1,3,9,8]

    Example 3:
    Input: root = []
    Output: []

    Example 4:
    Input: root = [1]
    Output: [1]

    Constraints:
        The number of nodes in the tree is in the range [0, 100].
        -100 <= Node.val <= 100

    Follow up: Recursive solution is trivial, could you do it iteratively?
*/

import { buildTreeFromArray } from './helpers.js'
/* Order: Left -> Root -> Right */

/* Recursive Version */
/* Time - O(n), Space - O(n) */

var inorderTraversal = function (root) {
    const result = []

    function traverse(node) {
        if (!node) return
        traverse(node.left)
        result.push(node.val)
        traverse(node.right)
    }

    traverse(root)
    return result
}

/* Iterative Version */
/* Time - O(n), Space - O(n) */

var inorderTraversal = function (root) {
    if (!root) return []
    const result = []
    const stack = []

    let current = root
    while (current || stack.length) {
        while (current) {
            stack.push(current)
            current = current.left
        }

        current = stack.pop()
        result.push(current.val)
        current = current.right
    }

    return result
}

let root1 = buildTreeFromArray([1, null, 2, 3])
console.log(inorderTraversal(root1)) // [ 1, 3, 2 ]

let root2 = buildTreeFromArray([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
console.log(inorderTraversal(root2)) // [ 4, 2, 6, 5, 7, 1, 3, 9, 8 ]

let root3 = buildTreeFromArray([])
console.log(inorderTraversal(root3)) // []

let root4 = buildTreeFromArray([1])
console.log(inorderTraversal(root4)) // [ 1 ]
