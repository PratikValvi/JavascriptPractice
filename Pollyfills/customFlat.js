const arr = [1,2,[3,[4,[5],6],7],8,9,[10]];

console.log(arr.flat());

Array.prototype.flat = function() {
    const array = this;
    const resultArray = [];

    for(let i=0; i < array.length; i++) {
        let item = array[i];
        if (Array.isArray(item)) {
            resultArray.push(...item.flat());
        } else {
            resultArray.push(item);
        }
    }

    return resultArray;
}

console.log(arr.flat());