/*
    Given an integer array nums, rotate the array to the right by k steps,
    where k is non-negative.

    Example 1:
    Input: nums = [1,2,3,4,5,6,7], k = 3
    Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]

    Example 2:
    Input: nums = [-1,-100,3,99], k = 2
    Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]

    Constraints:
        1 <= nums.length <= 10^5
        -2^31 <= nums[i] <= 2^31 - 1
        0 <= k <= 10^5
    
    Follow up:
        Try to come up with as many solutions as you can.
        There are at least three different ways to solve this problem.
        Could you do it in-place with O(1) extra space?
*/

/* Time - O(n), Space - O(1) */

var rotate = function (nums, k) {
    const n = nums.length
    k = k % n

    function reverse(start, end) {
        while (start < end) {
            ;[nums[start], nums[end]] = [nums[end], nums[start]]
            start++
            end--
        }
    }

    reverse(0, n - 1)
    reverse(0, k - 1)
    reverse(k, n - 1)
}

const nums1 = [1, 2, 3, 4, 5, 6, 7]
rotate(nums1, 3)
console.log(nums1) // [ 5, 6, 7, 1, 2, 3, 4 ]

const nums2 = [-1, -100, 3, 99]
rotate(nums2, 2)
console.log(nums2) // [ 3, 99, -1, -100 ]
