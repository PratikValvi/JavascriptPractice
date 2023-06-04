//Filter the arrag and remove all the elements that appear more than once.
//Input [1,6,3,7,2,3,6,2,8,1,9]
//Output [7,8,9]

let arr = [1,6,3,7,2,3,6,2,8,1,9];
let values = arr.reduce((acc, num) => {
    acc[num] = acc[num] ? acc[num] + 1 : 1;
    return acc;
}, {});

let result = [];

Object.keys(values).forEach((key) => {
    if(values[key] === 1) {
        result.push(Number(key))
    }
})

console.log(result);

let testArray2 = [1,2,3,4,5,6];
let sum = 5;

let startIndex = 0;
let pairCount = 0;
for (let i=startIndex; i < testArray2.length; i++) {
    for (let j=i+1; j < testArray2.length; j++) {
        if((testArray2[i] + testArray2[j]) % sum === 0) {
            pairCount++;
        }
    }
    startIndex++;
}
console.log(pairCount);