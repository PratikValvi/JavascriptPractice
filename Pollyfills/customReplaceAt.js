const str = "hello";

String.prototype.replaceAt = function(index, char) {
    const string = this;
    const length = string.length;
    if (index < 0 || index >= length) {
        return string.slice(0);
    }
    return string.slice(0, index) + char + string.slice(index + 1);
}

console.log(str.replaceAt(0,"H"));
console.log(str);