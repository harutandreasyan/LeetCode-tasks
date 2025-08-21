/*
    Given the root of a binary tree, return its maximum depth.

    A binary tree's maximum depth is the number of nodes along the longest path
    from the root node down to the farthest leaf node.
    
    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 3

    Example 2:
    Input: root = [1,null,2]
    Output: 2
    
    Constraints:
        The number of nodes in the tree is in the range [0, 10^4].
        -100 <= Node.val <= 100
*/

import { buildTreeFromArray } from "../Binary-Tree/helpers.js"

/* Time - O(n), Space - O(n) */
// BFS
var maxDepth = function (root) {
    if (!root) return 0
    const queue = [root]
    let depth = 0

    while (queue.length) {
        const size = queue.length

        for (let i = 0; i < size; ++i) {
            const node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        depth++
    }

    return depth
}

let root1 = buildTreeFromArray([3, 9, 20, null, null, 15, 7])
console.log(maxDepth(root1)) // 3

let root2 = buildTreeFromArray([1, null, 2])
console.log(maxDepth(root2)) // 2

let root3 = buildTreeFromArray([9, 5, 11, 3, 6, 10, 13, 2, 4, null, null, null, null, 12, 14])
console.log(maxDepth(root3)) // 4
