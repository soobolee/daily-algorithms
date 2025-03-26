/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const lowerStr = s.toLowerCase();
    const strArray = lowerStr.split("");

    const aAscii = "a".charCodeAt();
    const zAscii = "z".charCodeAt();
    const zeroAscii = "0".charCodeAt();
    const nineAscii = "9".charCodeAt();

    let fullStr = "";
    for (let i = 0; i < strArray.length; i++) {
        if (aAscii <= strArray[i].charCodeAt() && strArray[i].charCodeAt() <= zAscii) {
            fullStr += strArray[i];
        } else if (zeroAscii <= strArray[i].charCodeAt() && strArray[i].charCodeAt() <= nineAscii) {
            fullStr += strArray[i];
        }
    }

    return fullStr === fullStr.split("").reverse().join("");
};