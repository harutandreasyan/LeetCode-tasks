/*
    Given an array nums with n objects colored red, white, or blue,
    sort them in-place so that objects of the same color are adjacent,
    with the colors in the order red, white, and blue.

    We will use the integers 0, 1, and 2 to represent the color
    red, white,and blue, respectively.

    You must solve this problem without using the library's sort function.

    Example 1:
    Input: nums = [2,0,2,1,1,0]
    Output: [0,0,1,1,2,2]
    
    Example 2:
    Input: nums = [2,0,1]
    Output: [0,1,2]

	Constraints:
		n == nums.length
		1 <= n <= 300
		nums[i] is either 0, 1, or 2.
*/

/* Using Dutch National Flag algorithm */
/* Time - O(N) Space - O(1) */

var sortColors = function (nums) {
	let left = 0
	let right = nums.length - 1
	let current = 0

	while (current <= right) {
		if (nums[current] === 0) {
			;[nums[left], nums[current]] = [nums[current], nums[left]]
			left++
			current++
		} else if (nums[current] === 2) {
			;[nums[right], nums[current]] = [nums[current], nums[right]]
			right--
		} else {
			current++
		}
	}
}

let nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)
console.log(nums) // [ 0, 0, 1, 1, 2, 2 ]

let nums2 = [2, 0, 1]
sortColors(nums2)
console.log(nums2) // [ 0, 1, 2 ]
