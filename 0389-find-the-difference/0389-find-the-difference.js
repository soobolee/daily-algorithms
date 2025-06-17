/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const hash = {};

    for (const sStr of s) {
        hash[sStr] = (hash[sStr] || 0) + 1;
    }

    for (const tStr of t) {
        if (hash[tStr]) {
            hash[tStr] = hash[tStr] - 1;
        } else {
            return tStr;
        }
    }
};