// Consider a staircase of size :
//
//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//
// Write a program that prints a staircase of size .

//
const _ = require('lodash');
function builder(int) {
	let main = []
	for (var i = 1; i <= int; i++) {
		let hashtagAmount = i
		let spaces = int - i
		main[i] = []
		for (var s = 1; s <= spaces; s++) {
			main[i].push(" ")
		}
		for (var h = 1; h <= hashtagAmount; h++) {
			main[i].push("#")
		}
	}
	main = main.slice(1,main.length)
	_.each(main, (item) => {
		console.log(item.join(""))
	})
}
builder(6)
