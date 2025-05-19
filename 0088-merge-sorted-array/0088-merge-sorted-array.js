/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (!n) {
        return;
    }

    let mPointer = m - 1;
    let nPointer = n - 1;
    let index = m + n - 1;

    while (nPointer >= 0) {
        if (mPointer >= 0 && nums1[mPointer] > nums2[nPointer]) {
            nums1[index] = nums1[mPointer];
            mPointer--;
        } else {
            nums1[index] = nums2[nPointer];
            nPointer--;
        }

        index--;
    }

    
};