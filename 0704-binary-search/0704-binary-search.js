/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        const mid = Math.floor((end + start) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        }
    }

    return -1;
};