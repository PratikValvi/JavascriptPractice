Array.prototype.customReduce = function (cb, initialValue, thisArg) {
    const array = this;
    const validInitialValue = initialValue !== undefined;
    let acc = validInitialValue ? initialValue : array[0];
    for (let i = validInitialValue ? 0 : 1; i < array.length; i++) {
        acc = cb.call(thisArg, acc, array[i], i, array);
    }
    return acc;
}