/*
    Given the root of a binary tree, check whether it is a mirror of itself
    (i.e., symmetric around its center).

    Example 1:
    Input: root = [1,2,2,3,4,4,3]
    Output: true

    Example 2:
    Input: root = [1,2,2,null,3,null,3]
    Output: false

    Constraints:
        The number of nodes in the tree is in the range [1, 1000].
        -100 <= Node.val <= 100
    
    Follow up: Could you solve it both recursively and iteratively?
*/

import { buildTreeFromArray } from '../Binary-Tree/helpers.js'

/* Time - O(n), Space - O(n) */
/* DFS - Preorder */

var isSymmetric = function (root) {
    return isMirror(root.left, root.right)

    function isMirror(T1, T2) {
        if (!T1 && !T2) return true
        if (!T1 || !T2) return false

        return (
            T1.val === T2.val &&
            isMirror(T1.left, T2.right) &&
            isMirror(T1.right, T2.left)
        )
    }
}

let root1 = buildTreeFromArray([1, 2, 2, 3, 4, 4, 3])
console.log(isSymmetric(root1)) // true

let root2 = buildTreeFromArray([1, 2, 2, null, 3, null, 3])
console.log(isSymmetric(root2)) // false
