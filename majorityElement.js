const nums = [2,2,1,1,1,2,2];

const getMajorityElement = (array) => {
    let obj = {}
    let majorityElement = array[0];
    let count = 1;
    obj[majorityElement] = count;
    for(let index=1; index < array.length; index++) {
        let currentElement = array[index];
        obj[currentElement] = obj[currentElement] ? obj[currentElement] + 1 : 1;
        if(currentElement == majorityElement) {
            count++;
        }
        if(currentElement !== majorityElement && obj[currentElement] > count) {
            majorityElement = currentElement;
            count = obj[currentElement];
        }
    }
    return majorityElement;
}