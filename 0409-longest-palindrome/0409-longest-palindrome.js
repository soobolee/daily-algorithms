/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const charCount = {};
    let evenCount = 0;

    for (const str of s) {
        charCount[str] = (charCount[str] || 0) + 1;

        if (charCount[str] % 2 === 0) {
            evenCount += 2;
        }
    }

    return evenCount < s.length ? evenCount + 1 : evenCount;
};
