// Colleen is turning  years old! Therefore, she has  candles of various heights on her cake, and candle  has height . Because the taller candles tower over the shorter ones, Colleen can only blow out the tallest candles.
//
// Given the  for each individual candle, find and print the number of candles she can successfully blow out.
//
// Input Format
//
// The first line contains a single integer, , denoting the number of candles on the cake.
// The second line contains  space-separated integers, where each integer  describes the height of candle .

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem


const _ = require('lodash');
function birthdayCakeCandles(n, ar) {
    let sorted = ar.sort((a,b) => {
		return a-b
	})
	let highest = ar[ar.length -1]
	let counts = _.countBy(ar)
	let highestOccurence = counts[highest]
	return highestOccurence
}
