const nums = [1,2,0,4,6,0,8,10];

let left = 0;
let right = 0;
let target = 0;

while(right < nums.length) {
    if(nums[right] === target) {
        [nums[right],nums[nums.length-1]] = [nums[nums.length-1],nums[right]];
        nums.length = nums.length-1;
    }
    right++;
}

console.log(nums);