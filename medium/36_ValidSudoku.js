/*
	Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

	Each column must contain the digits 1-9 without repetition.
	Each row must contain the digits 1-9 without repetition.
	Each of the nine 3 x 3 sub-boxes of the grid must contain
	the digits 1-9 without repetition.
	
	Note:
	A Sudoku board (partially filled) could be valid
	but is not necessarily solvable.
	Only the filled cells need to be validated according to the mentioned rules.
*/

var isValidSudoku = function (board) {
	let rows = new Array(9).fill(0).map(() => new Set())
	let columns = new Array(9).fill(0).map(() => new Set())
	let boxes = new Array(9).fill(0).map(() => new Set())

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const val = board[i][j]
			if (val !== '.') {
				if (rows[i].has(val)) {
					return false
				}
				rows[i].add(val)

				if (columns[j].has(val)) {
					return false
				}
				columns[j].add(val)

				let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
				if (boxes[boxIndex].has(val)) {
					return false
				}
				boxes[boxIndex].add(val)
			}
		}
	}
	return true
}

const board = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

const board2 = [
	['8', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]
/*
	Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box,
	it is invalid.
*/

console.log(isValidSudoku(board)) // true
console.log(isValidSudoku(board2)) // false
