/*
    You are given an n x n 2D matrix representing an image,
    rotate the image by 90 degrees (clockwise).

    You have to rotate the image in-place, which means you
    have to modify the input 2D matrix directly.
    DO NOT allocate another 2D matrix and do the rotation.
    
    Example 1:
    Input: matrix = [[1,2,3],         Output: [[7,4,1],
                     [4,5,6],                  [8,5,2],
                     [7,8,9]]                  [9,6,3]]
    
    Example 2:
    Input: matrix = [[5,1,9,11],      Output: [[15,13,2,5],
                     [2,4,8,10],               [14,3,4,1],
                     [13,3,6,7],               [12,6,8,9],
                     [15,14,12,16]]            [16,7,10,11]]

    Constraints:
        n == matrix.length == matrix[i].length
        1 <= n <= 20
        -1000 <= matrix[i][j] <= 1000
*/

/* Time - O(n^2), Space - O(1) */

var rotate = function (matrix) {
	const n = matrix.length

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
		}
	}

	for (let i = 0; i < n; i++) {
		matrix[i].reverse()
	}

	return matrix
}

const matrix3x3 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
console.log(rotate(matrix3x3))

const matrix4x4 = [
	[5, 1, 9, 11],
	[2, 4, 8, 10],
	[13, 3, 6, 7],
	[15, 14, 12, 16],
]
console.log(rotate(matrix4x4))
