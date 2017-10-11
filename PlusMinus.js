// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.
//
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
//
// Input Format
//
// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers describing an array of numbers .
//
// Output Format
//
// You must print the following  lines:
//
// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeroes in the array compared to its size.

const _ = require('lodash');
function findFractions (array) {
	let originalLength = array.length
	let nonZero = _.without(array, 0)
	// seperate + and -
	let split = _.partition(nonZero, (item) => {
		return item > 0
	})
	let positiveLength = split[0].length
	let negativeLength = split[1].length
	let zeroLength = originalLength - nonZero.length
	let positiveFraction = positiveLength / originalLength
	let negativeFraction = negativeLength / originalLength
	let zeroFraction  = zeroLength / originalLength
	console.log(positiveFraction)
	console.log(negativeFraction)
	console.log(zeroFraction)
}
findFractions([-4, 3, -9, 0, 4, 1])
