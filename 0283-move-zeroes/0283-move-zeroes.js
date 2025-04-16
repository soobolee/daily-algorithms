/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let left = i;
            for (let right = i + 1; right < nums.length; right++) {
                if (nums[right] === 0) {
                    continue;
                }
                const temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
                left = right;
            }
        }
    }
    return nums;
};