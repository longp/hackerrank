// Given a time in -hour AM/PM format, convert it to military (-hour) time.
//
// Note: Midnight is  on a -hour clock, and  on a -hour clock. Noon is  on a -hour clock, and  on a -hour clock.
//
// Input Format
//
// A single string containing a time in -hour clock format (i.e.:  or ), where  and .
//
// Output Format
//
// Convert and print the given time in -hour format, where .

// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
	let timeFormat = s.slice(s.length-2, s.length)
	let broken = s.split(":")
	let adder = 12
	if (timeFormat == "PM" && broken[0] != "12" ) {
		broken[0] = adder + parseInt(broken[0])
	}
	if (timeFormat == "AM" && broken[0] == "12") {
		broken[0] = "00"
	}
	let military = broken.join(":").slice(0, s.length-2)
	return military

}
timeConversion("07:05:45PM")
