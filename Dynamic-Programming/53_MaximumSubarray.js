/*
    Given an integer array nums, find the subarray with the largest sum, and return its sum.

    Example 1:
    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.
    
    Example 2:
    Input: nums = [1]
    Output: 1
    Explanation: The subarray [1] has the largest sum 1.

    Example 3:
    Input: nums = [5,4,-1,7,8]
    Output: 23
    Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

    Constraints:
        1 <= nums.length <= 10^5
        -10^4 <= nums[i] <= 10^4
    
    Follow up: If you have figured out the O(n) solution, try coding another solution
    using the divide and conquer approach, which is more subtle.
*/

/* Using Kadane's algorithm */
/* Time - O(n), Space - O(1) */

var maxSubArray = function (nums) {
	let maxSum = nums[0]
	let currentSum = nums[0]

	for (let i = 1; i < nums.length; i++) {
		currentSum = Math.max(nums[i], currentSum + nums[i])
		maxSum = Math.max(maxSum, currentSum)
	}
	return maxSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([5, 4, -1, 7, 8])) // 23
console.log(maxSubArray([-3, -5, -2])) // -2
