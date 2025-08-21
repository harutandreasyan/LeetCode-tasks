/*
    Given the root of a binary tree, return the level order traversal of its nodes' values.
    (i.e., from left to right, level by level).

    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: [[3],[9,20],[15,7]]

    Example 2:
    Input: root = [1]
    Output: [[1]]

    Example 3:
    Input: root = []
    Output: []
    
    Constraints:
        The number of nodes in the tree is in the range [0, 2000].
        -1000 <= Node.val <= 1000
*/

import { buildTreeFromArray } from './helpers.js'

/* Time - O(n), Space - O(n) */
/* Using Queue */

var levelOrder = function (root) {
    if (!root) return []
    const queue = [root]
    const result = []

    while (queue.length) {
        const res = []
        const size = queue.length
        for (let i = 0; i < size; ++i) {
            const node = queue.shift()
            res.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(res)
    }

    return result
}

let root1 = buildTreeFromArray([3, 9, 20, null, null, 15, 7])
console.log(levelOrder(root1)) // [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]

let root2 = buildTreeFromArray([1])
console.log(levelOrder(root2)) // [ 1 ]

let root3 = buildTreeFromArray([])
console.log(levelOrder(root3)) // []


