/*
    Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths 
    where the sum of the node values in the path equals targetSum.
    Each path should be returned as a list of the node values, not node references.

    A root-to-leaf path is a path starting from the root and ending at any leaf node.
    A leaf is a node with no children.

    Example 1:
    Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
    Output: [[5,4,11,2],[5,8,4,5]]
    Explanation: There are two paths whose sum equals targetSum:
    5 + 4 + 11 + 2 = 22
    5 + 8 + 4 + 5 = 22

    Example 2:
    Input: root = [1,2,3], targetSum = 5
    Output: []

    Example 3:
    Input: root = [1,2], targetSum = 0
    Output: []

    Constraints:
        The number of nodes in the tree is in the range [0, 5000].
        -1000 <= Node.val <= 1000
        -1000 <= targetSum <= 1000
*/

import { buildTreeFromArray } from './helpers.js'

/* Time - O(n), Space - O(n) */
/* DFS - Preorder, Backtracking */

var pathSum = function (root, targetSum) {
    const result = []
    let sum = 0
    traverse(root, [])
    return result

    function traverse(node, path) {
        if (!node) return

        path.push(node.val)
        sum += node.val
        if (!node.left && !node.right && sum === targetSum) {
            result.push([...path])
        } else {
            traverse(node.left, path)
            traverse(node.right, path)
        }

        path.pop()
        sum -= node.val
    }
}

let root1 = buildTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
console.log(pathSum(root1, 22)) // [ [ 5, 4, 11, 2 ], [ 5, 8, 4, 5 ] ]

let root2 = buildTreeFromArray([1, 2, 3])
console.log(pathSum(root2, 5)) // []

let root3 = buildTreeFromArray([1, 2])
console.log(pathSum(root3, 0)) // []

let root4 = buildTreeFromArray([1, 2, 2, 3, 4, 4, 3, 1, 5, 1, 1, 2, 1])
console.log(pathSum(root4, 8)) // [ [ 1, 2, 4, 1 ], [ 1, 2, 4, 1 ], [ 1, 2, 4, 1 ] ]
