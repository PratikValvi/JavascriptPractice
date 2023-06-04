const isAnagram = (string1, string2) => {
    if(string1.length !== string2.length) {
        return false;
    }

    let obj = {}

    for(let i=0; i < string1.length; i++) {
        let char = string1[i];
        obj[char] = obj[char] ? obj[char] + 1 : 1;
    }

    for(let i=0; i < string2.length; i++) {
        let char = string2[i];
        if(!obj[char]) {
            return false;
        } else {
            obj[char] = obj[char] - 1;
        }
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("", ""));