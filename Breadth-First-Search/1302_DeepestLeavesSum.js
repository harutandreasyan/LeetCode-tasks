/*
    Given the root of a binary tree, return the sum of values of its deepest leaves.
 
    Example 1:
    Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
    Output: 15
    
    Example 2:
    Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
    Output: 19

    Constraints:
        The number of nodes in the tree is in the range [1, 10^4].
        1 <= Node.val <= 100
*/

import { buildTreeFromArray } from '../Binary-Tree/helpers.js'

/* Time - O(n), Space - O(n) */

var deepestLeavesSum = function (root) {
    if (!root) return []
    const queue = [root]
    const result = []

    while (queue.length) {
        const size = queue.length
        const res = []
        for (let i = 0; i < size; ++i) {
            const node = queue.shift()
            res.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(res)
    }

    return result.pop().reduce((a, b) => a + b, 0)
}

let root1 = buildTreeFromArray([ 1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8 ])
console.log(deepestLeavesSum(root1)) // 15

let root2 = buildTreeFromArray([ 6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5 ])
console.log(deepestLeavesSum(root2)) // 19
