//Flat the nested array
let testArray = [1, "A", true, [4, [5, [6]]], [7, [[[8]]]]];
let resultArray = [];

const customFlat = (array) => {
	array.forEach((element) => {
		if (Array.isArray(element)) {
			customFlat(element);
		} else {
			resultArray.push(element);
		}
	})
}

customFlat(testArray);
console.log("Result array: ",resultArray);