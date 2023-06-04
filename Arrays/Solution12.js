/**
12. Grouping elements in an array based on a condition
*/

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let groups = {
  even: [],
  odd: []
};

groups = testArray.reduce((acc, currentNum) => {
    if (currentNum & 1 === 1) {
        acc['odd'].push(currentNum);
    } else {
        acc['even'].push(currentNum);
    }
    return acc;
}, groups);

console.log("Groups: ",groups);