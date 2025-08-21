/*
    Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
    Return the smallest level x such that the sum of all the values of nodes at level x is maximal.

    Example 1:
    Input: root = [1,7,0,7,-8,null,null]
    Output: 2
    Explanation: 
    Level 1 sum = 1.
    Level 2 sum = 7 + 0 = 7.
    Level 3 sum = 7 + -8 = -1.
    So we return the level with the maximum sum which is level 2.

    Example 2:
    Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
    Output: 2

    Constraints:
        The number of nodes in the tree is in the range [1, 10^4].
        -10^5 <= Node.val <= 10^5
*/

import { buildTreeFromArray } from '../Binary-Tree/helpers.js'

/* Time - O(n), Space - O(n) */
// BFS

var maxLevelSum = function (root) {
    if (!root) return 0

    const queue = [root]
    let maxSum = root.val
    let maxLevel = 1
    let currentLevel = 1

    while (queue.length) {
        const size = queue.length
        let currentSum = 0
        for (let i = 0; i < size; ++i) {
            const node = queue.shift()
            currentSum += node.val

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        if (currentSum > maxSum) {
            maxSum = currentSum
            maxLevel = currentLevel
        }

        currentLevel++
    }

    return maxLevel
}

let root1 = buildTreeFromArray([1, 7, 0, 7, -8, null, null])
console.log(maxLevelSum(root1)) // 2

let root2 = buildTreeFromArray([989, null, 10250, 98693, -89388, null, null, null, -32127])
console.log(maxLevelSum(root2)) // 2

let root3 = buildTreeFromArray([42, 10, 1, 3, -5, null, 4])
console.log(maxLevelSum(root3)) // 1
