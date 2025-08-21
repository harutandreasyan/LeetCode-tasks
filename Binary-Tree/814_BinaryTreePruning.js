/*
    Given the root of a binary tree, return the same tree where
    every subtree (of the given tree)not containing a 1 has been removed.

    A subtree of a node node is node plus every node that is a descendant of node.

    Example 1:

        (1)                     (1) 
           ↘                       ↘
            (0)       ------→        (0)
           ↙   ↘                        ↘
        (0)     (1)                       (1)

    Input: root = [1,null,0,0,1]
    Output: [1,null,0,null,1]

    Example 2:

                        (1)                                 (1) 
                    ↙        ↘                                 ↘
                (1)             (0)        ------→               (1)
             ↙      ↘        ↙     ↘                               ↘
          (1)        (1)   (0)       (1)                              (1)

    Input: root = [1,0,1,0,0,0,1]
    Output: [1,null,1,null,1]

    Example 3:

                        (1)                                 (1) 
                    ↙        ↘                          ↙       ↘
                (1)             (0)        ------→   (1)           (0)
             ↙      ↘        ↙     ↘             ↙     ↘             ↘
          (1)        (1)   (0)       (1)       (1)        (1)            (1)
        ↙ 
     (0) 

    Input: root = [1,1,0,1,1,0,1,0]
    Output: [1,1,0,1,1,null,1]

    Constraints:
        The number of nodes in the tree is in the range [1, 200].
        Node.val is either 0 or 1.
*/

import { treeToArray, buildTreeFromArray } from './helpers.js'


/* Time - O(n), Space - O(h) */
/* DFS - Postorder */

var pruneTree = function (root) {
    if (!root) return null  

    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)

    if (root.val === 0 && !root.left && !root.right) {
        return null
    }

    return root
}

let root1 = buildTreeFromArray([1, null, 0, 0, 1])
console.log(treeToArray(pruneTree(root1))) // [ 1, null, 0, null, 1 ]

let root2 = buildTreeFromArray([1, 0, 1, 0, 0, 0, 1])
console.log(treeToArray(pruneTree(root2))) // [ 1, null, 1, null, 1 ]

let root3 = buildTreeFromArray([1, 1, 0, 1, 1, 0, 1, 0])
console.log(treeToArray(pruneTree(root3))) // [ 1, 1, 0, 1, 1, null, 1 ]
