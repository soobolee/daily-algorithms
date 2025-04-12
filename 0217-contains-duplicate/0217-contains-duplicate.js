/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numberCounter = {};

    for (const num of nums) {
        if (numberCounter[num]) {
            return true;
        } else {
            numberCounter[num] = 1;
        }
    }

    return false;
};