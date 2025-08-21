/*
    Given the root of a binary tree, invert the tree, and return its root.

    Example 1:

                        (4)                                 (4) 
                    ↙        ↘                          ↙       ↘
                (2)             (7)      ------→     (7)           (2)
             ↙      ↘        ↙     ↘             ↙     ↘       ↙    ↘
          (1)        (3)   (6)       (9)        (9)       (6)  (3)      (1) 
      
    Input: root = [4,2,7,1,3,6,9]
    Output: [4,7,2,9,6,3,1]

    Example 2:

                        (2)                     (2) 
                      ↙    ↘      ------→     ↙   ↘
                   (1)       (3)           (3)       (1)
           
    Input: root = [2,1,3]
    Output: [2,3,1]

    Example 3:
    Input: root = []
    Output: []

    Constraints:
        The number of nodes in the tree is in the range [0, 100].
        -100 <= Node.val <= 100
*/

import { buildTreeFromArray, treeToArray } from './helpers.js'

/* Time - O(n), Space - O(n) */
// DFS - Preorder

var invertTree = function (root) {
    preOrder(root)
    return root

    function preOrder(node) {
        if (!node) return
        ;[node.left, node.right] = [node.right, node.left]
        preOrder(node.left)
        preOrder(node.right)
    }
}

let root1 = buildTreeFromArray([4, 2, 7, 1, 3, 6, 9])
console.log(treeToArray(invertTree(root1))) // [ 4, 7, 2, 9, 6, 3, 1 ]

let root2 = buildTreeFromArray([2, 1, 3])
console.log(treeToArray(invertTree(root2))) // [ 2, 3, 1 ]

let root3 = buildTreeFromArray([])
console.log(treeToArray(invertTree(root3))) // []
