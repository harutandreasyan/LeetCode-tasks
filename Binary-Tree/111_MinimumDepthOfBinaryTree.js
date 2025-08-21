/*
    Given a binary tree, find its minimum depth.

    The minimum depth is the number of nodes along the shortest path
    from the root node down to the nearest leaf node.

    Note: A leaf is a node with no children.

    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 2

    Example 2:
    Input: root = [2,null,3,null,4,null,5,null,6]
    Output: 5
    
    Constraints:
        The number of nodes in the tree is in the range [0, 10^5].
        -1000 <= Node.val <= 1000
*/

import { buildTreeFromArray } from './helpers.js'

/* Time - O(n), Space - O(n) */
// BFS

var minDepth = function (root) {
    if (!root) return 0

    let depth = 0
    const queue = [root]

    while (queue.length) {
        depth++
        let size = queue.length

        for (let i = 0; i < size; i++) {
            const node = queue.shift()

            if (!node.left && !node.right) return depth

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
}

let root1 = buildTreeFromArray([3, 9, 20, null, null, 15, 7])
console.log(minDepth(root1)) // 2

let root2 = buildTreeFromArray([2, null, 3, null, 4, null, 5, null, 6])
console.log(minDepth(root2)) // 5

let root3 = buildTreeFromArray([9, 10, 1, 3, 5, null, null, null, null, 14, 35])
console.log(minDepth(root3)) // 2
