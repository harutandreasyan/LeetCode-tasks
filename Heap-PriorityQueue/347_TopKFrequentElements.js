/*
    Given an integer array nums and an integer k, return the k most frequent elements.
    You may return the answer in any order.

    Example 1:
    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]

    Example 2:
    Input: nums = [1], k = 1
    Output: [1]

    Constraints:
        1 <= nums.length <= 10^5
        -10^4 <= nums[i] <= 10^4
        k is in the range [1, the number of unique elements in the array].
        It is guaranteed that the answer is unique.
    
    Follow up: Your algorithm's time complexity must be better than O(n log n),
    where n is the array's size.
*/

/* Time - O(n log k), Space - O(n) */

var topKFrequent = function (nums, k) {
	const map = {}
	const heap = []

	for (let num of nums) {
		map[num] = (map[num] || 0) + 1
	}

	for (const entry in map) {
		heap.push([entry, map[entry]])
		heapifyUp(heap, heap.length - 1)

		if (heap.length > k) {
			swap(heap, 0, heap.length - 1)
			heap.pop()
			heapifyDown(heap, 0)
		}
	}

    const result = []

    while(heap.length) {
        result.push(+heap.pop()[0])
    }
	
    return result
}

function heapifyUp(arr, idx) {
	let parent = Math.floor((idx - 1) / 2)
	if (parent >= 0 && arr[idx][1] < arr[parent][1]) {
		swap(arr, idx, parent)
		heapifyUp(arr, parent)
	}
}

function swap(arr, i, j) {
	;[arr[i], arr[j]] = [arr[j], arr[i]]
}

function heapifyDown(arr, idx) {
	let smallest = idx
	const left = 2 * idx + 1
	const right = 2 * idx + 2

	if (left < arr.length && arr[left][1] < arr[smallest][1]) {
		smallest = left
	}
	if (right < arr.length && arr[right][1] < arr[smallest][1]) {
		smallest = right
	}

	if (smallest !== idx) {
		swap(arr, idx, smallest)
		heapifyDown(arr, smallest)
	}
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)) // [ 1, 2 ]
console.log(topKFrequent([1], 1)) // [ 1 ]
console.log(topKFrequent([1, 1, 1, 1, 2, 2, 2, 3, 3, 4], 2)) // [ 1, 2 ]
console.log(topKFrequent([1, 4, 4, 4, 4, 3, 3, 3, 2, 2], 3)) // [ 3, 4, 2 ]
