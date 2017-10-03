// Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.
//
// Input Format
//
// The first line contains a single integer, . The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.
//
// Constraints
//
// Output Format
//
// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

let _ = require("lodash")
let input = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]

function findDifference(array) {
	let length = array.length
	let firstDiag = []
	let firstDiagIndex = 0
	let secondDiag = []
	let secondDiagIndex = length - 1
	for (var i = 0; i < length; i++) {
		let subArray = array[i]
		firstDiag.push(subArray[firstDiagIndex])
		secondDiag.push(subArray[secondDiagIndex])
		firstDiagIndex += 1
		secondDiagIndex -= 1
	}
	let firstSum = _.sum(firstDiag)
	let secondSum = _.sum(secondDiag)
	let absoluteDiff = Math.abs(firstSum - secondSum)
	return absoluteDiff
}
findDiag(input)
