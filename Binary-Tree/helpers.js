/* Helper functions for checking results locally */

export class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

export function buildTreeFromArray(arr) {
    if (!arr || arr.length === 0) return null
    if (arr[0] === null) return null

    const root = new TreeNode(arr[0])
    const queue = [root]
    let i = 1

    while (i < arr.length) {
        const node = queue.shift()
        // left
        if (i < arr.length) {
            const val = arr[i++]
            if (val !== null) {
                node.left = new TreeNode(val)
                queue.push(node.left)
            }
        }
        // right
        if (i < arr.length) {
            const val = arr[i++]
            if (val !== null) {
                node.right = new TreeNode(val)
                queue.push(node.right)
            }
        }
    }

    return root
}

export function treeToArray(root) {
    if (!root) return []

    const result = []
    const queue = [root]

    while (queue.length > 0) {
        const node = queue.shift()
        if (node) {
            result.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        } else {
            result.push(null)
        }
    }

    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop()
    }

    return result
}

