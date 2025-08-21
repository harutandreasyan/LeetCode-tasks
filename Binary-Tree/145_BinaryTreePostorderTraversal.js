/*
    Given the root of a binary tree, return the postorder traversal of its nodes' values.

    Example 1:
    Input: root = [1,null,2,3]
    Output: [3,2,1]
    
    Example 2:
    Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
    Output: [4,6,7,5,2,9,8,3,1]

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
/* Order: Left -> Right -> Root */

/* Recursive Version */
/* Time - O(n), Space - O(n) */

var postorderTraversal = function (root) {
    const result = []

    function traverse(node) {
        if(!node) return
        traverse(node.left)
        traverse(node.right)
        result.push(node.val)
    }

    traverse(root)
    return result
}

/* Iterative Version */
/* Time - O(n), Space - O(n) */

var postorderTraversal = function (root) {
    if (!root) return []
    const stack1 = [root]
    const stack2 = []
    const result = []

    while (stack1.length) {
        const node = stack1.pop()
        stack2.push(node)
        if (node.left) stack1.push(node.left)
        if (node.right) stack1.push(node.right)
    }

    while(stack2.length) {
        result.push(stack2.pop().val)
    }

    return result
}

let root1 = buildTreeFromArray([1, null, 2, 3])
console.log(postorderTraversal(root1)) // [ 3, 2, 1 ]

let root2 = buildTreeFromArray([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9])
console.log(postorderTraversal(root2)) // [ 4, 6, 7, 5, 2, 9, 8, 3, 1 ]

let root3 = buildTreeFromArray([])
console.log(postorderTraversal(root3)) // []

let root4 = buildTreeFromArray([1])
console.log(postorderTraversal(root4)) // [ 1 ]
