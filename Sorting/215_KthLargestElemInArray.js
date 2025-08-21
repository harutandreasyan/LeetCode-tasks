/*
    Given an integer array nums and an integer k, return the k-th largest element in the array.
    Note that it is the k-th largest element in the sorted order, not the k-th distinct element.

    Can you solve it without sorting?

    Example 1:
    Input: nums = [3,2,1,5,6,4], k = 2
    Output: 5

    Example 2:
    Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
    Output: 4

    Constraints:
        1 <= k <= nums.length <= 10^5
        -10^4 <= nums[i] <= 10^4
*/

/* 1. Using Min Heap by inserting new values and removing the minimum. */
/* Time - O(n log k), Space - O(k) */

var findKthLargest = function (nums, k) {
    const temp = []

    for (let i = 0; i < k; ++i) {
        insert(temp, nums[i])
    }

    for (let i = k; i < nums.length; ++i) {
        if (nums[i] > temp[0]) {
            extractMin(temp)
            insert(temp, nums[i])
        }
    }

    return extractMin(temp)
}

/* 2. Using Min Heap by replacing the root with a larger element and re-heapifying downward. */
/* Time - O(n log k), Space - O(k) */

var findKthLargest = function (nums, k) {
    const temp = []

    for (let i = 0; i < k; ++i) {
        temp.push(nums[i])
    }
    for (let i = Math.floor(k / 2) - 1; i >= 0; --i) {
        heapifyDown(temp, i)
    }

    for (let i = k; i < nums.length; ++i) {
        if (nums[i] > temp[0]) {
            temp[0] = nums[i]
            heapifyDown(temp, 0)
        }
    }

    return temp[0]
}

function insert(arr, value) {
    arr.push(value)
    heapifyUp(arr, arr.length - 1)
}

function heapifyUp(arr, idx) {
    let parent = Math.floor((idx - 1) / 2)
    if (parent >= 0 && arr[idx] < arr[parent]) {
        swap(arr, idx, parent)
        heapifyUp(arr, parent)
    }
}

function swap(arr, i, j) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

function extractMin(arr) {
    swap(arr, 0, arr.length - 1)
    const min = arr.pop()
    heapifyDown(arr, 0)
    return min
}

function heapifyDown(arr, idx) {
    let smallest = idx
    const left = 2 * idx + 1
    const right = 2 * idx + 2

    if (left < arr.length && arr[smallest] > arr[left]) {
        smallest = left
    }

    if (right < arr.length && arr[smallest] > arr[right]) {
        smallest = right
    }

    if (smallest !== idx) {
        swap(arr, idx, smallest)
        heapifyDown(arr, smallest)
    }
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)) // 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)) // 4
console.log(findKthLargest([2, 1], 2)) // 1
