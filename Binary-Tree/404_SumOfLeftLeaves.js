/*
    Given the root of a binary tree, return the sum of all left leaves.
    A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 24
    Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.

    Example 2:
    Input: root = [1]
    Output: 0

    Constraints:
        The number of nodes in the tree is in the range [1, 1000].
        -1000 <= Node.val <= 1000
*/

import { buildTreeFromArray } from './helpers.js'

/* Time - O(n), Space - O(h) */
/* DFS - Preorder */

var sumOfLeftLeaves = function (root) {
    let sum = 0
    dfs(root)

    function dfs(node) {
        if (!node) return 0

        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val
        }

        dfs(node.left)
        dfs(node.right)
    }

    return sum
}

let root1 = buildTreeFromArray([3, 9, 20, null, null, 15, 7])
console.log(sumOfLeftLeaves(root1)) // 24

let root2 = buildTreeFromArray([1])
console.log(sumOfLeftLeaves(root2)) // 0

let root3 = buildTreeFromArray([9, 10, 1, 3, 5, null, null, null, null, 14, 35])
console.log(sumOfLeftLeaves(root3)) // 17
