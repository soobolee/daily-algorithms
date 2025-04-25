/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let allSum = 0;
    let numsSum = 0;
    for (let i = 0; i <= nums.length; i++) {
        allSum += i;

        if (i < nums.length) {
            numsSum += nums[i];
        }
    }

    return allSum - numsSum;
};