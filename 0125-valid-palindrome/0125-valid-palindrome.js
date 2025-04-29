/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length <= 1) {
        return true;
    }
    s = s.toLowerCase();
    let newStr = "";
    for (const char of s) {
        if (/[a-z0-9]/.test(char)) {
            newStr += char;
        }
    }

    const left = newStr.slice(0, Math.floor(newStr.length / 2));
    let right = newStr.slice(Math.floor(newStr.length / 2), newStr.length)
    right = right.split("").reverse().join("");

    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            return false;
        }
    }

    return true;
};