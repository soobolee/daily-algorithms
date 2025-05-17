/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            hash[nums[i]] = (hash[nums[i]] || 0) + 1;
        }
    }

    let max = -1;
    for (key of Object.keys(hash)) {
        const maxValue = Number(hash[max]) || -1;
        const keyValue = Number(hash[key]);

        if (keyValue > maxValue) {
            max = Number(key);
        } else if (keyValue === maxValue) {
            max = key < max ? key : max;
        }
    }

    return max;
};