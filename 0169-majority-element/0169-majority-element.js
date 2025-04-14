/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = {};
    let max = 0;
    let maxKey = nums[0];

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
        if (count[num] > max) {
            max = count[num];
            maxKey = num;
        }
    }

    return maxKey;
};