const arr = [1,2,3,4,5];

Array.prototype.customMap = function(cb, thisArg) {
    const array = this;
    const resultArray = [];

    for (let i=0; i < array.length; i++) {
        resultArray.push(cb.call(thisArg, array[i], i, array));
    }

    return resultArray;
}

// const doubleValues = arr.customMap(function(num, index, array) {
//     console.log("thisArg ",this," ","num ",num,"index ",index," ","array ",array);
//     return num * 2;
// }, "Yes");

// console.log(doubleValues);

const tripleValues = arr.customMap(function (num, index, array) {
    console.log("num ",num,"index ",index," ","array ",array);
    return num * 3;
});

console.log(tripleValues);