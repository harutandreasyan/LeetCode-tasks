/*
    Given the root of a binary tree, return the preorder traversal of its nodes' values.

    Example 1:
    Input: root = [1,null,2,3]
    Output: [1,2,3]
    
    Example 2:
    Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
    Output: [1,2,4,5,6,7,3,8,9]

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

import { buildTreeFromArray } from '../Binary-Tree/helpers.js'
/* Order: Root -> Left -> Right */

/* Iterative Version */
/* Time - O(n), Space - O(n) */

var preorderTraversal = function (root) {
    if (!root) return []
    const result = []
    const stack = [root]

    while (stack.length) {
        const node = stack.pop()
        result.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }

    return result
}

let root1 = buildTreeFromArray([1, null, 2, 3])
console.log(preorderTraversal(root1)) // [ 1, 2, 3 ]

let root2 = buildTreeFromArray([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
console.log(preorderTraversal(root2)) // [ 1, 2, 4, 5, 6, 7, 3, 8, 9 ]

let root3 = buildTreeFromArray([])
console.log(preorderTraversal(root3)) // []

let root4 = buildTreeFromArray([1])
console.log(preorderTraversal(root4)) // [ 1 ]
