// HackerLand University has the following grading policy:
//
// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:
//
// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .
//
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process. For each , round it according to the rules above and print the result on a new line.
//
// Input Format
//
// The first line contains a single integer denoting  (the number of students).
// Each line  of the  subsequent lines contains a single integer, , denoting student 's grade.

// https://www.hackerrank.com/challenges/grading/problem

const _ = require('lodash');
let input = [ 73, 67, 38, 33, 72, 71, 75,76, 77, 78,79 ]
function solve(grades) {
	for (var i = 0; i < grades.length; i++) {
		let graded = grade(grades[i])
		console.log(graded);
	}
}

function grade(grade) {
	let gradeString = grade.toString()
	let singleUnit = parseInt(gradeString[gradeString.length -1])
	if (grade < 38) {
		return grade
	}
	switch (singleUnit) {
		case 3 :
			return grade + 2
			break;
		case 8:
			return grade + 2
			break;
		case 4:
			return grade + 1
			break;
		case 9:
			return grade + 1
			break;
		default:
			return grade
	}
}
solve(input)
