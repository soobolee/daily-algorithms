/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const hash = {};
    let length = 0;

    for (const char of s) {
        hash[char] = (hash[char] || 0) + 1;

        if (hash[char] % 2 === 0) {
            length += 2;
        }
    }
    
    return length < s.length ? length + 1 : length;
};