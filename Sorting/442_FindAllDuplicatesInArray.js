/*
    Given an integer array nums of length n where all the integers of nums are in the range [1, n]
    and each integer appears at most twice, return an array of all the integers that appears twice.

    You must write an algorithm that runs in O(n) time and uses only constant auxiliary space,
    excluding the space needed to store the output

    Example 1:
    Input: nums = [4,3,2,7,8,2,3,1]
    Output: [2,3]

    Example 2:
    Input: nums = [1,1,2]
    Output: [1]

    Example 3:
    Input: nums = [1]
    Output: []

    Constraints:
        n == nums.length
        1 <= n <= 10^5
        1 <= nums[i] <= n
*/

/* Using  Cyclic sort */
/* Time - O(N) Space - O(1) */

var findDuplicates = function (nums) {
	const result = []

	let i = 0
	while (i < nums.length) {
		const idx = nums[i] - 1

		if (nums[i] !== nums[idx]) {
			;[nums[i], nums[idx]] = [nums[idx], nums[i]]
		} else {
			++i
		}
	}

	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] !== i + 1) {
			result.push(nums[i])
		}
	}

	return result
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])) // [ 3, 2 ]
console.log(findDuplicates([1, 1, 2])) // [ 1 ]
console.log(findDuplicates([1])) // []
console.log(findDuplicates([1, 2, 3, 8, 8, 4, 5, 7, 7, 1])) // [ 8, 7, 1 ]
