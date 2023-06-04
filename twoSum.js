const arr = [-1, -2, -3, -4, -5]
const target = -8;

const getTwoIndices = (array, sum) => {
    let obj = {}
    for(let index=0; index < array.length; index++) {
        let secondNum = sum - array[index];
        if (obj[secondNum] !== undefined) {
            return [obj[secondNum], index]
        } else {
            obj[array[index]] = index;
        }
    }
    return [];
}

console.log(getTwoNumbers(arr, target))