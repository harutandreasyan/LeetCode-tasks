/*
    You are given a 0-indexed integer array piles, where piles[i] represents
    the number of stones in the ith pile, and an integer k.
    You should apply the following operation exactly k times:

    Choose any piles[i] and remove ceil(piles[i] / 2) stones from it.
    Notice that you can apply the operation on the same pile more than once.

    Return the minimum possible total number of stones remaining after applying the k operations.

    ceil(x) is the smallest integer that is greater than or equal to x (i.e., rounds x up).

    Example 1:
    Input: piles = [5,4,9], k = 2
    Output: 12
    Explanation: Steps of a possible scenario are:
    - Apply the operation on pile 2. The resulting piles are [5,4,5].
    - Apply the operation on pile 0. The resulting piles are [3,4,5].
    The total number of stones in [3,4,5] is 12.
    
    Example 2:
    Input: piles = [4,3,6,7], k = 3
    Output: 12
    Explanation: Steps of a possible scenario are:
    - Apply the operation on pile 2. The resulting piles are [4,3,3,7].
    - Apply the operation on pile 3. The resulting piles are [4,3,3,4].
    - Apply the operation on pile 0. The resulting piles are [2,3,3,4].
    The total number of stones in [2,3,3,4] is 12.
    
    Constraints:
        1 <= piles.length <= 10^5
        1 <= piles[i] <= 10^4
        1 <= k <= 10^5
*/

/* Using Max Heap */
/* Time - O(n + k log n), Space - O(1) */

var minStoneSum = function (piles, k) {
	const parentsCount = Math.floor(piles.length / 2) - 1
	for (let i = parentsCount; i >= 0; --i) {
		heapifyDown(piles, i)
	}

	while (k) {
		piles[0] = Math.ceil(piles[0] / 2)
		heapifyDown(piles, 0)
		k--
	}

	let overallStones = piles.reduce((a, b) => a + b, 0)
	return overallStones
}

function heapifyDown(arr, idx) {
	let largest = idx
	const left = 2 * idx + 1
	const right = 2 * idx + 2

	if (left < arr.length && arr[left] > arr[largest]) {
		largest = left
	}
	if (right < arr.length && arr[right] > arr[largest]) {
		largest = right
	}

	if (largest !== idx) {
		swap(arr, idx, largest)
		heapifyDown(arr, largest)
	}
}

function swap(arr, i, j) {
	;[arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(minStoneSum([5, 4, 9], 2)) // 12
console.log(minStoneSum([4, 3, 6, 7], 3)) // 12
