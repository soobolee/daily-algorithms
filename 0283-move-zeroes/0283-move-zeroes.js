/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let left = 0; left < nums.length; left++) {
        if (nums[left] === 0) {
            for (let right = left + 1; right < nums.length; right++) {
                if (nums[right] === 0) {
                    continue;
                }
                const temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
                left++;
            }
        }
    }
    return nums;
};