/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const idx = nums.findIndex((num) => num === target);

    return idx <= 0 ? idx : idx;
};