
Array.prototype.customFilter = function(cb, thisArg) {
    const array = this;
    const resultArray = [];

    for (let i=0; i < array.length; i++) {
        let result = cb.call(thisArg, array[i], i, array);
        if (result) {
            resultArray.push(array[i]);
        }
    }

    return resultArray;
}

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.customFilter(num => (num & 1) === 0);
console.log(evenNumbers); // [2, 4]
