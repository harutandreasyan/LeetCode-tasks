/*
    Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values.
    (i.e., from left to right, level by level from leaf to root).

    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: [[15,7],[9,20],[3]]

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

import { buildTreeFromArray } from '../Binary-Tree/helpers.js'

/* Time - O(n), Space - O(n) */
// BFS

var levelOrderBottom = function (root) {
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

    return result.reverse()
}

let root1 = buildTreeFromArray([3, 9, 20, null, null, 15, 7])
console.log(levelOrderBottom(root1)) // [[15,7],[9,20],[3]]

let root2 = buildTreeFromArray([1])
console.log(levelOrderBottom(root2)) // [[1]]

let root3 = buildTreeFromArray([])
console.log(levelOrderBottom(root3)) // []

let root4 = buildTreeFromArray([9, 10, 1, 3, 5, null, 4, null, 14, 35])
console.log(levelOrderBottom(root4)) // [[14,35],[3,5,4], [10,1], [9]]
