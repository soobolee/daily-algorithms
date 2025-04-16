/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let number = 0;

    nums.forEach(num => {
        number = number ^ num;
    })

    return number;
};