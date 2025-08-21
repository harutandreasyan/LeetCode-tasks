/*
    Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

    Example 1:
    Input: root = [1,3,2,5,3,null,9]
    Output: [1,3,9]

    Example 2:
    Input: root = [1,2,3]
    Output: [1,3]

    Constraints:
        The number of nodes in the tree will be in the range [0, 104].
        -2^31 <= Node.val <= 2^31 - 1
*/

import { buildTreeFromArray } from '../Binary-Tree/helpers.js'

/* Time - O(n), Space - O(n) */
// BFS

var largestValues = function (root) {
    if (!root) return []
    const queue = [root]
    const result = []

    while (queue.length) {
        const size = queue.length
        const level = []

        for (let i = 0; i < size; ++i) {
            const node = queue.shift()
            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        result.push(Math.max(...level))
    }

    return result
}

let root1 = buildTreeFromArray([1, 3, 2, 5, 3, null, 9])
console.log(largestValues(root1)) // [ 1, 3, 9 ]

let root2 = buildTreeFromArray([1, 2, 3])
console.log(largestValues(root2)) // [ 1, 3 ]

let root3 = buildTreeFromArray([9, 10, 1, 3, 5, 13, 25, null, null, 14, 35])
console.log(largestValues(root3)) // [ 9, 10, 25, 35 ]
