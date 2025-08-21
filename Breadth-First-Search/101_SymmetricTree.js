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

var isSymmetric = function (root) {
    if (!root) return true
    const queue = [root.left, root.right]

    while (queue.length) {
        let left = queue.shift()
        let right = queue.shift()

        if (!left && !right) continue
        if (!left || !right) return false
        if (left.val !== right.val) return false

        queue.push(left.left, right.right)
        queue.push(left.right, right.left)
    }

    return true
}

let root1 = buildTreeFromArray([1, 2, 2, 3, 4, 4, 3])
console.log(isSymmetric(root1)) // true

let root2 = buildTreeFromArray([1, 2, 2, null, 3, null, 3])
console.log(isSymmetric(root2)) // false
