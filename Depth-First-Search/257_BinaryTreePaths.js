/*
    Given the root of a binary tree, return all root-to-leaf paths in any order.

    A leaf is a node with no children.

    Example 1:
    Input: root = [1,2,3,null,5]
    Output: ["1->2->5","1->3"]

    Example 2:
    Input: root = [1]
    Output: ["1"]

    Constraints:
        The number of nodes in the tree is in the range [1, 100].
        -100 <= Node.val <= 100
*/

import { buildTreeFromArray } from "../Binary-Tree/helpers.js"

/* Time - O(n), Space - O(n) */
/* DFS - Preorder, Backtracking */

var binaryTreePaths = function (root) {
    const result = []
    traverse(root, [])
    return result

    function traverse(node, path) {
        if(!node) return

        path.push(node.val)
        if(!node.left && !node.right) {
            result.push(path.join('->'))
        } else {
            traverse(node.left, path)
            traverse(node.right, path)
        }

        path.pop()
    }
}

let root1 = buildTreeFromArray([1, 2, 3, null, 5])
console.log(binaryTreePaths(root1)) // [ '1->2->5', '1->3' ]

let root2 = buildTreeFromArray([1])
console.log(binaryTreePaths(root2)) // [ '1' ]

let root23 = buildTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
console.log(binaryTreePaths(root23)) // [ '5->4->11->7', '5->4->11->2', '5->8->13', '5->8->4->1' ]
