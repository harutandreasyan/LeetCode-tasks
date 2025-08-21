/*
    Given the roots of two binary trees p and q, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
    
    Example 1:
    Input: p = [1,2,3], q = [1,2,3]
    Output: true

    Example 2:
    Input: p = [1,2], q = [1,null,2]
    Output: false

    Example 3:
    Input: p = [1,2,1], q = [1,1,2]
    Output: false
    
    Constraints:
        The number of nodes in both trees is in the range [0, 100].
        -10^4 <= Node.val <= 10^4
*/

import { buildTreeFromArray } from "./helpers.js"

/* Time - O(n), Space - O(n) */
/* DFS - Preorder */

var isSameTree = function (p, q) {
    return check(p, q)

    function check(T1, T2) {
        if(!T1 && !T2) return true
        if(!T1 || !T2) return false

        return (
            T1.val === T2.val &&
            check(T1.left, T2.left) &&
            check(T1.right, T2.right)
        )

    }
}

let p1 = buildTreeFromArray([1, 2, 3])
let q1 = buildTreeFromArray([1, 2, 3])
console.log(isSameTree(p1, q1)) // true

let p2 = buildTreeFromArray([1, 2])
let q2 = buildTreeFromArray([1, null, 2])
console.log(isSameTree(p2, q2)) // false

let p3 = buildTreeFromArray([1, 2, 1])
let q3 = buildTreeFromArray([1, 1, 2])
console.log(isSameTree(p3, q3)) // false

