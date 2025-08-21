/*
    Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
    (i.e., from left to right, then right to left for the next level and alternate between).

    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: [[3],[20,9],[15,7]]

    Example 2:
    Input: root = [1]
    Output: [[1]]

    Example 3:
    Input: root = []
    Output: []

    Constraints:
        The number of nodes in the tree is in the range [0, 2000].
        -100 <= Node.val <= 100
*/

import { buildTreeFromArray } from '../Binary-Tree/helpers.js'

/* Time - O(n), Space - O(n) */

var zigzagLevelOrder = function (root) {
    if (!root) return []
    const queue = [root]
    const result = []
    let leftToRight = true

    while (queue.length) {
        const size = queue.length
        const res = []

        for (let i = 0; i < size; ++i) {
            const node = queue.shift()
            if (leftToRight) res.push(node.val)
            else res.unshift(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        result.push(res)
        leftToRight = !leftToRight
    }

    return result
}

let root1 = buildTreeFromArray([3, 9, 20, null, null, 15, 7])
console.log(zigzagLevelOrder(root1)) // [ [ 3 ], [ 20, 9 ], [ 15, 7 ] ]

let root2 = buildTreeFromArray([1])
console.log(zigzagLevelOrder(root2)) // [ [ 1 ] ]

let root3 = buildTreeFromArray([])
console.log(zigzagLevelOrder(root3)) // []

let root4 = buildTreeFromArray([9, 10, 1, 3, 5, null, 4, null, 14, 35])
console.log(zigzagLevelOrder(root4)) // [ [ 9 ], [ 1, 10 ], [ 3, 5, 4 ], [ 35, 14 ] ]
