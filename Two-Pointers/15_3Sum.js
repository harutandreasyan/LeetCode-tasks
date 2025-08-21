/*
    Given an integer array nums, return all the triplets
    [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
    and nums[i] + nums[j] + nums[k] == 0.

    Notice that the solution set must not contain duplicate triplets.

    Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets
    does not matter.

    Example 2:
    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

    Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.

    Constraints:
        3 <= nums.length <= 3000
        -10^5 <= nums[i] <= 10^5
*/

/* 1. Only checks nums[i] + nums[j] + nums[k] === 0 case. */
/* Time - O(n^2), Space - O(1) */

var threeSum = function (nums) {
    const result = []
    if (nums.length < 3) return result

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; ++i) {
        if (nums[i] > 0) {
            break
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])
                while (j < k && nums[j] === nums[j + 1]) {
                    j++
                }

                while (j < k && nums[k] === nums[k - 1]) {
                    k--
                }
                j++
                k--
            } else if (sum < 0) {
                j++
            } else if (sum > 0) {
                k--
            }
        }
    }

    return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])) // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum([0, 1, 1])) // []
console.log(threeSum([0, 0, 0])) // [ [ 0, 0, 0 ] ]
console.log(threeSum([-1, -1, 0, 0, 1, 1])) // [ [ -1, 0, 1 ] ]

/* 2. More complex version with chosen target
      nums[i] + nums[j] + nums[k] === target   */
/* Time - O(n^2), Space - O(1) */

var threeSum = function (nums, target = 0) {
    const result = []
    if (nums.length < 3) return result

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; ++i) {
        if (target === 0 && nums[i] > target) {
            break
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]

            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]])
                while (j < k && nums[j] === nums[j + 1]) {
                    j++
                }

                while (j < k && nums[k] === nums[k - 1]) {
                    k--
                }
                j++
                k--
            } else if (sum < target) {
                j++
            } else if (sum > target) {
                k--
            }
        }
    }

    return result
}

// target = -3
console.log(threeSum([-2, -1, 0, 0, -3, 1, 1], -3))
// [ [ -3, -1, 1 ], [ -3, 0, 0 ], [ -2, -1, 0 ] ]

// target by default = 0
console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
