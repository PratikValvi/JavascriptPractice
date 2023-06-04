/**
9. Rotating an array
*/

let testArray1 = [1,2,3,4,5,6,7,8,9,10];
let position1 = 2;

//Rotate array left by 2
for (let i=0; i < position1 % testArray1.length; i++) {
    let firstElement = testArray1.shift();
    testArray1.push(firstElement);
}

console.log("Result Array: ",testArray1);

let testArray2 = [1,2,3,4,5,6,7,8,9,10];
let position2 = 2;

//Rotate array right by 2
for (let i=0; i < position2 % testArray2.length; i++) {
    let lastElement = testArray2.pop();
    testArray2.unshift(lastElement);
}

console.log("Result Array: ",testArray2);