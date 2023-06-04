const nums1 = [1,2,3,4,5]
const nums2 = [1,2,3,4]

Array.prototype.customReverse = function() {
    const array = this;
    const resultAray = array.slice(0);
    let leftIndex = 0;
    let rightIndex = resultAray.length - 1;

    while(leftIndex < rightIndex) {
        [resultAray[leftIndex], resultAray[rightIndex]] = [resultAray[rightIndex], resultAray[leftIndex]];
        leftIndex++;
        rightIndex--;
    }

    return resultAray;
}


console.log(nums1.customReverse());
console.log(nums1);
console.log(nums2.customReverse());