/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
        const missingNumber = nums.includes(i);

        if (!missingNumber) {
            return i;
        }
    }
};