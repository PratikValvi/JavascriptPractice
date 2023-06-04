const nums = [0,0,1,2,2,3,3,3,3,4,5,6,7,8,8,8,8,9,9,9,9,9,10];

let left = 0;
let right = 0;

// while(right < nums.length) {
//     if(nums[right] > nums[left]) {
//         left++;
//         nums[left] = nums[right];
//     }
//     right++;
// }
// nums.length = left + 1;

while(right < nums.length) {
    if(nums[right] > 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
    }
    right++;
}

// while(right < nums.length) {
//     let currentNum = nums[right];
//     if(currentNum > 0) {
//         [nums[right],nums[left]] = [nums[left],nums[right]]
//         left++;
//     }
//     right++;
// }

// while(right < nums.length) {
//     let currentElement = nums[right];
//     if (currentElement > nums[left]) {
//         left++
//         nums[left] = currentElement;
//     }
//     right++
// }

console.log(nums);