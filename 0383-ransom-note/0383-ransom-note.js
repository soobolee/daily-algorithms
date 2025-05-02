/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash = {};

    for (const char of magazine) {
        hash[char] = (hash[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!hash[char]) {
            return false;
        } else {
            hash[char] = hash[char] - 1;
        }
    }

    return true;
};