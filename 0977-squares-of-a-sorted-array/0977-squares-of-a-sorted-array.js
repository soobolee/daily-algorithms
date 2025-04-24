/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let min = 0;
    let max = nums.length - 1;
    const squaresArray = [];

    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[min]) > Math.abs(nums[max])) {
            squaresArray[i] = nums[min] ** 2;
            min++
        } else {
            squaresArray[i] = nums[max] ** 2;
            max--;
        }
    }

    return squaresArray.reverse();
};