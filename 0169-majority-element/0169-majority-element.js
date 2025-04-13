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
    let maxKey = 0;
    for (const key of Object.keys(counter)) {
        if (maxValue < counter[key]) {
            maxValue = counter[key];
            maxKey = key;
        }
    }

    return Number(maxKey);
};