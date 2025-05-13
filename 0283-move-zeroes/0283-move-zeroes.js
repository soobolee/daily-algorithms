/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let insertPosi = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPosi] = nums[i];
      insertPosi++;
    }
  }

  for (let i = insertPosi; i < nums.length; i++) {
    nums[i] = 0;
  }
};