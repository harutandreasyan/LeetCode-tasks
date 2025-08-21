/*
    Given the root of a binary tree, determine if it is a complete binary tree.

    In a complete binary tree, every level, except possibly the last, is completely filled,
    and all nodes in the last level are as far left as possible.
    It can have between 1 and 2^h nodes inclusive at the last level h.

    Example 1:
    Input: root = [1,2,3,4,5,6]
    Output: true
    Explanation: Every level before the last is full(ie. levels with node-values {1} and {2, 3}),
    and all nodes in the last level ({4, 5, 6}) are as far left as possible.
    
    Example 2:
    Input: root = [1,2,3,4,5,null,7]
    Output: false
    Explanation: The node with value 7 isn't as far left as possible.

    Constraints:
        The number of nodes in the tree is in the range [1, 100].
        1 <= Node.val <= 1000
*/

import { buildTreeFromArray } from '../Binary-Tree/helpers.js'

/* Time - O(n), Space - O(n) */
// BFS

var isCompleteTree = function (root) {
    if (!root) return true
    const queue = [root]
    let seenNull = false

    while (queue.length) {
        const node = queue.shift()

        if (!node) {
            seenNull = true
        } else {
            if (seenNull) return false
            queue.push(node.left)
            queue.push(node.right)
        }
    }

    return true
}

let root1 = buildTreeFromArray([1, 2, 3, 4, 5, 6])
console.log(isCompleteTree(root1)) // true

let root2 = buildTreeFromArray([1, 2, 3, 4, 5, null, 7])
console.log(isCompleteTree(root2)) // false

let root3 = buildTreeFromArray([42, 10, 1, 3, 14, 4])
console.log(isCompleteTree(root3)) // true
