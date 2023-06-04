let words = ["act","tac","book","cat","brake","krabe"];
let queries = ["cat","brake"];

const reduceArray = (arr) => {
    let obj = {}
    for (let i=0; i < arr.length; i++) {
        let word = arr[i];
        let sortedWord = word.split(``).sort().join(``);
        if(obj[sortedWord]) {
            obj[sortedWord].push(word);
        } else {
            obj[sortedWord] = [word]
        }
    }
    return obj;
}

let wordsDetails = reduceArray(words);
let result = [];

for(let i=0; i < queries.length; i++) {
    let query = queries[i];
    let sortedQuery = query.split(``).sort().join(``);
    if(wordsDetails[sortedQuery]) {
        result.push(wordsDetails[sortedQuery])
    }
}

console.log(result);