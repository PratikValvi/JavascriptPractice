const nums = [1,2,0,4,6,0,8,10];

let left = 0;
let right = 0;

while(right < nums.length) {
    if(nums[right] > 0) {
        [nums[left],nums[right]] = [nums[right],nums[left]];
        left++;
    }
    right++;
}

console.log(nums);