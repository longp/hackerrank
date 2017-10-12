// https://www.hackerrank.com/challenges/mini-max-sum/problem

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//
// Input Format
//
// A single line of five space-separated integers.
//
// Constraints
//
// Each integer is in the inclusive range .
// Output Format
//
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than 32 bit integer.)
//


function MiniMax(array) {
	let sortedArray = array.sort((a,b) => {
		return a - b
	})
	let maxArray = sortedArray.slice(1,5)
	let minArray = sortedArray.slice(0,4)
	let sumOfMax = sumOfArray(maxArray)
	let sumOfMin = sumOfArray(minArray)
	console.log(sumOfMin + " " + sumOfMax);
}

function sumOfArray(array) {
	return array.reduce((a,b) => {
		return a + b
	}, 0)
}
MiniMax([1,2,3,4,5,6])
