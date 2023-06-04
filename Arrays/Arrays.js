//Array Methods
let numbers = [8,2,3,10,1,6,7,5,4,9];

//.map(): Creates a new array with the results of calling a provided function on every element in the calling array.
let numbers2x = numbers.map(num => num * 2);

//.filter(): Creates a new array with all elements that pass the test implemented by the provided function.
let evenNumbers = numbers.filter(num => num % 2 === 0);
let oddNumbers = numbers.filter(num => num % 2 !== 0);

//.reduce(): Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let sumOfNumbers = numbers.reduce((acc, current) => {
    acc = acc + current;
    return acc;
}, 0);

let listOfColors = ["red","green","blue","white","red","blue","red"];
let countOfColors = listOfColors.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
}, {});

//.sort(): Sorts the elements of an array in place and returns the sorted array.
let accendingOrder = numbers.sort((num1, num2) => num1 - num2);
let decendingOrder = numbers.sort((num1, num2) => - num1 + num2);

//.reverse(): Reverses the order of the elements in an array in place and returns the reversed array.