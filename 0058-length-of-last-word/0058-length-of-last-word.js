/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    const wordArr = s.split(" ");

    return wordArr[wordArr.length - 1].length;
};