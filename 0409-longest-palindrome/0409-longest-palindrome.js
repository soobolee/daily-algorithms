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

    for (const value of Object.values(charCount)) {
        if (value % 2 !== 0) {
            evenCount++;
            break;
        }
    }

    return evenCount;
};
