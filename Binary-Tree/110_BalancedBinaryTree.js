/*
    Given a binary tree, determine if it is height-balanced.

    Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: true

    Example 2:
    Input: root = [1,2,2,3,3,null,null,4,4]
    Output: false

    Example 3:
    Input: root = []
    Output: true

    Constraints:
        The number of nodes in the tree is in the range [0, 5000].
        -10^4 <= Node.val <= 10^4
*/

import { buildTreeFromArray } from './helpers.js'

/* Time - O(n), Space - O(n) */
// DFS - Postorder
var isBalanced = function (root) {
    function getHeight(node) {
        if (!node) return 0

        const left = getHeight(node.left)
        if (left === -1) return -1

        const right = getHeight(node.right)
        if (right === -1) return -1

        if (Math.abs(left - right) > 1) return -1

        return 1 + Math.max(left, right)
    }

    return getHeight(root) !== -1
}

let root1 = buildTreeFromArray([3, 9, 20, null, null, 15, 7])
console.log(isBalanced(root1)) // true

let root2 = buildTreeFromArray([1, 2, 2, 3, 3, null, null, 4, 4])
console.log(isBalanced(root2)) // false

let root3 = buildTreeFromArray([])
console.log(isBalanced(root3)) // true
