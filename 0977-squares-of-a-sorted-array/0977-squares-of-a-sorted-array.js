/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let min = 0;
    let max = nums.length - 1;
    const squaresArray = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[min]) < Math.abs(nums[max])) {
            squaresArray[i] = nums[max] ** 2;
            max--;
        } else {
            squaresArray[i] = nums[min] ** 2;
            min++;
        }
    }

    return squaresArray;
};