const originalArray = [1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7];

// const obj = {}
// const resultArray = []

// originalArray.forEach((num) => {
//     if (obj[num] === undefined) {
//         obj[num] = 1;
//         resultArray.push(num);
//     }
// })

//console.log(resultArray);

let left = 0;
let right = 1;

while(right < originalArray.length) {
    let currentElement = originalArray[right];
    if(originalArray[left] !== currentElement) {
        left++;
        originalArray[left] = originalArray[right];
    }
    right++;
}

console.log(originalArray)
