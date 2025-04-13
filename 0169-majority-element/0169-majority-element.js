/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counter = {};
    for (const num of nums) {
        counter[num] = counter[num] ? counter[num] + 1 : 1;
    }

    let maxValue = 0;
    for (const max of counter) {
        if (maxValue < max) {
            maxValue = max;
        }
    }

    return maxValue;
};