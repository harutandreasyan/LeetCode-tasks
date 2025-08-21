/*
    Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

    Two nodes of a binary tree are cousins if they have the same depth with different parents.

    Note that in a binary tree, the root node is at the depth 0,
    and children of each depth k node are at the depth k + 1.

    Example 1:
    Input: root = [1,2,3,4], x = 4, y = 3
    Output: false

    Example 2:
    Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
    Output: true

    Example 3:
    Input: root = [1,2,3,null,4], x = 2, y = 3
    Output: false

    Constraints:
        The number of nodes in the tree is in the range [2, 100].
        1 <= Node.val <= 100
        Each node has a unique value.
        x != y
        x and y are exist in the tree.
*/

import { buildTreeFromArray } from '../Binary-Tree/helpers.js'

/* Time - O(n), Space - O(h) */
/* DFS - Preorder */

var isCousins = function (root, x, y) {
    let xInfo
    let yInfo
    dfs(root, 0, null)

    function dfs(node, depth, parent) {
        if (!node) return

        if (node.val === x) {
            xInfo = { parent, depth }
        }
        if (node.val === y) {
            yInfo = { parent, depth }
        }

        dfs(node.left, depth + 1, node)
        dfs(node.right, depth + 1, node)
    }

    return (
        xInfo &&
        yInfo &&
        xInfo.depth === yInfo.depth &&
        xInfo.parent !== yInfo.parent
    )
}

let root1 = buildTreeFromArray([1, 2, 3, 4])
console.log(isCousins(root1, 4, 3)) // false

let root2 = buildTreeFromArray([1, 2, 3, null, 4, null, 5])
console.log(isCousins(root2, 5, 4)) // true

let root3 = buildTreeFromArray([1, 2, 3, null, 4])
console.log(isCousins(root3, 2, 3)) // false
