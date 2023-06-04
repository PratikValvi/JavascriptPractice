const nums = [1,[2,[3,[4,[undefined],6],7],8],9,10];

// const customFlat = (array) => {
//     const resultArray = []
//     if(!Array.isArray(array)) {
//         return resultArray;
//     }
//     for(const element of array) {
//         if(Array.isArray(element)) { 
//             resultArray.push(...customFlat(element));
//         } else {
//             resultArray.push(element);
//         }
//     }
//     return resultArray;
// }

// const customFlat = (array) => {
//     let resultArray = []
//     if(!Array.isArray(array)) {
//         return resultArray;
//     }
//     resultArray = array.reduce((acc, element) => {
//         acc = Array.isArray(element) ? acc.concat(customFlat(element)) : acc.concat(element)
//         return acc;
//     }, [])
//     return resultArray;
// }

const customFlat = (array) => {
    let resultArray = []
    if(!Array.isArray(array)) {
        return resultArray
    }
    for(const element of array) {
        if(Array.isArray(element)) {
            resultArray = resultArray.concat(customFlat(element))
        } else {
            resultArray = resultArray.concat(element)
        }
    }
    return resultArray
}

console.log(customFlat(nums));
  