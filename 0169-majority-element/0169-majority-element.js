/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    let max = nums[0];

    for (const num of nums) {
        hash[num] = (hash[num] || 0) + 1;

        if (hash[max] < hash[num]) {
            max = num;
        }
    }

    return max;
};