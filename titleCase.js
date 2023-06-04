const str = "tHE qUICK bROWN fOX jUMPS oVER tHE lAZY dOG";

const titleCase = (string) => {
    let input = string.toLowerCase().trim().split(``);
    let result = input.map((char, index, array) => {
        if(array[index-1] === " ") {
            char = char.toUpperCase();
        }
        return char;
    })
    result[0] = result[0].toUpperCase();
    return result.join(``);
}

console.log(titleCase(str));