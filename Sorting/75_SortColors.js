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

/* Using Counting Sort */
/* Time - O(N) Space - O(1) */

var sortColors = function (nums) {
	const counts = [0, 0, 0]

	for (let num of nums) {
		counts[num]++
	}

	let j = 0

	for (let i = 0; i < counts.length; ++i) {
		while (counts[i]--) {
			nums[j++] = i
		}
	}

	return nums
}

let nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)
console.log(nums) // [ 0, 0, 1, 1, 2, 2 ]

let nums2 = [2, 0, 1]
sortColors(nums2)
console.log(nums2) // [ 0, 1, 2 ]
