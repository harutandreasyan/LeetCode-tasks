/*
    Given the root of a binary tree, imagine yourself standing on the right side of it,
    return the values of the nodes you can see ordered from top to bottom.

    Example 1:
    Input: root = [1,2,3,null,5,null,4]
    Output: [1,3,4]
    Explanation:
                (1) ←-----------
               ↙  ↘
            (2)     (3) ←-------
              ↘       ↘
               (5)      (4)←----
    
    Example 2:
    Input: root = [1,2,3,4,null,null,null,5]
    Output: [1,3,4,5]
    Explanation:
                (1) ←-----------
               ↙  ↘
            (2)     (3) ←-------
           ↙
        (4) ←-------------------
       ↙
    (5) ←-----------------------

    Example 3:
    Input: root = [1,null,3]
    Output: [1,3]

    Example 4:
    Input: root = []
    Output: []

    Constraints:
        The number of nodes in the tree is in the range [0, 100].
        -100 <= Node.val <= 100
*/

import { buildTreeFromArray } from './helpers.js'

/* Time - O(n), Space - O(n) */
/* Using Queue (BFS) */

var rightSideView = function (root) {
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
      result.push(res.pop())
   }

   return result
}

let root1 = buildTreeFromArray([1, 2, 3, null, 5, null, 4])
console.log(rightSideView(root1)) // [ 1, 3, 4 ]

let root2 = buildTreeFromArray([1, 2, 3, 4, null, null, null, 5])
console.log(rightSideView(root2)) // [ 1, 3, 4, 5 ]

let root3 = buildTreeFromArray([1, null, 3])
console.log(rightSideView(root3)) // [ 1, 3 ]

let root4 = buildTreeFromArray([])
console.log(rightSideView(root4)) // []
