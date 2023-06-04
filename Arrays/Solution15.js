/**
15. Checking if an array is a palindrome
*/

let testArray1 = [1, 2, 3, 4, 3, 2, 1];
let testArray2 = [1, 2, 3, 4, 1, 2, 1];
let testArray3 = [1, 2, 3, 3, 2, 1];
let testArray4 = [1, 2, 1, 3, 2, 1];

const checkIfPalindrome = (array) => {
    for (let i=0; i < array.length / 2; i++) {
        if(array[i] !== array[array.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(checkIfPalindrome(testArray1));
console.log(checkIfPalindrome(testArray2));
console.log(checkIfPalindrome(testArray3));
console.log(checkIfPalindrome(testArray4));